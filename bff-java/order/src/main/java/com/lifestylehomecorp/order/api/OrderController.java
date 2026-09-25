package com.lifestylehomecorp.order.api;

import com.lifestylehomecorp.order.api.dto.CaptureResultView;
import com.lifestylehomecorp.order.api.dto.OrderDetailView;
import com.lifestylehomecorp.order.api.dto.OrderSummaryView;
import com.lifestylehomecorp.order.api.dto.PaymentLedgerView;
import com.lifestylehomecorp.order.api.dto.SubscriptionView;
import com.lifestylehomecorp.order.api.dto.SystemStateRequest;
import com.lifestylehomecorp.order.api.dto.TransitionRequest;
import com.lifestylehomecorp.order.application.OrderService;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * The orders HTTP contract (Session 6 — after Checkout created the order). Shopper endpoints resolve
 * ownership from the session (S5 — a foreign order number is a 404); the capture / state endpoints are
 * ops-side in this course (behind an operator role in production, never the storefront).
 */
@RestController
public class OrderController {

    private final OrderService orders;

    public OrderController(OrderService orders) {
        this.orders = orders;
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 3,
            title = "Pay: what Checkout wrote", tier = "T1", capability = "order.create",
            description = "Implement OrderRepository.findByOrderNumber(orderNumber) in the order module's infrastructure "
                    + "layer — orders().withOrderNumber(n).get() expanding paymentInfo.payments[*] (the ledger), state "
                    + "and lineItems[*].recurrenceInfo.recurrencePolicy — returning the raw SDK Order. You did NOT call "
                    + "POST /orders: Checkout did, on 'Pay' — it created a Payment with an Authorization Transaction, "
                    + "created the Order with YOUR futureOrderNumber, then set the Transaction to Success. The service "
                    + "checks ownership (a foreign number is a 404), forgets the Ordered cart and projects a PII-safe "
                    + "detail. GET /api/orders/{orderNumber} is the confirmation page.",
            hint = "Docs: Orders — get by orderNumber; Checkout — Payment lifecycle → how Checkout manages authorizations "
                    + "(docs.commercetools.com/checkout/payments-lifecycle).")
    @GetMapping("/api/orders/{orderNumber}")
    public OrderDetailView detail(@PathVariable String orderNumber, @RequestParam(defaultValue = "en-US") String locale) {
        return OrderDetailView.from(orders.detail(orderNumber, locale));
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 4,
            title = "The ledger, read: Payment · Transactions · evidence", tier = "T1", capability = "order.ledger",
            description = "Pre-built — study it. GET /api/orders/{orderNumber}/payments projects every Payment on the "
                    + "order the way Merchant Center shows it under Orders → Payments: paymentInterface + method (the "
                    + "connector), interfaceId (the PSP's 'Payment provider ID'), amountPlanned, the PSP status code, and "
                    + "every Transaction (Authorization · Charge · Refund · CancelAuthorization; Initial · Pending · "
                    + "Success · Failure) with its interactionId. The Payment is a LEDGER, not a charge — commercetools is "
                    + "not the PSP; the connector mirrors the PSP into it. Start fulfilling only on Authorization = Success.",
            hint = "Docs: Payments — Payment, Transaction, TransactionState; Checkout — Payments in the Merchant Center "
                    + "(docs.commercetools.com/api/projects/payments).")
    @GetMapping("/api/orders/{orderNumber}/payments")
    public List<PaymentLedgerView> payments(@PathVariable String orderNumber) {
        return orders.ledger(orderNumber).stream().map(PaymentLedgerView::from).toList();
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 6,
            title = "Capture at fulfilment — the Payment Intents API", tier = "T1", capability = "order.capture",
            description = "Implement PaymentIntentRepository.capture(paymentId, centAmount, currencyCode, merchantReference) "
                    + "in the order module's infrastructure layer — checkoutApiRoot.paymentIntents().withPaymentId(id)"
                    + ".post(PaymentIntent{ actions: [capturePayment { amount, merchantReference }] }). Checkout asks the "
                    + "connector → the PSP and adds a Charge Transaction to the Payment; the service is idempotent (an "
                    + "already-captured payment is reported, not charged twice) and needs Authorization = Success first. "
                    + "Never addTransaction by hand on a Payment Checkout created — the PSP would never learn. Scope: "
                    + "manage_checkout_payment_intents. POST /api/orders/{orderNumber}/capture.",
            hint = "Docs: Checkout Payment Intents API — Capture Payment "
                    + "(docs.commercetools.com/checkout/payment-intents-api#capture-payment).")
    @PostMapping("/api/orders/{orderNumber}/capture")
    public CaptureResultView capture(@PathVariable String orderNumber) {
        return CaptureResultView.from(orders.capture(orderNumber));
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 7,
            title = "The order state machine", tier = "T2", capability = "order.states",
            description = "Implement OrderService.transition(orderNumber, stateKey): move the order along the SEEDED custom "
                    + "State machine (order-placed → order-picked → order-shipped → order-delivered; order-cancelled only "
                    + "from order-placed) with guards — refuse a transition the State does not allow with a 409 listing the "
                    + "allowed next states (the platform enforces it too; never force), treat 'already there' as 200 — and "
                    + "implications: picked ⇒ orderState Confirmed; shipped ⇒ CAPTURE the payment (6.6) + shipmentState "
                    + "Shipped; delivered ⇒ Complete; cancelled ⇒ cancelPayment + Cancelled. The T1 half, "
                    + "OrderRepository.update(id, version, actions), is the S4 update pattern on a fifth resource "
                    + "(PUT /api/orders/{orderNumber}/system-state changes the three built-in enums directly).",
            hint = "Docs: States — State, transitions, initial; Orders — transitionState / changeOrderState / "
                    + "changeShipmentState (docs.commercetools.com/api/projects/states).",
            decisions = {
                    "The transition table — and what each transition IMPLIES on the ledger and the built-in states.",
                    "The cancellation window — before order-shipped it is cancelPayment; after, a return + refund.",
                    "Idempotent re-transitions — already in the target state → 200, not 409.",
                    "Who may transition — ops / an OMS via Connect (S9); never the storefront."
            })
    @PutMapping("/api/orders/{orderNumber}/state")
    public OrderDetailView transition(@PathVariable String orderNumber, @RequestBody TransitionRequest req,
                                      @RequestParam(defaultValue = "en-US") String locale) {
        if (req.state() == null || req.state().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Send { \"state\": \"<state key>\" }.");
        }
        return OrderDetailView.from(orders.transition(orderNumber, req.state(), locale));
    }

