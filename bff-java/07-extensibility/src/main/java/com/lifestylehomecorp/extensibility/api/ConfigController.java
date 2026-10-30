package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.application.FeatureFlagService;
import com.lifestylehomecorp.extensibility.domain.ConfigDocument;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/** 7.2 — the feature-flag Custom Object: ops config with no deploy. */
@RestController
public class ConfigController {

    private final FeatureFlagService flags;

    public ConfigController(FeatureFlagService flags) {
        this.flags = flags;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 2,
            title = "Custom Objects: the feature-flag kill switch", tier = "T1", capability = "ext.customObjects",
            description = "Implement CustomObjectRepository.get(container, key) and upsert(container, key, version, value) in "
                    + "the extensibility module's infrastructure layer — customObjects().withContainerAndKey(c, k).get() "
                    + "(a 404 = empty) and customObjects().post(CustomObjectDraft{ container, key, value, version }) — "
                    + "POST is create-OR-update by container + key; the optional version makes a stale write a 409. The "
                    + "document is lhc-config / feature-flags: { subscriptionsEnabled, maxQuantityPerLine, "
                    + "whiteGloveThresholdCents, whiteGloveFeeCents }. The storefront PDP reads subscriptionsEnabled and "
                    + "hides Subscribe & Save when false; the 7.7 Extension reads the thresholds (cached). GET / PUT "
                    + "/api/config/feature-flags — flip it in Canvas, refresh the PDP: no deploy.",
            hint = "Docs: Custom Objects — Create or Update CustomObject, Get by Container and Key "
                    + "(docs.commercetools.com/api/projects/custom-objects).")
    @GetMapping("/api/config/feature-flags")
    public ConfigDocument get() {
        return flags.get();
    }

    /** Merge-patch: send only the flags you want to change. */
    @PutMapping("/api/config/feature-flags")
    public ConfigDocument update(@RequestBody Map<String, Object> patch) {
        return flags.update(patch);
    }
}
