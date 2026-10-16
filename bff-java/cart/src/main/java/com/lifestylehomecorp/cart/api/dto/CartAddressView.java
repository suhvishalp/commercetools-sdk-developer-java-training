package com.lifestylehomecorp.cart.api.dto;

import com.lifestylehomecorp.cart.domain.CartAddress;

/** An address on the cart on the wire (shipping / billing). Null when the cart has none yet. */
public record CartAddressView(
        String firstName,
        String lastName,
        String streetName,
        String streetNumber,
        String postalCode,
        String city,
        String country) {

    public static CartAddressView from(CartAddress a) {
        return a == null ? null : new CartAddressView(a.firstName(), a.lastName(), a.streetName(),
                a.streetNumber(), a.postalCode(), a.city(), a.country());
    }
}
