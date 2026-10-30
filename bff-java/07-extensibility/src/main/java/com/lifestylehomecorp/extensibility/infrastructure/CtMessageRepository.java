package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.message.Message;
import com.lifestylehomecorp.extensibility.application.MessageRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 7.3 / 7.4 — the Messages API. Requires the Project's Messages feature to be enabled (the Session 6 seeder
 * does it); before that the endpoint answers an empty page, not an error.
 */
@Repository
public class CtMessageRepository implements MessageRepository {

    private final ProjectApiRoot apiRoot;

    public CtMessageRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public List<Message> byResource(String resourceTypeId, String resourceId, List<String> types, int limit) {
        return apiRoot.messages().get()
                .withWhere("resource(typeId = :rt and id = :id) and type in (" + quoted(types) + ")")
                .withPredicateVar("rt", resourceTypeId)
                .withPredicateVar("id", resourceId)
                .withSort("sequenceNumber asc")
                .withLimit(limit)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public List<Message> newerThan(List<String> types, String sinceIso, int limit) {
        return apiRoot.messages().get()
                .withWhere("type in (" + quoted(types) + ") and createdAt > :since")
                .withPredicateVar("since", sinceIso)
                .withSort("createdAt asc")
                .withLimit(limit)
                .executeBlocking().getBody().getResults();
    }

    /** Message type names are constants, not user input — inlined into the predicate. */
    private static String quoted(List<String> types) {
        return types.stream().map(t -> "\"" + t + "\"").collect(Collectors.joining(", "));
    }
}
