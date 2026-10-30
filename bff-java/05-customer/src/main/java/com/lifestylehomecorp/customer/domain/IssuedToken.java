package com.lifestylehomecorp.customer.domain;

/**
 * A password-reset / email-verification token (5.7 / 5.8). In production the value goes into an
 * EMAIL and never into an HTTP response to the browser.
 *
 * <p>{@code source} says who produced the mail: {@code connector} — the ecoliving-customer-connectors
 * Event app sent it on sign-up and the BFF only read its demo outbox; {@code bff-demo} — the course has
 * no mail provider, so the BFF issued the token itself and returns it with an explicit demo note.
 * {@code link} is the verification URL the mail carries (connector mails only).
 */
public record IssuedToken(String tokenValue, String expiresAt, String note, String source, String link) {

    public static final String SOURCE_CONNECTOR = "connector";
    public static final String SOURCE_BFF_DEMO = "bff-demo";

    public static final String DEMO_NOTE =
            "DEMO ONLY — in production this token is emailed to the customer, never returned to the browser.";

    public static final String CONNECTOR_NOTE =
            "Sent by the ecoliving-customer-connectors email-verification-sender (a Subscription on CustomerCreated / "
            + "CustomerEmailChanged). The course has no mail provider, so the connector wrote the mail to a demo outbox "
            + "and the BFF shows the link here.";

    public static final String FALLBACK_NOTE =
            "No connector mail found for this customer (the customer connector is not installed, or the account predates "
            + "it) — the BFF issued the token itself. " + DEMO_NOTE;

    /** The BFF-issued shape (5.7 reset tokens, the 5.8 fallback). */
    public IssuedToken(String tokenValue, String expiresAt, String note) {
        this(tokenValue, expiresAt, note, SOURCE_BFF_DEMO, null);
    }
}
