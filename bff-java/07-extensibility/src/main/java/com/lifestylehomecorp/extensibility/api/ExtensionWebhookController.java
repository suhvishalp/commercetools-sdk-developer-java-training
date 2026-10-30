package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.application.CartRulesHandler;
import com.lifestylehomecorp.extensibility.domain.RuleResult;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 7.7 — the endpoint the <b>platform</b> calls before it saves a cart (registered in 7.6). Behind the shared-secret
 * and correlation filters. Answers exactly what the API Extensions contract allows: 200/201 (empty or
 * {@code { actions }}) or 400 {@code { errors }}; anything else fails the client's write.
 */
@RestController
public class ExtensionWebhookController {

    private final CartRulesHandler handler;

    public ExtensionWebhookController(CartRulesHandler handler) {
        this.handler = handler;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 7,
            title = "The Extension handler: cart rules", tier = "T2", capability = "ext.cartRules",
            description = "Implement CartRulesHandler.apply(cart, config): the platform calls POST /api/extensions/cart BEFORE it "
                    + "saves a cart. Read the cart from input.resource.obj (never from the API — old version, and a network call "
                    + "inside your budget). Validate: any line over maxQuantityPerLine → 400 { errors:[{ code:'InvalidInput', "
                    + "message, localizedMessage }] } — the client's update fails with YOUR message, in Merchant Center too. "
                    + "Enrich: a line at or above whiteGloveThresholdCents → 200 { actions:[ setCustomField requiresWhiteGlove=true ] }, "
                    + "and clear it when no line qualifies — return actions ONLY for the delta so repeated Updates are idempotent. "
                    + "Thresholds come from the cached feature flags (7.2); stay under ~50 ms. Then kill the tunnel: the "
                    + "shopper's add-to-cart fails with 502 ExtensionBadResponse — the cost, felt.",
            hint = "Docs: API Extensions — Input, Response (validation failed / updates requested), Error, Time limits; "
                    + "tutorial 'Implement an API Extension' (docs.commercetools.com/guides/extensions).",
            decisions = {
                    "Validate vs enrich per rule — reject the 11th unit (the client learns) or clamp it silently (dangerous).",
                    "Where each rule lives — BFF only (storefront is the sole writer), Extension (others write), or both.",
                    "The time budget — cache TTL for the thresholds; fail open with defaults or fail closed when config is unreadable.",
                    "Failure posture — an Extension outage is a cart outage; which of your rules is worth that."
            })
    @PostMapping(value = "/api/extensions/cart", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> cart(@RequestBody String input) {
        RuleResult result = handler.handle(input);
        ResponseEntity.BodyBuilder response = ResponseEntity.status(result.status());
        if (result.jsonBody() == null || result.jsonBody().isBlank()) {
            return response.build();
        }
        return response.contentType(MediaType.APPLICATION_JSON).body(result.jsonBody());
    }
}
