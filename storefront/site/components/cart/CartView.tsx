'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { useLocale } from 'next-intl';
import useSWR from 'swr';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { bffGet } from '@/lib/bff/client';
import { CartExtrasView } from '@/lib/ext-types';
import { useCart } from '@/hooks/useCart';
import { useShoppingList } from '@/hooks/useShoppingList';
import { CartLineView, MoneyView } from '@/lib/cart-types';
import { SavedItemView } from '@/lib/shopping-list-types';
import { formatMoney } from '@/lib/utils';
import { Package, Layers, Sparkles, Tag, Heart, User, Check, ShieldCheck, Gift } from '@/components/ui/icons';
import { Minus, Plus } from '@/components/ui/icons-extra';
import { Link } from '@/i18n/routing';
import { DeliveryPanel } from './DeliveryPanel';
import { FulfilmentSelect, DELIVERY } from './FulfilmentSelect';
import { usePickupLocations } from '@/hooks/useCart';
import { mergeNoticeStore, parseMergeReport } from '@/hooks/useSession';
import { MergeReportView } from '@/lib/customer-types';

const m = (centAmount: number): MoneyView => ({ centAmount, currencyCode: 'EUR', fractionDigits: 2 });
const line = (over: Partial<CartLineView> & { name: string; lineItemId: string }): CartLineView => ({
  sku: null, quantity: 1, unitPrice: null, lineTotal: null, lineSavings: m(0),
  bundleId: null, parentKey: null, recurring: false, recurrenceLabel: null, recurrencePriceMode: null,
  distributionChannelId: null, supplyChannelId: null, inventoryMode: null, children: [], ...over,
});

/** Shown (dimmed) while cart.summary is locked, so the cart still reads like a real shop — and it
 *  demonstrates the bundle grouping the live cart will render once unlocked. */
const SAMPLE_LINES: CartLineView[] = [
  line({ lineItemId: 's1', name: 'Charlie Armchair', unitPrice: m(42415), lineTotal: m(42415) }),
  line({
    lineItemId: 's2', name: 'Bedding Bundle', bundleId: 'sample', unitPrice: m(3198), lineTotal: m(3198), lineSavings: m(500),
    children: [
      line({ lineItemId: 's2a', name: 'Luxe Pillow Cover', parentKey: 'sample', unitPrice: m(2599), lineTotal: m(2247) }),
      line({ lineItemId: 's2b', name: 'Lana Pillow Cover', parentKey: 'sample', unitPrice: m(1099), lineTotal: m(951) }),
    ],
  }),
];
const SAMPLE_TOTALS = { subtotal: m(45613), savings: m(500), shipping: null, tax: null, total: m(45113) };

/**
 * 7.7 — the `requiresWhiteGlove` Custom Field is written by the platform (our API Extension) before the cart
 * is saved; the storefront only reads it. `lineCount` re-keys the read so a cart change refreshes the badge.
 */
function WhiteGloveBadge({ lineCount }: { lineCount: number }) {
  const { unlocked } = useCapability('ext.cartRules');
  const { data } = useSWR(unlocked ? ['cart/extras', lineCount] : null, ([p]) => bffGet<CartExtrasView>(p), {
    refreshInterval: 8000,
  });
  const extras = data && data.ok ? data.data : null;
  const on = extras ? extras.requiresWhiteGlove : true; // sample state while locked
  return (
    <div className="surface flex items-start gap-3 p-4 text-sm">
      <Sparkles size={18} className={`mt-0.5 shrink-0 ${on ? 'text-[var(--color-violet)]' : 'text-[var(--color-muted)]'}`} />
      {on ? (
        <span>
          <b className="font-semibold">White Glove Delivery included</b> — our team unpacks, assembles and takes the packaging away. Added automatically for premium items.
        </span>
      ) : (
        <span className="text-[var(--color-muted)]">Standard delivery — premium items get White Glove Delivery added for you automatically.</span>
      )}
    </div>
  );
}

