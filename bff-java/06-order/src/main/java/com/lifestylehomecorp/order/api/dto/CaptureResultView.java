package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.CaptureResult;

public record CaptureResultView(String action, String paymentId, MoneyView amount, String outcome, PaymentLedgerView ledger) {
    public static CaptureResultView from(CaptureResult r) {
        return new CaptureResultView(r.action(), r.paymentId(), MoneyView.from(r.amount()), r.outcome(), PaymentLedgerView.from(r.ledger()));
    }
}
