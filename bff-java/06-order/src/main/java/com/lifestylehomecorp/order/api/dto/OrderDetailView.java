package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.OrderDetail;

import java.util.List;

/** The confirmation / detail page — the snapshot Checkout created, PII-safe, with the ledger and the state machine's next moves. */
public record OrderDetailView(
        String orderNumber,
        String createdAt,
        String customerEmail,
        List<OrderLineView> lines,
        AddressView shippingAddress,
        AddressView billingAddress,
        String shippingMethod,
        MoneyView subtotal,
        MoneyView shipping,
        MoneyView tax,
        MoneyView total,
        String orderState,
        String shipmentState,
        String paymentState,
        String customState,
        List<String> allowedTransitions,
        List<PaymentLedgerView> payments) {

    public static OrderDetailView from(OrderDetail o) {
        return new OrderDetailView(o.orderNumber(), o.createdAt(), o.customerEmail(),
                o.lines().stream().map(OrderLineView::from).toList(),
                AddressView.from(o.shippingAddress()), AddressView.from(o.billingAddress()), o.shippingMethod(),
                MoneyView.from(o.subtotal()), MoneyView.from(o.shipping()), MoneyView.from(o.tax()), MoneyView.from(o.total()),
                o.orderState(), o.shipmentState(), o.paymentState(), o.customState(), o.allowedTransitions(),
                o.payments().stream().map(PaymentLedgerView::from).toList());
    }
}
