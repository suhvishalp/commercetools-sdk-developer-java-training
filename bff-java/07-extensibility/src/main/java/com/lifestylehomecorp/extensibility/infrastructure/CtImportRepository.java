package com.lifestylehomecorp.extensibility.infrastructure;

import com.commercetools.importapi.client.ProjectApiRoot;
import com.commercetools.importapi.models.common.ImportResourceType;
import com.commercetools.importapi.models.importcontainers.ImportContainerDraftBuilder;
import com.commercetools.importapi.models.importoperations.ImportOperation;
import com.commercetools.importapi.models.importrequests.ImportResponse;
import com.commercetools.importapi.models.importrequests.PriceImportRequestBuilder;
import com.commercetools.importapi.models.prices.PriceImport;
import com.lifestylehomecorp.extensibility.application.ImportRepository;
import io.vrap.rmf.base.client.error.NotFoundException;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 7.8 — the Import API, through its own SDK root ({@code importApiRoot}, host import.{region}). Note the
 * package: {@code com.commercetools.importapi.*}, not {@code com.commercetools.api.*}.
 */
@Repository
public class CtImportRepository implements ImportRepository {

    private final ProjectApiRoot importApiRoot;

    public CtImportRepository(@Qualifier("importApiRoot") ProjectApiRoot importApiRoot) {
        this.importApiRoot = importApiRoot;
    }

    @Override
    public void ensureContainer(String containerKey) {
        try {
            importApiRoot.importContainers().withImportContainerKeyValue(containerKey).get().executeBlocking();
        } catch (NotFoundException e) {
            importApiRoot.importContainers()
                    .post(ImportContainerDraftBuilder.of().key(containerKey).resourceType(ImportResourceType.PRICE).build())
                    .executeBlocking();
        }
    }

    @Override
    public ImportResponse submitPrices(String containerKey, List<PriceImport> prices) {
        return importApiRoot.prices().importContainers().withImportContainerKeyValue(containerKey)
                .post(PriceImportRequestBuilder.of().resources(prices).build())
                .executeBlocking().getBody();
    }

    @Override
    public List<ImportOperation> operations(String containerKey) {
        return importApiRoot.importContainers().withImportContainerKeyValue(containerKey).importOperations()
                .get().withLimit(100)
                .executeBlocking().getBody().getResults();
    }
}
