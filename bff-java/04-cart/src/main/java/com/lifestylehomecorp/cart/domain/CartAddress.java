package com.lifestylehomecorp.cart.domain;

/**
 * An address on the cart (shipping or billing), SDK-free — what the storefront shows in the delivery
 * panel and the checkout stepper (4.7). {@code country} is the one field the platform needs: it drives
 * shipping-method matching (Zones) and the tax rate.
 */
public record CartAddress(
        String firstName,
        String lastName,
        String streetName,
        String streetNumber,
        String postalCode,
        String city,
        String country) {
}
