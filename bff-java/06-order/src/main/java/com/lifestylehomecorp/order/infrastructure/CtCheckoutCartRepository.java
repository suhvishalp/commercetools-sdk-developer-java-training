package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartUpdateAction;
import com.commercetools.api.models.cart.CartUpdateBuilder;
import com.lifestylehomecorp.order.application.CheckoutCartRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/** Trainer-provided plumbing: the order module's own cart read/update (readiness, ownership, billing fix-up). */
@Repository
public class CtCheckoutCartRepository implements CheckoutCartRepository {

    private final ProjectApiRoot apiRoot;

    public CtCheckoutCartRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Cart get(String storeKey, String cartId) {
        return apiRoot.inStore(storeKey).carts().withId(cartId).get().executeBlocking().getBody();
    }

    @Override
    public Cart update(String storeKey, String cartId, Long version, List<CartUpdateAction> actions) {
        return apiRoot.inStore(storeKey).carts().withId(cartId)
                .post(CartUpdateBuilder.of().version(version).actions(actions).build())
                .executeBlocking().getBody();
    }
}
