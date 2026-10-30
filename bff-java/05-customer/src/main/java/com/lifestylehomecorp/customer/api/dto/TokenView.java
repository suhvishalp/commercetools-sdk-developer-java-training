package com.lifestylehomecorp.customer.api.dto;

import com.lifestylehomecorp.customer.domain.IssuedToken;

/**
 * A reset / verification token. {@code source} = {@code connector} (the customer connector sent the mail; the
 * BFF read its demo outbox) or {@code bff-demo} (issued here because the course has no mail service — see
 * {@code note}). {@code link} is the mail's verification URL, present for connector mails.
 */
public record TokenView(String tokenValue, String expiresAt, String note, String source, String link) {

    public static TokenView from(IssuedToken t) {
        return new TokenView(t.tokenValue(), t.expiresAt(), t.note(), t.source(), t.link());
    }
}
