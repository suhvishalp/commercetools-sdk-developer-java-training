package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartBuilder;
import com.commercetools.api.models.cart.LineItem;
import com.commercetools.api.models.cart.LineItemBuilder;
import com.commercetools.api.models.common.CentPrecisionMoneyBuilder;
import com.commercetools.api.models.common.PriceBuilder;
import com.commercetools.api.models.product.ProductVariantBuilder;
import com.commercetools.api.models.type.CustomFieldsBuilder;
import com.commercetools.api.models.type.FieldContainerBuilder;
import com.lifestylehomecorp.extensibility.domain.ConfigDocument;
import com.lifestylehomecorp.extensibility.domain.RuleResult;
import com.lifestylehomecorp.platform.identity.OwnerStamp;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * 7.7 — the cart rules as pure logic: validate → 400 with our message; enrich → actions only for the delta;
 * unchanged → nothing (no write amplification). No platform, no network.
 */
@Disabled("Task 7.7 - your acceptance test for CartRulesHandler.apply. Delete this @Disabled line and run it: red until you implement the handler, green when the validate/enrich/delta rules all hold.")
class CartRulesHandlerTest {

    private final ConfigDocument cfg = new ConfigDocument("lhc-config", "feature-flags", 1L,
            Map.of("maxQuantityPerLine", 10, "whiteGloveThresholdCents", 40000), true);

    private CartRulesHandler handler() {
        OwnerStamp stamp = mock(OwnerStamp.class);
        when(stamp.owner()).thenReturn("vishal_shah_api");
        when(stamp.typeKey()).thenReturn("order-extras");
        return new CartRulesHandler(mock(FeatureFlagService.class), stamp);
    }

    @Test
    void elevenUnitsIsRejectedWithOurMessage() {
        Cart cart = cart(List.of(line("CARM-023", 11, 49900)), Map.of("owner", "vishal_shah_api"));
        RuleResult r = handler().apply(cart, cfg);
        assertThat(r.status()).isEqualTo(400);
        assertThat(r.jsonBody()).contains("\"code\":\"InvalidInput\"").contains("Max 10 units per line (CARM-023 has 11)");
    }

    @Test
    void expensiveLineSetsWhiteGlove() {
        Cart cart = cart(List.of(line("CARM-023", 1, 49900)), Map.of("owner", "vishal_shah_api"));
        RuleResult r = handler().apply(cart, cfg);
        assertThat(r.status()).isEqualTo(200);
        assertThat(r.jsonBody()).contains("\"action\":\"setCustomField\"").contains("\"name\":\"requiresWhiteGlove\"").contains("\"value\":true");
    }

    @Test
    void alreadyFlaggedCartGetsNoActions() {
        Cart cart = cart(List.of(line("CARM-023", 1, 49900)), Map.of("owner", "vishal_shah_api", "requiresWhiteGlove", true));
        RuleResult r = handler().apply(cart, cfg);
        assertThat(r.status()).isEqualTo(200);
        assertThat(r.jsonBody()).isEmpty();
    }

    @Test
    void flagIsClearedWhenNoLineQualifies() {
        Cart cart = cart(List.of(line("LPC-011", 2, 2599)), Map.of("owner", "vishal_shah_api", "requiresWhiteGlove", true));
        RuleResult r = handler().apply(cart, cfg);
        assertThat(r.status()).isEqualTo(200);
        // setCustomField WITHOUT a value is the platform's "remove this field" — the SDK omits the null.
        assertThat(r.jsonBody()).contains("\"action\":\"setCustomField\"").contains("\"name\":\"requiresWhiteGlove\"")
                .doesNotContain("\"value\":true");
    }

    @Test
    void cheapCartWithoutFlagIsApprovedSilently() {
        Cart cart = cart(List.of(line("LPC-011", 2, 2599)), Map.of("owner", "vishal_shah_api"));
        RuleResult r = handler().apply(cart, cfg);
        assertThat(r.status()).isEqualTo(200);
        assertThat(r.jsonBody()).isEmpty();
    }

    @Test
    void cartWithoutCustomTypeGetsSetCustomTypeWithOwner() {
        Cart cart = cart(List.of(line("CARM-023", 1, 49900)), null);
        RuleResult r = handler().apply(cart, cfg);
        assertThat(r.jsonBody()).contains("\"action\":\"setCustomType\"").contains("\"owner\":\"vishal_shah_api\"");
    }

    // ---- fixtures -------------------------------------------------------------------------------

    private static LineItem line(String sku, long qty, long centAmount) {
        return LineItemBuilder.of()
                .id("li-" + sku).productId("p")
                .variant(ProductVariantBuilder.of().id(1L).sku(sku).buildUnchecked())
                .price(PriceBuilder.of().id("pr").value(CentPrecisionMoneyBuilder.of()
                        .currencyCode("EUR").centAmount(centAmount).fractionDigits(2).build()).buildUnchecked())
                .quantity(qty)
                .buildUnchecked();
    }

    private static Cart cart(List<LineItem> lines, Map<String, Object> customFields) {
        CartBuilder b = CartBuilder.of().id("cart-1").version(3L).lineItems(lines);
        if (customFields != null) {
            b.custom(CustomFieldsBuilder.of()
                    .type(t -> t.id("type-1"))
                    .fields(FieldContainerBuilder.of().values(customFields).build())
                    .build());
        }
        return b.buildUnchecked();
    }
}
