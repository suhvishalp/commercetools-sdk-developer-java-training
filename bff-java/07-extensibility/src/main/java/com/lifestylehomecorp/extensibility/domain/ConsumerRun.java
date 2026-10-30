package com.lifestylehomecorp.extensibility.domain;

import java.util.List;

/**
 * 7.4 — the outcome of one consumer pass: how many Messages were handled (an effect happened), skipped
 * (already seen, or nothing to do), and failed (the batch stops there); the checkpoint after the run; and
 * a per-message trace for the Canvas.
 */
public record ConsumerRun(int handled, int skipped, int failed, String since, int fetched, List<Trace> trace) {

    /** What happened to one Message. */
    public record Trace(String messageId, String type, Long sequenceNumber, String resourceId, String outcome, String detail) {
    }
}
