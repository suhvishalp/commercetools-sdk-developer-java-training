package com.lifestylehomecorp.cart.domain;

import java.util.List;

/**
 * The storefront-facing cart, SDK-free — the shape returned by every cart endpoint (create, each
 * mutation, and GET /api/cart). Carries the money breakdown for the order summary (4.10):
 * subtotal, savings, shipping, tax, total; the delivery state (4.7 / 4.8): the shipping address and
 * the selected shipping method; and WHO the cart belongs to (S5): a customer (after sign-in / sign-up)
 * or a guest. {@code itemCount} counts a bundle as one (children excluded).
 */
public record CartSummary(
        String id,
        Long version,
        String currency,
        String country,
        /**
         * The store the cart was created in (part of its context like {@code currency}: fixed for the cart's
         * life — a store switch is a new cart), or null for a store-less cart.
         */
        String storeKey,
        List<CartLine> lines,
        int itemCount,
        Money subtotal,
        Money savings,
        Money shipping,
        Money tax,
        Money total,
        /** The selected shipping method's display name, or null when none is set yet. */
        String shippingMethod,
        /** The selected shipping method's id (matches {@link ShippingOption#id()}), or null. */
        String shippingMethodId,
        CartAddress shippingAddress,
        CartAddress billingAddress,
        /** The customer the cart belongs to (set at sign-in / sign-up), or null for a guest cart. */
        String customerId,
        /** The contact email: the customer's, or the guest's checkout email (setCustomerEmail). */
        String customerEmail,
        /** "customer" once a customer owns the cart, "guest" while it is anonymous, null when no cart. */
        String owner,
        List<String> discountCodes) {

    /** An empty cart (no cart created yet) — GET /api/cart never throws. */
    public static CartSummary empty() {
        return new CartSummary(null, null, null, null, null, List.of(), 0,
                null, null, null, null, null, null, null, null, null, null, null, null, List.of());
    }

    public boolean hasShippingAddress() {
        return shippingAddress != null && shippingAddress.country() != null;
    }
}
