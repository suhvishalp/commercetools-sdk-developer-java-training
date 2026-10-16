'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { useCart, useShippingOptions } from '@/hooks/useCart';
import { CartAddressView, CartView, MoneyView, ShippingOptionView } from '@/lib/cart-types';
import { formatMoney } from '@/lib/utils';
import { MapPin, Truck } from '@/components/ui/icons';

const SAMPLE_ADDRESS: CartAddressView = {
  firstName: 'Ada', lastName: 'Lovelace', streetName: 'Market St', streetNumber: '1', postalCode: '94105', city: 'San Francisco', country: 'US',
};
const SAMPLE_OPTIONS: ShippingOptionView[] = [
  { id: 's1', key: 'standard', name: 'Standard Shipping', description: '3–5 business days', isDefault: true, price: { centAmount: 500, currencyCode: 'EUR', fractionDigits: 2 }, freeAbove: null, selected: true },
  { id: 's2', key: 'express', name: 'Express Shipping', description: '1–2 business days', isDefault: false, price: { centAmount: 1500, currencyCode: 'EUR', fractionDigits: 2 }, freeAbove: null, selected: false },
];

/** "Ada Lovelace · Market St 1 · 94105 San Francisco · US" */
export function formatAddress(a: CartAddressView | null | undefined): string {
  if (!a) return '';
  const name = [a.firstName, a.lastName].filter(Boolean).join(' ');
  const street = [a.streetName, a.streetNumber].filter(Boolean).join(' ');
  const town = [a.postalCode, a.city].filter(Boolean).join(' ');
  return [name, street, town, a.country].filter(Boolean).join(' · ');
}

/** The selectable delivery-method list shared by the cart's delivery card and the checkout step. */
export function ShippingOptionList({ options, busy, disabled, onChoose, fmt }: {
  options: ShippingOptionView[]; busy: boolean; disabled: boolean; onChoose: (id: string) => void; fmt: (m: MoneyView | null) => string | null;
}) {
  return (
    <div className="space-y-2.5">
      {options.map((o) => (
        <label
          key={o.id}
          className={`flex cursor-pointer items-center gap-3.5 rounded-[12px] border-[1.5px] px-4 py-3.5 ${
            o.selected ? 'border-[var(--color-violet)] bg-[var(--color-violet-50)]' : 'border-[var(--color-border)] bg-white'
          } ${busy ? 'opacity-60' : ''}`}
        >
          <input type="radio" name={`delivery-${o.id}`} checked={o.selected} onChange={() => onChoose(o.id)} disabled={disabled || busy} className="h-[18px] w-[18px] accent-[var(--color-violet)]" />
          <span className="flex-1">
            <span className="flex items-center gap-2 font-semibold">
              {o.name}
              {o.isDefault ? <span className="pill pill-teal">Recommended</span> : null}
            </span>
            {o.description ? <span className="block text-[13px] text-[var(--color-muted)]">{o.description}</span> : null}
            {o.freeAbove ? <span className="block text-[13px] text-[var(--color-teal-dark)]">Free over {fmt(o.freeAbove)}</span> : null}
          </span>
          <span className="font-bold">{o.price ? (o.price.centAmount === 0 ? 'Free' : fmt(o.price)) : '—'}</span>
        </label>
      ))}
    </div>
  );
}

/**
 * The cart page's delivery card (4.7 / 4.8): the address on the cart and the selectable delivery
 * methods with their rates. Setting the address (at checkout) already selected the default method;
 * here the shopper can switch. Both halves gate on their own capability and show a sample while locked.
 */
export function DeliveryPanel({ cart }: { cart: CartView | null }) {
  const locale = useLocale();
  const { unlocked: addressUnlocked } = useCapability('cart.address');
  const { unlocked: shippingUnlocked } = useCapability('cart.shipping');
  const { setShippingMethod } = useCart();
  const { options, loading } = useShippingOptions(shippingUnlocked ? cart : null);
  const [busy, setBusy] = useState(false);

  const fmt = (m: MoneyView | null) => (m ? formatMoney(m.centAmount, m.currencyCode, locale) : null);
  const address = addressUnlocked ? cart?.shippingAddress ?? null : SAMPLE_ADDRESS;
  const live = shippingUnlocked && !!cart?.shippingAddress;
  const shown = live ? options : SAMPLE_OPTIONS;

  const choose = async (id: string) => {
    if (busy || !live) return;
    setBusy(true);
    try {
      await setShippingMethod(id);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FeatureGate capability="cart.address" title="Delivery address">
        <div className="surface h-full p-5 text-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-violet)]" />
              <div>
                <p className="font-semibold">Delivering to</p>
                {address ? (
                  <p className="mt-0.5 text-[var(--color-muted)]">{formatAddress(address)}</p>
                ) : (
                  <p className="mt-0.5 text-[var(--color-muted)]">No address yet — add it at checkout to see delivery options and tax.</p>
                )}
              </div>
            </div>
            <Link href="/checkout" className="shrink-0 text-[13px] font-semibold text-[var(--color-violet-dark)]">
              {address ? 'Change' : 'Add address'}
            </Link>
          </div>
        </div>
      </FeatureGate>

      <FeatureGate capability="cart.shipping" title="Delivery method">
        <div className="surface h-full p-5 text-sm">
          <p className="mb-3 flex items-center gap-2.5 font-semibold"><Truck size={18} className="text-[var(--color-violet)]" /> Delivery method</p>
          {shippingUnlocked && !cart?.shippingAddress ? (
            <p className="text-[var(--color-muted)]">Add a delivery address to see the methods available to you.</p>
          ) : live && loading && shown.length === 0 ? (
            <p className="text-[var(--color-muted)]">Checking delivery options…</p>
          ) : shown.length === 0 ? (
            <p className="text-[var(--color-muted)]">
              We can’t deliver to this address yet — try another address.
            </p>
          ) : (
            <ShippingOptionList options={shown} busy={busy} disabled={!live} onChoose={choose} fmt={fmt} />
          )}
        </div>
      </FeatureGate>
    </div>
  );
}
