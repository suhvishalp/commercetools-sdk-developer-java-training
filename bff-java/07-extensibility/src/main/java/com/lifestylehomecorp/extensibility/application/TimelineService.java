package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.message.Message;
import com.commercetools.api.models.message.OrderCreatedMessage;
import com.commercetools.api.models.message.OrderPaymentStateChangedMessage;
import com.commercetools.api.models.message.OrderShipmentStateChangedMessage;
import com.commercetools.api.models.message.OrderStateChangedMessage;
import com.commercetools.api.models.message.OrderStateTransitionMessage;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.state.State;
import com.lifestylehomecorp.extensibility.domain.TimelineEntry;
import com.lifestylehomecorp.platform.session.ShopperSession;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 7.3 — the order timeline, read from the Project's event log. Resolves the order number to the order (own
 * read), checks ownership (Session 6's rule: someone else's order is a 404, never a 403), queries the
 * Messages on that resource and projects each type to a one-line step. The payload a Subscription would push
 * is exactly what we read here.
 */
@Service
public class TimelineService {

    /** The Message types that tell the shopper's story — Placed → Paid → Picked/Shipped/Delivered. */
    public static final List<String> TIMELINE_TYPES = List.of(
            "OrderCreated", "OrderPaymentStateChanged", "OrderStateTransition", "OrderShipmentStateChanged",
            "OrderStateChanged");

    private final MessageRepository messages;
    private final ExtReadRepository reads;
    private final ShopperSession session;
    private final Map<String, String> stateNames = new ConcurrentHashMap<>();

    public TimelineService(MessageRepository messages, ExtReadRepository reads, ShopperSession session) {
        this.messages = messages;
        this.reads = reads;
        this.session = session;
    }

    public List<TimelineEntry> timeline(String orderNumber, String locale) {
        Order order = owned(orderNumber);
        return messages.byResource("order", order.getId(), TIMELINE_TYPES, 100).stream()
                .map(m -> new TimelineEntry(m.getId(), m.getType(),
                        m.getCreatedAt() == null ? null : m.getCreatedAt().toString(),
                        summarize(m, locale), m.getSequenceNumber(), m.getResourceVersion()))
                .toList();
    }

    String summarize(Message m, String locale) {
        if (m instanceof OrderCreatedMessage) {
            return "Order placed";
        }
        if (m instanceof OrderPaymentStateChangedMessage p) {
            return "Payment " + (p.getPaymentState() == null ? "changed" : p.getPaymentState().getJsonName().toLowerCase());
        }
        if (m instanceof OrderStateTransitionMessage t) {
            String id = t.getState() == null ? null : t.getState().getId();
            return "Moved to " + stateName(id, locale);
        }
        if (m instanceof OrderShipmentStateChangedMessage s) {
            return "Shipment " + (s.getShipmentState() == null ? "changed" : s.getShipmentState().getJsonName().toLowerCase());
        }
        if (m instanceof OrderStateChangedMessage o) {
            return "Order " + (o.getOrderState() == null ? "changed" : o.getOrderState().getJsonName().toLowerCase());
        }
        return m.getType();
    }

    private String stateName(String stateId, String locale) {
        if (stateId == null) {
            return "a new state";
        }
        return stateNames.computeIfAbsent(stateId, id -> reads.stateById(id)
                .map(s -> displayName(s, locale)).orElse(id));
    }

    private static String displayName(State s, String locale) {
        if (s.getName() != null && s.getName().values() != null && !s.getName().values().isEmpty()) {
            String exact = s.getName().values().get(locale);
            return exact != null ? exact : s.getName().values().values().iterator().next();
        }
        return s.getKey();
    }

    private Order owned(String orderNumber) {
        Order order = reads.orderByNumber(session.storeKey(), orderNumber)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found: " + orderNumber));
        boolean owned = session.isSignedIn()
                ? session.customerIdOrNull().equals(order.getCustomerId())
                : session.anonymousId() != null && session.anonymousId().equals(order.getAnonymousId());
        if (!owned) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found: " + orderNumber);
        }
        return order;
    }
}
