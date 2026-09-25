package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.Subscription;

import java.util.List;

public record SubscriptionView(String recurringOrderId, String state, String scheduleLabel, String startsAt, String nextOrderAt,
                               String expiresAt, String priceSelectionMode, List<String> skus) {
    public static SubscriptionView from(Subscription s) {
        return new SubscriptionView(s.recurringOrderId(), s.state(), s.scheduleLabel(), s.startsAt(), s.nextOrderAt(),
                s.expiresAt(), s.priceSelectionMode(), s.skus());
    }
}
