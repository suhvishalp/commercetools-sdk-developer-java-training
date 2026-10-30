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
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

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
        // TODO (Task 4.1): POST a CartDraft — currency + country + anonymousId + inventoryMode, and the
        // store when ctx.storeKey() is set — and return the raw SDK Cart. The service stores the id on
        // the session and maps it. Goal + hint in the @TaskDescription; see session-tasks-detailed.md.
        throw new TaskNotImplementedException("4.1");
    }

    @Override
    public Cart get(String storeKey, String cartId) {
        return apiRoot.inStore(storeKey).carts().withId(cartId).get()
                .withExpand(EXPAND_DISCOUNT_CODES)
                .addExpand(EXPAND_RECURRENCE)
                .addExpand(EXPAND_DISTRIBUTION_CHANNEL)
                .addExpand(EXPAND_SUPPLY_CHANNEL)
                .executeBlocking().getBody();
    }

    @Override
    public Cart update(String storeKey, String cartId, Long version, List<CartUpdateAction> actions) {
        // TODO (Task 4.2): POST a CartUpdate carrying the cart's current version + the list of update
        // actions, returning the raw SDK Cart. The service composes the actions and owns version +
        // 409-retry. Goal + hint in the @TaskDescription; see session-tasks-detailed.md.
        throw new TaskNotImplementedException("4.2");
    }

    @Override
    public Cart addDiscountCode(String storeKey, String cartId, Long version, String code) {
        return apiRoot.inStore(storeKey).carts().withId(cartId)
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
    public List<Cart> findActiveCartsOfCustomer(String storeKey, String customerId) {
        return apiRoot.inStore(storeKey).carts().get()
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
    public List<Cart> findActiveCartsOfGuest(String storeKey, String anonymousId) {
        return apiRoot.inStore(storeKey).carts().get()
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
    public Cart removeDiscountCode(String storeKey, String cartId, Long version, String discountCodeId) {
        return apiRoot.inStore(storeKey).carts().withId(cartId)
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
