package com.lifestylehomecorp.customer.domain;

/**
 * Result of sign-up / sign-in: who you are now, which cart is active, what happened to the guest basket,
 * and a one-line {@code note} that says WHY the cart is what it is — a null {@code activeCartId} has
 * three very different causes (no guest basket in this session, the session was already signed in as
 * someone else, the BFF was restarted) and the demo should not have to guess.
 */
public record SignInOutcome(
        CustomerProfile customer,
        String activeCartId,
        int cartItemCount,
        MergeReport mergeReport,
        String note) {
}
