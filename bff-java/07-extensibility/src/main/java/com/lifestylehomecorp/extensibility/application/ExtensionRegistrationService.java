package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.extension.AuthorizationHeaderAuthenticationBuilder;
import com.commercetools.api.models.extension.Extension;
import com.commercetools.api.models.extension.ExtensionAction;
import com.commercetools.api.models.extension.ExtensionDraft;
import com.commercetools.api.models.extension.ExtensionChangeDestinationActionBuilder;
import com.commercetools.api.models.extension.ExtensionChangeTriggersActionBuilder;
import com.commercetools.api.models.extension.ExtensionDraftBuilder;
import com.commercetools.api.models.extension.ExtensionSetTimeoutInMsActionBuilder;
import com.commercetools.api.models.extension.ExtensionUpdateAction;
import com.commercetools.api.models.extension.ExtensionResourceTypeId;
import com.commercetools.api.models.extension.ExtensionTriggerBuilder;
import com.commercetools.api.models.extension.HttpDestination;
import com.commercetools.api.models.extension.HttpDestinationBuilder;
import com.lifestylehomecorp.extensibility.config.ExtensibilityProperties;
import com.lifestylehomecorp.extensibility.domain.ExtensionRegistration;
import com.lifestylehomecorp.extensibility.domain.IntakeStatus;
import com.lifestylehomecorp.platform.identity.OwnerStamp;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

/**
 * 7.6 — registers <b>this participant's</b> API Extension: HTTP destination = the tunnel + {@code /api/extensions/cart},
 * authenticated with the shared secret, triggered on cart Create/Update <b>only when the cart's {@code owner}
 * is this participant</b>. The condition is not optional on a shared Project: an Extension fires for every
 * client of the Project (Merchant Center included) — without it, everyone's cart writes would call everyone's
 * laptop. {@code is defined} guards the optional field so a cart without custom fields cannot fail the call.
 */
@Service
public class ExtensionRegistrationService {

    public static final String WEBHOOK_PATH = "/api/extensions/cart";

    private final ExtensionRepository extensions;
    private final ExtensibilityProperties props;
    private final OwnerStamp ownerStamp;

    public ExtensionRegistrationService(ExtensionRepository extensions, ExtensibilityProperties props, OwnerStamp ownerStamp) {
        this.extensions = extensions;
        this.props = props;
        this.ownerStamp = ownerStamp;
    }

    public String key() {
        return "lhc-cart-rules-" + ownerStamp.owner();
    }

    /**
     * Fire only on THIS participant's carts — and, just as importantly, never break anyone else's.
     *
     * <p>A conditional trigger has three outcomes, not two: true (called), false (skipped), and
     * <b>cannot be evaluated — which fails the whole API call</b>. Descending into an optional field
     * that is absent is exactly that third case, so a predicate written as
     * {@code custom(fields(owner is defined))} blows up on every cart that has no {@code custom} at all:
     * 400 ExtensionPredicateEvaluationFailed. On a shared training project that means one participant's
     * Extension stops the whole room — and the seeder — from creating carts.
     *
     * <p>So guard every optional hop on the way down, outermost first: {@code custom} may be absent, and
     * only once it exists may we ask about {@code fields(owner)}.
     */
    public String condition() {
        String owner = ownerStamp.owner().replace("\"", "\\\"");
        return "custom is defined"
                + " and custom(fields(" + OwnerStamp.OWNER_FIELD + " is defined))"
                + " and custom(fields(" + OwnerStamp.OWNER_FIELD + " = \"" + owner + "\"))";
    }

