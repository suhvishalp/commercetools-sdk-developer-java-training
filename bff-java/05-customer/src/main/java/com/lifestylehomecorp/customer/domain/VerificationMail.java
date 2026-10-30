package com.lifestylehomecorp.customer.domain;

/**
 * One entry of the demo mail outbox the ecoliving-customer-connectors Event app writes instead of
 * sending a real email: Custom Object container {@code ecoliving-mail-outbox}, key = customer id.
 * The BFF reads it so the account page can show the verification link the connector "sent".
 */
public record VerificationMail(String tokenValue, String link, String expiresAt, String createdAt) {
}
