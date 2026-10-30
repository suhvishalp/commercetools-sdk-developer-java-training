package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.custom_object.CustomObject;
import com.commercetools.api.models.custom_object.CustomObjectDraftBuilder;
import com.lifestylehomecorp.extensibility.application.CustomObjectRepository;
import io.vrap.rmf.base.client.error.NotFoundException;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/** 7.2 — Custom Objects: get by container + key; create-or-update with an optional version; delete. */
@Repository
public class CtCustomObjectRepository implements CustomObjectRepository {

    private final ProjectApiRoot apiRoot;

    public CtCustomObjectRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Optional<CustomObject> get(String container, String key) {
        try {
            return Optional.of(apiRoot.customObjects().withContainerAndKey(container, key).get()
                    .executeBlocking().getBody());
        } catch (NotFoundException e) {
            return Optional.empty();
        }
    }

    @Override
    public CustomObject upsert(String container, String key, Long version, Object value) {
        CustomObjectDraftBuilder draft = CustomObjectDraftBuilder.of().container(container).key(key).value(value);
        if (version != null) {
            draft.version(version);
        }
        return apiRoot.customObjects().post(draft.build()).executeBlocking().getBody();
    }

    @Override
    public boolean delete(String container, String key) {
        try {
            apiRoot.customObjects().withContainerAndKey(container, key).delete().executeBlocking();
            return true;
        } catch (NotFoundException e) {
            return false;
        }
    }
}
