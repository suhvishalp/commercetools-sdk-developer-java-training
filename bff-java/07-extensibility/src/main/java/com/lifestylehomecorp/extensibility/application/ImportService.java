package com.lifestylehomecorp.extensibility.application;

import com.commercetools.api.models.product.ProductProjection;
import com.commercetools.api.models.product.ProductVariant;
import com.commercetools.importapi.models.importoperations.ImportOperation;
import com.commercetools.importapi.models.importrequests.ImportResponse;
import com.commercetools.importapi.models.prices.PriceImport;
import com.commercetools.importapi.models.prices.PriceImportBuilder;
import com.lifestylehomecorp.extensibility.config.ExtensibilityProperties;
import com.lifestylehomecorp.extensibility.domain.ImportReport;
import com.lifestylehomecorp.extensibility.domain.PriceFeedRow;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

/**
 * 7.8 — the nightly price feed through the Import API. The ERP speaks SKU; the Import API identifies by
 * <b>key</b>: product key + variant key (the seeder set variant key = SKU) + the price's own key (the feed's
 * convention, {@code SKU-CUR[-CC]}). Same key → update, new key → a new price. {@code staged: false} writes the
 * current projection, which Session 2's PLP reads. The response is an <em>acknowledgement</em>; the report is
 * built from the container's ImportOperations, one per row.
 */
@Service
public class ImportService {

    public static final int MAX_ROWS_PER_REQUEST = 20;

    private final ImportRepository imports;
    private final ExtReadRepository reads;
    private final ExtensibilityProperties props;

    public ImportService(ImportRepository imports, ExtReadRepository reads, ExtensibilityProperties props) {
        this.imports = imports;
        this.reads = reads;
        this.props = props;
    }

    public ImportReport submit(List<PriceFeedRow> rows) {
        if (rows == null || rows.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Send a JSON array of { sku, currencyCode, centAmount, country? }.");
        }
        if (rows.size() > MAX_ROWS_PER_REQUEST) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "The Import API accepts at most " + MAX_ROWS_PER_REQUEST + " resources per request — batch the feed (homework).");
        }
        String containerKey = props.getImportContainerKey();
        imports.ensureContainer(containerKey);

        List<PriceImport> prices = new ArrayList<>();
        List<ImportReport.Row> rejectedLocally = new ArrayList<>();
        for (PriceFeedRow row : rows) {
            ResolvedKeys keys = resolve(row.sku());
            if (keys == null) {
                rejectedLocally.add(new ImportReport.Row(row.priceKey(), row.sku(), "validationFailed",
                        List.of("No product variant with SKU " + row.sku() + " in the Project."), null));
                continue;
            }
            PriceImportBuilder b = PriceImportBuilder.of()
                    .key(row.priceKey())
                    .product(p -> p.key(keys.productKey))
                    .productVariant(v -> v.key(keys.variantKey))
                    .value(m -> m.centPrecisionBuilder().currencyCode(row.currencyCode()).centAmount(row.centAmount()))
                    .staged(false);
            if (row.country() != null && !row.country().isBlank()) {
                b.country(row.country());
            }
            prices.add(b.build());
        }

        List<ImportReport.Row> reportRows = new ArrayList<>(rejectedLocally);
        if (!prices.isEmpty()) {
            ImportResponse response = imports.submitPrices(containerKey, prices);
            Map<String, String> skuByKey = skuByPriceKey(rows);
            // The acknowledgement carries one ImportOperationStatus per resource, in request order, without the
            // resource key — pair them by position; GET …/status later reports by key.
            List<?> statuses = response.getOperationStatus() == null ? List.of() : response.getOperationStatus();
            for (int i = 0; i < prices.size(); i++) {
                String key = prices.get(i).getKey();
                var st = i < statuses.size()
                        ? (com.commercetools.importapi.models.importoperations.ImportOperationStatus) statuses.get(i) : null;
                reportRows.add(new ImportReport.Row(key, skuByKey.get(key),
                        st == null || st.getState() == null ? "processing" : st.getState().getJsonName(),
                        st == null || st.getErrors() == null ? List.of() : st.getErrors().stream().map(e -> e.getMessage()).toList(),
                        st == null ? null : st.getOperationId()));
            }
        }
        return report(containerKey, reportRows);
    }

    public ImportReport status(String containerKey) {
        List<ImportReport.Row> rows = imports.operations(containerKey).stream()
                .map(ImportService::row)
                .toList();
        return report(containerKey, rows);
    }

    private static ImportReport.Row row(ImportOperation op) {
        String key = op.getResourceKey();
        return new ImportReport.Row(key, skuFromPriceKey(key),
                op.getState() == null ? "processing" : op.getState().getJsonName(),
                op.getErrors() == null ? List.of() : op.getErrors().stream().map(e -> e.getMessage()).toList(),
                op.getId());
    }

    /** {@code CARM-023-EUR-DE} → {@code CARM-023}: strip the trailing currency (and optional country) tokens. */
    static String skuFromPriceKey(String key) {
        if (key == null) {
            return null;
        }
        String[] parts = key.split("-");
        int drop = parts.length >= 3 && parts[parts.length - 1].length() == 2 ? 2 : 1;
        if (parts.length <= drop) {
            return key;
        }
        return String.join("-", java.util.Arrays.copyOf(parts, parts.length - drop));
    }

    private static ImportReport report(String containerKey, List<ImportReport.Row> rows) {
        int imported = (int) rows.stream().filter(r -> "imported".equals(r.state())).count();
        int failed = (int) rows.stream().filter(r -> Set.FAILED.contains(r.state())).count();
        int pending = rows.size() - imported - failed;
        return new ImportReport(containerKey, rows.size(), imported, failed, pending, rows);
    }

    private static final class Set {
        static final java.util.Set<String> FAILED = java.util.Set.of("validationFailed", "rejected", "canceled");
    }

    private static Map<String, String> skuByPriceKey(List<PriceFeedRow> rows) {
        Map<String, String> m = new java.util.HashMap<>();
        rows.forEach(r -> m.put(r.priceKey(), r.sku()));
        return m;
    }

    private record ResolvedKeys(String productKey, String variantKey) {
    }

    private ResolvedKeys resolve(String sku) {
        ProductProjection p = reads.productBySku(sku).orElse(null);
        if (p == null || p.getKey() == null) {
            return null;
        }
        ProductVariant variant = Stream.concat(Stream.of(p.getMasterVariant()),
                        p.getVariants() == null ? Stream.empty() : p.getVariants().stream())
                .filter(v -> v != null && sku.equals(v.getSku()))
                .findFirst().orElse(null);
        if (variant == null) {
            return null;
        }
        // The seeder stamps variant key = SKU; fall back to that convention when the key is absent.
        String variantKey = variant.getKey() != null && !variant.getKey().isBlank() ? variant.getKey() : sku;
        return new ResolvedKeys(p.getKey(), variantKey);
    }
}
