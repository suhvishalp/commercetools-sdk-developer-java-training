package com.lifestylehomecorp.extensibility.application;

import com.lifestylehomecorp.extensibility.domain.PriceFeedRow;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

/** 7.8 — the feed's key convention, both directions. */
class ImportServiceTest {

    @Test
    void priceKeyConvention() {
        assertThat(new PriceFeedRow("CARM-023", "EUR", 44900, null).priceKey()).isEqualTo("CARM-023-EUR");
        assertThat(new PriceFeedRow("CARM-023", "EUR", 44900, "DE").priceKey()).isEqualTo("CARM-023-EUR-DE");
    }

    @Test
    void skuIsRecoveredFromThePriceKey() {
        assertThat(ImportService.skuFromPriceKey("CARM-023-EUR")).isEqualTo("CARM-023");
        assertThat(ImportService.skuFromPriceKey("CARM-023-EUR-DE")).isEqualTo("CARM-023");
        assertThat(ImportService.skuFromPriceKey("LPC-011-GBP")).isEqualTo("LPC-011");
        assertThat(ImportService.skuFromPriceKey(null)).isNull();
    }
}
