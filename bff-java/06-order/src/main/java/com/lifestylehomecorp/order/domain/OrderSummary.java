package com.lifestylehomecorp.order.domain;

/** One row of "My orders" (6.8) — PII-safe: number, date, total, the three system states + the custom state. */
public record OrderSummary(
        String orderNumber,
        String createdAt,
        Money total,
        String orderState,
        String shipmentState,
        String paymentState,
        String customState,
        int lineCount) {
}
