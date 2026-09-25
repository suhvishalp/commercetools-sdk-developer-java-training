package com.lifestylehomecorp.platform.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Binds the {@code ctp.checkout.*} properties (Session 6 — commercetools Checkout, Payment Only mode).
 * Only the Application key is required; the Sessions / Checkout API hosts are derived from the region
 * in {@code ctp.api-url} unless set explicitly. Credentials are the same API client as the
 * {@link CtpProperties} — it must carry the {@code manage_sessions} and
 * {@code manage_checkout_payment_intents} scopes.
 */
@ConfigurationProperties(prefix = "ctp.checkout")
public class CheckoutProperties {

    /** Key of the Payment Only Checkout Application (Merchant Center → Checkout), e.g. lhc-payment-only. */
    private String applicationKey;
    /** Sessions API host, e.g. https://session.europe-west1.gcp.commercetools.com (derived when blank). */
    private String sessionsUrl;
    /** Checkout HTTP API host, e.g. https://checkout.europe-west1.gcp.commercetools.com (derived when blank). */
    private String apiUrl;

    public String getApplicationKey() {
        return applicationKey;
    }

    public void setApplicationKey(String applicationKey) {
        this.applicationKey = applicationKey;
    }

    public String getSessionsUrl() {
        return sessionsUrl;
    }

    public void setSessionsUrl(String sessionsUrl) {
        this.sessionsUrl = sessionsUrl;
    }

    public String getApiUrl() {
        return apiUrl;
    }

    public void setApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
    }
}
