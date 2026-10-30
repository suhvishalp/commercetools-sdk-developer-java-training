package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.application.ExtensionRegistrationService;
import com.lifestylehomecorp.extensibility.domain.ExtensionRegistration;
import com.lifestylehomecorp.extensibility.domain.IntakeStatus;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

/**
 * 7.6 the Extension registration · the pre-built intake status. (Subscriptions and the mechanism decision are
 * concept slides in Commerce Canvas, not endpoints.)
 * All trainer / participant-side: none of these is called by the storefront.
 */
@RestController
public class ExtensibilityController {

    private final ExtensionRegistrationService registration;

    public ExtensibilityController(ExtensionRegistrationService registration) {
        this.registration = registration;
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
