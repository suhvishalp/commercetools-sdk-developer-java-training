package com.lifestylehomecorp.order.api.dto;

/** Body for PUT /api/orders/{orderNumber}/state — the target key of the seeded order State machine. */
public record TransitionRequest(String state) {
}
