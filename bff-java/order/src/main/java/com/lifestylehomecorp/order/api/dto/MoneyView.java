package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.Money;

public record MoneyView(long centAmount, String currencyCode, int fractionDigits) {
    public static MoneyView from(Money m) {
        return m == null ? null : new MoneyView(m.centAmount(), m.currencyCode(), m.fractionDigits());
    }
}
