package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.recurring_order.RecurringOrder;
import com.lifestylehomecorp.order.application.RecurringOrderRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * SDK gateway for Recurring Orders (6.9). The recurring cart is expanded so the subscription can name its
 * SKUs and price mode. This is the SOLUTION; the starter stubs {@link #findByOriginOrder}.
 */
@Repository
public class CtRecurringOrderRepository implements RecurringOrderRepository {

    private final ProjectApiRoot apiRoot;

    public CtRecurringOrderRepository(ProjectApiRoot apiRoot) {
        this.apiRoot = apiRoot;
    }

    @Override
    public Optional<RecurringOrder> findByOriginOrder(String orderId) {
        List<RecurringOrder> results = apiRoot.recurringOrders().get()
                .withWhere("originOrder(id = :oid)").withPredicateVar("oid", orderId)
                .withExpand("cart")
                .withLimit(1)
                .executeBlocking().getBody().getResults();
        return results.stream().findFirst();
    }
}
