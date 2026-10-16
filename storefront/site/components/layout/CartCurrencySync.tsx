'use client';

import { useEffect, useRef } from 'react';
import { useCart } from '@/hooks/useCart';
import { usePreferences } from '@/context/preferences-context';
import { COUNTRY_BY_CURRENCY } from '@/lib/utils';

/**
 * Keeps the shop's currency (and the matching country for price selection) in step with the active basket.
 * A basket has ONE currency for its whole life (the platform rejects adding a line priced in another), so
 * when the active cart changes — a sign-in that adopted the account's EUR basket while the shop was showing
 * USD, a merge, a store switch — the storefront follows the basket rather than showing prices the basket
 * can't take. Runs once per (cart id, cart currency); the shopper can still change currency afterwards.
 */
export function CartCurrencySync() {
  const { cart } = useCart();
  const { currency, currencies, countries, setCurrency, setCountry } = usePreferences();
  const seen = useRef<string | null>(null);
  const key = cart?.id && cart.currency ? `${cart.id}|${cart.currency}` : null;

  useEffect(() => {
    if (!key || seen.current === key) return;
    seen.current = key;
    const cartCurrency = cart!.currency!;
    if (cartCurrency !== currency && currencies.includes(cartCurrency)) {
      setCurrency(cartCurrency);
      const country = cart!.country ?? COUNTRY_BY_CURRENCY[cartCurrency];
      if (country && countries.includes(country)) setCountry(country);
    }
  }, [key, cart, currency, currencies, countries, setCurrency, setCountry]);

  return null;
}
