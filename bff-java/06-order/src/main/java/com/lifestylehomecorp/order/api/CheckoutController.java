package com.lifestylehomecorp.order.api;

import com.lifestylehomecorp.order.api.dto.CheckoutStartView;
import com.lifestylehomecorp.order.api.dto.OrderNumberView;
import com.lifestylehomecorp.order.api.dto.ReadinessView;
import com.lifestylehomecorp.order.application.CheckoutService;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The checkout HTTP contract (Session 6 — before the shopper pays). commercetools Checkout (Payment Only)
 * owns the payment UI, the PSP and order creation; this BFF owns the Checkout Session, LHC's order number,
 * readiness and the decision of where checkout lives. The cart and the shopper come from the session (S5).
 */
@RestController
public class CheckoutController {

    private final CheckoutService checkout;

    public CheckoutController(CheckoutService checkout) {
        this.checkout = checkout;
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 3,
            title = "Create the Checkout Session", tier = "T1", capability = "order.checkoutSession",
            description = "Implement CheckoutSessionRepository.create(cartId, applicationKey, futureOrderNumber) in "
                    + "the order module's infrastructure layer — POST https://session.{region}.commercetools.com/"
                    + "{projectKey}/sessions with { cart: { cartRef: { id } }, metadata: { applicationKey, "
                    + "futureOrderNumber } } under a bearer token carrying manage_sessions (CheckoutTokenProvider), "
                    + "and return the raw session (id · expiryAt · state). The service verifies the cart is the "
                    + "shopper's, runs readiness, and returns { sessionId, projectKey, region, expiresAt, orderNumber } — "
                    + "everything the Browser SDK's paymentFlow needs. POST /api/checkout/session renders the widget. "
                    + "An unready cart is a 409 naming what is missing — set the address (4.7, which also selects "
                    + "the default shipping method) and sign in or set a guest email first; the storefront's "
                    + "checkout stepper walks exactly these steps.",
            hint = "Docs: Checkout — Integrate Checkout → Create Checkout Sessions "
                    + "(docs.commercetools.com/checkout/installing-checkout#create-checkout-sessions).")
    @PostMapping("/api/checkout/session")
    public CheckoutStartView startPayment() {
        return CheckoutStartView.from(checkout.startPayment());
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 2,
            title = "Your order number: futureOrderNumber + idempotency", tier = "T2", capability = "order.orderNumber",
            description = "Implement CheckoutService.currentAttempt(): derive a deterministic LHC order number for the "
                    + "shopper's CURRENT attempt (cart id + cart version + date), remember it on the session, and "
                    + "reuse it while the cart version is unchanged — a refresh or a second click is the same attempt. "
                    + "startPayment() passes it as futureOrderNumber (6.3) so Checkout stores it on the Order it "
                    + "creates; the platform's orderNumber uniqueness then makes 'one attempt, one order' free, and "
                    + "the confirmation can look the order up BY NUMBER even if the checkout_completed message is lost. "
                    + "GET /api/checkout/order-number shows the attempt.",
            hint = "Docs: Checkout — Set a custom Order number (futureOrderNumber); Orders — orderNumber uniqueness "
                    + "(docs.commercetools.com/checkout/installing-checkout#set-a-custom-order-number).",
            decisions = {
                    "The order-number scheme — readable, unique, not guessable; date + hash vs a sequence service.",
                    "What defines an attempt — cart id + version (a material change = a new attempt) vs id only vs per click.",
                    "Session lifetime — create the Checkout Session at the payment step; re-create at expiryAt with the SAME number.",
                    "Recovery — order_creation_error, an authorization without an order, a lost checkout_completed."
            })
    @GetMapping("/api/checkout/order-number")
    public OrderNumberView orderNumber() {
        return OrderNumberView.from(checkout.currentAttempt());
    }

    @TaskDescription(
            module = "order", session = "Session 6", taskNumber = 1,
            title = "Readiness for Payment Only + stock at the commit", tier = "T1", capability = "order.readiness",
            description = "Pre-built — study it. GET /api/checkout/readiness returns { ready, missing[] }: the "
                    + "preconditions Checkout's Payment Only mode enforces anyway — shipping AND billing address "
                    + "(startPayment copies shipping → billing; S4 set only shipping), a shipping method, a line, a "
                    + "signed-in customer or guest email, a country. Then the demo: a pickup-store line "
                    + "(3 in stock, ReserveOnOrder) at quantity 5 → pay → Checkout's order creation fails OutOfStock → "
                    + "order_creation_error → the Automated Reversal voids the authorization. Stock is only HELD at the commit.",
            hint = "Docs: Checkout — Payment Only prerequisites (shipping + billing information); Inventory — "
                    + "ReserveOnOrder / OutOfStock (docs.commercetools.com/checkout/overview#payment-only-mode).")
    @GetMapping("/api/checkout/readiness")
    public ReadinessView readiness() {
        return ReadinessView.from(checkout.readiness());
    }

}
