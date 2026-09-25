package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.LedgerTransaction;

public record LedgerTransactionView(String id, String type, String state, MoneyView amount, String interactionId, String timestamp) {
    public static LedgerTransactionView from(LedgerTransaction t) {
        return new LedgerTransactionView(t.id(), t.type(), t.state(), MoneyView.from(t.amount()), t.interactionId(), t.timestamp());
    }
}
