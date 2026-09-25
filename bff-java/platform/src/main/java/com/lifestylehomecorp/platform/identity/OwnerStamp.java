package com.lifestylehomecorp.platform.identity;

import com.commercetools.api.client.ProjectApiRoot;
import io.vrap.rmf.base.client.error.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;

/**
 * Trainer-provided plumbing (Session 7): the <b>{@code owner}</b> stamp. Every cart the BFF creates carries
 * the participant's identity in the {@code owner} Custom Field of the {@code order-extras} Type, so a
 * participant's API Extension can be scoped — by a conditional trigger — to their own carts only
 * (task 7.6). The Type is seeded before Session 7; before that it does not exist, so this stamp is
 * <b>graceful when absent</b>: {@link #typeExists()} is checked (and cached for a minute) and the cart
 * module simply creates carts without custom fields until the seeder has run.
 */
@Component
public class OwnerStamp {

    private static final Logger log = LoggerFactory.getLogger(OwnerStamp.class);

    /** The seeded Type on {@code order} resources (covers carts and orders). */
    public static final String TYPE_KEY = "order-extras";
    public static final String OWNER_FIELD = "owner";
    public static final String GIFT_MESSAGE_FIELD = "giftMessage";
    public static final String WHITE_GLOVE_FIELD = "requiresWhiteGlove";

    private static final Duration RECHECK = Duration.ofSeconds(60);

    private final ProjectApiRoot apiRoot;
    private final ParticipantIdentity identity;

    private volatile Boolean exists;
    private volatile Instant checkedAt = Instant.EPOCH;

    public OwnerStamp(ProjectApiRoot apiRoot, ParticipantIdentity identity) {
        this.apiRoot = apiRoot;
        this.identity = identity;
    }

    /** The value stamped into {@code owner} — the participant key. */
    public String owner() {
        return identity.id();
    }

    public String typeKey() {
        return TYPE_KEY;
    }

    /** Whether the {@code order-extras} Type exists in the Project (cached; re-checked every minute). */
    public boolean typeExists() {
        Boolean known = exists;
        if (known != null && Instant.now().isBefore(checkedAt.plus(RECHECK))) {
            return known;
        }
        boolean found;
        try {
            apiRoot.types().withKey(TYPE_KEY).get().executeBlocking();
            found = true;
        } catch (NotFoundException e) {
            found = false;
        } catch (RuntimeException e) {
            log.warn("Could not check for Type '{}' (treating as absent): {}", TYPE_KEY, e.getMessage());
            found = false;
        }
        exists = found;
        checkedAt = Instant.now();
        return found;
    }
}
