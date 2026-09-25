package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.custom_object.CustomObject;
import com.lifestylehomecorp.extensibility.config.ExtensibilityProperties;
import com.lifestylehomecorp.extensibility.domain.ConfigDocument;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

/**
 * 7.2 — the feature-flag Custom Object {@code lhc-config / feature-flags}: ops config the storefront and the
 * cart-rules Extension obey with no deploy. {@link #update} <b>merges</b> a patch into the current value and
 * writes it back with the current {@code version} (a concurrent edit is a 409 — Session 4's rule on a seventh
 * resource). {@link #cached()} serves the 7.7 handler inside its time budget: no network call on the hot path.
 */
@Service
public class FeatureFlagService {

    public static final String CONTAINER = "lhc-config";
    public static final String KEY = "feature-flags";

    public static final String SUBSCRIPTIONS_ENABLED = "subscriptionsEnabled";
    public static final String MAX_QUANTITY_PER_LINE = "maxQuantityPerLine";
    public static final String WHITE_GLOVE_THRESHOLD_CENTS = "whiteGloveThresholdCents";
    public static final String WHITE_GLOVE_FEE_CENTS = "whiteGloveFeeCents";

    private final CustomObjectRepository customObjects;
    private final Duration cacheTtl;

    private volatile ConfigDocument cachedDoc;
    private volatile Instant cachedAt = Instant.EPOCH;

    public FeatureFlagService(CustomObjectRepository customObjects, ExtensibilityProperties props) {
        this.customObjects = customObjects;
        this.cacheTtl = Duration.ofSeconds(Math.max(1, props.getConfigCacheSeconds()));
    }

    /** The defaults the module assumes until ops saves something — and the shape the seeder writes. */
    public static Map<String, Object> defaults() {
        Map<String, Object> d = new LinkedHashMap<>();
        d.put(SUBSCRIPTIONS_ENABLED, true);
        d.put(MAX_QUANTITY_PER_LINE, 10);
        d.put(WHITE_GLOVE_THRESHOLD_CENTS, 40000);
        d.put(WHITE_GLOVE_FEE_CENTS, 4900);
        return d;
    }

    /** Fresh from the platform — what the config screen (Canvas) shows. */
    public ConfigDocument get() {
        Optional<CustomObject> co = customObjects.get(CONTAINER, KEY);
        ConfigDocument doc = co.map(FeatureFlagService::project)
                .orElseGet(() -> new ConfigDocument(CONTAINER, KEY, null, defaults(), false));
        cachedDoc = doc;
        cachedAt = Instant.now();
        return doc;
    }

    /** Merge the patch into the current value and save with its version. Evicts the handler's cache. */
    public ConfigDocument update(Map<String, Object> patch) {
        if (patch == null || patch.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Send a JSON object with the flags to change.");
        }
        ConfigDocument current = get();
        Map<String, Object> merged = new LinkedHashMap<>(current.value());
        merged.putAll(patch);
        CustomObject saved = customObjects.upsert(CONTAINER, KEY, current.persisted() ? current.version() : null, merged);
        ConfigDocument doc = project(saved);
        cachedDoc = doc;
        cachedAt = Instant.now();
        return doc;
    }

    /** The handler's view: served from a short cache; falls back to defaults if the read fails (fail open). */
    public ConfigDocument cached() {
        ConfigDocument doc = cachedDoc;
        if (doc != null && Instant.now().isBefore(cachedAt.plus(cacheTtl))) {
            return doc;
        }
        try {
            return get();
        } catch (RuntimeException e) {
            return doc != null ? doc : new ConfigDocument(CONTAINER, KEY, null, defaults(), false);
        }
    }

    static ConfigDocument project(CustomObject co) {
        return new ConfigDocument(co.getContainer(), co.getKey(), co.getVersion(), Json.asMap(co.getValue()), true);
    }
}
