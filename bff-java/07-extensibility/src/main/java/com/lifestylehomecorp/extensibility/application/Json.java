package com.lifestylehomecorp.extensibility.application;

import io.vrap.rmf.base.client.utils.json.JsonUtils;

import java.util.LinkedHashMap;
import java.util.Map;

/** The SDK's JSON mapper, with its checked exceptions folded into runtime ones — plumbing, not a lesson. */
final class Json {

    private Json() {
    }

    static <T> T read(String json, Class<T> type) {
        try {
            return JsonUtils.fromJsonString(json, type);
        } catch (Exception e) {
            throw new IllegalArgumentException("Malformed JSON for " + type.getSimpleName() + ": " + e.getMessage(), e);
        }
    }

    static String write(Object value) {
        try {
            return JsonUtils.toJsonString(value);
        } catch (Exception e) {
            throw new IllegalStateException("Could not serialize " + value.getClass().getSimpleName(), e);
        }
    }

    /** A Custom Object's arbitrary {@code value} as a mutable map (the SDK may hand back a Jackson tree). */
    @SuppressWarnings("unchecked")
    static Map<String, Object> asMap(Object value) {
        if (value instanceof Map<?, ?> m) {
            return new LinkedHashMap<>((Map<String, Object>) m);
        }
        if (value == null) {
            return new LinkedHashMap<>();
        }
        return new LinkedHashMap<>(read(write(value), Map.class));
    }
}
