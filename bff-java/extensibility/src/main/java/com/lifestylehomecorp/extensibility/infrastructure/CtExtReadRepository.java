package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.product.ProductProjection;
import com.commercetools.api.models.state.State;
import com.lifestylehomecorp.extensibility.application.ExtReadRepository;
import io.vrap.rmf.base.client.error.NotFoundException;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/** Trainer-provided plumbing: the module's own reads (the module depends on {@code platform} only). */
@Repository
public class CtExtReadRepository implements ExtReadRepository {

    private final ProjectApiRoot apiRoot;

    public CtExtReadRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Cart cart(String cartId) {
        return apiRoot.carts().withId(cartId).get().withExpand("custom.type").executeBlocking().getBody();
    }

    @Override
    public Optional<Order> orderByNumber(String orderNumber) {
        try {
            return Optional.of(apiRoot.orders().withOrderNumber(orderNumber).get().executeBlocking().getBody());
        } catch (NotFoundException e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<Order> orderById(String orderId) {
        try {
            return Optional.of(apiRoot.orders().withId(orderId).get().executeBlocking().getBody());
        } catch (NotFoundException e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<State> stateById(String stateId) {
        try {
            return Optional.of(apiRoot.states().withId(stateId).get().executeBlocking().getBody());
        } catch (NotFoundException e) {
            return Optional.empty();
        }
    }

    @Override
    public Optional<ProductProjection> productBySku(String sku) {
        List<ProductProjection> hits = apiRoot.productProjections().get()
                .withWhere("masterVariant(sku = :sku) or variants(sku = :sku)")
                .withPredicateVar("sku", sku)
                .withLimit(1)
                .executeBlocking().getBody().getResults();
        return hits.stream().findFirst();
    }
}
