package com.lifestylehomecorp.extensibility.domain;

import java.util.List;

/** 7.6 — the registered API Extension as the Canvas shows it: where it points, what triggers it, its budget. */
public record ExtensionRegistration(String id, String key, Long version, String url, boolean authenticated,
                                    List<Trigger> triggers, Integer timeoutInMs, String createdAt) {

    public record Trigger(String resourceTypeId, List<String> actions, String condition) {
    }
}
