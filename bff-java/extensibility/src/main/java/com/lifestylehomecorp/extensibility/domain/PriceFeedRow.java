package com.lifestylehomecorp.extensibility.domain;

/** 7.8 — one row of the nightly price feed as the ERP would send it: by SKU, in minor units, optionally per country. */
public record PriceFeedRow(String sku, String currencyCode, long centAmount, String country) {

    /** The feed's stable price key — what the Import API upserts by (the seeder stamps the same keys). */
    public String priceKey() {
        return sku + "-" + currencyCode + (country == null || country.isBlank() ? "" : "-" + country);
    }
}
