package com.lifestylehomecorp.cart.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartUpdateAction;

import java.util.List;

/**
 * The cart SDK gateway (implemented in infrastructure). Returns RAW SDK {@link Cart}; the
 * {@link CartService} maps to the domain. Participants implement the SDK call in each method (T1);
 * the service owns version + 409-retry around {@link #update}.
 *
 * <p><b>Every call is in-store</b>: {@code apiRoot.inStore(storeKey).carts()…}, not the project-wide carts endpoint. The
 * store is the scope of the basket — its prices, channels and the customers allowed in it — and an in-store call
 * cannot touch a cart of another store. The service passes the session's store ({@code ShopperSession.storeKey()}).
 */
public interface CartRepository {

    /** 4.1 — create the guest cart from a {@link CartContext}, in the context's store. */
    Cart create(CartContext ctx);

    /** Fetch the current cart (used by the service to read the latest version before an update). */
    Cart get(String storeKey, String cartId);

    /** 4.2 — apply a batch of update actions with the cart's current version. */
    Cart update(String storeKey, String cartId, Long version, List<CartUpdateAction> actions);

    /** 4.9 — apply a discount code (promo). The platform validates it against active Cart Discounts. */
    Cart addDiscountCode(String storeKey, String cartId, Long version, String code);

    /** 4.9 — remove a previously applied discount code by its id. */
    Cart removeDiscountCode(String storeKey, String cartId, Long version, String discountCodeId);

    /**
     * 4.12 (pre-built) — the customer's Active carts, most recently modified first: the FIRST is the one
     * the platform treats as active (sign-in merges into it, the storefront should show it).
     */
    List<Cart> findActiveCartsOfCustomer(String storeKey, String customerId);

    /** 4.12 (pre-built) — the guest's Active carts (by anonymousId), most recently modified first. */
    List<Cart> findActiveCartsOfGuest(String storeKey, String anonymousId);
}
