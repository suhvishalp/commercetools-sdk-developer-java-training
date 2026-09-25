'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { bffGet, bffPut } from '@/lib/bff/client';
import { CartExtrasView } from '@/lib/ext-types';
import { ReadinessView } from '@/lib/order-types';
import { PaymentStep } from './PaymentStep';

const fmt = (m: { centAmount: number; currencyCode: string; fractionDigits: number } | null) =>
  m ? new Intl.NumberFormat(undefined, { style: 'currency', currency: m.currencyCode }).format(m.centAmount / 10 ** m.fractionDigits) : '—';

/** 7.1 — the gift message lives on the cart as a Custom Field (`order-extras.giftMessage`), saved via PUT /api/cart/extras. */
function GiftMessageField() {
  const { unlocked } = useCapability('ext.customFields');
  const { data, mutate } = useSWR(unlocked ? 'cart/extras' : null, (p) => bffGet<CartExtrasView>(p));
  const saved = data && data.ok ? data.data?.giftMessage ?? '' : '';
  const [draft, setDraft] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const value = draft ?? saved;

  const save = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await bffPut<CartExtrasView>('cart/extras', { giftMessage: value });
      await mutate();
      setDraft(null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium" htmlFor="gift-message">Gift message <span className="text-[var(--color-charcoal-light)]">(optional)</span></label>
      <div className="flex gap-2">
        <input
          id="gift-message"
          value={value}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Happy birthday, Ada!"
          maxLength={200}
          className="flex-1 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm"
        />
        <button type="button" onClick={save} disabled={busy || draft === null}
          className="rounded-lg bg-[var(--color-charcoal)] px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
          Save
        </button>
      </div>
      {saved && draft === null ? <p className="text-xs text-[var(--color-sage)]">Saved on the cart — it will appear on your order.</p> : null}
    </div>
  );
}

/**
 * Checkout (Session 6) on commercetools Checkout, Payment Only mode. The storefront owns the review +
 * readiness step (6.5); the payment step is Checkout's widget (6.1 / 6.2); Checkout then creates the
 * Payment and the Order and the confirmation page reads them back (6.3).
 */
export function CheckoutView() {
  const { data } = useSWR('checkout/readiness', (p) => bffGet<ReadinessView>(p));
  const readiness = data && data.ok ? data.data : null;
  const [paying, setPaying] = useState(false);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FeatureGate capability="order.readiness" title="Ready for payment?">
        <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="font-medium">Review</h2>
          {readiness ? (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-charcoal-light)]">Total</span>
                <span className="font-semibold">{fmt(readiness.total)}</span>
              </div>
              {readiness.ready ? (
                <p className="text-sm text-emerald-700">Shipping, billing and delivery are set — ready to pay.</p>
              ) : (
                <ul className="list-disc pl-5 text-sm text-amber-700">
                  {readiness.missing.map((m) => (
                    <li key={m}>Missing: {m}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <ul className="text-sm text-[var(--color-charcoal-light)]">
              <li>Shipping address · Berlin</li>
              <li>Delivery · Standard</li>
              <li>Total · €1,077.00</li>
            </ul>
          )}
          {/* Session 7.1 — a Custom Field on the cart; it snapshots onto the order at the commit. */}
          <FeatureGate capability="ext.customFields" title="Gift message">
            <GiftMessageField />
          </FeatureGate>
          <FeatureGate capability="order.checkoutSession" title="Proceed to payment">
            <button
              onClick={() => setPaying(true)}
              disabled={paying || (readiness ? !readiness.ready : false)}
              className="w-full rounded-lg bg-[var(--color-terra)] px-5 py-3 font-medium text-white disabled:opacity-50"
            >
              Proceed to payment
            </button>
          </FeatureGate>
        </div>
      </FeatureGate>

      <div className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-white p-6">
        <h2 className="font-medium">Payment</h2>
        {paying ? (
          <PaymentStep />
        ) : (
          <p className="text-sm text-[var(--color-charcoal-light)]">
            Card details are collected by <strong>commercetools Checkout</strong> — this storefront never sees them. Test card:{' '}
            <span className="font-mono">4111 1111 1111 1111</span>.
          </p>
        )}
        <FeatureGate capability="order.checkoutMode" title="Checkout mode">
          <p className="text-xs text-[var(--color-charcoal-light)]">Payments by commercetools Checkout · Payment Only mode</p>
        </FeatureGate>
      </div>
    </div>
  );
}
