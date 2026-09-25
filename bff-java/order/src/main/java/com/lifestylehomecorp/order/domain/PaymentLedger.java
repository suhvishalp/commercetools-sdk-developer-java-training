package com.lifestylehomecorp.order.domain;

import java.util.List;

/**
 * A Payment as Merchant Center shows it under Orders → Payments (6.4): who processed it
 * ({@code paymentInterface} / {@code method}), the PSP's reference ({@code interfaceId} = "Payment
 * provider ID"), the planned amount, the PSP status code, and every Transaction. commercetools is not the
 * PSP — this is the ledger the Checkout connector writes on the PSP's behalf.
 */
public record PaymentLedger(
        String paymentId,
        String paymentInterface,
        String method,
        String interfaceId,
        Money amountPlanned,
        String statusInterfaceCode,
        List<LedgerTransaction> transactions,
        int interfaceInteractions) {

    /** True once an Authorization has succeeded — the signal to start fulfilling. */
    public boolean authorized() {
        return transactions.stream().anyMatch(t -> "Authorization".equals(t.type()) && "Success".equals(t.state()));
    }

    /** True once a Charge has succeeded — the money has actually moved (6.6). */
    public boolean captured() {
        return transactions.stream().anyMatch(t -> "Charge".equals(t.type()) && "Success".equals(t.state()));
    }
}
