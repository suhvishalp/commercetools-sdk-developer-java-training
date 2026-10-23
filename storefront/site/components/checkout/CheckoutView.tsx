'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import useSWR from 'swr';
import { Link } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { bffGet, bffPut } from '@/lib/bff/client';
import { CartExtrasView } from '@/lib/ext-types';
import { ReadinessView } from '@/lib/order-types';
import { MoneyView, ShippingAddressInput } from '@/lib/cart-types';
import { KEY_READINESS } from '@/lib/cache-keys';
import { useCart, useShippingOptions } from '@/hooks/useCart';
import { useSession } from '@/hooks/useSession';
import { useAccount } from '@/hooks/useAccount';
import { formatMoney } from '@/lib/utils';
import { Check, CreditCard, Mail, MapPin, Truck, Pencil, ShieldCheck, Package, ArrowRight } from '@/components/ui/icons';
import { PaymentStep } from './PaymentStep';
import { AddressForm } from './AddressForm';
import { formatAddress, ShippingOptionList } from '@/components/cart/DeliveryPanel';

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
    <div className="space-y-1.5">
      <label className="block text-[13px] font-medium text-[var(--color-muted)]" htmlFor="gift-message">Gift message (optional)</label>
      <div className="flex gap-2">
        <input
          id="gift-message"
          value={value}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Happy birthday, Ada!"
          maxLength={200}
          className="field flex-1"
        />
        <button type="button" onClick={save} disabled={busy || draft === null} className="btn btn-dark">
          Save
        </button>
      </div>
      {saved && draft === null ? <p className="text-xs text-[var(--color-teal-dark)]">Saved — it will appear on your order.</p> : null}
    </div>
  );
}

const STEPS = [
  { n: 1, label: 'Contact', icon: Mail },
  { n: 2, label: 'Delivery address', icon: MapPin },
  { n: 3, label: 'Delivery method', icon: Truck },
  { n: 4, label: 'Review & pay', icon: CreditCard },
] as const;

/**
 * Checkout (Session 6) on commercetools Checkout, Payment Only mode — a step-by-step wizard, one step on
 * screen at a time: 1 Contact (signed in, or a guest email) · 2 Delivery address (4.7; pre-filled from the
 * account's default address after sign-in) · 3 Delivery method (4.8; the default is pre-selected, switchable)
 * · 4 Review & pay (readiness 6.5 → Checkout's payment widget 6.1 / 6.2). The active step follows the cart's
 * progress automatically (the first thing still missing); completed steps collapse to a summary row with
 * "Change", which re-opens them. Checkout then creates the Payment and the Order; the confirmation page
 * reads them back (6.3).
 */
