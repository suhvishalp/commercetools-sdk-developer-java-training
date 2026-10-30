package com.lifestylehomecorp.extensibility.domain;

import java.util.Map;

/**
 * 7.2 — a Custom Object projected for the API: its {@code container} / {@code key} identity, the
 * {@code version} that makes the next write optimistic, and the JSON {@code value}. {@code persisted} is
 * false when the document is the module's built-in defaults (nothing saved yet).
 */
public record ConfigDocument(String container, String key, Long version, Map<String, Object> value, boolean persisted) {

    public Object get(String field) {
        return value == null ? null : value.get(field);
    }

    public boolean flag(String field, boolean fallback) {
        Object v = get(field);
        return v instanceof Boolean b ? b : fallback;
    }

    public long number(String field, long fallback) {
        Object v = get(field);
        return v instanceof Number n ? n.longValue() : fallback;
    }
}
