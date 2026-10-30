package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.order.OrderChangeOrderStateActionBuilder;
import com.commercetools.api.models.order.OrderChangePaymentStateActionBuilder;
import com.commercetools.api.models.order.OrderChangeShipmentStateActionBuilder;
import com.commercetools.api.models.order.OrderState;
import com.commercetools.api.models.order.OrderTransitionStateActionBuilder;
import com.commercetools.api.models.order.OrderUpdateAction;
import com.commercetools.api.models.order.PaymentState;
import com.commercetools.api.models.order.ShipmentState;
import com.commercetools.api.models.state.State;
import com.lifestylehomecorp.order.domain.CaptureResult;
import com.lifestylehomecorp.order.domain.OrderDetail;
import com.lifestylehomecorp.order.domain.OrderSummary;
import com.lifestylehomecorp.order.domain.PaymentLedger;
import com.lifestylehomecorp.order.domain.Subscription;
import com.lifestylehomecorp.platform.session.ShopperSession;
import io.vrap.rmf.base.client.ApiHttpException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.LongFunction;

/**
 * Everything the BFF does <b>after</b> Checkout created the order: read it back with an ownership check
 * (6.4 / 6.5), list the shopper's orders (6.8), capture the money at fulfilment through the Payment
 * Intents API (6.6), drive the order state machine with guards and implications (6.7), and find the
 * Recurring Order the platform created from a subscription line (6.9). Owns version + 409-retry on
 * order updates, as {@code CartService} does for the cart.
 */
@Service
public class OrderService {

    private static final int MAX_RETRIES = 3;
    /** The seeded custom order State machine (Session 6 seeder folder). */
    static final String STATE_PLACED = "order-placed";
    static final String STATE_PICKED = "order-picked";
    static final String STATE_SHIPPED = "order-shipped";
    static final String STATE_DELIVERED = "order-delivered";
    static final String STATE_CANCELLED = "order-cancelled";

    private final OrderRepository orders;
    private final PaymentIntentRepository paymentIntents;
    private final RecurringOrderRepository recurringOrders;
    private final StateRepository states;
    private final ShopperSession session;

    public OrderService(OrderRepository orders, PaymentIntentRepository paymentIntents,
                        RecurringOrderRepository recurringOrders, StateRepository states, ShopperSession session) {
        this.orders = orders;
        this.paymentIntents = paymentIntents;
        this.recurringOrders = recurringOrders;
        this.states = states;
        this.session = session;
    }

    /** 6.4 — the order Checkout created, if it is the shopper's. Forgets the (now Ordered) cart. */
    public OrderDetail detail(String orderNumber, String locale) {
        Order order = owned(orderNumber);
        if (session.cartIdOrNull() != null && session.cartIdOrNull().equals(order.getCart() == null ? null : order.getCart().getId())) {
            session.clearCheckout();
        }
        return OrderMapper.toDetail(order, allowedTransitions(order), locale);
    }

    /** 6.5 — the payment ledger (Merchant Center's Orders → Payments view). */
    public List<PaymentLedger> ledger(String orderNumber) {
        return OrderMapper.ledgers(owned(orderNumber));
    }

    /** 6.8 — the shopper's orders: the customer's once signed in, the guest's (by anonymousId) before. */
    public List<OrderSummary> history(int limit) {
        List<Order> found = session.isSignedIn()
                ? orders.findByCustomer(session.storeKey(), session.requireCustomerId(), limit)
                : session.anonymousId() == null ? List.of() : orders.findByAnonymousId(session.storeKey(), session.anonymousId(), limit);
        return found.stream().map(OrderMapper::toSummary).toList();
    }

