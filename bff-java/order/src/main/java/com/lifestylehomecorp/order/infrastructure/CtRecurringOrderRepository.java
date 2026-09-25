package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.recurring_order.RecurringOrder;
import com.lifestylehomecorp.order.application.RecurringOrderRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

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
        // TODO (Task 6.9): query the RecurringOrder the PLATFORM created from the recurring line — an
        // `originOrder(id = :oid)` predicate, expanding the cart. Nobody called a create endpoint.
        // Ground it on the commercetools-knowledge MCP.
        throw new TaskNotImplementedException("6.9");
    }
}
