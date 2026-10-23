package com.lifestylehomecorp.cart.application;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.cart.CartAddLineItemActionBuilder;
import com.commercetools.api.models.cart.CartChangeLineItemQuantityActionBuilder;
import com.commercetools.api.models.cart.CartRemoveLineItemActionBuilder;
import com.commercetools.api.models.cart.CartSetLineItemDistributionChannelActionBuilder;
import com.commercetools.api.models.cart.CartSetLineItemInventoryModeActionBuilder;
import com.commercetools.api.models.cart.CartSetLineItemSupplyChannelActionBuilder;
import com.commercetools.api.models.cart.CartSetShippingAddressActionBuilder;
import com.commercetools.api.models.cart.CartSetCustomerEmailActionBuilder;
import com.commercetools.api.models.cart.CartSetShippingMethodActionBuilder;
import com.commercetools.api.models.cart.CartState;
import com.commercetools.api.models.cart.CartUpdateAction;
import com.commercetools.api.models.cart.InventoryMode;
import com.commercetools.api.models.cart.LineItem;
import com.commercetools.api.models.channel.Channel;
import com.commercetools.api.models.common.BaseAddress;
import com.commercetools.api.models.common.Address;
import com.commercetools.api.models.common.BaseAddressBuilder;
import com.commercetools.api.models.recurring_order.PriceSelectionMode;
import com.lifestylehomecorp.cart.domain.ActiveCart;
import com.lifestylehomecorp.cart.domain.CartSummary;
import com.lifestylehomecorp.cart.domain.PickupLocation;
import com.lifestylehomecorp.cart.domain.ShippingOption;
import com.lifestylehomecorp.platform.errors.TaskNotImplementedException;
import com.lifestylehomecorp.platform.session.ShopperSession;
import io.vrap.rmf.base.client.ApiHttpException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.function.LongFunction;

/**
 * Cart orchestration: composes update actions and maps the SDK cart to the domain. It OWNS the
 * concurrency: {@link #withRetry} reads the cart's latest version, applies the change, and retries on
 * a 409 (stale version) — so the storefront never sees {@code version}. This is the "BFF owns version
 * + retry" best practice the course teaches in S4.
 */
@Service
public class CartService {

    private static final int MAX_RETRIES = 3;

    /** The seeded line-item Custom Type that links a bundle's parent and child lines (see the seeder). */
    private static final String BUNDLE_TYPE = "bundle-line";
    private static final String FIELD_BUNDLE_ID = "bundleId"; // on the parent line — the bundle identity
    private static final String FIELD_PARENT_ID = "parentId";  // on each child line — points at the parent

    private static final Logger log = LoggerFactory.getLogger(CartService.class);

    private final CartRepository repo;
    private final ShippingRepository shippingRepo;
    private final BundleRepository bundleRepo;
    private final CustomerAddressRepository customerAddresses;
    private final ChannelReadRepository channels;
    private final ShopperSession session;

    public CartService(CartRepository repo, ShippingRepository shippingRepo, BundleRepository bundleRepo,
                       CustomerAddressRepository customerAddresses, ChannelReadRepository channels, ShopperSession session) {
        this.repo = repo;
        this.shippingRepo = shippingRepo;
        this.bundleRepo = bundleRepo;
        this.customerAddresses = customerAddresses;
        this.channels = channels;
        this.session = session;
    }

