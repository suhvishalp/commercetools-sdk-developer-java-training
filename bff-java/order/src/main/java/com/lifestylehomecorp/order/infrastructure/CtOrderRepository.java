package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.order.OrderUpdateAction;
import com.commercetools.api.models.order.OrderUpdateBuilder;
import com.lifestylehomecorp.order.application.OrderRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * SDK gateway for Orders — the place SDK code is written for the Session 6 T1 tasks. Reads expand the
 * payments (the ledger), the custom state and each line's recurrence policy so the detail page can name
 * the schedule. This is the SOLUTION; the starter stubs 6.3 {@link #findByOrderNumber}, 6.7
 * {@link #update} and 6.8 {@link #findByCustomer}.
 */
@Repository
public class CtOrderRepository implements OrderRepository {

    private static final String EXPAND_PAYMENTS = "paymentInfo.payments[*]";
    private static final String EXPAND_STATE = "state";
    private static final String EXPAND_RECURRENCE = "lineItems[*].recurrenceInfo.recurrencePolicy";

    private final ProjectApiRoot apiRoot;

    public CtOrderRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Order findByOrderNumber(String orderNumber) {
        return apiRoot.orders().withOrderNumber(orderNumber).get()
                .withExpand(EXPAND_PAYMENTS)
                .addExpand(EXPAND_STATE)
                .addExpand(EXPAND_RECURRENCE)
                .executeBlocking().getBody();
    }

    @Override
    public List<Order> findByCustomer(String customerId, int limit) {
        return apiRoot.orders().get()
                .withWhere("customerId = :id").withPredicateVar("id", customerId)
                .withSort("createdAt desc")
                .withLimit(limit)
                .withExpand(EXPAND_STATE)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public List<Order> findByAnonymousId(String anonymousId, int limit) {
        return apiRoot.orders().get()
                .withWhere("anonymousId = :aid").withPredicateVar("aid", anonymousId)
                .withSort("createdAt desc")
                .withLimit(limit)
                .withExpand(EXPAND_STATE)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public Order update(String orderId, Long version, List<OrderUpdateAction> actions) {
        return apiRoot.orders().withId(orderId)
                .post(OrderUpdateBuilder.of().version(version).actions(actions).build())
                .withExpand(EXPAND_PAYMENTS)
                .addExpand(EXPAND_STATE)
                .addExpand(EXPAND_RECURRENCE)
                .executeBlocking().getBody();
    }
}
