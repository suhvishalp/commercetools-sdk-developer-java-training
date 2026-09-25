package com.lifestylehomecorp.platform.identity;

/**
 * Who the participant is, derived from the API client the BFF authenticates with (see
 * {@link ApiClientParticipantIdentity}). An interface so it can be injected/mocked cleanly.
 *
 * <p>Lives in {@code platform} (moved from {@code training} in Session 7) because domain modules need it
 * too: {@code cart} stamps the participant as the {@code owner} custom field on every cart it creates,
 * and {@code extensibility} scopes its API Extension to exactly those carts — on a Project shared by the
 * whole room, that is what keeps one participant's Extension from firing on everyone else's writes.
 */
public interface ParticipantIdentity {

    /** Stable key for this participant — Custom Object key, {@code owner} field value, Extension key suffix. */
    String id();

    /** Human-friendly display name for the trainer dashboard. */
    String name();
}
