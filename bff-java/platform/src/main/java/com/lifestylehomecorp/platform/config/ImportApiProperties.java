package com.lifestylehomecorp.platform.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Binds {@code ctp.import.*} (Session 7 — the Import API, task 7.8). The Import API lives on its
 * <b>own host</b> ({@code import.{region}.commercetools.com}); it is derived from the region in
 * {@code ctp.api-url} unless set explicitly. Same API client; it needs {@code manage_import_containers}
 * plus the write scope of the imported resource ({@code manage_products} for prices).
 */
@ConfigurationProperties(prefix = "ctp.import")
public class ImportApiProperties {

    /** Import API host, e.g. https://import.europe-west1.gcp.commercetools.com (derived when blank). */
    private String apiUrl;

    public String getApiUrl() {
        return apiUrl;
    }

    public void setApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
    }
}
