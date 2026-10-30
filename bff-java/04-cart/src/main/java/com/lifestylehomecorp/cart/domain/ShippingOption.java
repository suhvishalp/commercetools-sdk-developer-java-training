package com.lifestylehomecorp.cart.domain;

/**
 * A shipping method valid for the cart (4.8) — SDK-free. {@code price} is the rate that matched the
 * cart (its zone + currency, after value tiers), {@code freeAbove} the threshold from which that rate
 * is waived, {@code selected} whether the cart currently carries this method.
 */
public record ShippingOption(
        String id,
        String key,
        String name,
        String description,
        boolean isDefault,
        Money price,
        Money freeAbove,
        boolean selected) {
}