export function CheckoutView() {
  const locale = useLocale();
  const { cart, loading: cartLoading, setShippingAddress, setShippingMethod, setCustomerEmail, prefill } = useCart();
  const { signedIn, firstName } = useSession();
  const account = useAccount();
  const customer = account.customer;
  const { unlocked: shippingUnlocked } = useCapability('cart.shipping');
  const { options, loading: optionsLoading } = useShippingOptions(shippingUnlocked ? cart : null);
  const { data: readinessRes } = useSWR(cart?.id ? KEY_READINESS : null, (p) => bffGet<ReadinessView>(p));
  const readiness = readinessRes && readinessRes.ok ? readinessRes.data : null;

  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [saveToBook, setSaveToBook] = useState(true);
  // The step the shopper opened on purpose ("Change"); null = follow the cart's progress.
  const [manual, setManual] = useState<number | null>(null);

  // Signed in with no address on the cart yet → pull the account's default (idempotent on the BFF).
  useEffect(() => {
    if (signedIn && cart?.id && !cart.shippingAddress) void prefill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn, cart?.id, cart?.shippingAddress?.country]);

  const fmt = (m: MoneyView | null | undefined) => (m ? formatMoney(m.centAmount, m.currencyCode, locale) : '—');
  const fmtN = (m: MoneyView | null) => (m ? formatMoney(m.centAmount, m.currencyCode, locale) : null);
  const act = async (key: string, fn: () => Promise<unknown>) => {
    if (busy) return;
    setBusy(key);
    try { await fn(); } finally { setBusy(null); }
  };

  const contactDone = signedIn || !!cart?.customerEmail;
  const addressDone = !!cart?.shippingAddress?.country;
  const methodDone = !!cart?.shippingMethodId;
  const empty = !cartLoading && (!cart || cart.lines.length === 0);
  const done = [contactDone, addressDone, methodDone, false];
  const autoStep = !contactDone ? 1 : !addressDone ? 2 : !methodDone ? 3 : 4;
  const step = manual ?? autoStep;
  const selectedMethod = options.find((o) => o.selected) ?? null;

  const saveAddress = (a: ShippingAddressInput) =>
    act('address', async () => {
      await setShippingAddress(a);
      if (signedIn && saveToBook && account.customer) {
        // 5.5 — keep it for next time; becomes the default when the book was empty.
        await account.addAddress({ ...a, defaultShipping: account.customer.addresses.length === 0 });
      }
      setManual(null); // follow the progress → delivery method
    });

  if (empty) {
    return (
      <div className="surface p-14 text-center">
        <h3 className="text-lg">Your bag is empty</h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">Add something from the collection first.</p>
        <Link href="/products" className="btn btn-primary mt-5">Continue shopping</Link>
      </div>
    );
  }

  const next = (n: number) => (
    <button type="button" onClick={() => setManual(n)} className="btn btn-primary">
      Continue <ArrowRight size={16} />
    </button>
  );

  return (
    <div>
      {/* Stepper — completed steps are clickable */}
      <ol className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {STEPS.map((s, i) => {
          const isDone = done[i];
          const on = step === s.n;
          return (
            <li key={s.n}>
              <button
                type="button"
                disabled={!isDone && !on && s.n > autoStep}
                onClick={() => setManual(s.n)}
                className={`flex w-full items-center gap-2.5 rounded-full border px-4 py-2.5 text-left text-sm font-medium disabled:opacity-60 ${
                  on ? 'border-[var(--color-violet)] bg-[var(--color-violet-50)]' : 'border-[var(--color-border)] bg-white'
                }`}
              >
                <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  isDone ? 'bg-[var(--color-teal)] text-white' : on ? 'bg-[var(--color-violet)] text-white' : 'bg-[var(--color-earth)] text-[var(--color-muted)]'
                }`}>{isDone ? <Check size={13} /> : s.n}</span>
                {s.label}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-3">
          {/* 1 · Contact */}
          {step === 1 ? (
            <StepCard n={1} title="Contact">
              {signedIn ? (
                <div className="space-y-4 text-sm">
                  <p>Signed in{firstName ? ` as ${firstName}` : ''}{customer?.email ? <> · <span className="text-[var(--color-muted)]">{customer.email}</span></> : null}.</p>
                  {next(2)}
                </div>
              ) : (
                <div className="space-y-4 text-sm">
                  <p className="text-[var(--color-muted)]">
                    <Link href="/login?next=/checkout" className="font-semibold text-[var(--color-violet-dark)]">Sign in</Link> to use your saved
                    addresses, or continue as a guest.
                  </p>
                  {cart?.customerEmail ? (
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p>Guest · {cart.customerEmail}</p>
                      {next(2)}
                    </div>
                  ) : (
                    <form
                      className="flex gap-2"
                      onSubmit={(e) => { e.preventDefault(); if (email.trim()) void act('email', async () => { await setCustomerEmail(email.trim()); setManual(null); }); }}
                    >
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email for your order confirmation" className="field flex-1" />
                      <button type="submit" disabled={busy === 'email'} className="btn btn-primary">
                        Continue <ArrowRight size={16} />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </StepCard>
          ) : contactDone ? (
            <Summary n={1} onChange={setManual}>{signedIn ? `Signed in${firstName ? ` as ${firstName}` : ''}${customer?.email ? ` · ${customer.email}` : ''}` : `Guest · ${cart?.customerEmail}`}</Summary>
          ) : (
            <Upcoming n={1} />
          )}

          {/* 2 · Delivery address (4.7) */}
          <FeatureGate capability="cart.address" title="Delivery address">
            {step === 2 ? (
              <StepCard n={2} title="Delivery address">
                <div className="space-y-4">
                  {signedIn && customer && customer.addresses.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-[13px] font-medium text-[var(--color-muted)]">Your saved addresses</p>
                      {customer.addresses.map((a) => {
                        const isCurrent = addressDone && formatAddress(cart!.shippingAddress) === formatAddress(a);
                        return (
                          <button
                            key={a.id}
                            type="button"
                            disabled={busy !== null}
                            onClick={() => act('address', async () => {
                              await setShippingAddress({
                                country: a.country ?? 'DE', firstName: a.firstName ?? '', lastName: a.lastName ?? '',
                                streetName: a.streetName ?? '', streetNumber: a.streetNumber ?? '', postalCode: a.postalCode ?? '', city: a.city ?? '',
                              });
                              setManual(null);
                            })}
                            className={`flex w-full items-center justify-between rounded-[12px] border-[1.5px] px-4 py-3 text-left text-sm hover:border-[var(--color-violet)] disabled:opacity-60 ${
                              isCurrent ? 'border-[var(--color-violet)] bg-[var(--color-violet-50)]' : 'border-[var(--color-border)] bg-white'
                            }`}
                          >
                            <span>{formatAddress(a)}</span>
                            <span className="flex gap-1.5">
                              {isCurrent ? <span className="pill pill-teal">Selected</span> : null}
                              {a.defaultShipping ? <span className="pill pill-violet">Default</span> : null}
                            </span>
                          </button>
                        );
                      })}
                      <p className="pt-1 text-[13px] text-[var(--color-muted)]">Or enter a new address:</p>
                    </div>
                  ) : null}
                  <AddressForm
                    initial={cart?.shippingAddress ?? (customer ? { firstName: customer.firstName ?? '', lastName: customer.lastName ?? '' } : null)}
                    submitLabel="Deliver here"
                    busy={busy === 'address'}
                    onSubmit={saveAddress}
                    onCancel={addressDone ? () => setManual(null) : undefined}
                    extra={signedIn ? (
                      <label className="flex items-center gap-2.5 text-sm">
                        <input type="checkbox" checked={saveToBook} onChange={(e) => setSaveToBook(e.target.checked)} className="h-[18px] w-[18px] accent-[var(--color-violet)]" />
                        Save to my address book
                      </label>
                    ) : null}
                  />
                  {addressDone ? <div className="border-t border-[var(--color-border)] pt-4">{next(3)}</div> : null}
                </div>
              </StepCard>
            ) : addressDone ? (
              <Summary n={2} onChange={setManual}>{formatAddress(cart!.shippingAddress)}</Summary>
            ) : (
              <Upcoming n={2} />
            )}
          </FeatureGate>

          {/* 3 · Delivery method (4.8) */}
          <FeatureGate capability="cart.shipping" title="Delivery method">
            {step === 3 ? (
              <StepCard n={3} title="Delivery method">
                {!addressDone ? (
                  <p className="text-sm text-[var(--color-muted)]">Enter your delivery address first.</p>
                ) : optionsLoading && options.length === 0 ? (
                  <p className="text-sm text-[var(--color-muted)]">Checking delivery options…</p>
                ) : options.length === 0 ? (
                  <p className="rounded-xl bg-[var(--color-yellow-light)] px-4 py-3 text-sm text-[var(--color-plum)]">
                    We can’t deliver to this address yet. Please try another address.
                  </p>
                ) : (
                  <div className="space-y-4">
                    <ShippingOptionList options={options} busy={busy === 'method'} disabled={busy !== null} onChoose={(id) => act('method', () => setShippingMethod(id))} fmt={fmtN} />
                    {methodDone ? <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4"><span className="text-sm text-[var(--color-muted)]">{selectedMethod ? `${selectedMethod.name} selected` : ''}</span>{next(4)}</div> : null}
                  </div>
                )}
              </StepCard>
            ) : methodDone ? (
              <Summary n={3} onChange={setManual}>{cart?.shippingMethod}{cart?.shipping ? ` · ${cart.shipping.centAmount === 0 ? 'Free' : fmt(cart.shipping)}` : ''}</Summary>
            ) : (
              <Upcoming n={3} />
            )}
          </FeatureGate>

          {/* 4 · Review & pay (6.5 → 6.1 / 6.2) */}
          <FeatureGate capability="order.readiness" title="Review & pay">
            {step === 4 ? (
              <StepCard n={4} title="Review & pay">
                <div className="space-y-4">
                  {readiness ? (
                    readiness.ready ? (
                      <p className="flex items-center gap-2 text-sm font-medium text-[var(--color-teal-dark)]"><Check size={15} /> Everything is set — you can pay now.</p>
                    ) : (
                      <ul className="space-y-1 rounded-xl bg-[var(--color-yellow-light)] px-4 py-3 text-sm text-[var(--color-plum)]">
                        {readiness.missing.map((m) => (
                          <li key={m}>• {explainMissing(m)}</li>
                        ))}
                      </ul>
                    )
                  ) : (
                    <p className="text-sm text-[var(--color-muted)]">Checking your order…</p>
                  )}
                  {/* Session 7.1 — a Custom Field on the cart; it snapshots onto the order at the commit. */}
                  <FeatureGate capability="ext.customFields" title="Gift message">
                    <GiftMessageField />
                  </FeatureGate>
                  {paying ? (
                    <PaymentStep />
                  ) : (
                    <FeatureGate capability="order.checkoutSession" title="Proceed to payment">
                      <div className="space-y-2.5">
                        <button onClick={() => setPaying(true)} disabled={!readiness?.ready} className="btn btn-primary btn-lg w-full">
                          Proceed to payment{readiness?.total ? ` · ${fmt(readiness.total)}` : ''}
                        </button>
                        <p className="flex items-start gap-2 text-xs text-[var(--color-muted)]">
                          <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                          <span>Your card details are handled securely by commercetools Checkout — this shop never sees them.</span>
                        </p>
                      </div>
                    </FeatureGate>
                  )}
                </div>
              </StepCard>
            ) : (
              <Upcoming n={4} />
            )}
          </FeatureGate>
        </div>

        {/* Order summary */}
        <aside className="space-y-4 lg:sticky lg:top-[172px]">
          <div className="surface p-6">
            <h2 className="text-lg">Your order <span className="font-sans text-sm font-normal text-[var(--color-muted)]">· {cart?.itemCount ?? 0} item{(cart?.itemCount ?? 0) === 1 ? '' : 's'}</span></h2>
            <ul className="mt-3 divide-y divide-[var(--color-border)] text-sm">
              {(cart?.lines ?? []).map((l) => (
                <li key={l.lineItemId} className="flex items-center gap-3 py-2.5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] bg-[var(--color-earth)] text-[var(--color-muted)]"><Package size={18} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{l.name}</span>
                    <span className="text-xs text-[var(--color-muted)]">Qty {l.quantity}{l.recurring ? ' · every month' : ''}</span>
                  </span>
                  <span className="shrink-0 font-medium">{fmt(l.lineTotal)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-2 border-t border-[var(--color-border)] pt-3 text-sm">
              <Row label="Subtotal" value={fmt(cart?.subtotal)} />
              {cart?.savings && cart.savings.centAmount > 0 ? <Row label="Savings" value={`−${fmt(cart.savings)}`} accent /> : null}
              <Row label={cart?.shippingMethod ? `Delivery · ${cart.shippingMethod}` : 'Delivery'} value={cart?.shipping ? (cart.shipping.centAmount === 0 ? 'Free' : fmt(cart.shipping)) : addressDone ? '—' : 'after address'} />
              {cart?.tax ? <Row label="Tax" value={fmt(cart.tax)} /> : null}
              <div className="mt-1 border-t border-[var(--color-border)] pt-2.5">
                <Row label="Total" value={fmt(cart?.total)} strong />
              </div>
            </div>
            <Link href="/cart" className="mt-3 block text-[13px] font-semibold text-[var(--color-violet-dark)]">Edit bag</Link>
          </div>
          <p className="flex items-center gap-2 px-1 text-xs text-[var(--color-muted)]"><ShieldCheck size={14} /> Secure payments by commercetools Checkout</p>
        </aside>
      </div>
    </div>
  );
}

/** The BFF's readiness `missing` entries, said the way a shopper would read them. */
function explainMissing(m: string): string {
  switch (m) {
    case 'shipping address': return 'Add a delivery address (step 2).';
    case 'shipping method': return 'Choose a delivery method (step 3).';
    case 'billing address': return 'A billing address is needed — it is copied from your delivery address when you pay.';
    case 'a signed-in customer or a guest email': return 'Sign in, or enter an email for your order confirmation (step 1).';
    case 'at least one line item': return 'Your basket is empty.';
    case 'country': return 'Your basket has no country — start again from the shop.';
    default: return `Missing: ${m}`;
  }
}

/** A finished step, folded to one line with "Change". */
function Summary({ n, onChange, children }: { n: number; onChange: (n: number) => void; children: React.ReactNode }) {
  const s = STEPS[n - 1];
  const Icon = s.icon;
  return (
    <div className="surface flex items-center gap-4 px-6 py-4">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-teal)] text-white"><Check size={14} /></span>
      <span className="hidden text-[var(--color-muted)] sm:inline"><Icon size={17} /></span>
      <span className="min-w-0 flex-1 text-sm">
        <b className="mr-2 font-semibold">{s.label}</b>
        <span className="text-[var(--color-muted)]">{children}</span>
      </span>
      <button type="button" onClick={() => onChange(n)} className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[var(--color-violet-dark)]">
        <Pencil size={12} /> Change
      </button>
    </div>
  );
}

/** A step not reached yet — a quiet placeholder row. */
function Upcoming({ n }: { n: number }) {
  const s = STEPS[n - 1];
  return (
    <div className="flex items-center gap-4 rounded-[14px] border border-dashed border-[var(--color-border)] px-6 py-4 text-sm text-[var(--color-muted)]">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-earth)] text-xs font-bold">{n}</span>
      {s.label}
    </div>
  );
}

function StepCard({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  const Icon = STEPS[n - 1].icon;
  return (
    <section className="surface p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-violet)] text-sm font-bold text-white">{n}</span>
        <h2 className="flex items-center gap-2.5 text-xl"><span className="text-[var(--color-muted)]"><Icon size={18} /></span>{title}</h2>
        <span className="ml-auto text-xs text-[var(--color-muted)]">Step {n} of {STEPS.length}</span>
      </div>
      {children}
    </section>
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
