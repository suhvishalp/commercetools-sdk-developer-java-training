'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { bffGet } from '@/lib/bff/client';
import { CartExtrasView, TimelineEntryView } from '@/lib/ext-types';
import { OrderDetailView, SubscriptionView } from '@/lib/order-types';

const fmt = (m: { centAmount: number; currencyCode: string; fractionDigits: number } | null) =>
  m ? new Intl.NumberFormat(undefined, { style: 'currency', currency: m.currencyCode }).format(m.centAmount / 10 ** m.fractionDigits) : '—';

/**
 * The confirmation page (6.3 / 6.4 / 6.9): the order commercetools Checkout created, read back BY ORDER
 * NUMBER. Reached from the payment step's `checkout_completed` handler (?orderNumber=) or from the
 * Application's paymentReturnUrl (?orderId= — the number is recovered from sessionStorage).
 */
export function ConfirmationView() {
  const params = useSearchParams();
  const [orderNumber, setOrderNumber] = useState<string | null>(params.get('orderNumber'));
  useEffect(() => {
    if (!orderNumber) setOrderNumber(sessionStorage.getItem('lhc.lastOrderNumber'));
  }, [orderNumber]);

  const { data } = useSWR(orderNumber ? `orders/${encodeURIComponent(orderNumber)}` : null, (p) => bffGet<OrderDetailView>(p));
  const order = data && data.ok ? data.data : null;
  const { data: sub } = useSWR(orderNumber ? `orders/${encodeURIComponent(orderNumber)}/subscription` : null, (p) =>
    bffGet<SubscriptionView>(p),
  );
  const subscription = sub && sub.ok ? sub.data : null;

  // Session 7 — the order's Custom Fields (7.1) and its timeline from the Messages log (7.3). Both read only
  // once their capability is unlocked; the timeline re-polls so a state transition made in Canvas shows up.
  const { unlocked: extrasUnlocked } = useCapability('ext.customFields');
  const { unlocked: timelineUnlocked } = useCapability('ext.messages');
  const { data: extrasRes } = useSWR(
    extrasUnlocked && orderNumber ? `orders/${encodeURIComponent(orderNumber)}/extras` : null,
    (p) => bffGet<CartExtrasView>(p),
  );
  const extras = extrasRes && extrasRes.ok ? extrasRes.data : null;
  const { data: timelineRes } = useSWR(
    timelineUnlocked && orderNumber ? `orders/${encodeURIComponent(orderNumber)}/timeline` : null,
    (p) => bffGet<TimelineEntryView[]>(p),
    { refreshInterval: 10000 },
  );
  const timeline = timelineRes && timelineRes.ok && timelineRes.data ? timelineRes.data : null;
  const SAMPLE_TIMELINE: TimelineEntryView[] = [
    { messageId: 's1', type: 'OrderCreated', at: null, summary: 'Order placed', sequenceNumber: 1, resourceVersion: 1 },
    { messageId: 's2', type: 'OrderPaymentStateChanged', at: null, summary: 'Payment paid', sequenceNumber: 2, resourceVersion: 2 },
    { messageId: 's3', type: 'OrderStateTransition', at: null, summary: 'Moved to Picked', sequenceNumber: 3, resourceVersion: 3 },
  ];

  return (
    <div className="space-y-6">
      <FeatureGate capability="order.create" title="Your order">
        <div className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="font-display text-xl">Thank you{order?.customerEmail ? `, ${order.customerEmail}` : ''}</h2>
          <p className="text-sm">
            Order <span className="font-mono font-semibold">{order?.orderNumber ?? orderNumber ?? 'LHC-…'}</span>
            {order ? ` · ${order.orderState} · payment ${order.paymentState}` : ''}
          </p>
          <ul className="divide-y divide-[var(--color-border)] text-sm">
            {(order?.lines ?? []).map((l) => (
              <li key={l.lineItemId} className={`flex justify-between py-2 ${l.parentKey ? 'pl-6 text-[var(--color-charcoal-light)]' : ''}`}>
                <span>
                  {l.quantity}× {l.name ?? l.sku}
                  {l.recurring ? <span className="ml-2 rounded-full bg-[var(--color-cream)] px-2 text-xs">{l.recurrenceLabel ?? 'subscription'}</span> : null}
                </span>
                <span>{fmt(l.lineTotal)}</span>
              </li>
            ))}
          </ul>
          {order ? (
            <div className="flex justify-between border-t border-[var(--color-border)] pt-2 text-sm font-semibold">
              <span>Total</span>
              <span>{fmt(order.total)}</span>
            </div>
          ) : null}
        </div>
      </FeatureGate>

      <FeatureGate capability="ext.customFields" title="Gift message">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 text-sm">
          {extras?.giftMessage ? (
            <>
              <strong>Gift message:</strong> “{extras.giftMessage}”
            </>
          ) : (
            <span className="text-[var(--color-charcoal-light)]">
              {extras ? 'No gift message on this order.' : 'Gift message: “Happy birthday, Ada!”'}
            </span>
          )}
          {extras?.requiresWhiteGlove ? (
            <span className="ml-3 rounded-full bg-[var(--color-cream)] px-2 py-0.5 text-xs font-medium">White Glove Delivery</span>
          ) : null}
        </div>
      </FeatureGate>

      <FeatureGate capability="ext.messages" title="Order timeline">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 text-sm">
          <h3 className="mb-3 font-medium">Order timeline</h3>
          <ol className="relative ml-2 border-l border-[var(--color-border)] pl-5">
            {(timeline ?? SAMPLE_TIMELINE).map((e, i, all) => (
              <li key={e.messageId} className="mb-3 last:mb-0">
                <span
                  className={`absolute -left-[7px] mt-1 h-3 w-3 rounded-full ${i === all.length - 1 ? 'bg-[var(--color-terra)]' : 'bg-[var(--color-sage)]'}`}
                />
                <div className="font-medium">{e.summary}</div>
                <div className="text-xs text-[var(--color-charcoal-light)]">
                  {e.type}
                  {e.at ? ` · ${new Date(e.at).toLocaleString()}` : ''}
                  {e.sequenceNumber != null ? ` · #${e.sequenceNumber}` : ''}
                </div>
              </li>
            ))}
            {timeline && timeline.length === 0 ? (
              <li className="text-[var(--color-charcoal-light)]">No events yet — Messages record what happens from now on.</li>
            ) : null}
          </ol>
        </div>
      </FeatureGate>

      <FeatureGate capability="order.recurring" title="Your subscription">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 text-sm">
          {subscription ? (
            <>
              <strong>Your subscription:</strong> {subscription.skus.join(', ')} — {subscription.scheduleLabel}
              {subscription.nextOrderAt ? ` · next order ${new Date(subscription.nextOrderAt).toLocaleDateString()}` : ''}
              {subscription.priceSelectionMode ? ` · price ${subscription.priceSelectionMode}` : ''}
            </>
          ) : (
            <span className="text-[var(--color-charcoal-light)]">Your subscription: Charlie Armchair — every month</span>
          )}
        </div>
      </FeatureGate>

      <FeatureGate capability="order.ledger" title="Payments">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 text-sm">
          <h3 className="mb-2 font-medium">Payments</h3>
          {(order?.payments ?? []).map((p) => (
            <div key={p.paymentId} className="mb-2">
              <div className="text-[var(--color-charcoal-light)]">
                {p.paymentInterface} · {p.method} · {fmt(p.amountPlanned)} · provider ref {p.interfaceId ?? '—'}
              </div>
              <ul className="ml-4 list-disc">
                {p.transactions.map((t) => (
                  <li key={t.id}>
                    {t.type} · {t.state} · {fmt(t.amount)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {!order ? <p className="text-[var(--color-charcoal-light)]">Authorization · Success · €1,077.00</p> : null}
        </div>
      </FeatureGate>
    </div>
  );
}
