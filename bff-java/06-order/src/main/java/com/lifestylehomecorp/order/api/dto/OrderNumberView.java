package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.platform.session.ShopperSession.CheckoutAttempt;

/** Response of GET /api/checkout/order-number — the current attempt: cart id + version → the promised order number. */
public record OrderNumberView(String orderNumber, String cartId, Long cartVersion) {
    public static OrderNumberView from(CheckoutAttempt a) {
        return new OrderNumberView(a.orderNumber(), a.cartId(), a.cartVersion());
    }
}