    public ExtensionDraft draft() {
        if (!props.hasPublicUrl()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "EXTENSION_PUBLIC_URL is not set — start a tunnel (cloudflared tunnel --url http://localhost:8081), "
                            + "put its https URL in .env and restart the BFF.");
        }
        HttpDestinationBuilder destination = HttpDestinationBuilder.of()
                .url(props.getPublicUrl() + WEBHOOK_PATH);
        if (props.hasSecret()) {
            destination.authentication(AuthorizationHeaderAuthenticationBuilder.of()
                    .headerValue(props.getSecret()).build());
        }
        return ExtensionDraftBuilder.of()
                .key(key())
                .destination(destination.build())
                .triggers(List.of(ExtensionTriggerBuilder.of()
                        .resourceTypeId(ExtensionResourceTypeId.CART)
                        .actions(ExtensionAction.CREATE, ExtensionAction.UPDATE)
                        .condition(condition())
                        .build()))
                .timeoutInMs(props.getTimeoutMs())
                .build();
    }

    /**
     * Register, idempotently. Idempotent means <b>converge to the declared state</b>, not "do nothing if
     * something is already there": the tunnel URL changes every time a quick tunnel restarts, so returning
     * the stale registration unchanged would leave every cart write in the project going to a dead host —
     * and the Extension fails closed, so the whole project stops taking carts.
     *
     * <p>Get-then-update, never delete-then-recreate: a delete/create pair opens a window on every call in
     * which the Extension does not exist and carts silently skip the rules. This is the same shape the
     * Session 8 Connect service uses in its {@code postDeploy}.
     */
    public ExtensionRegistration register() {
        ExtensionDraft draft = draft();
        Optional<Extension> existing = extensions.findByKey(key());
        if (existing.isEmpty()) {
            return project(extensions.create(draft));
        }
        Extension current = existing.get();
        List<ExtensionUpdateAction> actions = List.of(
                ExtensionChangeDestinationActionBuilder.of().destination(draft.getDestination()).build(),
                ExtensionChangeTriggersActionBuilder.of().triggers(draft.getTriggers()).build(),
                ExtensionSetTimeoutInMsActionBuilder.of().timeoutInMs(draft.getTimeoutInMs()).build());
        return project(extensions.update(current.getKey(), current.getVersion(), actions));
    }

    public Optional<ExtensionRegistration> current() {
        return extensions.findByKey(key()).map(ExtensionRegistrationService::project);
    }

    public boolean remove() {
        Optional<Extension> existing = extensions.findByKey(key());
        existing.ifPresent(e -> extensions.delete(e.getKey(), e.getVersion()));
        return existing.isPresent();
    }

    public IntakeStatus intake() {
        String webhook = props.hasPublicUrl() ? props.getPublicUrl() + WEBHOOK_PATH : null;
        String note = !props.hasPublicUrl()
                ? "No public URL: start `cloudflared tunnel --url http://localhost:8081`, set EXTENSION_PUBLIC_URL, restart."
                : !props.hasSecret()
                ? "No EXTENSION_SECRET: the webhook accepts unauthenticated calls (dev only)."
                : !ownerStamp.typeExists()
                ? "Type `order-extras` not found: run the Session 7 seeder folder — carts are not stamped with an owner yet."
                : "Ready: the platform can reach this BFF, calls are authenticated, carts carry your owner stamp.";
        return new IntakeStatus(props.hasPublicUrl() ? props.getPublicUrl() : null, webhook, props.hasSecret(),
                props.getTimeoutMs(), ownerStamp.owner(), ownerStamp.typeKey(), ownerStamp.typeExists(),
                props.getBffBaseUrl(), note);
    }

    static ExtensionRegistration project(Extension e) {
        String url = e.getDestination() instanceof HttpDestination h ? h.getUrl() : e.getDestination().getType();
        boolean authenticated = e.getDestination() instanceof HttpDestination h && h.getAuthentication() != null;
        List<ExtensionRegistration.Trigger> triggers = e.getTriggers() == null ? List.of() : e.getTriggers().stream()
                .map(t -> new ExtensionRegistration.Trigger(
                        t.getResourceTypeId() == null ? null : t.getResourceTypeId().getJsonName(),
                        t.getActions() == null ? List.of() : t.getActions().stream().map(ExtensionAction::getJsonName).toList(),
                        t.getCondition()))
                .toList();
        return new ExtensionRegistration(e.getId(), e.getKey(), e.getVersion(), url, authenticated, triggers,
                e.getTimeoutInMs(), e.getCreatedAt() == null ? null : e.getCreatedAt().toString());
    }
}
