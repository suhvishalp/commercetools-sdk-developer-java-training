package com.lifestylehomecorp.order.domain;

import java.util.List;

/**
 * The Recurring Order born from the order (6.9): its state, the schedule it follows, when it starts /
 * expires and when the next order is due, the price mode S4 chose, and which SKUs recur — read from the
 * RecurringOrder + its recurring cart. Nobody called an endpoint to create it: order creation did.
 */
public record Subscription(
        String recurringOrderId,
        String state,
        String scheduleLabel,
        String startsAt,
        String nextOrderAt,
        String expiresAt,
        String priceSelectionMode,
        List<String> skus) {
}
