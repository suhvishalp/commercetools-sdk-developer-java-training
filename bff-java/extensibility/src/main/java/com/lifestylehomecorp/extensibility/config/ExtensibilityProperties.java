package com.lifestylehomecorp.extensibility.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Binds {@code lhc.extensibility.*} — the intake plumbing for API Extensions (7.6 / 7.7) and where the
 * consumer (7.4) reaches the BFF's own order endpoints. All optional: without a public URL the module
 * still runs, and 7.6 answers with a clear 409 explaining what to set.
 */
@ConfigurationProperties(prefix = "lhc.extensibility")
public class ExtensibilityProperties {

    /** The tunnel URL the platform can reach this BFF on, e.g. https://xyz.trycloudflare.com (no trailing slash). */
    private String publicUrl = "";
    /** Shared secret the platform echoes back in the Authorization header of every Extension call. */
    private String secret = "";
    /** Extension time budget in ms — platform default 2000, maximum 10000. */
    private int timeoutMs = 2000;
    /** Base URL of the full BFF, for the consumer's PUT /api/orders/{n}/state (module independence). */
    private String bffBaseUrl = "http://localhost:8081";
    /** Seconds the cart-rules handler caches the feature-flag Custom Object (the time budget forbids a read per call). */
    private int configCacheSeconds = 60;
    /** The ImportContainer (resourceType price) the price feed posts into. */
    private String importContainerKey = "lhc-price-feed";

    public String getPublicUrl() {
        return publicUrl;
    }

    public void setPublicUrl(String publicUrl) {
        this.publicUrl = publicUrl == null ? "" : publicUrl.trim().replaceAll("/+$", "");
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret == null ? "" : secret.trim();
    }

    public int getTimeoutMs() {
        return timeoutMs;
    }

    public void setTimeoutMs(int timeoutMs) {
        this.timeoutMs = timeoutMs;
    }

    public String getBffBaseUrl() {
        return bffBaseUrl;
    }

    public void setBffBaseUrl(String bffBaseUrl) {
        this.bffBaseUrl = bffBaseUrl == null ? "" : bffBaseUrl.trim().replaceAll("/+$", "");
    }

    public int getConfigCacheSeconds() {
        return configCacheSeconds;
    }

    public void setConfigCacheSeconds(int configCacheSeconds) {
        this.configCacheSeconds = configCacheSeconds;
    }

    public String getImportContainerKey() {
        return importContainerKey;
    }

    public void setImportContainerKey(String importContainerKey) {
        this.importContainerKey = importContainerKey;
    }

    public boolean hasPublicUrl() {
        return publicUrl != null && !publicUrl.isBlank();
    }

    public boolean hasSecret() {
        return secret != null && !secret.isBlank();
    }
}
