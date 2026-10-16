package com.lifestylehomecorp.cart.api.dto;

/**
 * Body for POST /api/cart/line-items — the storefront says "add SKU × qty" (default qty 1). The two
 * channel keys are optional (4.5): {@code distributionChannelKey} prices the line from that channel
 * (the price the PLP / PDP showed), {@code supplyChannelKey} sources it from a pickup store.
 */
public record AddLineItemRequest(String sku, Long quantity, String distributionChannelKey, String supplyChannelKey) {
}
