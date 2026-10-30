package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.Readiness;

import java.util.List;

public record ReadinessView(boolean ready, List<String> missing, String cartId, MoneyView total) {
    public static ReadinessView from(Readiness r) {
        return new ReadinessView(r.ready(), r.missing(), r.cartId(), MoneyView.from(r.total()));
    }
}
