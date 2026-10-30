package com.lifestylehomecorp.extensibility.domain;

/** Pre-built — the intake plumbing's state: is this laptop reachable, authenticated, and stamping owners? */
public record IntakeStatus(String publicUrl, String webhookUrl, boolean secretConfigured, int timeoutMs,
                           String owner, String typeKey, boolean typeExists, String bffBaseUrl, String note) {
}
