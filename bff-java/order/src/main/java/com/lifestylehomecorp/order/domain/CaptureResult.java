package com.lifestylehomecorp.order.domain;

/** Outcome of a Payment Intents action (6.6) — what Checkout asked the PSP to do, and the ledger afterwards. */
public record CaptureResult(String action, String paymentId, Money amount, String outcome, PaymentLedger ledger) {
}
