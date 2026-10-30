package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartUpdateAction;

import java.util.List;

/**
 * The order module's OWN cart gateway (implemented in infrastructure) — readiness, ownership and the
 * billing-address fix-up need the cart, and domain modules depend on {@code platform} only, so this is
 * not the {@code cart} module's repository. Trainer-provided plumbing.
 */
public interface CheckoutCartRepository {

    Cart get(String storeKey, String cartId);

    Cart update(String storeKey, String cartId, Long version, List<CartUpdateAction> actions);
}
