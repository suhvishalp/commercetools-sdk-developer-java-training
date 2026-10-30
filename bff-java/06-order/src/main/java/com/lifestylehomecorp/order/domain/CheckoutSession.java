package com.lifestylehomecorp.order.domain;

/** The raw Checkout Session as the Sessions API returns it — id, expiry, state ("ACTIVE"). */
public record CheckoutSession(String id, String expiryAt, String state) {
}
