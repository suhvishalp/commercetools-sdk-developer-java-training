package com.lifestylehomecorp.platform.session;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.WebUtils;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

/**
 * Trainer-provided identity plumbing shared by every domain module: WHO is shopping and WHAT is theirs.
 *
 * <ul>
 *   <li><b>anonymousId</b> — the guest identity (S4); carts / shopping lists / orders carry it, and
 *       sign-up / sign-in with it hands those resources to the customer (S5).</li>
 *   <li><b>cartId</b> — the active cart (S4). The version is NOT held here — services fetch the latest
 *       before every update (fetch-before-update + 409 retry).</li>
 *   <li><b>storeKey</b> — the store the shopper's cart lives in (S4). Every cart / order / shopping-list call
 *       goes through {@code apiRoot.inStore(storeKey)}, so the store is the scope of the whole basket; before
 *       any cart exists it is the configured default store ({@code lhc.store.default-key}).</li>
 *   <li><b>customerId / customerGroupId</b> — set at sign-in (S5). {@code catalog} reads the group into
 *       price selection (5.6); {@code customer} resolves "me" from here, never from a request param (5.9).</li>
 *   <li><b>checkoutAttempt</b> — the order number promised to Checkout for the current cart version (S6).</li>
 * </ul>
 *
 * <p><b>One session per browser.</b> The state lives in the servlet {@link HttpSession}, so the browser holds
 * exactly one opaque cookie ({@code lhc_session}: HttpOnly, SameSite=Lax — see application.properties) and
 * nothing it holds can call commercetools. The rules, the same as the CIL track's {@code cil_session}:
 * <ul>
 *   <li><b>Reads never create a session</b>; the first write does (a cart, a wishlist, a sign-in) — browsing
 *       and crawlers leave no session and no cart behind.</li>
 *   <li><b>Sign-in rotates the session id</b> (session-fixation defence); <b>sign-out invalidates</b> it.</li>
 * </ul>
 * Outside a web request (background threads, unit tests) the facade falls back to one local state.
 * A multi-instance BFF moves the HttpSession to Redis with Spring Session — no change to this class.
 */
@Component
public class ShopperSession {

    /** HttpSession attribute that holds this shopper's {@link State}. */
    static final String ATTRIBUTE = ShopperSession.class.getName() + ".state";

    /**
     * The order number the BFF promised Checkout ({@code futureOrderNumber}) for a given cart at a given
     * version (S6, task 6.2). One attempt = one number = at most one order; a material cart change (new
     * version) is a new attempt. A multi-instance BFF without shared sessions would persist it as a Custom
     * Field on the cart.
     */
    public record CheckoutAttempt(String cartId, Long cartVersion, String orderNumber) implements Serializable {
    }

    /** Everything one shopper's session holds. Serializable, so a session store can persist it. */
    static final class State implements Serializable {
        @Serial
        private static final long serialVersionUID = 1L;
        private String anonymousId;
        private String cartId;
        private String storeKey;
        private String customerId;
        private String customerGroupId;
        private CheckoutAttempt checkoutAttempt;
    }

    /** Read-only view for requests that have no session yet. */
    private static final State NONE = new State();

    /** Used only outside a web request (background threads, tests). */
    private final State local = new State();

    /** The store a shopper is in before they have a cart — the sample data's store unless configured otherwise. */
    private final String defaultStoreKey;

    @Autowired
    public ShopperSession(@Value("${lhc.store.default-key:b2c-retail-store}") String defaultStoreKey) {
        this.defaultStoreKey = defaultStoreKey;
    }

    /** Tests and tools: the sample data's store as the default. */
    public ShopperSession() {
        this("b2c-retail-store");
    }

    // ---- cart (S4) ----------------------------------------------------------------------------

    /** Remember the active cart, the store it lives in, and the anonymous id it was created with. */
    public void setActiveCart(String id, String anonId, String storeKey) {
        State s = write();
        synchronized (s) {
            s.cartId = id;
            if (storeKey != null && !storeKey.isBlank()) {
                s.storeKey = storeKey;
            }
            if (anonId != null) {
                s.anonymousId = anonId;
            }
        }
    }

    /** Re-point the session at another cart in the SAME store — after sign-in the customer's (merged) cart. */
    public void setActiveCart(String id) {
        State s = write();
        synchronized (s) {
            s.cartId = id;
        }
    }

    /**
     * The store every cart / order / shopping-list call is scoped to: {@code apiRoot.inStore(storeKey())…}.
     * The active cart's store, or the default store before the shopper has one.
     */
    public String storeKey() {
        String key = read().storeKey;
        return key == null || key.isBlank() ? defaultStoreKey : key;
    }

