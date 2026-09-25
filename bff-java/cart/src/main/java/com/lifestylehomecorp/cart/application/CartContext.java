package com.lifestylehomecorp.cart.application;

/**
 * Inputs for creating a cart (4.1): the price-selection currency + country, the store scope, and WHO the
 * cart belongs to. SDK-free — the repository turns this into a {@code CartDraft}.
 *
 * <p>Exactly one of {@code customerId} / {@code anonymousId} should be set. A cart carries one identity:
 * a signed-in shopper's cart is keyed by customer, a guest's by anonymousId. Creating a signed-in
 * shopper's cart as anonymous leaves it unattached — and Session 6's readiness check then, correctly,
 * refuses to let an order be placed for nobody.
 */
public record CartContext(String currency, String country, String storeKey, String anonymousId, String customerId) {

    /** A guest cart. */
    public static CartContext guest(String currency, String country, String storeKey, String anonymousId) {
        return new CartContext(currency, country, storeKey, anonymousId, null);
    }

    /** A signed-in shopper's cart. */
    public static CartContext forCustomer(String currency, String country, String storeKey, String customerId) {
        return new CartContext(currency, country, storeKey, null, customerId);
    }
}
