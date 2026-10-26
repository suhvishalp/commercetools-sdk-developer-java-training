package com.lifestylehomecorp.training.domain;

/** Per-task state held in memory for the current participant: the two steps and completion. */
public record TaskProgress(boolean completed, String completedAt, String conceptAt, String taskAt) {

    public static final TaskProgress NONE = new TaskProgress(false, null, null, null);

    public TaskProgress withConcept(String at) {
        return conceptAt != null ? this : new TaskProgress(completed, completedAt, at, taskAt);
    }

    public TaskProgress withTask(String at) {
        return taskAt != null ? this : new TaskProgress(completed, completedAt, conceptAt, at);
    }

    public TaskProgress withCompleted(String at) {
        return completed ? this : new TaskProgress(true, at, conceptAt, taskAt);
    }
}