    /** 6.7 (T1) — the three built-in enums, changed directly (ops). */
    @PutMapping("/api/orders/{orderNumber}/system-state")
    public OrderDetailView systemState(@PathVariable String orderNumber, @RequestBody SystemStateRequest req,
                                       @RequestParam(defaultValue = "en-US") String locale) {
        return OrderDetailView.from(orders.changeSystemState(orderNumber, req.orderState(), req.shipmentState(), req.paymentState(), locale));
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 8,
            title = "Order history: my orders", tier = "T1", capability = "order.history",
            description = "Implement OrderRepository.findByCustomer(customerId, limit) in the order module's infrastructure "
                    + "layer — orders().get().withWhere(\"customerId = :id\").withSort(\"createdAt desc\").withLimit(n) — "
                    + "returning raw SDK Orders. The customer id comes from the ShopperSession (S5 — never a request "
                    + "parameter); a guest's orders are found by anonymousId until sign-in moves them. The service projects "
                    + "PII-safe summaries. GET /api/orders is the account page's 'My orders'.",
            hint = "Docs: Orders — query orders (predicates, sort, paging); Me Orders as the no-middleware alternative "
                    + "(docs.commercetools.com/api/projects/orders#query-orders).")
    @GetMapping("/api/orders")
    public List<OrderSummaryView> history(@RequestParam(defaultValue = "20") int limit) {
        return orders.history(limit).stream().map(OrderSummaryView::from).toList();
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 9,
            title = "The subscription is born: the Recurring Order", tier = "T1", capability = "order.recurring",
            description = "Implement RecurringOrderRepository.findByOriginOrder(orderId) in the order module's infrastructure "
                    + "layer — recurringOrders().get().withWhere(\"originOrder(id = :oid)\").withExpand(\"cart\") — returning "
                    + "the raw RecurringOrder. Nobody created it: the order Checkout placed came from a cart carrying S4's "
                    + "recurring line, so the platform created a RecurringOrder (one per schedule) plus a recurring cart with "
                    + "just the recurring items. GET /api/orders/{orderNumber}/subscription shows state, schedule, next "
                    + "order date and the price mode S4 chose.",
            hint = "Docs: Recurring Orders overview — initial creation (Method A: Create Order from Cart) "
                    + "(docs.commercetools.com/api/recurring-orders-overview#initial-creation).")
    @GetMapping("/api/orders/{orderNumber}/subscription")
    public SubscriptionView subscription(@PathVariable String orderNumber) {
        return orders.subscription(orderNumber).map(SubscriptionView::from)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "No subscription was created from order " + orderNumber + " (no recurring line)."));
    }
}
