package com.lifestylehomecorp.order.api.dto;

/** Body for PUT /api/orders/{orderNumber}/system-state — any subset of the three built-in enums. */
public record SystemStateRequest(String orderState, String shipmentState, String paymentState) {
}
