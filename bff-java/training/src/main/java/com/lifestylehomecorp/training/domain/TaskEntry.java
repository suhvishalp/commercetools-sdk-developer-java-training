package com.lifestylehomecorp.training.domain;

/**
 * One persisted task entry. Stored inside {@link ParticipantProgress#tasks()} as an ARRAY element
 * (not a map keyed by id) — commercetools Custom Object field names cannot contain dots, and our
 * task ids do (e.g. "project.Session 1.1"), so the id lives as a value here.
 *
 * <p>Besides completion (a 2xx on the task's endpoint) it records the two steps that lead there:
 * {@code conceptAt} — the participant reached the last concept slide; {@code taskAt} — they opened
 * the task card. Together they show attentiveness, not just outcome. Either may be null.
 */
public record TaskEntry(String id, boolean completed, String completedAt, String conceptAt, String taskAt) {
}
