package com.lifestylehomecorp.cart.domain;

/**
 * A place the shopper can collect from (4.5): a supply channel WITH an address — a warehouse has stock
 * but no shop floor. {@code id} is what a cart line's {@code supplyChannelId} points at; {@code key} is
 * what the storefront sends back to select it.
 */
public record PickupLocation(String id, String key, String name, String description, String street, String city, String country) {
}