    /**
     * 6.6 — capture the authorized amount (ops / fulfilment). Idempotent: an already-captured payment is
     * reported, not charged twice. Goes through Checkout's Payment Intents API — never addTransaction by hand.
     */
    public CaptureResult capture(String orderNumber) {
        Order order = opsOrder(orderNumber);
        PaymentLedger ledger = primaryLedger(order);
        if (ledger.captured()) {
            return new CaptureResult("capturePayment", ledger.paymentId(), ledger.amountPlanned(), "already-captured", ledger);
        }
        if (!ledger.authorized()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "The payment is not authorized yet — nothing to capture.");
        }
        String outcome = paymentIntents.capture(ledger.paymentId(), ledger.amountPlanned().centAmount(),
                ledger.amountPlanned().currencyCode(), orderNumber);
        return new CaptureResult("capturePayment", ledger.paymentId(), ledger.amountPlanned(), outcome,
                primaryLedger(orders.findByOrderNumber(session.storeKey(), orderNumber)));
    }

    /** 6.7 (T1) — the three system states, changed directly (ops). */
    public OrderDetail changeSystemState(String orderNumber, String orderState, String shipmentState, String paymentState, String locale) {
        Order order = opsOrder(orderNumber);
        List<OrderUpdateAction> actions = new ArrayList<>();
        if (orderState != null) {
            actions.add(OrderChangeOrderStateActionBuilder.of().orderState(OrderState.findEnum(orderState)).build());
        }
        if (shipmentState != null) {
            actions.add(OrderChangeShipmentStateActionBuilder.of().shipmentState(ShipmentState.findEnum(shipmentState)).build());
        }
        if (paymentState != null) {
            actions.add(OrderChangePaymentStateActionBuilder.of().paymentState(PaymentState.findEnum(paymentState)).build());
        }
        Order updated = actions.isEmpty() ? order : withRetry(orderNumber, v -> orders.update(session.storeKey(), order.getId(), v, actions));
        return OrderMapper.toDetail(updated, allowedTransitions(updated), locale);
    }

    /**
     * 6.7 (T2) — move the order along the seeded State machine. Guards: only a transition the State
     * allows (checked here for a clean 409 with the allowed list; the platform enforces it too — never
     * {@code force}); already there → 200. Implications: each step mirrors the built-in states and, where
     * money moves, the ledger — shipped ⇒ capture; cancelled ⇒ void the authorization.
     */
    public OrderDetail transition(String orderNumber, String targetKey, String locale) {
        Order order = opsOrder(orderNumber);
        String current = order.getState() == null ? null
                : order.getState().getObj() != null ? order.getState().getObj().getKey() : states.findById(order.getState().getId()).getKey();
        if (targetKey.equals(current)) {
            return OrderMapper.toDetail(order, allowedTransitions(order), locale);
        }
        List<String> allowed = current == null ? List.of(STATE_PLACED) : allowedTransitions(order);
        if (!allowed.contains(targetKey)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Cannot move order " + orderNumber + " from " + (current == null ? "(none)" : current) + " to " + targetKey
                            + " — allowed next states: " + allowed);
        }
        // Implications on the ledger first (they talk to the PSP through Checkout), then one order update.
        if (STATE_SHIPPED.equals(targetKey)) {
            PaymentLedger ledger = primaryLedger(order);
            if (ledger.authorized() && !ledger.captured()) {
                paymentIntents.capture(ledger.paymentId(), ledger.amountPlanned().centAmount(), ledger.amountPlanned().currencyCode(), orderNumber);
            }
        } else if (STATE_CANCELLED.equals(targetKey)) {
            PaymentLedger ledger = primaryLedger(order);
            if (ledger.authorized() && !ledger.captured()) {
                paymentIntents.cancel(ledger.paymentId(), orderNumber);
            }
        }
        List<OrderUpdateAction> actions = new ArrayList<>();
        actions.add(OrderTransitionStateActionBuilder.of().state(sr -> sr.key(targetKey)).force(false).build());
        actions.addAll(IMPLICATIONS.getOrDefault(targetKey, List.of()));
        Order updated = withRetry(orderNumber, v -> orders.update(session.storeKey(), order.getId(), v, actions));
        return OrderMapper.toDetail(updated, allowedTransitions(updated), locale);
    }

    /** 6.9 — the Recurring Order the platform created from this order, if the cart carried a recurring line. */
    public Optional<Subscription> subscription(String orderNumber) {
        Order order = owned(orderNumber);
        return recurringOrders.findByOriginOrder(order.getId()).map(OrderMapper::toSubscription);
    }

    // ---- plumbing ------------------------------------------------------------------------------

    /** What each custom state implies on the built-in enums (the ledger implications live in transition()). */
    private static final Map<String, List<OrderUpdateAction>> IMPLICATIONS = Map.of(
            STATE_PICKED, List.of(OrderChangeOrderStateActionBuilder.of().orderState(OrderState.CONFIRMED).build()),
            STATE_SHIPPED, List.of(OrderChangeShipmentStateActionBuilder.of().shipmentState(ShipmentState.SHIPPED).build()),
            STATE_DELIVERED, List.of(OrderChangeShipmentStateActionBuilder.of().shipmentState(ShipmentState.DELIVERED).build(),
                    OrderChangeOrderStateActionBuilder.of().orderState(OrderState.COMPLETE).build()),
            STATE_CANCELLED, List.of(OrderChangeOrderStateActionBuilder.of().orderState(OrderState.CANCELLED).build()));

    /** The shopper's order or a 404 — never a 403 (do not confirm that someone else's order number exists). */
    private Order owned(String orderNumber) {
        Order order = find(orderNumber);
        boolean owned = session.isSignedIn()
                ? session.customerIdOrNull().equals(order.getCustomerId())
                : session.anonymousId() != null && session.anonymousId().equals(order.getAnonymousId());
        if (!owned) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found: " + orderNumber);
        }
        return order;
    }

    /**
     * Ops endpoints (capture, states) are trainer / back-office in this course — no shopper ownership check,
     * but they would sit behind an operator role in production (never the storefront).
     */
    private Order opsOrder(String orderNumber) {
        return find(orderNumber);
    }

    private Order find(String orderNumber) {
        try {
            return orders.findByOrderNumber(session.storeKey(), orderNumber);
        } catch (ApiHttpException ex) {
            if (ex.getStatusCode() == 404) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found: " + orderNumber);
            }
            throw ex;
        }
    }

    private List<String> allowedTransitions(Order order) {
        if (order.getState() == null) {
            return List.of(STATE_PLACED);
        }
        State state = order.getState().getObj() != null && order.getState().getObj().getTransitions() != null
                && order.getState().getObj().getTransitions().stream().allMatch(t -> t.getObj() != null)
                ? order.getState().getObj() : states.findById(order.getState().getId());
        return OrderMapper.allowedTransitions(state);
    }

    private PaymentLedger primaryLedger(Order order) {
        List<PaymentLedger> ledgers = OrderMapper.ledgers(order);
        if (ledgers.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "The order carries no payment.");
        }
        return ledgers.get(0);
    }

    /** Own the version: re-read the order, apply with its version, re-read + replay on a 409. */
    private Order withRetry(String orderNumber, LongFunction<Order> call) {
        ApiHttpException last = null;
        for (int attempt = 0; attempt <= MAX_RETRIES; attempt++) {
            Order current = orders.findByOrderNumber(session.storeKey(), orderNumber);
            try {
                return call.apply(current.getVersion());
            } catch (ApiHttpException ex) {
                if (ex.getStatusCode() != 409) {
                    throw ex;
                }
                last = ex;
            }
        }
        throw last;
    }
}
