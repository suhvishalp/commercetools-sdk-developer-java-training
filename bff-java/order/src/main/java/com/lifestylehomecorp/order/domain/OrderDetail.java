package com.lifestylehomecorp.order.domain;

import java.util.List;

/**
 * The confirmation / detail page (6.3): the snapshot Checkout created — lines, addresses, shipping, the
 * money, the three system states, the custom state (6.7) and the payment ledger (6.4). Never the raw
 * SDK Order: the mapper decides what leaves the BFF (S5's PII rule applied to a resource the shopper
 * did not create in this request).
 */
public record OrderDetail(
        String id,
        Long version,
        String orderNumber,
        String createdAt,
        String customerEmail,
        List<OrderLine> lines,
        AddressSummary shippingAddress,
        AddressSummary billingAddress,
        String shippingMethod,
        Money subtotal,
        Money shipping,
        Money tax,
        Money total,
        String orderState,
        String shipmentState,
        String paymentState,
        String customState,
        List<String> allowedTransitions,
        List<PaymentLedger> payments) {
}
