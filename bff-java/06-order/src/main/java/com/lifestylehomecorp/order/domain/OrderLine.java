package com.lifestylehomecorp.order.domain;

/** A snapshotted order line — enough for the confirmation / detail page, incl. S4's bundle + subscription markers. */
public record OrderLine(
        String lineItemId,
        String sku,
        String name,
        long quantity,
        Money lineTotal,
        boolean recurring,
        String recurrenceLabel,
        String bundleId,
        String parentKey) {
}
