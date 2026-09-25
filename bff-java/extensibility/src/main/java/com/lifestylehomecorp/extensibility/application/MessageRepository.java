package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.message.Message;

import java.util.List;

/**
 * 7.3 / 7.4 — the Messages API (the Project's event log; must be enabled). {@code byResource} is the 7.3 task;
 * {@code newerThan} is pre-built plumbing for the consumer's global cursor.
 */
public interface MessageRepository {

    /** All Messages of the given types on one resource, oldest first by {@code sequenceNumber}. */
    List<Message> byResource(String resourceTypeId, String resourceId, List<String> types, int limit);

    /** Messages of the given types created after {@code sinceIso} (exclusive), oldest first by {@code createdAt}. */
    List<Message> newerThan(List<String> types, String sinceIso, int limit);
}
