package com.lifestylehomecorp.order.application;

import com.lifestylehomecorp.order.domain.CheckoutSession;

/**
 * The commercetools Checkout <b>Sessions API</b> gateway (implemented in infrastructure) — the one call
 * between this BFF and Checkout before the shopper pays (6.1). Plain HTTP with a {@code manage_sessions}
 * token: the Composable Commerce SDK does not wrap it.
 */
public interface CheckoutSessionRepository {

    /**
     * 6.1 — create a Checkout Session for the cart under the given Application, promising Checkout the
     * order number it must store on the Order it will create ({@code futureOrderNumber}).
     */
    CheckoutSession create(String cartId, String applicationKey, String futureOrderNumber);
}
