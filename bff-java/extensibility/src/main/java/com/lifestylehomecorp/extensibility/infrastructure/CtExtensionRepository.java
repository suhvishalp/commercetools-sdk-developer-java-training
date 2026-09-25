package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.extension.Extension;
import com.commercetools.api.models.extension.ExtensionDraft;
import com.commercetools.api.models.extension.ExtensionUpdateAction;
import com.commercetools.api.models.extension.ExtensionUpdateBuilder;
import com.lifestylehomecorp.extensibility.application.ExtensionRepository;
import io.vrap.rmf.base.client.error.NotFoundException;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/** 7.6 — API Extensions: create from the service's draft; find / update / delete by key (pre-built). */
@Repository
public class CtExtensionRepository implements ExtensionRepository {

    private final ProjectApiRoot apiRoot;

    public CtExtensionRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Extension create(ExtensionDraft draft) {
        // TODO (Task 7.6): register the Extension: extensions().post(draft). The service built the draft — read it
        // first, especially the trigger CONDITION. Ground it on the commercetools-knowledge MCP.
        throw new TaskNotImplementedException("7.6");
    }

    @Override
    public Optional<Extension> findByKey(String key) {
        try {
            return Optional.of(apiRoot.extensions().withKey(key).get().executeBlocking().getBody());
        } catch (NotFoundException e) {
            return Optional.empty();
        }
    }

    @Override
    public Extension update(String key, Long version, List<ExtensionUpdateAction> actions) {
        return apiRoot.extensions().withKey(key)
                .post(ExtensionUpdateBuilder.of().version(version).actions(actions).build())
                .executeBlocking().getBody();
    }

    @Override
    public void delete(String key, Long version) {
        apiRoot.extensions().withKey(key).delete().withVersion(version).executeBlocking();
    }
}
