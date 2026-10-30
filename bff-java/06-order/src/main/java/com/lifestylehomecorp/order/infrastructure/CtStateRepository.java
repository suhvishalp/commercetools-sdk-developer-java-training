package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.state.State;
import com.lifestylehomecorp.order.application.StateRepository;
import io.vrap.rmf.base.client.ApiHttpException;
import org.springframework.stereotype.Repository;

/** Trainer-provided plumbing: reads the seeded order State machine with its transitions' keys (6.7). */
@Repository
public class CtStateRepository implements StateRepository {

    private static final String EXPAND_TRANSITIONS = "transitions[*]";

    private final ProjectApiRoot apiRoot;

    public CtStateRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public State findById(String id) {
        try {
            return apiRoot.states().withId(id).get().withExpand(EXPAND_TRANSITIONS).executeBlocking().getBody();
        } catch (ApiHttpException ex) {
            if (ex.getStatusCode() == 404) {
                return null;
            }
            throw ex;
        }
    }

    @Override
    public State findByKey(String key) {
        try {
            return apiRoot.states().withKey(key).get().withExpand(EXPAND_TRANSITIONS).executeBlocking().getBody();
        } catch (ApiHttpException ex) {
            if (ex.getStatusCode() == 404) {
                return null;
            }
            throw ex;
        }
    }
}