    /** The default store (the sample data's), for a request that names none. */
    public String defaultStoreKey() {
        return defaultStoreKey;
    }

    public String cartIdOrNull() {
        return read().cartId;
    }

    public String requireCartId() {
        String id = cartIdOrNull();
        if (id == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "No active cart — create one first (POST /api/cart).");
        }
        return id;
    }

    public String anonymousId() {
        return read().anonymousId;
    }

    /**
     * The guest's anonymousId, minting + remembering one if none exists yet — so a wishlist can be
     * scoped to the guest even before the first cart is created (the shopping list, S4).
     */
    public String anonymousIdOrCreate() {
        State s = write();
        synchronized (s) {
            if (s.anonymousId == null) {
                s.anonymousId = UUID.randomUUID().toString();
            }
            return s.anonymousId;
        }
    }

    // ---- checkout attempt (S6) -----------------------------------------------------------------

    public CheckoutAttempt checkoutAttemptOrNull() {
        return read().checkoutAttempt;
    }

    /** Remember the attempt for this cart version; replaces any earlier attempt (a new version = a new attempt). */
    public void setCheckoutAttempt(CheckoutAttempt attempt) {
        State s = write();
        synchronized (s) {
            s.checkoutAttempt = attempt;
        }
    }

    /** The order was placed (or the cart is gone): forget the attempt and the cart together. */
    public void clearCheckout() {
        State s = read();
        if (s == NONE) {
            return;
        }
        synchronized (s) {
            s.checkoutAttempt = null;
            s.cartId = null;
        }
    }

    // ---- identity (S5) -------------------------------------------------------------------------

    public boolean isSignedIn() {
        return customerIdOrNull() != null;
    }

    public String customerIdOrNull() {
        return read().customerId;
    }

    /** The signed-in customer — a 401 when there is none (the "me" endpoints need a shopper). */
    public String requireCustomerId() {
        String id = customerIdOrNull();
        if (id == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
                    "Not signed in — POST /api/customers/login (or /signup) first.");
        }
        return id;
    }

    /** The customer group ID (price-selection scope) — null for a guest; a guest has NO group. */
    public String customerGroupIdOrNull() {
        return read().customerGroupId;
    }

    /**
     * Record a successful sign-up / sign-in. The group may be null (most customers have none). The session
     * id is rotated first: an id a guest had (or was handed) never becomes a signed-in session.
     */
    public void signedIn(String id, String groupId) {
        rotateSessionId();
        State s = write();
        synchronized (s) {
            s.customerId = id;
            s.customerGroupId = groupId;
        }
    }

    public void setCustomerGroupId(String groupId) {
        State s = write();
        synchronized (s) {
            s.customerGroupId = groupId;
        }
    }

    /**
     * Sign out: forget the customer AND their cart. The session is invalidated, so the browser's cookie stops
     * meaning anything; the next write starts a fresh session with a fresh anonymousId — the old one belonged
     * to a signed-in shopper and must not leak into the next guest session.
     */
    public void signOut() {
        HttpServletRequest req = currentRequest();
        if (req == null) {
            synchronized (local) {
                local.customerId = null;
                local.customerGroupId = null;
                local.cartId = null;
                local.storeKey = null;
                local.checkoutAttempt = null;
                local.anonymousId = UUID.randomUUID().toString();
            }
            return;
        }
        HttpSession session = req.getSession(false);
        if (session != null) {
            session.invalidate();
        }
    }

    // ---- per-browser storage -------------------------------------------------------------------

    /** This shopper's state for reading — never creates a session. */
    private State read() {
        HttpServletRequest req = currentRequest();
        if (req == null) {
            return local;
        }
        HttpSession session = req.getSession(false);
        if (session == null) {
            return NONE;
        }
        Object s = session.getAttribute(ATTRIBUTE);
        return s instanceof State state ? state : NONE;
    }

    /** This shopper's state for writing — creates the session (and so the cookie) on first use. */
    private State write() {
        HttpServletRequest req = currentRequest();
        if (req == null) {
            return local;
        }
        HttpSession session = req.getSession(true);
        synchronized (WebUtils.getSessionMutex(session)) {
            Object s = session.getAttribute(ATTRIBUTE);
            if (s instanceof State state) {
                return state;
            }
            State fresh = new State();
            session.setAttribute(ATTRIBUTE, fresh);
            return fresh;
        }
    }

    private void rotateSessionId() {
        HttpServletRequest req = currentRequest();
        if (req != null && req.getSession(false) != null) {
            req.changeSessionId();
        }
    }

    private static HttpServletRequest currentRequest() {
        RequestAttributes attrs = RequestContextHolder.getRequestAttributes();
        return attrs instanceof ServletRequestAttributes sra ? sra.getRequest() : null;
    }
}
