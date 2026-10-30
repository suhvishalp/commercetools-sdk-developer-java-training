package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.OrderSummary;

public record OrderSummaryView(String orderNumber, String createdAt, MoneyView total, String orderState, String shipmentState,
                               String paymentState, String customState, int lineCount) {
    public static OrderSummaryView from(OrderSummary o) {
        return new OrderSummaryView(o.orderNumber(), o.createdAt(), MoneyView.from(o.total()), o.orderState(), o.shipmentState(),
                o.paymentState(), o.customState(), o.lineCount());
    }
}
