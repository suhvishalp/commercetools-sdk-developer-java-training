package com.lifestylehomecorp.cart.domain;

/**
 * The shopper's active cart as the PLATFORM sees it (4.12) — resolved by identity, not by the BFF's
 * session pointer: the most recently modified {@code Active} cart of the signed-in customer, or of the
 * guest's anonymousId. Says who owns it, whether the session pointer agrees, and how many other Active
 * carts that identity has ("one customer, many carts — only one active").
 *
 * @param identity        "customer" or "guest"
 * @param cart            the resolved cart (empty summary when the identity has no Active cart)
 * @param cartState       its cartState, or null
 * @param sessionCartId   the cart the BFF session points at (may be null, or stale)
 * @param sessionMatches  whether the session pointer and the platform agree
 * @param sessionRepointed true when the session had no cart and was pointed at the resolved one
 * @param otherActiveCarts how many further Active carts the identity has (older ones)
 * @param note            the outcome in plain words
 */
public record ActiveCart(
        String identity,
        CartSummary cart,
        String cartState,
        String sessionCartId,
        boolean sessionMatches,
        boolean sessionRepointed,
        int otherActiveCarts,
        String note) {
}
