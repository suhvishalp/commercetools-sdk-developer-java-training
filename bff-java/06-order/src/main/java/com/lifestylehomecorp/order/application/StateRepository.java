package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.state.State;

/** The States SDK gateway (implemented in infrastructure) — reads the seeded order State machine (6.7). Plumbing. */
public interface StateRepository {

    /** The State by id with its {@code transitions[*]} expanded (so their keys are known), or null. */
    State findById(String id);

    /** The State by key with its {@code transitions[*]} expanded, or null. */
    State findByKey(String key);
}
