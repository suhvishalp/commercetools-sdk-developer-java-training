package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.product.ProductProjection;
import com.commercetools.api.models.state.State;

import java.util.Optional;

/**
 * Trainer-provided plumbing: the extensibility module's own reads of carts, orders, states and products — the
 * module depends on {@code platform} only (never on {@code cart} / {@code order} / {@code catalog}).
 */
public interface ExtReadRepository {

    Cart cart(String storeKey, String cartId);

    Optional<Order> orderByNumber(String storeKey, String orderNumber);

    /**
     * BACK OFFICE, not a shopper call: the order consumer (7.4) handles orders of EVERY store, as Session 8's Event
     * app does, so this read is project-wide — the one deliberate exception to "carts and orders are in-store".
     */
    Optional<Order> anyStoreOrderById(String orderId);

    Optional<State> stateById(String stateId);

    /** The product projection (current) that carries a variant with this SKU — for the feed's key resolution. */
    Optional<ProductProjection> productBySku(String sku);
}
