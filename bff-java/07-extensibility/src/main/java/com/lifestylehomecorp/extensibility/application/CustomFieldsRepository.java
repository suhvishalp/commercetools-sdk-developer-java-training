package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.cart.Cart;

import java.util.Map;

/** 7.1 — the one cart update that sets the Custom Type + fields. Participants implement this in {@code infrastructure}. */
public interface CustomFieldsRepository {

    /**
     * {@code setCustomType} on the cart with the given Type (by key) and the full {@code fields} map — replaces
     * the cart's custom fields, so the service passes the merged set. Returns the raw updated {@link Cart}.
     */
    Cart setCartCustomFields(String storeKey, String cartId, Long version, String typeKey, Map<String, Object> fields);
}
