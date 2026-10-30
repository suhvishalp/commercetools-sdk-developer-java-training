'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { bffPost } from '@/lib/bff/client';
import { CheckoutStartView } from '@/lib/order-types';
import { ShieldCheck } from '@/components/ui/icons';

/**
 * The payment step — the only browser-side Checkout code in the course (Session 6, pre-built).
 * 1. POST /api/checkout/session on the BFF → { sessionId, projectKey, region, orderNumber } (6.3 / 6.2).
 * 2. Mount commercetools Checkout's paymentFlow widget (Payment Only mode) into <div data-ctc />.
 * 3. Checkout creates the Payment and the Order; on `checkout_completed` / `order_created` route to the
 *    confirmation BY ORDER NUMBER (never trust ?orderId alone). The number is also kept in sessionStorage
 *    so the Application's paymentReturnUrl page can recover it.
 * The browser never sees credentials: projectKey + region arrive with the session, not from env vars.
 */
export function PaymentStep() {
  const locale = useLocale();
  const [start, setStart] = useState<CheckoutStartView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    (async () => {
      const res = await bffPost<CheckoutStartView>('checkout/session');
      if (!res.ok || !res.data) {
        setError(
          res.status === 501
            ? 'Payment isn’t available right now. Please try again shortly.'
            : 'We couldn’t start the payment. Please try again.',
        );
        return;
      }
      const s = res.data;
      setStart(s);
      sessionStorage.setItem('lhc.lastOrderNumber', s.orderNumber);
      const { paymentFlow } = await import('@commercetools/checkout-browser-sdk');
      paymentFlow({
        projectKey: s.projectKey,
        region: s.region,
        sessionId: s.sessionId,
        locale,
        onInfo: (msg: { code?: string }) => {
          if (msg.code === 'checkout_completed' || msg.code === 'order_created') {
            window.location.assign(`/${locale}/checkout/confirmation?orderNumber=${encodeURIComponent(s.orderNumber)}`);
          }
        },
        onError: (msg: { code?: string; payload?: unknown }) => {
          void msg; setError('The payment could not be completed. Please check your details and try again.');
        },
      });
    })();
  }, [locale]);

  return (
    <div className="space-y-3 rounded-[14px] border-[1.5px] border-[var(--color-border)] bg-[var(--color-cream)] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {start ? (
          <p className="text-sm text-[var(--color-muted)]">
            Order <span className="font-mono font-semibold text-[var(--color-ink)]">{start.orderNumber}</span> · secure payment
          </p>
        ) : !error ? (
          <p className="text-sm text-[var(--color-muted)]">Starting the payment…</p>
        ) : <span />}
        <span className="flex gap-1.5">
          {['VISA', 'MC', 'AMEX', 'DISCOVER'].map((b) => (
            <span key={b} className="inline-flex h-6 items-center rounded-md border border-[var(--color-border)] bg-white px-2 text-[10px] font-bold">{b}</span>
          ))}
        </span>
      </div>
      {/* Required mount point — without it the widget takes over the whole page. */}
      <div data-ctc />
      {error ? <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      <p className="flex items-center gap-2 text-xs text-[var(--color-muted)]"><ShieldCheck size={14} /> Card details are collected by commercetools Checkout. This shop never sees them.</p>
    </div>
  );
}
