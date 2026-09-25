package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.custom_object.CustomObject;

import java.util.Optional;

/** 7.2 — Custom Objects by container + key. Participants implement {@code get} and {@code upsert}; {@code delete} is pre-built. */
public interface CustomObjectRepository {

    /** GET by container + key; empty when there is none (the API's 404). */
    Optional<CustomObject> get(String container, String key);

    /**
     * Create-or-update: {@code POST /custom-objects} with the same container + key updates. {@code version}
     * may be null (last write wins) or the current version (a stale write is a 409).
     */
    CustomObject upsert(String container, String key, Long version, Object value);

    /** Pre-built — used by the consumer's checkpoint reset. Returns false when nothing existed. */
    boolean delete(String container, String key);
}
