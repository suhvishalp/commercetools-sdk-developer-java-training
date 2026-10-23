package com.lifestylehomecorp.customer.api;

import com.lifestylehomecorp.customer.api.dto.PriceContextView;
import com.lifestylehomecorp.customer.api.dto.SessionView;
import com.lifestylehomecorp.customer.application.SessionService;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The session boundary (Session 5 — 5.6 and 5.9): what the storefront may learn about the session,
 * and the price context the catalogue applies for this shopper. Deliberately tiny — the value is the
 * decision it encodes (identity lives in the BFF session; nothing is proven by a request parameter).
 */
@RestController
public class SessionController {

    private final SessionService sessions;

    public SessionController(SessionService sessions) {
        this.sessions = sessions;
    }

    @TaskDescription(
            module = "customer", session = "Session 5", taskNumber = 6,
            title = "Customer group → customer-specific price", tier = "T2", capability = "customer.groups",
            description = "Implement the price context in SessionService.priceContext(...) and make the "
                    + "catalogue use it: the signed-in customer's group id (set on the ShopperSession at sign-in "
                    + "or by PUT /api/account/group — pre-built, a trainer/admin lever) becomes the last open "
                    + "dimension of S2's price selection, so PLP / PDP re-price for the group (the 'vip' price). "
                    + "GET /api/price-context returns the resolved tuple (currency · country · channel · "
                    + "customerGroup) so Canvas and the storefront can SHOW why a price changed. A guest resolves "
                    + "to NO group — never a default one.",
            hint = "Docs: Customer Groups; Product price selection (priceCustomerGroup) "
                    + "(docs.commercetools.com/api/projects/products#price-selection).",
            decisions = {
                    "What a guest resolves to — no group (the ungrouped price IS the guest price), never a default group.",
                    "Who may set the group — never the storefront (it is a pricing lever); the BFF / an admin / a rule.",
                    "How the storefront learns prices changed after login — re-fetch vs a flag on the sign-in response.",
                    "Caching — PLP / PDP responses are per-shopper now; a cache keyed only by store + currency serves VIP prices to guests."
            })
    @GetMapping("/api/price-context")
    public PriceContextView priceContext(@RequestParam(required = false) String priceCurrency,
                                         @RequestParam(required = false) String priceCountry,
                                         @RequestParam(required = false) String priceChannel) {
        return PriceContextView.from(sessions.priceContext(priceCurrency, priceCountry, priceChannel));
    }

    @TaskDescription(
            module = "customer", session = "Session 5", taskNumber = 9,
            title = "The session boundary: where identity lives, who checks it", tier = "T2", capability = "customer.session",
            description = "Decide how the storefront stays signed in, then implement SessionService.current() "
                    + "behind GET /api/session: { signedIn, firstName, customerGroupKey } and NOTHING more. The "
                    + "BFF holds a client-credentials token with least-privilege general scopes and calls the "
                    + "general endpoints; the shopper's identity lives server-side in the ShopperSession, behind "
                    + "one opaque HttpOnly lhc_session cookie. Every account handler resolves the customer from "
                    + "the session (session.requireCustomerId()), never from a request parameter — a customerId "
                    + "parameter is the smell to delete. That is what lets the BFF enforce rules the browser must "
                    + "never be trusted with: set a customer group, preflight the cart merge, build the merge "
                    + "report, filter orders by the session's customer. POST /api/session/sign-out clears the "
                    + "session and mints a fresh anonymousId.",
            hint = "Docs: Authorization — client credentials flow and scopes "
                    + "(docs.commercetools.com/api/authorization, docs.commercetools.com/api/scopes); Customers — "
                    + "authenticate (sign in) (docs.commercetools.com/api/projects/customers#authenticate-sign-in-customer).",
            decisions = {
                    "Where the session lives — an httpOnly SameSite cookie vs a token held in JavaScript (XSS vs CSRF trade).",
                    "The anonymous → authenticated transition — what carries over at sign-in (cart, wishlist) and "
                            + "what happens to anonymousId at sign-out.",
                    "Minimum scopes for the runtime client — a dedicated API client per BFF; a leaked token's blast "
                            + "radius is exactly its scope list."
            })
    @GetMapping("/api/session")
    public SessionView current() {
        return SessionView.from(sessions.current());
    }

    @PostMapping("/api/session/sign-out")
    public SessionView signOut() {
        return SessionView.from(sessions.signOut());
    }
}
