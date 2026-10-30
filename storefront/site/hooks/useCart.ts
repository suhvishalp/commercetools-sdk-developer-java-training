'use client';

import useSWR, { mutate as globalMutate } from 'swr';
import { bffGet, bffPost, bffPatch, bffPut, bffDelete, BffResult } from '@/lib/bff/client';
import { usePreferences } from '@/context/preferences-context';
import { CartView, FulfilmentChoice, PickupLocationView, ShippingAddressInput, ShippingOptionView } from '@/lib/cart-types';
import { KEY_CART, KEY_PICKUP_LOCATIONS, KEY_READINESS, KEY_SHIPPING_OPTIONS } from '@/lib/cache-keys';
import { storeConflictStore } from '@/lib/store-choice';

/** What a basket is started with: the shop's store (or none), currency and country. */
export interface BasketStart {
  store?: string | null;
  currency?: string | null;
  country?: string | null;
}

/** The BFF refused to start a basket in another store while the current one still has items (409). */
export function isStoreMismatch(res: BffResult<unknown>): boolean {
  const body = res.data as { message?: string; detail?: string } | null;
  const message = body?.message ?? body?.detail ?? '';
  return res.status === 409 || message.startsWith('store-mismatch');
}

/**
 * POST /api/cart — start (or re-use) the basket for a store. The BFF keeps an active basket in the same
 * store, re-creates an empty one when the store differs, and refuses (409) when the basket has items in
 * another store; `force` starts a new basket there anyway. A refusal raises the shopper's choice
 * (keep the basket / start a new one) through `storeConflictStore`, so every caller surfaces the same dialog.
 */
export async function createBasketInStore(start: BasketStart, force = false): Promise<BffResult<CartView>> {
  const qs = new URLSearchParams();
  if (start.store) qs.set('store', start.store);
  if (start.currency) qs.set('currency', start.currency);
  if (start.country) qs.set('country', start.country);
  if (force) qs.set('force', 'true');
  const res = await bffPost<CartView>(`cart?${qs.toString()}`);
  if (!res.ok && !force && start.store && isStoreMismatch(res)) {
    storeConflictStore.open(start.store);
  }
  return res;
}

/** Every cart write invalidates the cart AND what is derived from it (delivery options, checkout readiness). */
export async function refreshCartEverywhere(): Promise<void> {
  await Promise.all([
    globalMutate(KEY_CART),
    // The options hook keys by [KEY_SHIPPING_OPTIONS, address] — match every such key.
    globalMutate((key) => Array.isArray(key) && key[0] === KEY_SHIPPING_OPTIONS),
    globalMutate(KEY_READINESS),
  ]);
}

/**
 * The one cart data hook. Reads GET /api/cart (through the BFF proxy) and exposes the write actions,
 * each of which refreshes the cached cart on success. The BFF owns the active cart + its version
 * (fetch-before-update + 409 retry), so the storefront just states intent; it only makes sure a cart
 * exists before the first mutation (POST /api/cart, seeded with the shopper's currency/country).
 */
