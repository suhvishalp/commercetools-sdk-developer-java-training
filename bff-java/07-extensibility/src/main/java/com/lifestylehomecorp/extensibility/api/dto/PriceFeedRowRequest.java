package com.lifestylehomecorp.extensibility.api.dto;

import com.lifestylehomecorp.extensibility.domain.PriceFeedRow;

/** One row of POST /api/import/prices — the ERP's view: SKU, currency, minor units, optional country scope. */
public record PriceFeedRowRequest(String sku, String currencyCode, Long centAmount, String country) {

    public PriceFeedRow toDomain() {
        return new PriceFeedRow(sku == null ? null : sku.trim(), currencyCode == null ? "EUR" : currencyCode.trim().toUpperCase(),
                centAmount == null ? 0 : centAmount, country == null || country.isBlank() ? null : country.trim().toUpperCase());
    }
}
