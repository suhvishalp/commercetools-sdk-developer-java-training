package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.OrderLine;

public record OrderLineView(String lineItemId, String sku, String name, long quantity, MoneyView lineTotal,
                            boolean recurring, String recurrenceLabel, String bundleId, String parentKey) {
    public static OrderLineView from(OrderLine l) {
        return new OrderLineView(l.lineItemId(), l.sku(), l.name(), l.quantity(), MoneyView.from(l.lineTotal()),
                l.recurring(), l.recurrenceLabel(), l.bundleId(), l.parentKey());
    }
}
