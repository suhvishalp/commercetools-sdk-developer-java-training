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
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

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
        // TODO (Task 7.8): submit on the SECOND SDK root — the Import API has its own host. The Import API identifies
        // by KEY: same key updates, new key adds. The 201 is an ACKNOWLEDGEMENT, not a result.
        // See the @TaskDescription.
        throw new TaskNotImplementedException("7.8");
    }

    @Override
    public List<ImportOperation> operations(String containerKey) {
        // TODO (Task 7.8): poll the ImportOperations for the container — one per submitted row, each moving
        // processing -> imported | validationFailed | unresolved | rejected.
        throw new TaskNotImplementedException("7.8");
    }
}
