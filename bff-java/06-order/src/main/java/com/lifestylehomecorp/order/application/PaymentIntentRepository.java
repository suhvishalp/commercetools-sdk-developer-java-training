package com.lifestylehomecorp.order.application;

/**
 * The commercetools Checkout <b>Payment Intents API</b> gateway (implemented in infrastructure) — the
 * only correct way to act on a Payment that Checkout created: Checkout asks the connector → the PSP, then
 * writes the resulting Transaction to the ledger. Needs the {@code manage_checkout_payment_intents} scope.
 */
public interface PaymentIntentRepository {

    /** 6.6 — capture (all or part of) an authorized payment → a Charge Transaction. Returns the HTTP outcome. */
    String capture(String paymentId, long centAmount, String currencyCode, String merchantReference);

    /** Homework / 6.7 cancel — void the authorization before capture → a CancelAuthorization Transaction. */
    String cancel(String paymentId, String merchantReference);

    /** Homework — refund (all or part of) a captured payment → a Refund Transaction. */
    String refund(String paymentId, long centAmount, String currencyCode, String merchantReference);
}
