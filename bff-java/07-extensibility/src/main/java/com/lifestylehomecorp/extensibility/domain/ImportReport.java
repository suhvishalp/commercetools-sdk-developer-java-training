package com.lifestylehomecorp.extensibility.domain;

import java.util.List;

/**
 * 7.8 — the Import API answers with an acknowledgement, not a result: one {@link Row} per resource carrying
 * the {@code ImportOperation}'s current {@code ProcessingState} ({@code processing} → {@code imported} |
 * {@code validationFailed} | {@code unresolved} | {@code rejected} | {@code partiallyImported}) and its errors.
 */
public record ImportReport(String containerKey, int total, int imported, int failed, int pending, List<Row> rows) {

    public record Row(String resourceKey, String sku, String state, List<String> errors, String operationId) {
    }
}
