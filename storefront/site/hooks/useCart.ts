'use client';

import useSWR, { mutate as globalMutate } from 'swr';
import { bffGet, bffPost, bffPatch, bffPut, bffDelete, BffResult } from '@/lib/bff/client';
import { usePreferences } from '@/context/preferences-context';
import { CartView, FulfilmentChoice, PickupLocationView, ShippingAddressInput, ShippingOptionView } from '@/lib/cart-types';
import { KEY_CART, KEY_PICKUP_LOCATIONS, KEY_READINESS, KEY_SHIPPING_OPTIONS } from '@/lib/cache-keys';

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

  async function ensureCart(): Promise<void> {
    if (cart?.id) return;
    // Re-check the live cart before creating: another panel may have created one since this render.
    const live = await bffGet<CartView>(KEY_CART);
    if (live.ok && live.data?.id) return;
    const qs = new URLSearchParams();
    if (currency) qs.set('currency', currency);
    if (country) qs.set('country', country);
    if (storeKey) qs.set('store', storeKey);
    await bffPost<CartView>(`cart?${qs.toString()}`);
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
      await ensureCart();
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
      await ensureCart();
      const qs = new URLSearchParams({ recurring: 'true', recurrencePolicy: policyKey });
      return run(() => bffPost<CartView>(`cart/line-items?${qs.toString()}`, { sku }));
    },
    async addBundle(bundleKey: string) {
      await ensureCart();
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
      await ensureCart();
      return run(() => bffPut<CartView>('cart/shipping-address', address));
    },
    /** 4.8 — change the delivery method to one of the options from `useShippingOptions`. */
    async setShippingMethod(shippingMethodId: string) {
      return run(() => bffPut<CartView>('cart/shipping-method', { shippingMethodId }));
    },
    /** Guest checkout contact — the readiness check (6.5) wants a customer OR an email. */
    async setCustomerEmail(email: string) {
      await ensureCart();
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
