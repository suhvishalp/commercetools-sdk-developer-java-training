package com.lifestylehomecorp.extensibility.api;

import com.lifestylehomecorp.extensibility.api.dto.PriceFeedRowRequest;
import com.lifestylehomecorp.extensibility.application.ImportService;
import com.lifestylehomecorp.extensibility.domain.ImportReport;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/** 7.8 — the nightly price feed through the Import API. Ops-side. */
@RestController
public class ImportController {

    private final ImportService imports;

    public ImportController(ImportService imports) {
        this.imports = imports;
    }

    @TaskDescription(
            module = "extensibility", session = "Session 7", taskNumber = 8,
            title = "Import API: the nightly price feed", tier = "T1", capability = "ext.import",
            description = "Implement ImportRepository.submitPrices(containerKey, prices) and operations(containerKey) in the "
                    + "extensibility module's infrastructure layer, on the SECOND SDK root (importApiRoot — the Import API has "
                    + "its own host): importApiRoot.prices().importContainers().withImportContainerKeyValue(key).post("
                    + "PriceImportRequest{ resources }) and importApiRoot.importContainers().withImportContainerKeyValue(key)"
                    + ".importOperations().get(). The Import API identifies by KEY: the service maps each SKU to product key + "
                    + "variant key and the feed's price key (SKU-CUR[-CC]) — same key updates, new key adds; staged:false writes "
                    + "the current projection the PLP reads. The 201 is an ACKNOWLEDGEMENT: one ImportOperation per row moves "
                    + "processing → imported | validationFailed | unresolved | rejected. POST /api/import/prices, then GET "
                    + "/api/import/{containerKey}/status until every row is imported; refresh the PLP.",
            hint = "Docs: Import API — Overview (ImportContainer, ImportOperation, ProcessingState), Price import "
                    + "(PriceImportRequest, PriceImport), Hosts and authorization (docs.commercetools.com/api/import-export/overview).")
    @PostMapping("/api/import/prices")
    public ImportReport submit(@RequestBody List<PriceFeedRowRequest> rows) {
        return imports.submit(rows == null ? List.of() : rows.stream().map(PriceFeedRowRequest::toDomain).toList());
    }

    @GetMapping("/api/import/{containerKey}/status")
    public ImportReport status(@PathVariable String containerKey) {
        return imports.status(containerKey);
    }
}
