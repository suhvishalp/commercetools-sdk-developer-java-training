package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartReference;
import com.commercetools.api.models.cart.CartSetCustomFieldActionBuilder;
import com.commercetools.api.models.cart.CartSetCustomTypeActionBuilder;
import com.commercetools.api.models.cart.CartUpdateAction;
import com.commercetools.api.models.cart.LineItem;
import com.commercetools.api.models.extension.ExtensionInput;
import com.commercetools.api.models.type.FieldContainerBuilder;
import com.lifestylehomecorp.extensibility.domain.ConfigDocument;
import com.lifestylehomecorp.extensibility.domain.RuleResult;
import com.lifestylehomecorp.platform.identity.OwnerStamp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 7.7 — the cart rules the platform enforces <b>for every client</b>, Merchant Center included. Called by the
 * platform <em>before</em> it persists a cart; {@code input.resource.obj} is the cart <b>as it would be saved</b>
 * — never read it back from the API (old version, and a network call inside the time budget).
 *
 * <ul>
 *   <li><b>Validate:</b> any line over {@code maxQuantityPerLine} → {@code 400 { errors }} — the client's update
 *       fails with our message.</li>
 *   <li><b>Enrich:</b> a line at or above {@code whiteGloveThresholdCents} → {@code requiresWhiteGlove = true};
 *       none → cleared. Actions <b>only for the delta</b>, so every repeated Update is idempotent and an
 *       unchanged cart costs the platform nothing.</li>
 * </ul>
 * Thresholds come from the cached feature flags — no network call on the hot path; aim for ~50 ms.
 */
@Service
public class CartRulesHandler {

    private static final Logger log = LoggerFactory.getLogger(CartRulesHandler.class);

    private final FeatureFlagService flags;
    private final OwnerStamp ownerStamp;

    public CartRulesHandler(FeatureFlagService flags, OwnerStamp ownerStamp) {
        this.flags = flags;
        this.ownerStamp = ownerStamp;
    }

    /** Entry point for the webhook: raw JSON in, status + JSON body out. */
    public RuleResult handle(String inputJson) {
        long started = System.nanoTime();
        ExtensionInput input = Json.read(inputJson, ExtensionInput.class);
        Cart cart = input.getResource() instanceof CartReference ref ? ref.getObj() : null;
        RuleResult result = cart == null ? RuleResult.approved("no cart in input") : apply(cart, flags.cached());
        log.info("[extension] {} cart {} → {} ({}) in {} ms", input.getAction(),
                cart == null ? "?" : cart.getId(), result.status(), result.summary(),
                (System.nanoTime() - started) / 1_000_000);
        return result;
    }

    RuleResult apply(Cart cart, ConfigDocument cfg) {
        long maxQty = cfg.number(FeatureFlagService.MAX_QUANTITY_PER_LINE, 10);
        long threshold = cfg.number(FeatureFlagService.WHITE_GLOVE_THRESHOLD_CENTS, 40000);
        List<LineItem> lines = cart.getLineItems() == null ? List.of() : cart.getLineItems();

        // 1. Validate — reject, with one error per offending line.
        List<Map<String, Object>> errors = new ArrayList<>();
        for (LineItem li : lines) {
            if (li.getQuantity() != null && li.getQuantity() > maxQty) {
                String sku = li.getVariant() == null ? "?" : li.getVariant().getSku();
                Map<String, Object> err = new LinkedHashMap<>();
                err.put("code", "InvalidInput");
                err.put("message", "Max " + maxQty + " units per line (" + sku + " has " + li.getQuantity() + ").");
                err.put("localizedMessage", Map.of(
                        "en-US", "You can order at most " + maxQty + " of " + sku + " per line.",
                        "de-DE", "Pro Position sind höchstens " + maxQty + " Stück von " + sku + " möglich."));
                err.put("extensionExtraInfo", Map.of("sku", sku, "quantity", li.getQuantity(), "max", maxQty));
                errors.add(err);
            }
        }
        if (!errors.isEmpty()) {
            return RuleResult.rejected(Json.write(Map.of("errors", errors)),
                    errors.size() + " line(s) over " + maxQty);
        }

        // 2. Enrich — compute the desired end state, return only the delta.
        boolean needs = lines.stream().anyMatch(li -> li.getPrice() != null && li.getPrice().getValue() != null
                && li.getPrice().getValue().getCentAmount() != null && li.getPrice().getValue().getCentAmount() >= threshold);
        Map<String, Object> fields = CartExtrasService.existingFields(cart);
        boolean has = Boolean.TRUE.equals(fields.get(OwnerStamp.WHITE_GLOVE_FIELD));
        List<CartUpdateAction> actions = new ArrayList<>();
        if (needs && !has) {
            if (cart.getCustom() == null) {
                // The trigger condition requires `owner`, so this is a belt-and-braces path only.
                actions.add(CartSetCustomTypeActionBuilder.of()
                        .type(t -> t.key(ownerStamp.typeKey()))
                        .fields(FieldContainerBuilder.of()
                                .addValue(OwnerStamp.OWNER_FIELD, ownerStamp.owner())
                                .addValue(OwnerStamp.WHITE_GLOVE_FIELD, true).build())
                        .build());
            } else {
                actions.add(CartSetCustomFieldActionBuilder.of().name(OwnerStamp.WHITE_GLOVE_FIELD).value(true).build());
            }
        } else if (!needs && has) {
            actions.add(CartSetCustomFieldActionBuilder.of().name(OwnerStamp.WHITE_GLOVE_FIELD).value(null).build());
        }
        if (actions.isEmpty()) {
            return RuleResult.approved(needs ? "white glove already set" : "nothing to change");
        }
        return RuleResult.updates(Json.write(Map.of("actions", actions)),
                needs ? "white glove set (line ≥ " + threshold + ")" : "white glove cleared");
    }
}
