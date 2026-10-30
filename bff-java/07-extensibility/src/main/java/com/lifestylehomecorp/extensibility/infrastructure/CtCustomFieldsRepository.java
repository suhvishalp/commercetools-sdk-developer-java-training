package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartSetCustomTypeActionBuilder;
import com.commercetools.api.models.cart.CartUpdateBuilder;
import com.commercetools.api.models.type.FieldContainerBuilder;
import com.lifestylehomecorp.extensibility.application.CustomFieldsRepository;
import org.springframework.stereotype.Repository;

import java.util.Map;

/** 7.1 — one cart update: {@code setCustomType} with the Type by key and the full fields map. */
@Repository
public class CtCustomFieldsRepository implements CustomFieldsRepository {

    private final ProjectApiRoot apiRoot;

    public CtCustomFieldsRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Cart setCartCustomFields(String storeKey, String cartId, Long version, String typeKey, Map<String, Object> fields) {
        return apiRoot.inStore(storeKey).carts().withId(cartId)
                .post(CartUpdateBuilder.of().version(version)
                        .actions(CartSetCustomTypeActionBuilder.of()
                                .type(t -> t.key(typeKey))
                                .fields(FieldContainerBuilder.of().values(fields).build())
                                .build())
                        .build())
                .withExpand("custom.type")
                .executeBlocking().getBody();
    }
}
