package com.lifestylehomecorp.cart.api.dto;

import com.lifestylehomecorp.cart.api.CartViewMapper;
import com.lifestylehomecorp.cart.domain.ActiveCart;

/** GET /api/cart/active — the platform's view of the shopper's active cart, with the session check. */
public record ActiveCartView(
        String identity,
        String cartState,
        String sessionCartId,
        boolean sessionMatches,
        boolean sessionRepointed,
        int otherActiveCarts,
        String note,
        CartView cart) {

    public static ActiveCartView from(ActiveCart a) {
        return new ActiveCartView(a.identity(), a.cartState(), a.sessionCartId(), a.sessionMatches(),
                a.sessionRepointed(), a.otherActiveCarts(), a.note(), CartViewMapper.toView(a.cart()));
    }
}
