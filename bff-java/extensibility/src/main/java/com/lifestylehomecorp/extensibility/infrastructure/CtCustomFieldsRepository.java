package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartSetCustomTypeActionBuilder;
import com.commercetools.api.models.cart.CartUpdateBuilder;
import com.commercetools.api.models.type.FieldContainerBuilder;
import com.lifestylehomecorp.extensibility.application.CustomFieldsRepository;
import org.springframework.stereotype.Repository;

import java.util.Map;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/** 7.1 — one cart update: {@code setCustomType} with the Type by key and the full fields map. */
@Repository
public class CtCustomFieldsRepository implements CustomFieldsRepository {

    private final ProjectApiRoot apiRoot;

    public CtCustomFieldsRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Cart setCartCustomFields(String cartId, Long version, String typeKey, Map<String, Object> fields) {
        // TODO (Task 7.1): ONE cart update: setCustomType with the seeded `order-extras` Type BY KEY and the full
        // fields map. The service merges the existing fields and always stamps `owner` — the field
        // 7.6's trigger condition keys on. See the @TaskDescription.
        throw new TaskNotImplementedException("7.1");
    }
}
