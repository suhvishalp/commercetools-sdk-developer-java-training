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

    Cart cart(String cartId);

    Optional<Order> orderByNumber(String orderNumber);

    Optional<Order> orderById(String orderId);

    Optional<State> stateById(String stateId);

    /** The product projection (current) that carries a variant with this SKU — for the feed's key resolution. */
    Optional<ProductProjection> productBySku(String sku);
}