export function useCart() {
  const { currency, country, storeKey, channel } = usePreferences();
  const { data, isLoading } = useSWR(KEY_CART, (p) => bffGet<CartView>(p), {
    revalidateOnFocus: true,
  });
  const cart = data && data.ok ? data.data : null;

  /**
   * Make sure a basket exists before a write. Returns null when one does (or was just started); returns the
   * refused result when the BFF would not start one here because the shopper's basket has items in another
   * store — the store choice is then on screen and the write must not go ahead.
   */
  async function ensureCart(): Promise<BffResult<CartView> | null> {
    if (cart?.id) return null;
    // Re-check the live cart before creating: another panel may have created one since this render.
    const live = await bffGet<CartView>(KEY_CART);
    if (live.ok && live.data?.id) return null;
    const res = await createBasketInStore({ store: storeKey, currency, country });
    if (!res.ok && storeKey && isStoreMismatch(res)) {
      await refreshCartEverywhere(); // learn which store the basket is in, for the dialog
      return res;
    }
    return null;
  }

  async function run<T>(op: () => Promise<BffResult<T>>): Promise<BffResult<T>> {
    const res = await op();
    await refreshCartEverywhere();
    return res;
  }

  return {
    cart,
    loading: isLoading,
    notImplemented: data?.notImplemented ?? false,
    refresh: () => refreshCartEverywhere(),

    /**
     * Add a line. The shopper's price channel travels with it so the cart line is priced from the channel
     * the PLP / PDP displayed (4.5's distribution role); `fulfilment.supplyChannelKey` sources it from a
     * pickup store instead of delivery stock.
     */
    async addItem(sku: string, quantity = 1, fulfilment?: FulfilmentChoice) {
      const refused = await ensureCart();
      if (refused) return refused;
      const body: Record<string, unknown> = { sku, quantity };
      const dist = fulfilment?.distributionChannelKey ?? channel;
      if (dist) body.distributionChannelKey = dist;
      if (fulfilment?.supplyChannelKey) body.supplyChannelKey = fulfilment.supplyChannelKey;
      return run(() => bffPost<CartView>('cart/line-items', body));
    },
    /** 4.5 — change a line's fulfilment after adding: a pickup store key, or "" for delivery. */
    async setLineFulfilment(lineItemId: string, choice: FulfilmentChoice) {
      return run(() => bffPut<CartView>(`cart/line-items/${lineItemId}/channel`, choice));
    },
    async addRecurring(sku: string, policyKey = 'monthly') {
      const refused = await ensureCart();
      if (refused) return refused;
      const qs = new URLSearchParams({ recurring: 'true', recurrencePolicy: policyKey });
      return run(() => bffPost<CartView>(`cart/line-items?${qs.toString()}`, { sku }));
    },
    async addBundle(bundleKey: string) {
      const refused = await ensureCart();
      if (refused) return refused;
      return run(() => bffPost<CartView>('cart/bundles', { bundleKey }));
    },
    async changeQuantity(lineItemId: string, quantity: number) {
      return run(() => bffPatch<CartView>(`cart/line-items/${lineItemId}`, { quantity }));
    },
    async removeLine(lineItemId: string) {
      return run(() => bffDelete<CartView>(`cart/line-items/${lineItemId}`));
    },
    async applyCode(code: string) {
      return run(() => bffPost<CartView>('cart/discount-codes', { code }));
    },
    /** 4.7 — save the delivery address; the BFF then selects the default shipping method (4.8). */
    async setShippingAddress(address: ShippingAddressInput) {
      const refused = await ensureCart();
      if (refused) return refused;
      return run(() => bffPut<CartView>('cart/shipping-address', address));
    },
    /** 4.8 — change the delivery method to one of the options from `useShippingOptions`. */
    async setShippingMethod(shippingMethodId: string) {
      return run(() => bffPut<CartView>('cart/shipping-method', { shippingMethodId }));
    },
    /** Guest checkout contact — the readiness check (6.1) wants a customer OR an email. */
    async setCustomerEmail(email: string) {
      const refused = await ensureCart();
      if (refused) return refused;
      return run(() => bffPut<CartView>('cart/customer-email', { email }));
    },
    /** After sign-in: apply the account's default address + a delivery method to the cart (idempotent). */
    async prefill() {
      return run(() => bffPost<CartView>('cart/prefill'));
    },
  };
}

/**
 * The delivery options valid for the cart (4.8) — read only once the cart has an address (the platform
 * matches on it). Re-keyed by the cart's address so a changed country re-fetches the list.
 */
export function useShippingOptions(cart: CartView | null) {
  const addressKey = cart?.shippingAddress?.country
    ? `${cart.shippingAddress.country}:${cart.shippingAddress.postalCode ?? ''}:${cart.shippingMethodId ?? ''}`
    : null;
  const { data, isLoading } = useSWR(
    addressKey ? [KEY_SHIPPING_OPTIONS, addressKey] : null,
    ([p]) => bffGet<ShippingOptionView[]>(p),
  );
  return {
    options: data && data.ok && data.data ? data.data : [],
    loading: isLoading,
    notImplemented: data?.notImplemented ?? false,
  };
}

/** The pickup locations (supply channels with an address) — read once 4.5 is unlocked; rarely changes. */
export function usePickupLocations(enabled: boolean) {
  const { data } = useSWR(enabled ? KEY_PICKUP_LOCATIONS : null, (p) => bffGet<PickupLocationView[]>(p), {
    revalidateOnFocus: false,
    dedupingInterval: 60_000,
  });
  return { locations: data && data.ok && data.data ? data.data : [] };
}
