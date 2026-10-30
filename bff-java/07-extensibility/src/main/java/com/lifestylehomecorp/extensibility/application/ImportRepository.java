package com.lifestylehomecorp.extensibility.application;

import com.commercetools.importapi.models.importoperations.ImportOperation;
import com.commercetools.importapi.models.importrequests.ImportResponse;
import com.commercetools.importapi.models.prices.PriceImport;

import java.util.List;

/**
 * 7.8 — the Import API (its own SDK root, {@code importApiRoot}). Participants implement {@code submitPrices}
 * and {@code operations}; {@code ensureContainer} is pre-built.
 */
public interface ImportRepository {

    /** Create the ImportContainer (resourceType {@code price}) if it does not exist yet. Idempotent. */
    void ensureContainer(String containerKey);

    /** {@code POST /prices/import-containers/{key}} with a {@code PriceImportRequest} of ≤ 20 rows. */
    ImportResponse submitPrices(String containerKey, List<PriceImport> prices);

    /** The container's ImportOperations — one per submitted resource, with its current ProcessingState. */
    List<ImportOperation> operations(String containerKey);
}
