package com.lifestylehomecorp.cart.api;

import com.lifestylehomecorp.cart.api.dto.ActiveCartView;
import com.lifestylehomecorp.cart.api.dto.AddBundleRequest;
import com.lifestylehomecorp.cart.api.dto.AddLineItemRequest;
import com.lifestylehomecorp.cart.api.dto.CartView;
import com.lifestylehomecorp.cart.api.dto.ChangeQuantityRequest;
import com.lifestylehomecorp.cart.api.dto.CustomerEmailRequest;
import com.lifestylehomecorp.cart.api.dto.PickupLocationView;
import com.lifestylehomecorp.cart.api.dto.DiscountCodeRequest;
import com.lifestylehomecorp.cart.api.dto.SetChannelRequest;
import com.lifestylehomecorp.cart.api.dto.SetInventoryModeRequest;
import com.lifestylehomecorp.cart.api.dto.SetShippingMethodRequest;
import com.lifestylehomecorp.cart.api.dto.ShippingAddressRequest;
import com.lifestylehomecorp.cart.api.dto.ShippingOptionView;
import com.lifestylehomecorp.cart.application.AddressInput;
import com.lifestylehomecorp.cart.application.CartContext;
import com.lifestylehomecorp.cart.application.CartService;
import com.lifestylehomecorp.platform.annotations.TaskDescription;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Cart write model HTTP contract (Session 4 — "Fill the Basket"). The course's first write surface:
 * every mutation is an update action on a stateful cart carrying its version; the BFF owns version +
 * 409-retry (see {@link CartService}), so the storefront just states intent. Cart identity is
 * trainer-provided plumbing (see {@code com.lifestylehomecorp.platform.session.ShopperSession}, shared
 * with Session 5's identity — the same session carries the signed-in customer).
 */
@RestController
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 1,
            title = "Create the guest cart", tier = "T1", capability = "cart.create",
            description = "Implement CartRepository.create(...) in the cart module's infrastructure layer — "
                    + "POST a CartDraft (currency + country + anonymousId + inventoryMode) IN THE STORE — "
                    + "apiRoot.inStore(ctx.storeKey()).carts(), never the project-wide apiRoot.carts() — and return "
                    + "the raw SDK Cart; the service stores the cart id on the session and maps it to a domain "
                    + "cart. This is the course's first WRITE: POST /api/cart makes an empty guest cart the "
                    + "storefront can add to. The STORE is part of the cart's context like its currency — "
                    + "fixed by the draft for the cart's life (a store cart is priced and restricted by that "
                    + "store), so a store switch is a NEW cart: the pre-built service returns the existing cart "
                    + "when the store matches, re-creates an EMPTY basket in the new store, and answers 409 "
                    + "store-mismatch for a basket with items unless the shopper chose force=true (mirrors "
                    + "4.13's currency rule). The response carries storeKey so the storefront can tell.",
            hint = "Docs: Carts — create a Cart in a Store "
                    + "(docs.commercetools.com/api/projects/carts#create-cart-in-store).")
    @PostMapping("/api/cart")
    public CartView create(@RequestParam(required = false) String store,
                           @RequestParam(required = false, defaultValue = "EUR") String currency,
                           @RequestParam(required = false, defaultValue = "DE") String country,
                           @RequestParam(required = false, defaultValue = "false") boolean force) {
        return CartViewMapper.toView(cartService.createGuestCart(
                CartContext.guest(currency, country, store, null), force)); // identity resolved by the service: customer if signed in, else the session's guest id
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 2,
            title = "Add & manage line items", tier = "T1", capability = "cart.lineItems",
            description = "Implement CartRepository.update(storeKey, cartId, version, actions) in the cart module's "
                    + "infrastructure layer — POST (in-store: apiRoot.inStore(storeKey).carts()) a CartUpdate carrying the cart's current version + a list "
                    + "of update actions, returning the raw SDK Cart. The service composes addLineItem / "
                    + "changeLineItemQuantity / removeLineItem and OWNS the version: it reads the latest cart, "
                    + "applies the update, and retries on a 409 (stale version) — so the storefront just says "
                    + "'add SKU × qty'. POST/PATCH/DELETE /api/cart/line-items drive the cart drawer.",
            hint = "Docs: Carts — update actions & optimistic concurrency (version) "
                    + "(docs.commercetools.com/api/projects/carts#update-actions).")
    @PostMapping("/api/cart/line-items")
    public CartView addLineItem(@RequestBody AddLineItemRequest req) {
        long qty = req.quantity() == null ? 1L : req.quantity();
        return CartViewMapper.toView(cartService.addLineItem(req.sku(), qty, req.distributionChannelKey(), req.supplyChannelKey()));
    }

    @PatchMapping("/api/cart/line-items/{lineItemId}")
    public CartView changeQuantity(@PathVariable String lineItemId, @RequestBody ChangeQuantityRequest req) {
        return CartViewMapper.toView(cartService.changeQuantity(lineItemId, req.quantity()));
    }

    @DeleteMapping("/api/cart/line-items/{lineItemId}")
    public CartView removeLineItem(@PathVariable String lineItemId) {
        return CartViewMapper.toView(cartService.removeLineItem(lineItemId));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 3,
            title = "Add a bundle to the cart", tier = "T2", capability = "cart.bundles",
            description = "Turn the catalog bundle into a coherent cart line group in ONE update: a parent "
                    + "line (the bundle product, priced externally at 0 — it has no own price) carrying the "
                    + "bundle-line custom type's bundleId as the bundle identity, plus one child line per "
                    + "component (a real line item — real inventory / tax / fulfilment) carrying parentId "
                    + "pointing back at it. The seeded bundle-saving Cart Discount books the saving on the "
                    + "children (predicate custom.parentId is defined). Resolve the components with the cart's "
                    + "OWN bundle read (no dependency on the catalog module). POST /api/cart/bundles adds the "
                    + "group; removing the parent cascades to its children in one call.",
            hint = "Docs: Carts addLineItem with custom fields; Cart Discounts (lineItems target) "
                    + "(docs.commercetools.com/api/projects/carts#add-lineitem).",
            decisions = {
                    "The cart shape — parent + children linked by a custom field vs one opaque line vs custom "
                            + "line items (children as real line items keep inventory / tax / fulfilment correct).",
                    "Where the saving lives — a Cart Discount on the children vs a hard-coded bundle price "
                            + "(keep the catalogue truthful; the promotion stays reportable).",
                    "The discount predicate — how the Cart Discount recognises the bundle "
                            + "(custom.parentId is defined) without firing on loose components."
            })
    @PostMapping("/api/cart/bundles")
    public CartView addBundle(@RequestBody AddBundleRequest req) {
        return CartViewMapper.toView(cartService.addBundle(req.bundleKey()));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 4,
            title = "Recurring / subscription line item", tier = "T1", capability = "cart.recurring",
            description = "Add a subscription line — the same addLineItem, plus recurrenceInfo bound to a "
                    + "seeded RecurrencePolicy (e.g. \"monthly\") and a required priceSelectionMode so the "
                    + "line is billed on a schedule at its recurrence-scoped (subscription) price. Implement "
                    + "the recurring addLineItem in CartService.addRecurringLineItem(...). POST "
                    + "/api/cart/line-items?recurring=true adds a \"Subscribe & save — every month\" line. "
                    + "priceMode picks Fixed (lock the subscribe-time price) vs Dynamic (re-price each cycle) "
                    + "— it governs future orders (Session 6), not this cart line; here the payoff is the "
                    + "subscription line in the cart.",
            hint = "Docs: Recurring Orders — RecurrencePolicy + LineItem recurrenceInfo + PriceSelectionMode "
                    + "(docs.commercetools.com/api/projects/recurring-orders).")
    @PostMapping(value = "/api/cart/line-items", params = "recurring")
    public CartView addRecurringLineItem(@RequestBody AddLineItemRequest req,
                                         @RequestParam(name = "recurrencePolicy", required = false) String recurrencePolicy,
                                         @RequestParam(name = "priceMode", required = false) String priceMode) {
        return CartViewMapper.toView(cartService.addRecurringLineItem(req.sku(), recurrencePolicy, priceMode));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 5,
            title = "Fulfilment channel: pickup vs delivery", tier = "T1", capability = "cart.channel",
            description = "Set the per-line fulfilment channel: setLineItemDistributionChannel drives the "
                    + "channel PRICE (the S2/S3 channel price, now shopper-chosen), setLineItemSupplyChannel "
                    + "sets the inventory SOURCE / pickup location — the two channel roles (BOPIS). "
                    + "PUT /api/cart/line-items/{id}/channel picks deliver-by-shipping vs pick-up-in-store: a key "
                    + "sets the channel; an empty string means delivery, sourced from the store's delivery inventory "
                    + "channel (its first supply channel without an address) — also the default when a line is added "
                    + "without a pickup store. The storefront offers the "
                    + "choice on the PDP (POST /api/cart/line-items also takes the two keys) AND per line in the "
                    + "cart; GET /api/cart/pickup-locations lists the supply channels that have an address.",
            hint = "Docs: Carts — setLineItemDistributionChannel / setLineItemSupplyChannel "
                    + "(docs.commercetools.com/api/projects/carts#set-lineitem-distributionchannel).")
    @PutMapping("/api/cart/line-items/{lineItemId}/channel")
    public CartView setChannel(@PathVariable String lineItemId, @RequestBody SetChannelRequest req) {
        return CartViewMapper.toView(
                cartService.setLineItemChannel(lineItemId, req.distributionChannelKey(), req.supplyChannelKey()));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 6,
            title = "Inventory modes + stock gate", tier = "pre-built", capability = "cart.stockGate",
            description = "Pre-built — study it (the 4.2 update with one action). Set a per-line inventory mode via setLineItemInventoryMode (overrides the cart "
                    + "default): None (no checks) / ReserveOnCart (reserve on add) / ReserveOnOrder (reserve "
                    + "at order) / TrackOnly (decrement on order). PUT "
                    + "/api/cart/line-items/{id}/inventory-mode. (Homework — the read-side STOCK GATE: an "
                    + "availability pre-check at add-time, with a block/cap/backorder policy you own.)",
            hint = "Docs: Carts — inventoryMode + setLineItemInventoryMode; Inventory availability "
                    + "(docs.commercetools.com/api/projects/carts#inventorymode).")
    @PutMapping("/api/cart/line-items/{lineItemId}/inventory-mode")
    public CartView setInventoryMode(@PathVariable String lineItemId, @RequestBody SetInventoryModeRequest req) {
        return CartViewMapper.toView(cartService.setLineItemInventoryMode(lineItemId, req.inventoryMode()));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 7,
            title = "Set the shipping address", tier = "T1", capability = "cart.address",
            description = "Set the delivery address via setShippingAddress (country + fields). The address is "
                    + "the input to shipping-method matching (Zones) and tax — once set, the cart gains a "
                    + "taxedPrice, and the response carries shippingAddress. The service then settles the "
                    + "delivery choice like a real storefront: it keeps a still-matching method, else selects "
                    + "the project's DEFAULT shipping method, else the first match (4.8's read — until 4.8 is "
                    + "implemented the address is saved and the method waits). PUT /api/cart/shipping-address "
                    + "drives the checkout's address step.",
            hint = "Docs: Carts — setShippingAddress (docs.commercetools.com/api/projects/carts#set-shipping-address).")
    @PutMapping("/api/cart/shipping-address")
    public CartView setShippingAddress(@RequestBody ShippingAddressRequest req) {
        return CartViewMapper.toView(cartService.setShippingAddress(new AddressInput(
                req.country(), req.firstName(), req.lastName(),
                req.streetName(), req.streetNumber(), req.postalCode(), req.city())));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 8,
            title = "Shipping method: match & select", tier = "T1", capability = "cart.shipping",
            description = "List the shipping methods valid for the cart via shippingMethods().matchingCart() "
                    + "(a GET like S1–S3 — Zones + predicate + value/score tiers). GET /api/cart/shipping-methods "
                    + "returns each option with the rate that matched (price, freeAbove), isDefault and "
                    + "selected — empty until 4.7 set an address. Setting the address already selected the "
                    + "default method; the shopper changes it with PUT /api/cart/shipping-method and the "
                    + "chosen id (setShippingMethod adds shippingInfo to totalPrice).",
            hint = "Docs: Shipping methods — matching-cart + Carts setShippingMethod "
                    + "(docs.commercetools.com/api/projects/shippingMethods#get-shippingmethods-for-a-cart).")
    @GetMapping("/api/cart/shipping-methods")
    public List<ShippingOptionView> shippingMethods() {
        return cartService.shippingOptions().stream().map(ShippingOptionView::from).toList();
    }

    @PutMapping("/api/cart/shipping-method")
    public CartView setShippingMethod(@RequestBody SetShippingMethodRequest req) {
        return CartViewMapper.toView(cartService.setShippingMethod(req.shippingMethodId()));
    }

    /** Pre-built plumbing (no task): where the shopper may collect — supply channels with an address (4.5). */
    @GetMapping("/api/cart/pickup-locations")
    public List<PickupLocationView> pickupLocations() {
        return cartService.pickupLocations().stream().map(PickupLocationView::from).toList();
    }

    /**
     * Pre-built plumbing (no task): the guest's contact email for checkout — Session 6's readiness wants a
     * signed-in customer OR an email on the cart. A signed-in shopper never needs this.
     */
    @PutMapping("/api/cart/customer-email")
    public CartView setCustomerEmail(@RequestBody CustomerEmailRequest req) {
        return CartViewMapper.toView(cartService.setCustomerEmail(req.email()));
    }

    /**
     * Pre-built plumbing (no task): after sign-in / sign-up the storefront calls this once so the customer's
     * default address (5.5) lands on the cart (4.7) and a delivery method is selected (4.8). Idempotent.
     */
    @PostMapping("/api/cart/prefill")
    public CartView prefill() {
        return CartViewMapper.toView(cartService.prefillFromAccount());
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 9,
            title = "Apply a discount code (promo)", tier = "pre-built", capability = "cart.promo",
            description = "Pre-built — study it (the 4.2 update with one action). CartRepository.addDiscountCode(storeKey, cartId, version, code) (+ remove) is an "
                    + "in-store cart update carrying addDiscountCode. The platform validates the code against active "
                    + "Cart Discounts and, on a match, books the saving (a lower total + a savings line). The "
                    + "service owns version + 409-retry as ever. POST /api/cart/discount-codes applies a code; "
                    + "DELETE removes it. Try SAVE10 (10% off carts over €100, or free shipping).",
            hint = "Docs: Carts — addDiscountCode / removeDiscountCode; Discount Codes "
                    + "(docs.commercetools.com/api/projects/carts#add-discountcode).")
    @PostMapping("/api/cart/discount-codes")
    public CartView applyDiscountCode(@RequestBody DiscountCodeRequest req) {
        return CartViewMapper.toView(cartService.applyDiscountCode(req.code()));
    }

    @DeleteMapping("/api/cart/discount-codes/{discountCodeId}")
    public CartView removeDiscountCode(@PathVariable String discountCodeId) {
        return CartViewMapper.toView(cartService.removeDiscountCode(discountCodeId));
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 10,
            title = "Cart summary + savings", tier = "pre-built", capability = "cart.summary",
            description = "Pre-built — study it. GET /api/cart is the read every write re-reads: CartService.summary() "
                    + "maps the active cart through CartMapper into the storefront's order summary — subtotal, "
                    + "savings (original − discounted, per line plus discountOnTotalPrice), shipping (shippingInfo), "
                    + "tax (taxedPrice, present once 4.7 set an address), total — plus the cart's store, each "
                    + "line's pricing / sourcing channel keys, and the owner. It ships built so the bag shows its "
                    + "EMPTY state right after 4.1 and fills in as 4.2+ land; it never throws on a missing cart. "
                    + "Study the mapper's decisions (where savings live, tax included vs excluded) rather than "
                    + "writing them.",
            hint = "Docs: Carts — totalPrice, taxedPrice, discountOnTotalPrice, shippingInfo "
                    + "(docs.commercetools.com/api/projects/carts#cart).")
    @GetMapping("/api/cart")
    public CartView summary() {
        return CartViewMapper.toView(cartService.summary());
    }

    @TaskDescription(
            module = "cart", session = "Session 4", taskNumber = 12,
            title = "Inspect the active cart (customer or guest)", tier = "pre-built", capability = "cart.active",
            description = "Pre-built — study it. GET /api/cart/active resolves the shopper's active cart the way the "
                    + "PLATFORM does, not from the BFF's session pointer: query carts by customerId (signed in) or by the "
                    + "session's anonymousId (guest) with cartState=\"Active\", sorted lastModifiedAt desc — the first is "
                    + "THE active cart (the one sign-in merges into). The response says who owns it, its cartState, "
                    + "whether the session pointer agrees (stale after a sign-in / sign-out / restart?), how many other "
                    + "Active carts that identity has, and the full cart. Use it at any point in S4–S6 to see what the "
                    + "storefront should be showing; it heals an empty session pointer.",
            hint = "Docs: Carts — query carts (predicates on customerId / anonymousId / cartState), CartState "
                    + "(docs.commercetools.com/api/projects/carts#cartstate).")
    @GetMapping("/api/cart/active")
    public ActiveCartView active() {
        return ActiveCartView.from(cartService.inspectActiveCart());
    }
}
