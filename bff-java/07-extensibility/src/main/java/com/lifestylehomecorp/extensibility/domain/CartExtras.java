package com.lifestylehomecorp.extensibility.domain;

/**
 * 7.1 — the cart's {@code order-extras} Custom Fields as the storefront sees them. {@code owner} is the
 * participant key the trainer plumbing stamps; {@code requiresWhiteGlove} is set by the 7.7 Extension, never
 * by the storefront.
 */
public record CartExtras(String cartId, Long cartVersion, String typeKey, String giftMessage,
                         boolean requiresWhiteGlove, String owner) {
}
