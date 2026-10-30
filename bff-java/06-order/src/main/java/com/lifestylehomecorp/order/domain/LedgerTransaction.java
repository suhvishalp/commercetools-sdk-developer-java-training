package com.lifestylehomecorp.order.domain;

/** One movement on the Payment ledger — Authorization · Charge · Refund · CancelAuthorization, with its state. */
public record LedgerTransaction(String id, String type, String state, Money amount, String interactionId, String timestamp) {
}
