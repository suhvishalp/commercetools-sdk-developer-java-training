package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.AddressSummary;

public record AddressView(String firstName, String lastName, String streetName, String streetNumber, String postalCode, String city, String country) {
    public static AddressView from(AddressSummary a) {
        return a == null ? null : new AddressView(a.firstName(), a.lastName(), a.streetName(), a.streetNumber(), a.postalCode(), a.city(), a.country());
    }
}
