package com.lifestylehomecorp.order.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartSetBillingAddressActionBuilder;
import com.commercetools.api.models.common.BaseAddressBuilder;
import com.lifestylehomecorp.order.domain.CheckoutMode;
import com.lifestylehomecorp.order.domain.CheckoutSession;
import com.lifestylehomecorp.order.domain.CheckoutStart;
import com.lifestylehomecorp.order.domain.Readiness;
import com.lifestylehomecorp.platform.config.CheckoutProperties;
import com.lifestylehomecorp.platform.config.CtpProperties;
import com.lifestylehomecorp.platform.ctclient.CheckoutRegion;
import com.lifestylehomecorp.platform.session.ShopperSession;
import com.lifestylehomecorp.platform.session.ShopperSession.CheckoutAttempt;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HexFormat;
import java.util.List;

/**
 * Everything the BFF does <b>before</b> the shopper pays in commercetools Checkout (Payment Only):
 * readiness (6.5), the deterministic order number that makes "one attempt, one order" free (6.2), and
 * the Checkout Session (6.1). Checkout then creates the Payment, the Transactions and the Order itself.
 * The cart and the shopper always come from the {@link ShopperSession} — never from the request (S5).
 */
@Service
public class CheckoutService {

    static final String ORDER_NUMBER_PREFIX = "LHC-";
    private static final DateTimeFormatter DAY = DateTimeFormatter.ofPattern("yyyyMMdd");

    private final CheckoutSessionRepository sessions;
    private final CheckoutCartRepository carts;
    private final ShopperSession session;
    private final CtpProperties ctp;
    private final CheckoutProperties checkout;

    public CheckoutService(CheckoutSessionRepository sessions, CheckoutCartRepository carts, ShopperSession session,
                           CtpProperties ctp, CheckoutProperties checkout) {
        this.sessions = sessions;
        this.carts = carts;
        this.session = session;
        this.ctp = ctp;
        this.checkout = checkout;
    }

    /**
     * 6.5 — can this cart enter Payment Only mode? The checks Checkout enforces anyway, run early so the
     * storefront can enable "Proceed to payment" honestly. A missing billing address is NOT reported when
     * a shipping address exists — {@link #startPayment()} copies it (the S4 cart only set shipping).
     */
    public Readiness readiness() {
        String cartId = session.cartIdOrNull();
        if (cartId == null) {
            return new Readiness(false, List.of("cart"), null, null);
        }
        Cart cart = carts.get(cartId);
        List<String> missing = missingFor(cart);
        return new Readiness(missing.isEmpty(), missing, cart.getId(), OrderMapper.money(cart.getTotalPrice()));
    }

    /**
     * 6.2 — the order number for the shopper's CURRENT attempt: deterministic from the cart id + version +
     * date, remembered on the session, reused while the cart version is unchanged. A material cart change
     * (a new version) is a new attempt → a new number; a refresh or a second click is the same attempt →
     * the same number → Checkout can only ever create one order for it (orderNumber is unique).
     */
    public CheckoutAttempt currentAttempt() {
        Cart cart = ownedCart();
        return attemptFor(cart);
    }

