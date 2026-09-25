package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.CheckoutStart;

/** Response of POST /api/checkout/session — what the Browser SDK's paymentFlow needs, plus the order number to confirm by. */
public record CheckoutStartView(String sessionId, String projectKey, String region, String expiresAt, String orderNumber, String applicationKey) {
    public static CheckoutStartView from(CheckoutStart s) {
        return new CheckoutStartView(s.sessionId(), s.projectKey(), s.region(), s.expiresAt(), s.orderNumber(), s.applicationKey());
    }
}
