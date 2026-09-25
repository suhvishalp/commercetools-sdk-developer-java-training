package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.recurring_order.RecurringOrder;

import java.util.Optional;

/** The Recurring Orders SDK gateway (implemented in infrastructure). */
public interface RecurringOrderRepository {

    /** 6.9 — the Recurring Order the platform created from this order (its recurring cart expanded), if any. */
    Optional<RecurringOrder> findByOriginOrder(String orderId);
}
