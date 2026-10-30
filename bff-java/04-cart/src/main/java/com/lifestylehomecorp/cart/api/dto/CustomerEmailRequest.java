package com.lifestylehomecorp.cart.api.dto;

/** Body for PUT /api/cart/customer-email — the guest's contact email (a signed-in shopper needs none). */
public record CustomerEmailRequest(String email) {
}