export function CartView() {
  const locale = useLocale();
  const { unlocked } = useCapability('cart.summary');
  const { cart, changeQuantity, removeLine, applyCode, setLineFulfilment } = useCart();
  const { saveForLater } = useShoppingList();
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  // 5.3 — shown once after a sign-in that met an existing basket ("we combined your basket").
  const mergeRaw = useSyncExternalStore(mergeNoticeStore.subscribe, mergeNoticeStore.getSnapshot, mergeNoticeStore.getServerSnapshot);
  const merge = useMemo(() => parseMergeReport(mergeRaw), [mergeRaw]);

  const fmt = (v: MoneyView | null | undefined) => (v ? formatMoney(v.centAmount, v.currencyCode, locale) : '—');

  // Locked → sample (dimmed by the gate). Unlocked → the real cart (empty state handled below).
  const live = unlocked && cart ? cart.lines : null;
  const lines = live ?? SAMPLE_LINES;
  const totals = unlocked && cart ? cart : SAMPLE_TOTALS;
  const empty = unlocked && (!cart || cart.lines.length === 0);
  const itemCount = lines.reduce((a, l) => a + l.quantity, 0);

  const act = async (fn: () => Promise<unknown>) => {
    if (busy) return;
    setBusy(true);
    try { await fn(); } finally { setBusy(false); }
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-5">
        <MergeNotice report={merge} onDismiss={() => mergeNoticeStore.clear()} />
        <FeatureGate capability="cart.summary" title="Your bag">
          <div className="surface px-6">
            {empty ? (
              <div className="py-14 text-center">
                <h3 className="text-lg">Your bag is empty</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">Browse the collection or pick up where you left off.</p>
                <Link href="/products" className="btn btn-primary mt-5">Start shopping</Link>
              </div>
            ) : (
              <div className="divide-y divide-[var(--color-border)]">
                {lines.map((l) => (
                  <CartRow
                    key={l.lineItemId}
                    l={l}
                    fmt={fmt}
                    editable={!!live}
                    busy={busy}
                    onQty={(q) => act(() => changeQuantity(l.lineItemId, q))}
                    onRemove={() => act(() => removeLine(l.lineItemId))}
                    onSaveForLater={() => act(() => saveForLater(l.lineItemId))}
                    onFulfilment={(key) => act(() => setLineFulfilment(l.lineItemId, { supplyChannelKey: key }))}
                  />
                ))}
                <div className="flex items-center gap-3 py-4 text-sm">
                  <Gift size={18} className="text-[var(--color-violet)]" />
                  <span>Add a gift message or gift wrap</span>
                  <Link href="/checkout" className="chip !h-8 !text-[13px]">Add at checkout</Link>
                </div>
              </div>
            )}
          </div>
        </FeatureGate>

        {/* Delivery address + method (cart.address / cart.shipping) — settable at checkout, switchable here. */}
        {empty ? null : <DeliveryPanel cart={unlocked ? cart : null} />}

        {/* Saved items / wishlist (cart.shoppingList) */}
        <SavedItemsPanel />
      </div>

      <div className="space-y-4 lg:sticky lg:top-[172px]">
        <div className="surface p-6">
          <h3 className="text-lg">Order summary <span className="font-sans text-sm font-normal text-[var(--color-muted)]">· {itemCount} item{itemCount === 1 ? '' : 's'}</span></h3>

          {/* Promo code (cart.promo) */}
          <FeatureGate capability="cart.promo" title="Promo code" className="mt-4">
            <form
              onSubmit={(e) => { e.preventDefault(); if (code.trim()) act(() => applyCode(code.trim())); }}
            >
              <div className="flex gap-2">
                <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Promo code" className="field !h-11 flex-1 !rounded-full" />
                <button type="submit" disabled={busy} className="btn btn-dark !h-11">Apply</button>
              </div>
              {unlocked && cart?.discountCodes?.length ? (
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[var(--color-teal-dark)]"><Tag size={12} /> {cart.discountCodes.join(', ')} applied</p>
              ) : (
                <p className="mt-2 text-xs text-[var(--color-muted)]">Try SAVE10 for 10% off your first order.</p>
              )}
            </form>
          </FeatureGate>

          <div className="mt-5 space-y-2.5 text-[15px]">
            <Row label="Subtotal" value={fmt(totals.subtotal)} />
            {totals.savings && totals.savings.centAmount > 0 ? (
              <Row label="Savings" value={`−${fmt(totals.savings)}`} accent />
            ) : null}
            <Row
              label={unlocked && cart?.shippingMethod ? `Delivery · ${cart.shippingMethod}` : 'Delivery'}
              value={totals.shipping ? (totals.shipping.centAmount === 0 ? 'Free' : fmt(totals.shipping)) : 'Calculated at checkout'}
            />
            {totals.tax ? <Row label="Estimated tax" value={fmt(totals.tax)} /> : null}
            <div className="border-t border-[var(--color-border)] pt-3">
              <Row label="Total" value={fmt(totals.total)} strong />
            </div>
          </div>

          <Link
            href="/checkout"
            aria-disabled={empty}
            className={`btn btn-primary btn-lg mt-5 w-full ${empty ? 'pointer-events-none opacity-50' : ''}`}
          >
            Proceed to checkout
          </Link>
          <p className="mt-3 flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <ShieldCheck size={14} /> Secure checkout · Visa, Mastercard, Amex, PayPal, Apple Pay
          </p>
          {unlocked && cart?.id ? (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
              <User size={12} />
              {cart.owner === 'customer'
                ? `Your basket${cart.customerEmail ? ` · ${cart.customerEmail}` : ''}`
                : 'Guest basket — sign in to keep it on your account'}
            </p>
          ) : null}
        </div>

        {/* Session 7.7 — set by the cart-rules API Extension, never by this storefront */}
        <FeatureGate capability="ext.cartRules" title="White Glove Delivery">
          <WhiteGloveBadge lineCount={lines.length} />
        </FeatureGate>
      </div>
    </div>
  );
}

