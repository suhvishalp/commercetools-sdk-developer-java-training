package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.custom_object.CustomObject;
import com.commercetools.api.models.message.Message;
import com.commercetools.api.models.message.OrderCreatedMessage;
import com.commercetools.api.models.message.OrderPaymentStateChangedMessage;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.state.State;
import com.lifestylehomecorp.extensibility.domain.Checkpoint;
import com.lifestylehomecorp.extensibility.domain.ConsumerRun;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/**
 * 7.4 — the idempotent consumer, <b>polling</b>. Keeps Session 6's promise ("start fulfilling only on payment
 * success") without a queue: read the checkpoint, pull the Messages newer than it, act on each new one once,
 * advance the checkpoint only after success. The handling logic is exactly what Session 8's Connect Event app
 * runs when the same Messages are <em>pushed</em> — only the trigger changes.
 *
 * <p>Dedupe twice: by Message id (the transport may repeat) and by effect (Session 6's transition is itself
 * idempotent — already {@code order-picked} is a 200). Order per resource by {@code sequenceNumber}; never
 * assume order across resources. Stop the batch at the first failure so nothing is skipped.
 */
@Service
public class EventConsumerService {

    private static final Logger log = LoggerFactory.getLogger(EventConsumerService.class);

    public static final String CONTAINER = "lhc-processed";
    public static final String KEY = "order-consumer";
    public static final String TARGET_STATE = "order-picked";
    /** The initial State of the seeded machine. Checkout-created orders arrive with no State at all. */
    public static final String STATE_PLACED = "order-placed";
    public static final List<String> CONSUMED_TYPES = List.of("OrderPaymentStateChanged", "OrderCreated");
    static final Duration FRESH_LOOKBACK = Duration.ofDays(1);

    private final MessageRepository messages;
    private final CustomObjectRepository customObjects;
    private final ExtReadRepository reads;
    private final OrderStateClient orderState;

    public EventConsumerService(MessageRepository messages, CustomObjectRepository customObjects,
                                ExtReadRepository reads, OrderStateClient orderState) {
        this.messages = messages;
        this.customObjects = customObjects;
        this.reads = reads;
        this.orderState = orderState;
    }

    /** One pass. Safe to call any number of times: a second pass over the same Messages handles none. */
    public ConsumerRun processNext(int limit) {
        // TODO (Task 7.4): the idempotent consumer: read the checkpoint, pull the Messages newer than it, skip what
        // you have already seen (by message id AND by sequenceNumber per resource), act once on each
        // new one, and advance the checkpoint ONLY after success — stopping at the first failure so
        // nothing is skipped. Running it twice must transition once. See the @TaskDescription.
        throw new TaskNotImplementedException("7.4");
    }

    public Checkpoint checkpoint() {
        Optional<CustomObject> co = customObjects.get(CONTAINER, KEY);
        return co.map(c -> Checkpoint.fromValue(asMap(c.getValue()), c.getVersion()))
                .orElseGet(() -> Checkpoint.fresh(Instant.now().minus(FRESH_LOOKBACK).toString()));
    }

    /** Forget everything (demo replay): the next pass re-reads the last day — and must handle nothing twice. */
    public boolean reset() {
        return customObjects.delete(CONTAINER, KEY);
    }

    // ---- the handler — what Session 8's Event app runs on push --------------------------------------

    private record Outcome(boolean effect, boolean failed, String detail) {
    }

    private Outcome handle(Message m, String resourceId) {
        if (m instanceof OrderPaymentStateChangedMessage p) {
            String state = p.getPaymentState() == null ? null : p.getPaymentState().getJsonName();
            if (!"Paid".equals(state)) {
                return new Outcome(false, false, "paymentState " + state + " — nothing to do");
            }
            Order order = reads.orderById(resourceId).orElse(null);
            if (order == null) {
                return new Outcome(false, true, "order " + resourceId + " not found");
            }
            if (order.getOrderNumber() == null) {
                return new Outcome(false, true, "order " + resourceId + " has no orderNumber");
            }
            // Establish "already done" by READING THE ORDER, never by reading a 409. A 409 means the
            // machine refused, which is a different thing entirely — and acknowledging it would mark
            // the message handled when the work never happened.
            String current = currentStateKey(order);
            if (TARGET_STATE.equals(current)) {
                return new Outcome(false, false, order.getOrderNumber() + " is already " + TARGET_STATE);
            }

            // An order Checkout created carries NO custom State: `initial` is not auto-assigned to
            // orders. So the first hop is (none) -> order-placed, and only then the one we came for.
            // Walking the machine is the handler's job; skipping a step is what the 409 was telling us.
            if (current == null) {
                OrderStateClient.Result placed = orderState.transition(order.getOrderNumber(), STATE_PLACED);
                if (!placed.ok()) {
                    return new Outcome(false, true, "could not place " + order.getOrderNumber()
                            + ": HTTP " + placed.status() + " " + placed.body());
                }
            }

            OrderStateClient.Result r = orderState.transition(order.getOrderNumber(), TARGET_STATE);
            if (r.ok()) {
                return new Outcome(true, false, order.getOrderNumber() + " → " + TARGET_STATE);
            }
            return new Outcome(false, true, "transition " + order.getOrderNumber() + " refused: HTTP "
                    + r.status() + " " + r.body());
        }
        if (m instanceof OrderCreatedMessage) {
            log.info("[consumer] OrderCreated {} — confirmation e-mail would be queued here (homework).", resourceId);
            return new Outcome(false, false, "OrderCreated logged (email stub)");
        }
        return new Outcome(false, false, "type " + m.getType() + " not handled");
    }

    /** The order's custom State key, or null when it has none (which is how Checkout leaves them). */
    private String currentStateKey(Order order) {
        if (order.getState() == null) {
            return null;
        }
        if (order.getState().getObj() != null) {
            return order.getState().getObj().getKey();
        }
        return reads.stateById(order.getState().getId()).map(State::getKey).orElse(null);
    }

    // ---- checkpoint persistence --------------------------------------------------------------------

    private Checkpoint save(Checkpoint cp) {
        CustomObject saved = customObjects.upsert(CONTAINER, KEY, cp.version(), cp.toValue());
        return new Checkpoint(cp.since(), cp.seenIds(), cp.lastSequenceByResource(), saved.getVersion());
    }

    private static Map<String, Object> asMap(Object value) {
        return Json.asMap(value);
    }

    private static String iso(Message m) {
        return m.getCreatedAt() == null ? null : m.getCreatedAt().toInstant().toString();
    }

    private static ConsumerRun.Trace trace(Message m, String resourceId, String outcome, String detail) {
        return new ConsumerRun.Trace(m.getId(), m.getType(), m.getSequenceNumber(), resourceId, outcome, detail);
    }
}
