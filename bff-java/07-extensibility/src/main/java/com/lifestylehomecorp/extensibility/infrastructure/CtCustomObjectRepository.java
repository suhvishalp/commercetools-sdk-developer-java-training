package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.custom_object.CustomObject;
import com.commercetools.api.models.custom_object.CustomObjectDraftBuilder;
import com.lifestylehomecorp.extensibility.application.CustomObjectRepository;
import io.vrap.rmf.base.client.error.NotFoundException;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/** 7.2 — Custom Objects: get by container + key; create-or-update with an optional version; delete. */
@Repository
public class CtCustomObjectRepository implements CustomObjectRepository {

    private final ProjectApiRoot apiRoot;

    public CtCustomObjectRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Optional<CustomObject> get(String container, String key) {
        // TODO (Task 7.2): read one Custom Object by container + key; a 404 is not an error here — it means
        // 'not configured yet', so return an empty Optional. See the @TaskDescription.
        throw new TaskNotImplementedException("7.2");
    }

    @Override
    public CustomObject upsert(String container, String key, Long version, Object value) {
        // TODO (Task 7.2): POST a CustomObjectDraft — create-OR-update by container + key. Passing the current
        // version makes a stale write a 409 instead of a silent overwrite.
        throw new TaskNotImplementedException("7.2");
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