/**
 * 5.3 — what sign-in did to the guest basket, shown once. Gated on customer.cartMerge: while locked a
 * sample notice explains the feature; once unlocked it renders only when a real merge happened.
 */
function MergeNotice({ report, onDismiss }: { report: MergeReportView | null; onDismiss: () => void }) {
  const { unlocked } = useCapability('customer.cartMerge');
  if (unlocked && !report) return null;
  const merged = report?.mergedLines ?? 1;
  const added = report?.addedLines ?? 2;
  const left = report?.leftBehind ?? [];
  const kept = report?.mode === 'UseAsNewActiveCustomerCart';
  return (
    <FeatureGate capability="customer.cartMerge" title="Basket merge">
      <div className="flex items-start justify-between gap-3 rounded-[14px] border border-[var(--color-teal)]/40 bg-[var(--color-teal-light)] p-4 text-sm">
        <div className="flex items-start gap-2.5">
          <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-teal-dark)]" />
          <div>
            {kept ? (
              <>
                <p className="font-semibold">We kept this basket.</p>
                <p className="text-[var(--color-muted)]">The basket saved on your account has been set aside — nothing was deleted.</p>
              </>
            ) : (
              <>
                <p className="font-semibold">We combined your basket with the one on your account.</p>
                <p className="text-[var(--color-muted)]">
                  {added} item{added === 1 ? '' : 's'} added{merged > 0 ? `, ${merged} merged (larger quantity kept)` : ''}
                  {left.length > 0 ? `, ${left.length} could not be carried over (${left.join(', ')})` : ''}.
                </p>
              </>
            )}
          </div>
        </div>
        {unlocked ? (
          <button onClick={onDismiss} className="text-xs text-[var(--color-muted)] underline">Dismiss</button>
        ) : null}
      </div>
    </FeatureGate>
  );
}

