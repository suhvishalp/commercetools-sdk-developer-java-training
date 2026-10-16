'use client';

import { useSyncExternalStore } from 'react';
import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { bffGet } from '@/lib/bff/client';
import { CartExtrasView, TimelineEntryView } from '@/lib/ext-types';
import { OrderDetailView, SubscriptionView } from '@/lib/order-types';
import { Check, Gift, Package, Sparkles, CreditCard } from '@/components/ui/icons';
import { RelatedProducts } from '@/components/product/RelatedProducts';

const subscribeNever = () => () => {};

const fmt = (m: { centAmount: number; currencyCode: string; fractionDigits: number } | null) =>
  m ? new Intl.NumberFormat(undefined, { style: 'currency', currency: m.currencyCode }).format(m.centAmount / 10 ** m.fractionDigits) : '—';

/**
 * The confirmation page (6.3 / 6.4 / 6.9): the order commercetools Checkout created, read back BY ORDER
 * NUMBER. Reached from the payment step's `checkout_completed` handler (?orderNumber=) or from the
 * Application's paymentReturnUrl (?orderId= — the number is recovered from sessionStorage).
 */
export function ConfirmationView() {
  const params = useSearchParams();
  // ?orderNumber= from the payment step, else the number the payment step kept in sessionStorage
  // (the Application's paymentReturnUrl only carries ?orderId=).
  const stored = useSyncExternalStore(subscribeNever, () => sessionStorage.getItem('lhc.lastOrderNumber'), () => null);
  const orderNumber = params.get('orderNumber') ?? stored;

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
  const firstName = order?.shippingAddress?.firstName ?? null;
  const paid = order?.paymentState ? /paid/i.test(order.paymentState) : (order?.payments ?? []).some((p) => p.authorized || p.captured);

  return (
    <div className="mx-auto max-w-[960px]">
      <div className="my-6 text-center">
        <div className="mx-auto mb-5 grid h-[76px] w-[76px] place-items-center rounded-full bg-[var(--color-teal-light)] text-[var(--color-teal-dark)]">
          <Check size={36} />
        </div>
        <p className="eyebrow">Order confirmed</p>
        <h1 className="mt-2 text-[40px]">Thank you{firstName ? `, ${firstName}` : ''}.</h1>
        <p className="mt-2 text-[var(--color-muted)]">
          Order <span className="font-mono font-semibold text-[var(--color-ink)]">{order?.orderNumber ?? orderNumber ?? 'LHC-…'}</span>
          {order?.customerEmail ? <> · a confirmation is on its way to {order.customerEmail}</> : null}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-5">
          <FeatureGate capability="ext.messages" title="Order updates">
            <div className="surface p-6">
              <h3 className="text-lg">{order?.shippingMethod ? `Delivery · ${order.shippingMethod}` : 'What happens next'}</h3>
              <ol className="mt-4">
                {(timeline ?? SAMPLE_TIMELINE).map((e, i, all) => {
                  const last = i === all.length - 1;
                  return (
                    <li key={e.messageId} className="relative grid grid-cols-[22px_1fr] gap-3 pb-5 last:pb-0">
                      {!last ? <span className="absolute left-[10px] top-[22px] bottom-0 w-0.5 bg-[var(--color-earth-dark)]" /> : null}
                      <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[var(--color-teal)] text-white"><Check size={12} strokeWidth={3} /></span>
                      <span>
                        <b className="block font-semibold">{e.summary}</b>
                        <small className="text-[var(--color-muted)]">{e.at ? new Date(e.at).toLocaleString() : 'Just now'}</small>
                      </span>
                    </li>
                  );
                })}
                {timeline && timeline.length === 0 ? (
                  <li className="text-sm text-[var(--color-muted)]">No updates yet — we’ll let you know when your order moves.</li>
                ) : null}
              </ol>
              <Link href="/account#orders" className="btn btn-light btn-sm mt-5">Track order</Link>
            </div>
          </FeatureGate>

          <FeatureGate capability="ext.customFields" title="Gift message">
            <div className="surface flex items-start gap-3 p-5 text-sm">
              <Gift size={18} className="mt-0.5 shrink-0 text-[var(--color-violet)]" />
              <div>
                {extras?.giftMessage ? (
                  <><b className="font-semibold">Gift message:</b> “{extras.giftMessage}”</>
                ) : (
                  <span className="text-[var(--color-muted)]">{extras ? 'No gift message on this order.' : 'Gift message: “Happy birthday, Ada!”'}</span>
                )}
                {extras?.requiresWhiteGlove ? <span className="pill pill-violet ml-3"><Sparkles size={11} /> White Glove Delivery</span> : null}
              </div>
            </div>
          </FeatureGate>

          <FeatureGate capability="order.recurring" title="Your subscription">
            <div className="surface flex items-start gap-3 p-5 text-sm">
              <Sparkles size={18} className="mt-0.5 shrink-0 text-[var(--color-teal-dark)]" />
              {subscription ? (
                <span>
                  <b className="font-semibold">Your subscription:</b> {subscription.skus.join(', ')} — {subscription.scheduleLabel}
                  {subscription.nextOrderAt ? ` · next order ${new Date(subscription.nextOrderAt).toLocaleDateString()}` : ''}
                  {subscription.priceSelectionMode ? ` · price ${subscription.priceSelectionMode}` : ''}
                </span>
              ) : (
                <span className="text-[var(--color-muted)]">Your subscription: Charlie Armchair — every month</span>
              )}
            </div>
          </FeatureGate>
        </div>

        <div className="space-y-5">
          <FeatureGate capability="order.create" title="Your order">
            <div className="surface p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg">Items</h3>
                {order ? (
                  <span className="flex gap-1.5">
                    <span className="pill pill-violet">{order.customState ?? order.orderState ?? 'Open'}</span>
                    {paid ? <span className="pill pill-teal">Paid</span> : null}
                  </span>
                ) : null}
              </div>
              <ul className="mt-3 divide-y divide-[var(--color-border)] text-sm">
                {(order?.lines ?? []).map((l) => (
                  <li key={l.lineItemId} className={`flex items-center gap-3 py-2.5 ${l.parentKey ? 'pl-8 text-[var(--color-muted)]' : ''}`}>
                    {!l.parentKey ? <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-[var(--color-earth)] text-[var(--color-muted)]"><Package size={17} /></span> : null}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{l.name ?? l.sku}</span>
                      <span className="text-xs text-[var(--color-muted)]">Qty {l.quantity}{l.recurring ? ` · ${l.recurrenceLabel ?? 'subscription'}` : ''}</span>
                    </span>
                    <span className="shrink-0 font-medium">{fmt(l.lineTotal)}</span>
                  </li>
                ))}
              </ul>
              {order ? (
                <div className="mt-3 space-y-1.5 border-t border-[var(--color-border)] pt-3 text-sm">
                  {order.subtotal ? <div className="flex justify-between text-[var(--color-muted)]"><span>Subtotal</span><span>{fmt(order.subtotal)}</span></div> : null}
                  {order.shipping ? <div className="flex justify-between text-[var(--color-muted)]"><span>Delivery</span><span>{order.shipping.centAmount === 0 ? 'Free' : fmt(order.shipping)}</span></div> : null}
                  {order.tax ? <div className="flex justify-between text-[var(--color-muted)]"><span>Tax</span><span>{fmt(order.tax)}</span></div> : null}
                  <div className="flex justify-between pt-1 text-lg font-bold"><span>Total paid</span><span>{fmt(order.total)}</span></div>
                </div>
              ) : null}
              {order?.shippingAddress ? (
                <p className="mt-4 text-[13px] text-[var(--color-muted)]">
                  Delivering to {[order.shippingAddress.firstName, order.shippingAddress.lastName].filter(Boolean).join(' ')} · {[order.shippingAddress.streetName, order.shippingAddress.streetNumber].filter(Boolean).join(' ')}, {order.shippingAddress.postalCode} {order.shippingAddress.city}
                </p>
              ) : null}
            </div>
          </FeatureGate>

          <FeatureGate capability="order.ledger" title="Payment">
            <div className="surface p-5 text-sm">
              <h3 className="mb-2 flex items-center gap-2 text-base"><CreditCard size={16} /> Payments</h3>
              {(order?.payments ?? []).map((p) => {
                const ok = p.captured || p.authorized || p.transactions.some((t) => /success/i.test(t.state));
                return (
                  <div key={p.paymentId} className="flex items-center justify-between gap-3 py-1.5">
                    <span className="capitalize">{p.method ?? 'Card'}{p.interfaceId ? <span className="ml-2 font-mono text-xs text-[var(--color-muted)]">ref {p.interfaceId.slice(-8)}</span> : null}</span>
                    <span className="flex items-center gap-2">
                      <span className="font-semibold">{fmt(p.amountPlanned)}</span>
                      <span className={`pill ${ok ? 'pill-teal' : 'pill-earth'}`}>{p.captured ? 'Paid' : p.authorized ? 'Authorised' : 'Pending'}</span>
                    </span>
                  </div>
                );
              })}
              {!order ? <p className="text-[var(--color-muted)]">Card · €1,077.00 · Paid</p> : null}
            </div>
          </FeatureGate>
        </div>
      </div>

      <RelatedProducts />
    </div>
  );
}
