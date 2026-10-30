package com.lifestylehomecorp.cart.api.dto;

import com.lifestylehomecorp.cart.domain.PickupLocation;

public record PickupLocationView(String id, String key, String name, String description, String street, String city, String country) {

    public static PickupLocationView from(PickupLocation p) {
        return new PickupLocationView(p.id(), p.key(), p.name(), p.description(), p.street(), p.city(), p.country());
    }
}