/** One cart line. A bundle parent renders its children indented beneath it + a "Bundle saving" line. */
function CartRow({
  l, fmt, editable, busy, onQty, onRemove, onSaveForLater, onFulfilment,
}: {
  l: CartLineView;
  fmt: (v: MoneyView | null | undefined) => string;
  editable: boolean;
  busy: boolean;
  onQty: (quantity: number) => void;
  onRemove: () => void;
  onSaveForLater?: () => void;
  /** 4.5 — change this line's fulfilment: a pickup store key, or "" for delivery. */
  onFulfilment?: (supplyChannelKey: string) => void;
}) {
  const isBundle = l.children.length > 0;
  // The line carries the supply channel's ID; the selector works in keys — resolve through the location list.
  const { unlocked: channelUnlocked } = useCapability('cart.channel');
  const { locations } = usePickupLocations(channelUnlocked && editable);
  const pickupKey = l.supplyChannelId ? locations.find((p) => p.id === l.supplyChannelId)?.key ?? DELIVERY : DELIVERY;
  return (
    <div className="py-5">
      <div className="flex items-start gap-5">
        <div className="grid h-[104px] w-[104px] shrink-0 place-items-center rounded-xl bg-[var(--color-earth)] text-[var(--color-muted)]">
          {isBundle ? <Layers size={28} /> : <Package size={28} />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[17px] font-semibold">{l.name}</p>
            {isBundle ? <span className="pill pill-violet">Bundle</span> : null}
            {l.recurring ? (
              <span className="pill pill-teal"><Sparkles size={11} /> Subscribe &amp; Save{l.recurrenceLabel ? ` · ${l.recurrenceLabel}` : ''}</span>
            ) : null}
          </div>
          <p className="mt-0.5 flex items-center gap-2 text-[13px] text-[var(--color-muted)]">
            {l.sku ? <span className="font-mono">{l.sku}</span> : null}
            {l.recurring && l.recurrencePriceMode ? <span>· {l.recurrencePriceMode === 'Dynamic' ? 'Price updates each delivery' : 'Price locked at today’s rate'}</span> : null}
            <span className="inline-flex items-center gap-1.5"><span className="stock-dot" /> In stock</span>
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            {editable && !isBundle ? (
              <QtyStepper qty={l.quantity} busy={busy} onQty={onQty} />
            ) : (
              <span className="chip !h-9">Qty {l.quantity}</span>
            )}
            {!isBundle && !l.recurring && onFulfilment ? (
              <div id={`cap-cart.channel${editable ? '' : '-sample'}`}>
                <FulfilmentSelect compact id={`fulfilment-${l.lineItemId}`} value={pickupKey} disabled={busy || !editable} onChange={onFulfilment} />
              </div>
            ) : null}
            {editable ? (
              <>
                {onSaveForLater && !isBundle ? (
                  <button onClick={onSaveForLater} disabled={busy} className="chip !h-9 disabled:opacity-50">
                    <Heart size={13} /> Save for later
                  </button>
                ) : null}
                <button onClick={onRemove} disabled={busy} className="chip !h-9 disabled:opacity-50">
                  Remove
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="text-right">
          <p className="text-[18px] font-bold">{fmt(l.lineTotal)}</p>
          {l.quantity > 1 && l.unitPrice ? <p className="text-xs text-[var(--color-muted)]">{fmt(l.unitPrice)} each</p> : null}
        </div>
      </div>

      {isBundle ? (
        <div className="ml-[124px] mt-3 space-y-1 border-l-2 border-[var(--color-border)] pl-4">
          {l.children.map((c) => (
            <div key={c.lineItemId} className="flex justify-between text-sm text-[var(--color-muted)]">
              <span>{c.quantity} × {c.name}</span>
              <span>{fmt(c.lineTotal)}</span>
            </div>
          ))}
          {l.lineSavings && l.lineSavings.centAmount > 0 ? (
            <div className="flex justify-between text-sm font-medium text-[var(--color-teal-dark)]">
              <span>Bundle saving</span>
              <span>−{fmt(l.lineSavings)}</span>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function QtyStepper({ qty, busy, onQty }: { qty: number; busy: boolean; onQty: (q: number) => void }) {
  return (
    <div className="inline-flex h-9 items-center rounded-full border border-[var(--color-border)] bg-white">
      <button onClick={() => onQty(Math.max(1, qty - 1))} disabled={busy || qty <= 1}
        className="grid h-full w-9 place-items-center text-[var(--color-muted)] disabled:opacity-40" aria-label="Decrease quantity"><Minus size={14} /></button>
      <span className="min-w-[2ch] px-1 text-center text-sm font-semibold">{qty}</span>
      <button onClick={() => onQty(qty + 1)} disabled={busy}
        className="grid h-full w-9 place-items-center text-[var(--color-muted)] disabled:opacity-40" aria-label="Increase quantity"><Plus size={14} /></button>
    </div>
  );
}

function Row({ label, value, strong, accent }: { label: string; value: string; strong?: boolean; accent?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={strong ? 'font-semibold' : 'text-[var(--color-muted)]'}>{label}</span>
      <span className={`${strong ? 'text-lg font-bold' : 'font-medium'} ${accent ? 'text-[var(--color-teal-dark)]' : ''}`}>{value}</span>
    </div>
  );
}

const SAMPLE_SAVED: SavedItemView[] = [
  { lineItemId: 'w1', sku: null, name: 'Aria Rug', quantity: 1 },
  { lineItemId: 'w2', sku: null, name: 'Vanilla Candle', quantity: 1 },
];

/** Saved-for-later / wishlist panel below the cart (cart.shoppingList). Move one or all back to the cart. */
function SavedItemsPanel() {
  const { unlocked } = useCapability('cart.shoppingList');
  const { list, moveToCart, moveAllToCart, removeItem } = useShoppingList();
  const [busy, setBusy] = useState(false);
  const act = async (fn: () => Promise<unknown>) => {
    if (busy) return;
    setBusy(true);
    try { await fn(); } finally { setBusy(false); }
  };

  const items = unlocked && list ? list.items : SAMPLE_SAVED;
  // Unlocked but nothing saved → hide the panel entirely (no clutter). Locked → sample under the gate.
  if (unlocked && items.length === 0) return null;

  return (
    <FeatureGate capability="cart.shoppingList" title="Saved for later">
      <div className="surface" id="saved">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
          <h2 className="flex items-center gap-2 text-lg"><Heart size={18} /> Saved for later <span className="font-sans text-sm font-normal text-[var(--color-muted)]">· {items.length}</span></h2>
          {unlocked && items.length > 0 ? (
            <button onClick={() => act(() => moveAllToCart())} disabled={busy} className="btn btn-light btn-sm disabled:opacity-50">
              Move all to bag
            </button>
          ) : null}
        </div>
        <div className="divide-y divide-[var(--color-border)] px-6">
          {items.map((it) => (
            <div key={it.lineItemId} className="flex items-center gap-4 py-4">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--color-earth)] text-[var(--color-muted)]">
                <Package size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{it.name}</p>
                <p className="text-sm text-[var(--color-muted)]">Qty {it.quantity}{it.sku ? ` · ${it.sku}` : ''}</p>
              </div>
              {unlocked ? (
                <div className="flex items-center gap-2">
                  <button onClick={() => act(() => moveToCart(it.lineItemId))} disabled={busy} className="btn btn-dark btn-sm disabled:opacity-50">
                    Move to bag
                  </button>
                  <button onClick={() => act(() => removeItem(it.lineItemId))} disabled={busy} className="chip !h-[38px] disabled:opacity-50">
                    Remove
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </FeatureGate>
  );
}
