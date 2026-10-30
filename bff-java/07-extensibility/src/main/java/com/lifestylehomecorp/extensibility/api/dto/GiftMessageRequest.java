package com.lifestylehomecorp.extensibility.api.dto;

/** Body for PUT /api/cart/extras — an empty or missing message clears it. */
public record GiftMessageRequest(String giftMessage) {
}
