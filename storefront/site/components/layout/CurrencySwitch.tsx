'use client';

import { usePreferences } from '@/context/preferences-context';
import { useCart } from '@/hooks/useCart';
import { Lock } from '@/components/ui/icons';

/**
 * Currency dropdown — options come from the project; changing it sets the active currency.
 *
 * A commercetools cart has ONE currency for its whole life (every line is priced in it, and a line whose
 * price only exists in another currency is rejected), so while the basket holds items the currency is
 * locked to the basket's and shown as a fixed label with a short why. Emptying the basket unlocks it.
 * (The alternative — re-creating the basket in the new currency — is the optional Tier 2 task 4.13.)
 */
export function CurrencySwitch() {
  const { currencies, currency, setCurrency } = usePreferences();
  const { cart } = useCart();
  const locked = !!cart?.id && cart.lines.length > 0 && !!cart.currency;

  if (locked) {
    return (
      <span className="inline-flex flex-col gap-0.5 text-sm">
        <span className="inline-flex items-center gap-1.5 text-[var(--color-ink)]">
          <Lock size={12} className="text-[var(--color-muted)]" /> {cart!.currency}
        </span>
        <span className="text-[11px] leading-snug text-[var(--color-muted)]">Your basket is in {cart!.currency}. Empty it to shop in another currency.</span>
      </span>
    );
  }
  if (currencies.length <= 1) {
    return <span className="text-sm text-[var(--color-muted)]">{currency}</span>;
  }
  return (
    <select
      aria-label="Currency"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="select-pill"
    >
      {currencies.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
