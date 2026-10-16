package com.lifestylehomecorp.cart.api.dto;

import java.util.List;

/**
 * The cart on the wire — every cart endpoint returns it. Besides the lines and the money breakdown it
 * carries the delivery state (address + selected method) and the owner, so the storefront's cart page,
 * checkout stepper and the Canvas inspector can all read the cart's situation from one response.
 */
public record CartView(
        String id,
        Long version,
        String currency,
        String country,
        List<CartLineView> lines,
        int itemCount,
        MoneyView subtotal,
        MoneyView savings,
        MoneyView shipping,
        MoneyView tax,
        MoneyView total,
        String shippingMethod,
        String shippingMethodId,
        CartAddressView shippingAddress,
        CartAddressView billingAddress,
        String customerId,
        String customerEmail,
        String owner,
        List<String> discountCodes) {
}