    /**
     * 4.1 — the session's cart in the requested STORE. The store is part of the cart's context like its
     * currency: fixed by the CartDraft for the cart's life (the platform prices and restricts a store cart by
     * that store), so "switching store" is a NEW cart, never an update. Hence the rules — mirroring 4.13's
     * currency rule:
     * <ul>
     *   <li>no active cart on the session → create one in the requested store;</li>
     *   <li>the active cart is already in that store (store-less counts as a store) → return it unchanged,
     *       so the storefront can call this on every store sync without side effects;</li>
     *   <li>the store differs and the basket is EMPTY → create a cart in the new store and repoint the
     *       session (the old cart is left to expire);</li>
     *   <li>the store differs and the basket has items → that is the shopper's decision, not ours:
     *       409 {@code store-mismatch: …} unless {@code force} says "start a new basket here".</li>
     * </ul>
     * The cart carries the SESSION's anonymousId (minted on first use, shared with the wishlist) — one guest
     * identity across every resource, so Session 5's sign-in hands the cart AND the shopping list over
     * together. A caller-supplied anonymousId is honoured only when the session has none yet.
     */
    public CartSummary createGuestCart(CartContext ctx, boolean force) {
        Cart existing = activeCartOrNull();
        if (existing != null) {
            String current = existing.getStore() != null ? existing.getStore().getKey() : null;
            String requested = ctx.storeKey() == null || ctx.storeKey().isBlank() ? null : ctx.storeKey();
            if (Objects.equals(current, requested)) {
                return CartMapper.toDomain(existing); // idempotent: same store, same cart
            }
            boolean hasItems = existing.getLineItems() != null && !existing.getLineItems().isEmpty();
            if (hasItems && !force) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "store-mismatch: your basket belongs to "
                        + storeLabel(current) + "; requested " + storeLabel(requested)
                        + ". Empty it or start a new basket.");
            }
        }
        return createAndRemember(ctx);
    }

    /** 4.1 without the force flag — a store mismatch on a non-empty basket is a 409. */
    public CartSummary createGuestCart(CartContext ctx) {
        return createGuestCart(ctx, false);
    }

    /** Create the cart for the session's identity and point the session at it. */
    private CartSummary createAndRemember(CartContext ctx) {
        // A cart belongs to exactly one identity. If the shopper is signed in, the cart is THEIRS —
        // creating it as anonymous leaves it unattached, and Session 6's readiness check then refuses
        // to place an order for nobody (which is the correct behaviour, and a confusing symptom).
        if (session.isSignedIn()) {
            var cart = repo.create(CartContext.forCustomer(ctx.currency(), ctx.country(), ctx.storeKey(),
                    session.customerIdOrNull()));
            session.setActiveCart(cart.getId());
            return CartMapper.toDomain(cart);
        }
        String anonymousId = session.anonymousId() != null ? session.anonymousId()
                : ctx.anonymousId() != null ? ctx.anonymousId() : session.anonymousIdOrCreate();
        var cart = repo.create(CartContext.guest(ctx.currency(), ctx.country(), ctx.storeKey(), anonymousId));
        session.setActiveCart(cart.getId(), anonymousId);
        return CartMapper.toDomain(cart);
    }

    /**
     * The session's cart if it is still usable: null when the session has none, when the platform no longer
     * has it (deleted in the Merchant Center — a 404), or when it is no longer Active (ordered / merged).
     * Any of those means "no active cart" and 4.1 simply creates one.
     */
    private Cart activeCartOrNull() {
        String id = session.cartIdOrNull();
        if (id == null) {
            return null;
        }
        try {
            Cart cart = repo.get(id);
            return cart.getCartState() == null || cart.getCartState() == CartState.ACTIVE ? cart : null;
        } catch (ApiHttpException ex) {
            if (ex.getStatusCode() == 404) {
                return null;
            }
            throw ex;
        }
    }

    private static String storeLabel(String storeKey) {
        return storeKey == null ? "no store" : "store " + storeKey;
    }

    /**
     * 4.12 (pre-built) — the active cart as the PLATFORM sees it, for inspection: query by identity
     * (customerId when signed in, the session's anonymousId as a guest) with cartState=Active, newest
     * first. Compares with the BFF's session pointer — and heals a missing pointer (e.g. after a sign-in
     * whose result carried no cart) by adopting the platform's active cart. A guest whose session never
     * minted an anonymousId has no cart anywhere.
     */
    public ActiveCart inspectActiveCart() {
        boolean signedIn = session.isSignedIn();
        String identity = signedIn ? "customer" : "guest";
        String anonymousId = signedIn ? null : session.anonymousId();
        List<Cart> active = signedIn ? repo.findActiveCartsOfCustomer(session.customerIdOrNull())
                : anonymousId == null ? List.of() : repo.findActiveCartsOfGuest(anonymousId);
        String sessionCartId = session.cartIdOrNull();
        if (active.isEmpty()) {
            String note = signedIn
                    ? "This customer has no Active cart on the platform" + (sessionCartId != null
                            ? " — the session still points at " + sessionCartId + " (ordered, merged or someone else's)."
                            : ". POST /api/cart creates one as the customer's.")
                    : anonymousId == null
                            ? "No guest identity yet — the session mints an anonymousId with the first cart (4.1) or wishlist."
                            : "No Active cart carries this guest's anonymousId" + (sessionCartId != null
                                    ? " — the session's cart " + sessionCartId + " was handed to a customer or ordered."
                                    : " — create one with POST /api/cart (4.1).");
            return new ActiveCart(identity, CartSummary.empty(), null, sessionCartId, sessionCartId == null, false, 0, note);
        }
        Cart resolved = active.get(0);
        boolean matches = resolved.getId().equals(sessionCartId);
        boolean repointed = false;
        if (sessionCartId == null) {
            session.setActiveCart(resolved.getId()); // self-heal: the platform knows the cart, the session forgot it
            repointed = true;
        }
        int others = active.size() - 1;
        String note = (signedIn ? "The customer's" : "The guest's") + " most recently modified Active cart"
                + (others > 0 ? " (" + others + " older Active cart" + (others == 1 ? "" : "s") + " also exist — sign-in merges into THIS one)" : "")
                + (repointed ? "; the session had no cart and now points at it."
                        : matches ? "; the session pointer agrees." : "; the session points elsewhere (" + sessionCartId + ") — stale pointer.");
        return new ActiveCart(identity, CartMapper.toDomain(resolved), stateOf(resolved), sessionCartId,
                matches || repointed, repointed, others, note);
    }

    private static String stateOf(Cart cart) {
        return cart.getCartState() == null ? null : cart.getCartState().getJsonName();
    }

    /**
     * 4.10 (pre-built) — the cart summary the storefront re-reads after every write. Never throws on an
     * empty (or not-yet-created) cart, so the bag can show its empty state right after 4.1.
     */
    public CartSummary summary() {
        String id = session.cartIdOrNull();
        return id == null ? CartSummary.empty() : CartMapper.toDomain(repo.get(id));
    }

    /** 4.2 — add a line item (SKU × qty). */
    public CartSummary addLineItem(String sku, long quantity) {
        return addLineItem(sku, quantity, null, null);
    }

    /**
     * 4.2 + 4.5 — add a line item with its fulfilment chosen up front: the distribution channel prices the
     * line from the channel the storefront displayed (otherwise the cart falls back to the default price),
     * the supply channel sources it from a pickup store. Either key may be null.
     */
    public CartSummary addLineItem(String sku, long quantity, String distributionKey, String supplyKey) {
        var action = CartAddLineItemActionBuilder.of().sku(sku).quantity(quantity);
        if (distributionKey != null && !distributionKey.isBlank()) {
            action.distributionChannel(c -> c.key(distributionKey));
        }
        if (supplyKey != null && !supplyKey.isBlank()) {
            action.supplyChannel(c -> c.key(supplyKey));
        }
        return mutate(List.of(action.build()));
    }

    /** 4.2 — change a line's quantity (0 removes it). */
    public CartSummary changeQuantity(String lineItemId, long quantity) {
        return mutate(List.of(
                CartChangeLineItemQuantityActionBuilder.of().lineItemId(lineItemId).quantity(quantity).build()));
    }

    /**
     * 4.2 / 4.3 — remove a line. If the line is a bundle PARENT, its children are removed in the SAME
     * update (the bundle behaves as one unit); an ordinary line just removes itself.
     */
    public CartSummary removeLineItem(String lineItemId) {
        Cart cart = repo.get(session.requireCartId());
        List<CartUpdateAction> actions = new ArrayList<>();
        actions.add(CartRemoveLineItemActionBuilder.of().lineItemId(lineItemId).build());

        String bundleId = bundleIdOf(cart, lineItemId);
        if (bundleId != null) {
            for (LineItem li : cart.getLineItems()) {
                if (bundleId.equals(CartMapper.customString(li, FIELD_PARENT_ID))) {
                    actions.add(CartRemoveLineItemActionBuilder.of().lineItemId(li.getId()).build());
                }
            }
        }
        return mutate(actions);
    }

    /**
     * 4.3 — add a bundle as a group of line items in ONE update: a parent (the bundle product, priced
     * externally at 0 — it has no own price) carrying {@code bundleId}, plus one child per component
     * (real line item) carrying {@code parentId}. The seeded {@code bundle-saving} Cart Discount books
     * the saving on the children (predicate {@code custom.parentId is defined}) — the catalogue stays
     * truthful and finance can report the promotion.
     */
    public CartSummary addBundle(String bundleKey) {
        // TODO (Task 4.3): resolve the bundle's components (bundleRepo.resolve — trainer-provided), then
        // in ONE update add a parent line (the bundle product, externalPrice 0) carrying custom.bundleId,
        // plus one child per component carrying custom.parentId. A non-bundle key is a 4xx, not a partial
        // cart. The seeded bundle-saving Cart Discount books the saving. Decisions in the @TaskDescription.
        throw new TaskNotImplementedException("4.3");
    }

    /**
     * 4.4 — add a subscription line: same addLineItem, plus recurrenceInfo binding a RecurrencePolicy
     * and a required priceSelectionMode. The mode governs how future orders are priced (S6), not this
     * cart line: Fixed locks the subscribe-time price; Dynamic re-selects the price each cycle. We
     * default to Fixed (price stability); it is overridable.
     */
    public CartSummary addRecurringLineItem(String sku, String policyKey, String priceMode) {
        // TODO (Task 4.4): the same addLineItem as 4.2, PLUS recurrenceInfo binding a RecurrencePolicy
        // (by key, e.g. "monthly") AND a required priceSelectionMode (Fixed/Dynamic). Default the policy
        // to "monthly" and the mode to Fixed. Goal + hint in the @TaskDescription.
        throw new TaskNotImplementedException("4.4");
    }

    /**
     * 4.5 — per-line fulfilment, changeable after adding: distribution channel (price) and/or supply channel
     * (source / pickup location). {@code null} leaves a channel as it is; an EMPTY string removes it — the
     * storefront's "Delivery" choice clears the supply channel so stock comes from the default inventory.
     */
    public CartSummary setLineItemChannel(String lineItemId, String distributionKey, String supplyKey) {
        List<CartUpdateAction> actions = new ArrayList<>();
        if (distributionKey != null) {
            var a = CartSetLineItemDistributionChannelActionBuilder.of().lineItemId(lineItemId);
            if (!distributionKey.isBlank()) {
                a.distributionChannel(c -> c.key(distributionKey));
            }
            actions.add(a.build()); // no channel = remove
        }
        if (supplyKey != null) {
            var a = CartSetLineItemSupplyChannelActionBuilder.of().lineItemId(lineItemId);
            if (!supplyKey.isBlank()) {
                a.supplyChannel(c -> c.key(supplyKey));
            }
            actions.add(a.build()); // no channel = remove
        }
        return actions.isEmpty() ? activeCart() : mutate(actions);
    }

    /**
     * 4.5 — where the shopper may collect: the supply channels that have an ADDRESS. A warehouse holds stock
     * but has no shop floor; a pickup store has both. (Pre-built plumbing for the storefront's fulfilment
     * choice; the cart module reads channels itself — domain modules depend on platform only.)
     */
    public List<PickupLocation> pickupLocations() {
        List<PickupLocation> out = new ArrayList<>();
        for (Channel ch : channels.supplyChannels()) {
            if (ch.getAddress() == null) {
                continue;
            }
            var a = ch.getAddress();
            String street = a.getStreetName() == null ? null
                    : a.getStreetName() + (a.getStreetNumber() != null ? " " + a.getStreetNumber() : "");
            out.add(new PickupLocation(ch.getId(), ch.getKey(), CartMapper.localizedOr(ch.getName(), ch.getKey()),
                    CartMapper.localizedOr(ch.getDescription(), null), street, a.getCity(), a.getCountry()));
        }
        return out;
    }

    /** 4.6 — per-line inventory mode override (None / ReserveOnCart / ReserveOnOrder / TrackOnly). */
    public CartSummary setLineItemInventoryMode(String lineItemId, String mode) {
        // TODO (Task 4.6): apply setLineItemInventoryMode with the requested mode (map the string to the
        // InventoryMode enum — see the inventoryMode(...) helper below). Homework extends this with the
        // read-side stock gate. Goal + hint in the @TaskDescription.
        throw new TaskNotImplementedException("4.6");
    }

    /**
     * 4.7 — set the shipping address (enables shipping matching + tax → taxedPrice), then settle the
     * delivery choice the way a real storefront does. The platform refuses an address the current method
     * has no rate for (another zone / currency), so a selected method is cleared in the SAME update as the
     * address; afterwards the shopper's previous method is re-applied if it still matches, else the
     * platform's default method, else the first match. The shopper can still change it (4.8's PUT).
     */
    public CartSummary setShippingAddress(AddressInput in) {
        BaseAddress address = BaseAddressBuilder.of()
                .country(in.country())
                .firstName(in.firstName())
                .lastName(in.lastName())
                .streetName(in.streetName())
                .streetNumber(in.streetNumber())
                .postalCode(in.postalCode())
                .city(in.city())
                .build();
        CartSummary current = activeCart();
        List<CartUpdateAction> actions = new ArrayList<>();
        if (current.shippingMethodId() != null) {
            actions.add(CartSetShippingMethodActionBuilder.of().build()); // no method = remove the current one
        }
        actions.add(CartSetShippingAddressActionBuilder.of().address(address).build());
        CartSummary updated = mutate(actions);
        return ensureShippingMethod(updated, current.shippingMethodId());
    }

    /**
     * 4.8 — the shipping methods valid for the cart, each with the rate that matched (zone + currency +
     * value tier) and whether it is the one currently on the cart. Empty until an address is set — the
     * platform matches on the shipping address, so there is nothing to offer before 4.7.
     */
    public List<ShippingOption> shippingOptions() {
        CartSummary cart = activeCart();
        return cart.hasShippingAddress() ? matchingOptions(cart) : List.of();
    }

    /** 4.8 — select a shipping method (adds shippingInfo to totalPrice). */
    public CartSummary setShippingMethod(String shippingMethodId) {
        return mutate(List.of(CartSetShippingMethodActionBuilder.of()
                .shippingMethod(sm -> sm.id(shippingMethodId)).build()));
    }

    /** Guest checkout contact (S6 readiness wants a customer OR an email): setCustomerEmail on the cart. */
    public CartSummary setCustomerEmail(String email) {
        if (email == null || email.isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "An email address is required.");
        }
        return mutate(List.of(CartSetCustomerEmailActionBuilder.of().email(email.trim()).build()));
    }

    /**
     * Pre-fill from the account (S5 → S4): after sign-in / sign-up the storefront calls this once so the
     * customer's default shipping address (5.5) lands on the cart (4.7) and a delivery method is selected
     * (4.8) — the "sign in and your delivery details are already there" experience. Idempotent: an
     * address already on the cart is kept, a guest cart is left alone, no cart is an empty summary.
     */
    public CartSummary prefillFromAccount() {
        if (session.cartIdOrNull() == null) {
            return CartSummary.empty();
        }
        CartSummary cart = activeCart();
        if (!cart.hasShippingAddress() && session.isSignedIn()) {
            Address book = customerAddresses.defaultShippingAddress(session.customerIdOrNull());
            if (book != null) {
                return setShippingAddress(new AddressInput(book.getCountry(), book.getFirstName(), book.getLastName(),
                        book.getStreetName(), book.getStreetNumber(), book.getPostalCode(), book.getCity()));
            }
        }
        return ensureShippingMethod(cart);
    }

    /**
     * The delivery default: with an address on the cart, make sure a valid shipping method is selected —
     * keep a still-matching one, else the default method, else the first match. Nothing matching (no
     * zone ships there) leaves the cart as it is; the storefront says so. Tolerates 4.8 not being
     * implemented yet (the matching read is the task's stub) so 4.7 keeps working on the starter.
     */
    CartSummary ensureShippingMethod(CartSummary cart) {
        return ensureShippingMethod(cart, null);
    }

    /** As above, preferring {@code preferredId} (the shopper's earlier choice) when it is still valid. */
    CartSummary ensureShippingMethod(CartSummary cart, String preferredId) {
        if (!cart.hasShippingAddress()) {
            return cart;
        }
        List<ShippingOption> options;
        try {
            options = matchingOptions(cart);
        } catch (TaskNotImplementedException notYet) {
            return cart; // 4.8's matching read is still a stub — the address is saved, the method waits
        } catch (ApiHttpException ex) {
            log.warn("Shipping-method matching failed for cart {} (HTTP {}); leaving the delivery choice open",
                    cart.id(), ex.getStatusCode());
            return cart;
        }
        if (options.isEmpty()) {
            return cart;
        }
        if (cart.shippingMethodId() != null && options.stream().anyMatch(o -> o.id().equals(cart.shippingMethodId()))) {
            return cart; // the current method still matches the (new) address
        }
        ShippingOption pick = options.stream().filter(o -> o.id().equals(preferredId)).findFirst()
                .or(() -> options.stream().filter(ShippingOption::isDefault).findFirst())
                .orElse(options.get(0));
        return setShippingMethod(pick.id());
    }

    private List<ShippingOption> matchingOptions(CartSummary cart) {
        return shippingRepo.matchingMethods(cart.id()).getResults().stream()
                .map(m -> CartMapper.toShippingOption(m, cart.currency(), cart.shippingMethodId()))
                .toList();
    }

    /** The active cart, mapped — the plumbing read (never the 4.10 task method, which may be a stub). */
    private CartSummary activeCart() {
        return CartMapper.toDomain(repo.get(session.requireCartId()));
    }

    /** 4.9 — apply a discount code (promo); a match lowers the total and adds a savings line. */
    public CartSummary applyDiscountCode(String code) {
        return withRetry(version -> repo.addDiscountCode(session.requireCartId(), version, code));
    }

    /** 4.9 — remove a previously applied discount code. */
    public CartSummary removeDiscountCode(String discountCodeId) {
        return withRetry(version -> repo.removeDiscountCode(session.requireCartId(), version, discountCodeId));
    }

    /** Apply a batch of update actions to the active cart, owning the version (see {@link #withRetry}). */
    CartSummary mutate(List<CartUpdateAction> actions) {
        return withRetry(version -> repo.update(session.requireCartId(), version, actions));
    }

    /**
     * Own the version: read the latest cart, apply {@code call} with its current version, and on a 409
     * (someone else moved the version) re-read and replay. Every write in this service funnels through
     * here, so the storefront never handles {@code version} or retries.
     */
    private CartSummary withRetry(LongFunction<Cart> call) {
        String cartId = session.requireCartId();
        ApiHttpException last = null;
        for (int attempt = 0; attempt <= MAX_RETRIES; attempt++) {
            var current = repo.get(cartId);
            try {
                return CartMapper.toDomain(call.apply(current.getVersion()));
            } catch (ApiHttpException ex) {
                if (ex.getStatusCode() != 409) {
                    throw ex;
                }
                last = ex; // stale version — refetch + replay
            }
        }
        throw last;
    }

    /** The bundle identity ({@code custom.bundleId}) of a given line, or null if it is not a bundle parent. */
    private static String bundleIdOf(Cart cart, String lineItemId) {
        for (LineItem li : cart.getLineItems()) {
            if (li.getId().equals(lineItemId)) {
                return CartMapper.customString(li, FIELD_BUNDLE_ID);
            }
        }
        return null;
    }

    /** The active cart's currency — the scope an external bundle-parent price must be quoted in. */
    private String cartCurrency() {
        Cart cart = repo.get(session.requireCartId());
        return cart.getTotalPrice() != null ? cart.getTotalPrice().getCurrencyCode() : "EUR";
    }

    private static InventoryMode inventoryMode(String mode) {
        if (mode == null) {
            return InventoryMode.NONE;
        }
        return switch (mode) {
            case "ReserveOnCart" -> InventoryMode.RESERVE_ON_CART;
            case "ReserveOnOrder" -> InventoryMode.RESERVE_ON_ORDER;
            case "TrackOnly" -> InventoryMode.TRACK_ONLY;
            default -> InventoryMode.NONE;
        };
    }
}
