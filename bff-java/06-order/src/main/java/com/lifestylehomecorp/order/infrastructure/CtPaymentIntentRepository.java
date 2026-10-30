package com.lifestylehomecorp.order.infrastructure;

import com.commercetools.checkout.client.ProjectApiRoot;
import com.commercetools.checkout.models.payment_intents.PaymentIntentAction;
import com.commercetools.checkout.models.payment_intents.PaymentIntentBuilder;
import com.commercetools.checkout.models.payment_intents.PaymentIntentCancelActionBuilder;
import com.commercetools.checkout.models.payment_intents.PaymentIntentCaptureActionBuilder;
import com.commercetools.checkout.models.payment_intents.PaymentIntentRefundActionBuilder;
import com.lifestylehomecorp.order.application.PaymentIntentRepository;
import io.vrap.rmf.base.client.ApiHttpResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

/**
 * The Checkout <b>Payment Intents API</b> — capture / cancel / refund a Payment Checkout created (6.6).
 * Uses the Checkout Java SDK's {@code ProjectApiRoot} (a different class from the Composable Commerce one —
 * hence the qualifier). Checkout answers 202-style: it asks the connector → the PSP, then writes the
 * Transaction; read the ledger back to see it. This is the SOLUTION; the starter stubs {@link #capture}.
 */
@Repository
public class CtPaymentIntentRepository implements PaymentIntentRepository {

    private final ProjectApiRoot checkoutApiRoot;

    public CtPaymentIntentRepository(@Qualifier("checkoutApiRoot") ProjectApiRoot checkoutApiRoot) {
        this.checkoutApiRoot = checkoutApiRoot;
    }

    @Override
    public String capture(String paymentId, long centAmount, String currencyCode, String merchantReference) {
        return send(paymentId, PaymentIntentCaptureActionBuilder.of()
                .amount(a -> a.centAmount((int) centAmount).currencyCode(currencyCode))
                .merchantReference(merchantReference)
                .build());
    }

    @Override
    public String cancel(String paymentId, String merchantReference) {
        return send(paymentId, PaymentIntentCancelActionBuilder.of().merchantReference(merchantReference).build());
    }

    @Override
    public String refund(String paymentId, long centAmount, String currencyCode, String merchantReference) {
        return send(paymentId, PaymentIntentRefundActionBuilder.of()
                .amount(a -> a.centAmount((int) centAmount).currencyCode(currencyCode))
                .merchantReference(merchantReference)
                .build());
    }

    private String send(String paymentId, PaymentIntentAction action) {
        ApiHttpResponse<Object> response = checkoutApiRoot.paymentIntents().withPaymentId(paymentId)
                .post(PaymentIntentBuilder.of().actions(action).build())
                .executeBlocking();
        return "HTTP " + response.getStatusCode();
    }
}
