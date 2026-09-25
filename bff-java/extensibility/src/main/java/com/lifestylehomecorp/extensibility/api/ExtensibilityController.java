package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.application.ExtensibilityDecisions;
import com.lifestylehomecorp.extensibility.application.ExtensionRegistrationService;
import com.lifestylehomecorp.extensibility.domain.DecisionRow;
import com.lifestylehomecorp.extensibility.domain.ExtensionRegistration;
import com.lifestylehomecorp.extensibility.domain.IntakeStatus;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 7.5 the Subscription concept · 7.6 the Extension registration · 7.9 the decision · the pre-built intake status.
 * All trainer / participant-side: none of these is called by the storefront.
 */
@RestController
public class ExtensibilityController {

    private final ExtensionRegistrationService registration;
    private final ExtensibilityDecisions decisions;

    public ExtensibilityController(ExtensionRegistrationService registration, ExtensibilityDecisions decisions) {
        this.registration = registration;
        this.decisions = decisions;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 5,
            title = "Subscriptions: the delivery we can't provision here", tier = "T1", capability = "ext.subscriptionConcept",
            description = "Pre-built — a concept walkthrough, no code. GET /api/extensibility/subscription-concept shows the "
                    + "SubscriptionDraft we would send: destination = a cloud queue (SQS · SNS · EventBridge · Azure Service Bus · "
                    + "Event Grid · Google Pub/Sub · Confluent — there is NO HTTP destination, unlike an API Extension) and "
                    + "messages = the order Message types the timeline (7.3) already reads. Registering it needs a queue AND "
                    + "credentials the platform can publish with — a cloud account nobody in this room has. Delivery is "
                    + "at-least-once and unordered: exactly the dedupe + per-resource ordering 7.4 implements. Connect provisions "
                    + "the queue for you — that is Session 8's Event application.",
            hint = "Docs: Subscriptions — Destination types, Delivery, MessageSubscription "
                    + "(docs.commercetools.com/api/projects/subscriptions).")
    @GetMapping("/api/extensibility/subscription-concept")
    public Map<String, Object> subscriptionConcept() {
        return decisions.subscriptionConcept();
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 6,
            title = "Register an API Extension", tier = "T1", capability = "ext.extension",
            description = "Implement ExtensionRepository.create(ExtensionDraft) in the extensibility module's infrastructure "
                    + "layer — extensions().post(draft). The service builds the draft: key lhc-cart-rules-<you>, HTTP destination "
                    + "= EXTENSION_PUBLIC_URL + /api/extensions/cart with AuthorizationHeader = EXTENSION_SECRET, trigger cart · "
                    + "[Create, Update] with the CONDITION custom is defined and custom(fields(owner is defined)) and custom(fields(owner = \"<you>\")) — guard `custom` itself, or a cart without custom fields fails the whole API call, "
                    + "timeoutInMs 2000. The condition is not optional: an Extension fires for EVERY client of the shared Project "
                    + "(Merchant Center included) — without it everyone's cart writes would call everyone's laptop. Changes take "
                    + "up to a minute to apply. POST / GET / DELETE /api/extensibility/extension.",
            hint = "Docs: API Extensions — Create Extension, ExtensionTrigger.condition (conditional triggers), "
                    + "HTTP destination authentication, time limits (docs.commercetools.com/api/projects/api-extensions).")
    @PostMapping("/api/extensibility/extension")
    public ExtensionRegistration register() {
        return registration.register();
    }

    @GetMapping("/api/extensibility/extension")
    public ExtensionRegistration current() {
        return registration.current().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                "No Extension registered under " + registration.key() + " — POST /api/extensibility/extension."));
    }

    /** Clean up at the end of the day — an Extension that points at a dead tunnel fails your cart writes. */
    @DeleteMapping("/api/extensibility/extension")
    public Map<String, Object> remove() {
        boolean removed = registration.remove();
        return Map.of("removed", removed, "key", registration.key());
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 9,
            title = "Which mechanism? The extensibility decision", tier = "T2", capability = "ext.decision",
            description = "Implement ExtensibilityDecisions.table(): five LHC requirements — gift message on the order · "
                    + "ops-editable checkout rules · max 10 per line on every channel incl. Merchant Center · nightly ERP price "
                    + "feed · order confirmation e-mail — each mapped to the mechanism that serves it (Custom Field · Custom Object "
                    + "· API Extension · Import API · Subscription → Session 8), with the reason, the task that built it, and the "
                    + "wrong choice it avoids. Ask in this order: sync vs async? can the BFF do it before the call (the default)? "
                    + "who else writes? cost of being wrong? GET /api/extensibility/decisions.",
            hint = "Docs: Extensibility overview; Integration patterns — choosing between API Extensions, Subscriptions and "
                    + "the Import API (docs.commercetools.com/learning-integrate-with-commercetools/integration-patterns/overview).",
            decisions = {
                    "Sync vs async first — must it happen BEFORE the write persists? Only then an Extension.",
                    "Can the BFF do it before the call? Then do it there — an Extension is the exception, not the rule.",
                    "Who else writes? Merchant Center, imports, a Connect app → the rule must live in the platform.",
                    "Cost of being wrong — a slow Extension degrades every client; a lost Message is redelivered; a bad import row is one line."
            })
    @GetMapping("/api/extensibility/decisions")
    public Map<String, Object> decisionTable() {
        Map<String, Object> out = new LinkedHashMap<>();
        out.put("askInThisOrder", decisions.questions());
        List<DecisionRow> rows = decisions.table();
        out.put("rows", rows);
        out.put("theOneWeCouldNotFinishAlone", "Order confirmation e-mail — a Subscription needs a queue; Session 8's Connect Event app provisions it.");
        return out;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 10,
            title = "Pre-built — the intake plumbing", tier = "T1", capability = "ext.intake",
            description = "Pre-built — study it. What makes a laptop reachable and safe for the platform to call: the tunnel URL "
                    + "(EXTENSION_PUBLIC_URL), the shared-secret filter on /api/extensions/** (a wrong secret is a 401 — and any "
                    + "non-200/400 status fails the client's write, loudly), the X-Correlation-ID the platform sends captured "
                    + "into the log context and echoed back, the `owner` stamp the cart module adds to every new cart when the "
                    + "order-extras Type exists, and the 60-second config cache 7.7 reads from. Session 8 replaces the tunnel "
                    + "with a deployed Connect Service app; nothing else changes. GET /api/extensibility/intake.",
            hint = "Docs: API Extensions — Request headers for API Extensions (X-Correlation-ID), Response, Error cases; "
                    + "tutorial 'Implement an API Extension' → Tracing requests with correlation IDs.")
    @GetMapping("/api/extensibility/intake")
    public IntakeStatus intake() {
        return registration.intake();
    }
}
