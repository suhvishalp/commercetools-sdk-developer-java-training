package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.LineItem;
import com.commercetools.api.models.common.Address;
import com.commercetools.api.models.common.TypedMoney;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.payment.Payment;
import com.commercetools.api.models.payment.PaymentReference;
import com.commercetools.api.models.payment.Transaction;
import com.commercetools.api.models.recurrence_policy.DayOfMonthSchedule;
import com.commercetools.api.models.recurrence_policy.RecurrencePolicySchedule;
import com.commercetools.api.models.recurrence_policy.StandardSchedule;
import com.commercetools.api.models.recurring_order.RecurringOrder;
import com.commercetools.api.models.state.State;
import com.commercetools.api.models.state.StateReference;
import com.lifestylehomecorp.order.domain.AddressSummary;
import com.lifestylehomecorp.order.domain.LedgerTransaction;
import com.lifestylehomecorp.order.domain.Money;
import com.lifestylehomecorp.order.domain.OrderDetail;
import com.lifestylehomecorp.order.domain.OrderLine;
import com.lifestylehomecorp.order.domain.OrderSummary;
import com.lifestylehomecorp.order.domain.PaymentLedger;
import com.lifestylehomecorp.order.domain.Subscription;

import java.util.List;
import java.util.Objects;

/**
 * SDK Order / Payment / RecurringOrder → domain (SDK-free) records. The ONE place that decides what an
 * order page may show (S5's PII rule): the customer's email on the snapshot, yes; internal ids of other
 * customers, PSP payloads, never.
 */
public final class OrderMapper {

    /** The seeded line-item Custom Type S4 uses to link a bundle's lines. */
    private static final String FIELD_BUNDLE_ID = "bundleId";
    private static final String FIELD_PARENT_ID = "parentId";

    private OrderMapper() {
    }

    public static OrderSummary toSummary(Order o) {
        return new OrderSummary(
                o.getOrderNumber(),
                str(o.getCreatedAt()),
                money(o.getTotalPrice()),
                name(o.getOrderState()),
                name(o.getShipmentState()),
                name(o.getPaymentState()),
                stateKey(o.getState()),
                o.getLineItems() == null ? 0 : o.getLineItems().size());
    }

    public static OrderDetail toDetail(Order o, List<String> allowedTransitions, String locale) {
        List<OrderLine> lines = o.getLineItems() == null ? List.of()
                : o.getLineItems().stream().map(li -> toLine(li, locale)).toList();
        Money subtotal = new Money(
                o.getLineItems() == null ? 0 : o.getLineItems().stream()
                        .mapToLong(li -> li.getTotalPrice() == null ? 0 : li.getTotalPrice().getCentAmount()).sum(),
                o.getTotalPrice().getCurrencyCode(), o.getTotalPrice().getFractionDigits());
        Money shipping = o.getShippingInfo() == null ? null : money(o.getShippingInfo().getPrice());
        Money tax = o.getTaxedPrice() == null || o.getTaxedPrice().getTotalTax() == null ? null : money(o.getTaxedPrice().getTotalTax());
        return new OrderDetail(
                o.getId(),
                o.getVersion(),
                o.getOrderNumber(),
                str(o.getCreatedAt()),
                o.getCustomerEmail(),
                lines,
                address(o.getShippingAddress()),
                address(o.getBillingAddress()),
                o.getShippingInfo() == null ? null : o.getShippingInfo().getShippingMethodName(),
                subtotal,
                shipping,
                tax,
                money(o.getTotalPrice()),
                name(o.getOrderState()),
                name(o.getShipmentState()),
                name(o.getPaymentState()),
                stateKey(o.getState()),
                allowedTransitions,
                ledgers(o));
    }

    /** Every Payment on the order, as Merchant Center shows them under Orders → Payments (6.5). */
    public static List<PaymentLedger> ledgers(Order o) {
        if (o.getPaymentInfo() == null || o.getPaymentInfo().getPayments() == null) {
            return List.of();
        }
        return o.getPaymentInfo().getPayments().stream()
                .map(PaymentReference::getObj)
                .filter(Objects::nonNull)
                .map(OrderMapper::toLedger)
                .toList();
    }

    public static PaymentLedger toLedger(Payment p) {
        List<LedgerTransaction> tx = p.getTransactions() == null ? List.of() : p.getTransactions().stream()
                .map(OrderMapper::toTransaction).toList();
        return new PaymentLedger(
                p.getId(),
                p.getPaymentMethodInfo() == null ? null : p.getPaymentMethodInfo().getPaymentInterface(),
                p.getPaymentMethodInfo() == null ? null : p.getPaymentMethodInfo().getMethod(),
                p.getInterfaceId(),
                money(p.getAmountPlanned()),
                p.getPaymentStatus() == null ? null : p.getPaymentStatus().getInterfaceCode(),
                tx,
                p.getInterfaceInteractions() == null ? 0 : p.getInterfaceInteractions().size());
    }

