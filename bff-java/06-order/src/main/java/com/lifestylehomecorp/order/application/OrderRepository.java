package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.order.OrderUpdateAction;

import java.util.List;

/**
 * The Orders SDK gateway (implemented in infrastructure). Returns RAW SDK {@link Order}s; the
 * {@link OrderService} checks ownership and maps to the domain. Participants implement the SDK call in
 * each task method (T1); the service owns version + 409-retry around {@link #update}.
 */
/**
 * Every call is in-store ({@code apiRoot.inStore(storeKey).orders()…}): an order belongs to the store its cart was in.
 */
public interface OrderRepository {

    /** 6.4 — the order Checkout created, by LHC's order number ({@code paymentInfo.payments[*]} expanded). */
    Order findByOrderNumber(String storeKey, String orderNumber);

    /** 6.8 — the customer's orders, newest first. */
    List<Order> findByCustomer(String storeKey, String customerId, int limit);

    /** Plumbing — a guest's orders (before sign-in moves them to the customer). */
    List<Order> findByAnonymousId(String storeKey, String anonymousId, int limit);

    /** 6.7 (T1) — apply update actions (state changes) with the order's current version. */
    Order update(String storeKey, String orderId, Long version, List<OrderUpdateAction> actions);
}
