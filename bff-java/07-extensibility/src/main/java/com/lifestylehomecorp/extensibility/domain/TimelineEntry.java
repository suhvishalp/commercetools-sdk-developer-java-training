package com.lifestylehomecorp.extensibility.domain;

/**
 * 7.3 — one step of the order timeline, projected from a platform Message: its {@code type}, when it happened,
 * a one-line human summary, and the two numbers an idempotent consumer keys on — {@code sequenceNumber}
 * (per resource) and {@code resourceVersion} (the version the change produced).
 */
public record TimelineEntry(String messageId, String type, String at, String summary, Long sequenceNumber,
                            Long resourceVersion) {
}
