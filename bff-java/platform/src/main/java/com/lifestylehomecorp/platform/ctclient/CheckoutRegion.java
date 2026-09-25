package com.lifestylehomecorp.platform.ctclient;

import java.net.URI;

/**
 * Derives the commercetools region ("europe-west1.gcp") and the Checkout hosts from the Composable
 * Commerce API URL, so a single {@code CTP_API_URL} configures every host — the storefront receives
 * the same region alongside each Checkout Session (the Browser SDK needs it), never as a public env var.
 */
public final class CheckoutRegion {

    private CheckoutRegion() {
    }

    /** {@code https://api.europe-west1.gcp.commercetools.com} → {@code europe-west1.gcp}. */
    public static String regionOf(String apiUrl) {
        String host = URI.create(apiUrl.trim()).getHost();
        if (host == null || !host.startsWith("api.") || !host.endsWith(".commercetools.com")) {
            throw new IllegalArgumentException("Cannot derive the region from CTP_API_URL: " + apiUrl);
        }
        return host.substring("api.".length(), host.length() - ".commercetools.com".length());
    }

    public static String sessionsUrl(String apiUrl) {
        return "https://session." + regionOf(apiUrl) + ".commercetools.com";
    }

    public static String checkoutApiUrl(String apiUrl) {
        return "https://checkout." + regionOf(apiUrl) + ".commercetools.com";
    }

    /** The Import API host for the same region (Session 7) — {@code import.{region}.commercetools.com}. */
    public static String importApiUrl(String apiUrl) {
        return "https://import." + regionOf(apiUrl) + ".commercetools.com";
    }

    static String orDerived(String configured, String derived) {
        return configured == null || configured.isBlank() ? derived : configured.replaceAll("/+$", "");
    }
}
