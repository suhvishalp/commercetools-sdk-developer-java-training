package com.lifestylehomecorp.cart.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartAddDiscountCodeActionBuilder;
import com.commercetools.api.models.cart.CartDraftBuilder;
import com.commercetools.api.models.cart.CartRemoveDiscountCodeActionBuilder;
import com.commercetools.api.models.cart.CartUpdateAction;
import com.commercetools.api.models.cart.CartUpdateBuilder;
import com.commercetools.api.models.cart.InventoryMode;
import com.commercetools.api.models.type.CustomFieldsDraftBuilder;
import com.commercetools.api.models.type.FieldContainerBuilder;
import com.lifestylehomecorp.cart.application.CartContext;
import com.lifestylehomecorp.cart.application.CartRepository;
import com.lifestylehomecorp.platform.identity.OwnerStamp;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * SDK gateway for the Cart write model — the ONE place SDK code is written for Session 4. Each method
 * is a single commercetools call returning the raw {@link Cart}; the {@link com.lifestylehomecorp.cart.application.CartService}
 * owns version + 409-retry and maps to the domain.
 */
@Repository
public class CtCartRepository implements CartRepository {

    /** Expand the applied discount codes so the summary can show the human code (e.g. "SAVE10"). */
    private static final String EXPAND_DISCOUNT_CODES = "discountCodes[*].discountCode";
    /** Expand each recurring line's policy so the summary can show its frequency (e.g. "Every month"). */
    private static final String EXPAND_RECURRENCE = "lineItems[*].recurrenceInfo.recurrencePolicy";
    /**
     * Expand each line's channels so the summary can SAY which channel priced it / sources it (4.5): the
     * platform stores a bare reference (id); the key the storefront and Canvas work with needs the expansion.
     */
    private static final String EXPAND_DISTRIBUTION_CHANNEL = "lineItems[*].distributionChannel";
    private static final String EXPAND_SUPPLY_CHANNEL = "lineItems[*].supplyChannel";

    private final ProjectApiRoot apiRoot;
    private final OwnerStamp ownerStamp;

    public CtCartRepository(ProjectApiRoot apiRoot, OwnerStamp ownerStamp) {
        this.apiRoot = apiRoot;
        this.ownerStamp = ownerStamp;
    }

    @Override
    public Cart create(CartContext ctx) {
        CartDraftBuilder draft = CartDraftBuilder.of()
                .currency(ctx.currency())
                .country(ctx.country())
                .inventoryMode(InventoryMode.NONE);
        // One identity per cart: the customer's, or the guest's — never both, never neither.
        if (ctx.customerId() != null) {
            draft.customerId(ctx.customerId());
        } else {
            draft.anonymousId(ctx.anonymousId());
        }
        if (ctx.storeKey() != null && !ctx.storeKey().isBlank()) {
            draft.store(sr -> sr.key(ctx.storeKey()));
        }
        // Session 7 plumbing: stamp the participant as `owner` (Type order-extras) so their API Extension's
        // conditional trigger fires only on THEIR carts. Skipped until the Type is seeded — the cart still works.
        if (ownerStamp.typeExists()) {
            draft.custom(CustomFieldsDraftBuilder.of()
                    .type(t -> t.key(ownerStamp.typeKey()))
                    .fields(FieldContainerBuilder.of().addValue(OwnerStamp.OWNER_FIELD, ownerStamp.owner()).build())
                    .build());
        }
        return apiRoot.carts().post(draft.build()).executeBlocking().getBody();
    }

    @Override
    public Cart get(String cartId) {
        return apiRoot.carts().withId(cartId).get()
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody();
    }

    @Override
    public Cart update(String cartId, Long version, List<CartUpdateAction> actions) {
        return apiRoot.carts().withId(cartId)
                .post(CartUpdateBuilder.of().version(version).actions(actions).build())
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody();
    }

    @Override
    public Cart addDiscountCode(String cartId, Long version, String code) {
        return apiRoot.carts().withId(cartId)
                .post(CartUpdateBuilder.of().version(version)
                        .actions(CartAddDiscountCodeActionBuilder.of().code(code).build())
                        .build())
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody();
    }

    /** 4.12 — a query predicate on the cart's identity + state, newest first (the platform's "active cart" rule). */
    @Override
    public List<Cart> findActiveCartsOfCustomer(String customerId) {
        return apiRoot.carts().get()
                .withWhere("customerId = :id and cartState = \"Active\"")
                .withPredicateVar("id", customerId)
                .withSort("lastModifiedAt desc")
                .withLimit(10)
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public List<Cart> findActiveCartsOfGuest(String anonymousId) {
        return apiRoot.carts().get()
                .withWhere("anonymousId = :id and cartState = \"Active\"")
                .withPredicateVar("id", anonymousId)
                .withSort("lastModifiedAt desc")
                .withLimit(10)
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public Cart removeDiscountCode(String cartId, Long version, String discountCodeId) {
        return apiRoot.carts().withId(cartId)
                .post(CartUpdateBuilder.of().version(version)
                        .actions(CartRemoveDiscountCodeActionBuilder.of()
                                .discountCode(dc -> dc.id(discountCodeId)).build())
                        .build())
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody();
    }
}
