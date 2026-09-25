package com.lifestylehomecorp.order.api.dto;

import com.lifestylehomecorp.order.domain.PaymentLedger;

import java.util.List;

/** A Payment as Merchant Center shows it (Orders → Payments): provider, PSP reference, planned amount, every Transaction. */
public record PaymentLedgerView(
        String paymentId,
        String paymentInterface,
        String method,
        String interfaceId,
        MoneyView amountPlanned,
        String statusInterfaceCode,
        boolean authorized,
        boolean captured,
        List<LedgerTransactionView> transactions,
        int interfaceInteractions) {

    public static PaymentLedgerView from(PaymentLedger p) {
        return new PaymentLedgerView(p.paymentId(), p.paymentInterface(), p.method(), p.interfaceId(),
                MoneyView.from(p.amountPlanned()), p.statusInterfaceCode(), p.authorized(), p.captured(),
                p.transactions().stream().map(LedgerTransactionView::from).toList(), p.interfaceInteractions());
    }
}