    private static LedgerTransaction toTransaction(Transaction t) {
        return new LedgerTransaction(t.getId(), name(t.getType()), name(t.getState()), money(t.getAmount()),
                t.getInteractionId(), str(t.getTimestamp()));
    }

    public static Subscription toSubscription(RecurringOrder r) {
        Cart cart = r.getCart() == null ? null : r.getCart().getObj();
        List<String> skus = cart == null || cart.getLineItems() == null ? List.of() : cart.getLineItems().stream()
                .map(li -> li.getVariant() == null ? null : li.getVariant().getSku()).filter(Objects::nonNull).toList();
        String priceMode = cart == null || cart.getLineItems() == null ? null : cart.getLineItems().stream()
                .filter(li -> li.getRecurrenceInfo() != null && li.getRecurrenceInfo().getPriceSelectionMode() != null)
                .map(li -> li.getRecurrenceInfo().getPriceSelectionMode().getJsonName()).findFirst().orElse(null);
        return new Subscription(
                r.getId(),
                name(r.getRecurringOrderState()),
                scheduleLabel(r.getSchedule()),
                str(r.getStartsAt()),
                str(r.getNextOrderAt()),
                str(r.getExpiresAt()),
                priceMode,
                skus);
    }

    /** The keys a State machine allows next, from a State with {@code transitions[*]} expanded. */
    public static List<String> allowedTransitions(State state) {
        if (state == null || state.getTransitions() == null) {
            return List.of();
        }
        return state.getTransitions().stream()
                .map(ref -> ref.getObj() != null ? ref.getObj().getKey() : ref.getId())
                .filter(Objects::nonNull)
                .toList();
    }

    private static OrderLine toLine(LineItem li, String locale) {
        String name = li.getName() == null ? null : firstNonNull(li.getName().get(locale), li.getName().get("en-US"),
                li.getName().values().values().stream().findFirst().orElse(null));
        String recurrenceLabel = null;
        if (li.getRecurrenceInfo() != null && li.getRecurrenceInfo().getRecurrencePolicy() != null) {
            var policy = li.getRecurrenceInfo().getRecurrencePolicy().getObj();
            recurrenceLabel = policy != null && policy.getSchedule() != null ? scheduleLabel(policy.getSchedule()) : "recurring";
        }
        return new OrderLine(
                li.getId(),
                li.getVariant() == null ? null : li.getVariant().getSku(),
                name,
                li.getQuantity() == null ? 0 : li.getQuantity(),
                money(li.getTotalPrice()),
                li.getRecurrenceInfo() != null,
                recurrenceLabel,
                customString(li, FIELD_BUNDLE_ID),
                customString(li, FIELD_PARENT_ID));
    }

    private static String customString(LineItem li, String field) {
        if (li.getCustom() == null || li.getCustom().getFields() == null) {
            return null;
        }
        Object v = li.getCustom().getFields().values().get(field);
        return v == null ? null : v.toString();
    }

    private static String scheduleLabel(RecurrencePolicySchedule schedule) {
        if (schedule instanceof StandardSchedule s) {
            String unit = s.getIntervalUnit() == null ? "" : s.getIntervalUnit().getJsonName().toLowerCase();
            return s.getValue() != null && s.getValue() == 1 ? "every " + unit.replaceAll("s$", "") : "every " + s.getValue() + " " + unit;
        }
        if (schedule instanceof DayOfMonthSchedule d) {
            return "day " + d.getDay() + " of every month";
        }
        return schedule == null ? null : "recurring";
    }

    private static AddressSummary address(Address a) {
        return a == null ? null : new AddressSummary(a.getFirstName(), a.getLastName(), a.getStreetName(),
                a.getStreetNumber(), a.getPostalCode(), a.getCity(), a.getCountry());
    }

    static Money money(TypedMoney m) {
        return m == null ? null : new Money(m.getCentAmount(), m.getCurrencyCode(), m.getFractionDigits());
    }

    private static String stateKey(StateReference ref) {
        return ref == null ? null : ref.getObj() != null ? ref.getObj().getKey() : ref.getId();
    }

    private static String name(Object jsonEnum) {
        if (jsonEnum == null) {
            return null;
        }
        return jsonEnum instanceof io.vrap.rmf.base.client.JsonEnum e ? e.getJsonName() : jsonEnum.toString();
    }

    private static String str(java.time.ZonedDateTime t) {
        return t == null ? null : t.toString();
    }

    @SafeVarargs
    private static <T> T firstNonNull(T... values) {
        for (T v : values) {
            if (v != null) {
                return v;
            }
        }
        return null;
    }
}
