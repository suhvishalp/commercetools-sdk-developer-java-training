package com.lifestylehomecorp.cart.api.dto;

import com.lifestylehomecorp.cart.domain.ShippingOption;

/** A selectable delivery option (4.8): id to PUT back, name, the matched rate, and whether it is the current one. */
public record ShippingOptionView(
        String id,
        String key,
        String name,
        String description,
        boolean isDefault,
        MoneyView price,
        MoneyView freeAbove,
        boolean selected) {

    public static ShippingOptionView from(ShippingOption o) {
        return new ShippingOptionView(o.id(), o.key(), o.name(), o.description(), o.isDefault(),
                MoneyView.from(o.price()), MoneyView.from(o.freeAbove()), o.selected());
    }
}
