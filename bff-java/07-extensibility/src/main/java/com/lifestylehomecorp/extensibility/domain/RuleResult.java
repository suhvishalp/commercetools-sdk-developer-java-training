package com.lifestylehomecorp.extensibility.domain;

/**
 * 7.7 — what the cart-rules handler answers the platform: {@code 400} with {@code { errors }} (validation
 * failed — the client's write fails with our message), or {@code 200} with {@code { actions }} / an empty body
 * (approved, optionally enriched). The body is already JSON (built with the SDK's serializer in the
 * application layer) so the api layer stays SDK-free.
 */
public record RuleResult(int status, String jsonBody, String summary) {

    public static RuleResult approved(String summary) {
        return new RuleResult(200, "", summary);
    }

    public static RuleResult updates(String actionsJson, String summary) {
        return new RuleResult(200, actionsJson, summary);
    }

    public static RuleResult rejected(String errorsJson, String summary) {
        return new RuleResult(400, errorsJson, summary);
    }
}
