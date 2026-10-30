package com.lifestylehomecorp.order.domain;

/**
 * What the storefront needs to mount the Checkout payment widget (6.3 / 6.2): the Checkout Session id,
 * the project + region the Browser SDK requires (returned here so the browser needs no public env vars),
 * when the session expires, and the order number LHC promised Checkout as {@code futureOrderNumber}.
 */
public record CheckoutStart(
        String sessionId,
        String projectKey,
        String region,
        String expiresAt,
        String orderNumber,
        String applicationKey) {
}
