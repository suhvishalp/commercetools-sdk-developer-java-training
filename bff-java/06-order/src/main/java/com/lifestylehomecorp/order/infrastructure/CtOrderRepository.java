package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.api.client.ProjectApiRoot;
import com.commercetools.api.models.order.Order;
import com.commercetools.api.models.order.OrderUpdateAction;
import com.commercetools.api.models.order.OrderUpdateBuilder;
import com.lifestylehomecorp.order.application.OrderRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;

/**
 * SDK gateway for Orders — the place SDK code is written for the Session 6 T1 tasks. Reads expand the
 * payments (the ledger), the custom state and each line's recurrence policy so the detail page can name
 * the schedule. This is the SOLUTION; the starter stubs 6.4 {@link #findByOrderNumber}, 6.7
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
    public Order findByOrderNumber(String storeKey, String orderNumber) {
        // TODO (Task 6.4): fetch the order BY ORDER NUMBER (not id), expanding paymentInfo.payments[*], state and
        // lineItems[*].recurrenceInfo.recurrencePolicy — the raw SDK Order. You did NOT create it:
        // Checkout did. Ground it on the commercetools-knowledge MCP.
        throw new TaskNotImplementedException("6.4");
    }

    @Override
    public List<Order> findByCustomer(String storeKey, String customerId, int limit) {
        return apiRoot.inStore(storeKey).orders().get()
                .withWhere("customerId = :id").withPredicateVar("id", customerId)
                .withSort("createdAt desc")
                .withLimit(limit)
                .withExpand(EXPAND_STATE)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public List<Order> findByAnonymousId(String storeKey, String anonymousId, int limit) {
        return apiRoot.inStore(storeKey).orders().get()
                .withWhere("anonymousId = :aid").withPredicateVar("aid", anonymousId)
                .withSort("createdAt desc")
                .withLimit(limit)
                .withExpand(EXPAND_STATE)
                .executeBlocking().getBody().getResults();
    }

    @Override
    public Order update(String storeKey, String orderId, Long version, List<OrderUpdateAction> actions) {
        // TODO (Task 6.7): the S4 update pattern on a fifth resource: version + actions. The T1 half of 6.7 —
        // OrderService.transition decides WHICH actions; this only sends them.
        throw new TaskNotImplementedException("6.7");
    }
}