    /**
     * 6.1 + 6.2 — start the payment step: fix up the billing address if needed, refuse an unready cart with
     * the missing list, derive / reuse the attempt's order number, create the Checkout Session LATE (it
     * expires), and hand the storefront what the Browser SDK needs plus the order number to confirm by.
     */
    public CheckoutStart startPayment() {
        Cart cart = ownedCart();
        if (cart.getBillingAddress() == null && cart.getShippingAddress() != null) {
            cart = carts.update(cart.getId(), cart.getVersion(), List.of(
                    CartSetBillingAddressActionBuilder.of().address(copyOf(cart)).build()));
        }
        List<String> missing = missingFor(cart);
        if (!missing.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "The cart is not ready for payment — missing: " + String.join(", ", missing));
        }
        CheckoutAttempt attempt = attemptFor(cart);
        CheckoutSession created = sessions.create(cart.getId(), checkout.getApplicationKey(), attempt.orderNumber());
        return new CheckoutStart(created.id(), ctp.getProjectKey(), CheckoutRegion.regionOf(ctp.getApiUrl()),
                created.expiryAt(), attempt.orderNumber(), checkout.getApplicationKey());
    }

    /** 6.10 — the decision this BFF is built for, stated as data the storefront can show. */
    public CheckoutMode mode() {
        return new CheckoutMode(
                "PaymentOnly",
                checkout.getApplicationKey(),
                List.of("cart (S4)", "addresses + shipping method (S4 / S5)", "readiness (6.5)",
                        "the order number — futureOrderNumber (6.2)", "the Checkout Session (6.1)",
                        "reading the order + ledger (6.3 / 6.4)", "capture / cancel / refund via Payment Intents (6.6)",
                        "orderState + the custom state machine (6.7)", "order history (6.8)", "the subscription (6.9)"),
                List.of("the payment UI (Browser SDK paymentFlow)", "the PSP integration (connector)",
                        "the Payment + Transactions on the ledger", "creating the Order from the cart",
                        "paymentState", "automated reversals when order creation fails"),
                "Payment Only keeps LHC's checkout UX and PCI scope out of the BFF; Complete Checkout (checkoutFlow) "
                        + "would also take addresses, shipping and the success page; build-your-own would add the "
                        + "PSP integration and every ledger write to this module.");
    }

    // ---- plumbing ------------------------------------------------------------------------------

    private Cart ownedCart() {
        Cart cart = carts.get(session.requireCartId());
        boolean owned = session.isSignedIn()
                ? session.customerIdOrNull().equals(cart.getCustomerId())
                : session.anonymousId() != null && session.anonymousId().equals(cart.getAnonymousId());
        if (!owned) {
            // IDOR guard: a Checkout Session for someone else's cart would let them pay for — and see — it.
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No active cart for this shopper.");
        }
        return cart;
    }

    private CheckoutAttempt attemptFor(Cart cart) {
        CheckoutAttempt current = session.checkoutAttemptOrNull();
        if (current != null && current.cartId().equals(cart.getId()) && current.cartVersion().equals(cart.getVersion())) {
            return current;
        }
        CheckoutAttempt fresh = new CheckoutAttempt(cart.getId(), cart.getVersion(), orderNumberFor(cart));
        session.setCheckoutAttempt(fresh);
        return fresh;
    }

    /** LHC-20260914-7F3A2C — readable, sortable by day, unique per cart version, not guessable. */
    static String orderNumberFor(Cart cart) {
        try {
            byte[] digest = MessageDigest.getInstance("SHA-256")
                    .digest((cart.getId() + ":" + cart.getVersion()).getBytes(StandardCharsets.UTF_8));
            String hash = HexFormat.of().withUpperCase().formatHex(digest, 0, 3);
            return ORDER_NUMBER_PREFIX + LocalDate.now(ZoneOffset.UTC).format(DAY) + "-" + hash;
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }

    private List<String> missingFor(Cart cart) {
        List<String> missing = new ArrayList<>();
        if (cart.getLineItems() == null || cart.getLineItems().isEmpty()) {
            missing.add("at least one line item");
        }
        if (cart.getShippingAddress() == null) {
            missing.add("shipping address");
        }
        if (cart.getBillingAddress() == null && cart.getShippingAddress() == null) {
            missing.add("billing address");
        }
        if (cart.getShippingInfo() == null) {
            missing.add("shipping method");
        }
        if (cart.getCustomerId() == null && (cart.getCustomerEmail() == null || cart.getCustomerEmail().isBlank())) {
            missing.add("a signed-in customer or a guest email");
        }
        if (cart.getCountry() == null) {
            missing.add("country");
        }
        return missing;
    }

    private static com.commercetools.api.models.common.BaseAddress copyOf(Cart cart) {
        var a = cart.getShippingAddress();
        return BaseAddressBuilder.of().key("billing").country(a.getCountry()).firstName(a.getFirstName())
                .lastName(a.getLastName()).streetName(a.getStreetName()).streetNumber(a.getStreetNumber())
                .postalCode(a.getPostalCode()).city(a.getCity()).build();
    }
}
