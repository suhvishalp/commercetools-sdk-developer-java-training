'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { usePreferences } from '@/context/preferences-context';
import { bffGet } from '@/lib/bff/client';
import { OrderSummaryView } from '@/lib/order-types';
import { CustomerAddressView, CustomerView, PriceContextView } from '@/lib/customer-types';
import { KEY_ORDERS } from '@/lib/cache-keys';
import { useSession } from '@/hooks/useSession';
import { useAccount } from '@/hooks/useAccount';
import { formatAddress } from '@/components/cart/DeliveryPanel';
import { AddressForm } from '@/components/checkout/AddressForm';
import { formatMoney } from '@/lib/utils';
import { MapPin, Mail, Package, ShieldCheck, Trash, User, Tag, Check, Heart } from '@/components/ui/icons';

const input = 'field';
const card = 'surface space-y-4 p-6';
const secondary = 'btn btn-light btn-sm';

const SAMPLE_CUSTOMER: CustomerView = {
  id: 'sample', email: 'ada@lhc.test', firstName: 'Ada', lastName: 'Lovelace', emailVerified: false, customerGroupKey: 'vip', stores: [],
  addresses: [
    { id: 'a1', key: 'home', country: 'US', firstName: 'Ada', lastName: 'Lovelace', streetName: 'Market St', streetNumber: '1', postalCode: '94105', city: 'San Francisco', defaultShipping: true, defaultBilling: true },
    { id: 'a2', key: 'work', country: 'DE', firstName: 'Ada', lastName: 'Lovelace', streetName: 'Friedrichstraße', streetNumber: '12', postalCode: '10117', city: 'Berlin', defaultShipping: false, defaultBilling: false },
  ],
};

const NAV = [
  ['#overview', 'Overview', User],
  ['#orders', 'Orders', Package],
  ['/cart#saved', 'Wishlist', Heart],
  ['#addresses', 'Addresses', MapPin],
  ['#pricing', 'Membership & pricing', Tag],
  ['#security', 'Profile & security', ShieldCheck],
] as const;

/**
 * My account — the signed-in dashboard every shop has: profile (5.4), address book (5.5), pricing tier
 * (5.6), security (5.7), email verification (5.8), orders (6.8) and account deletion (5.10). Sign-in and
 * registration live on their own pages (/login, /register); a guest landing here is sent to sign in.
 * Each card gates on its capability and shows sample content until its task is implemented.
 */
export function AccountView() {
  const router = useRouter();
  const { signedIn, loading, notImplemented } = useSession();
  const { customer } = useAccount();

  // A guest has no account page: send them to sign in (unless 5.9 is still pending — then we cannot tell).
  useEffect(() => {
    if (!loading && !notImplemented && !signedIn) router.replace('/login?next=/account');
  }, [loading, notImplemented, signedIn, router]);

  if (loading) return <p className="text-sm text-[var(--color-muted)]">Loading your account…</p>;
  if (!signedIn && !notImplemented) return null;

  const c = customer ?? SAMPLE_CUSTOMER;
  const live = !!customer;

  return (
    <div className="space-y-6" id="overview">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Account</p>
          <h1 className="mt-1 text-[40px]">Hi{c.firstName ? `, ${c.firstName}` : ''}</h1>
          <p className="mt-1 text-[var(--color-muted)]">{c.email}{c.customerGroupKey ? <> · <span className="pill pill-violet align-middle">{c.customerGroupKey} member</span></> : null}</p>
        </div>
        <SignOutButton />
      </header>

      <div className="grid items-start gap-8 lg:grid-cols-[240px_1fr]">
        <nav className="surface p-2 lg:sticky lg:top-[172px]">
          {NAV.map(([href, label, Icon], i) => (
            <Link key={href} href={href} className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-[15px] font-medium hover:bg-[var(--color-earth)] ${i === 0 ? 'bg-[var(--color-violet-50)] text-[var(--color-violet-dark)]' : ''}`}>
              <Icon size={17} /> {label}
            </Link>
          ))}
        </nav>

        <div className="space-y-6">
          <FeatureGate capability="customer.emailVerify" title="Verify your email">
            <VerifyEmailBanner customer={c} live={live} />
          </FeatureGate>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureGate capability="customer.profile" title="My profile">
              {/* Keyed on the profile so a saved change (or the switch from sample to live) resets the form. */}
              <ProfileCard key={`${c.id}:${c.firstName}:${c.lastName}:${c.email}`} customer={c} live={live} />
            </FeatureGate>
            <div id="pricing">
              <FeatureGate capability="customer.groups" title="Membership">
                <PricingCard customer={c} />
              </FeatureGate>
            </div>
          </div>

          <div id="orders">
            <FeatureGate capability="order.history" title="My orders">
              <OrdersCard />
            </FeatureGate>
          </div>

          <div id="addresses">
            <FeatureGate capability="customer.addresses" title="Address book">
              <AddressBook customer={c} live={live} />
            </FeatureGate>
          </div>

          <div className="grid gap-6 md:grid-cols-2" id="security">
            <FeatureGate capability="customer.password" title="Change password">
              <PasswordCard live={live} />
            </FeatureGate>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignOutButton() {
  const router = useRouter();
  const { signOut } = useSession();
  const [busy, setBusy] = useState(false);
  return (
    <button
      disabled={busy}
      onClick={async () => { setBusy(true); try { await signOut(); router.push('/'); } finally { setBusy(false); } }}
      className={secondary}
    >
      {busy ? 'Signing out…' : 'Sign out'}
    </button>
  );
}

function VerifyEmailBanner({ customer, live }: { customer: CustomerView; live: boolean }) {
  const { requestEmailVerification, confirmEmail } = useAccount();
  const [token, setToken] = useState('');
  const [note, setNote] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  if (live && customer.emailVerified) {
    return (
      <p className="flex items-center gap-2 rounded-[14px] border border-[var(--color-teal)]/40 bg-[var(--color-teal-light)] px-6 py-3 text-sm">
        <ShieldCheck size={16} className="text-[var(--color-teal-dark)]" /> Your email address is verified.
      </p>
    );
  }
  return (
    <div className="space-y-3 rounded-[14px] bg-[var(--color-yellow-light)] px-6 py-4 text-sm text-[var(--color-plum)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2"><Mail size={16} /> Please verify your email address <strong>{customer.email}</strong>.</span>
        <button
          disabled={!live || busy}
          onClick={async () => {
            setBusy(true);
            const r = await requestEmailVerification();
            setBusy(false);
            if (r.ok && r.data) { setToken(r.data.tokenValue ?? ''); setNote(r.data.note); }
          }}
          className="btn btn-dark btn-sm"
        >
          {busy ? 'Sending…' : 'Send verification link'}
        </button>
      </div>
      {note ? (
        <form
          className="space-y-2"
          onSubmit={async (e) => { e.preventDefault(); setBusy(true); const r = await confirmEmail(token.trim()); setBusy(false); if (r.ok) setDone(true); }}
        >
          <p className="text-xs">We’ve sent a verification code to your inbox — enter it below.</p>
          <div className="flex gap-2">
            <input value={token} onChange={(e) => setToken(e.target.value)} className={`${input} font-mono !text-xs`} placeholder="Verification code" />
            <button type="submit" disabled={busy || !token} className="btn btn-dark">Verify</button>
          </div>
          {done ? <p className="text-xs font-medium text-[var(--color-teal-dark)]">Verified — thank you.</p> : null}
        </form>
      ) : null}
    </div>
  );
}

function CardTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return <h2 className="flex items-center gap-2.5 text-xl"><span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-violet-50)] text-[var(--color-violet-dark)]">{icon}</span> {children}</h2>;
}

function ProfileCard({ customer, live }: { customer: CustomerView; live: boolean }) {
  const { updateProfile } = useAccount();
  const [form, setForm] = useState({ firstName: customer.firstName ?? '', lastName: customer.lastName ?? '', email: customer.email });
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dirty = form.firstName !== (customer.firstName ?? '') || form.lastName !== (customer.lastName ?? '') || form.email !== customer.email;
  return (
    <form
      className={card}
      onSubmit={async (e) => {
        e.preventDefault();
        if (!live || busy) return;
        setBusy(true); setError(null);
        const patch: { firstName?: string; lastName?: string; email?: string } = {};
        if (form.firstName !== (customer.firstName ?? '')) patch.firstName = form.firstName;
        if (form.lastName !== (customer.lastName ?? '')) patch.lastName = form.lastName;
        if (form.email !== customer.email) patch.email = form.email.trim();
        const r = await updateProfile(patch);
        setBusy(false);
        if (r.ok) { setSaved(true); setTimeout(() => setSaved(false), 2000); } else setError('We couldn’t save your changes. Please try again.');
      }}
    >
      <CardTitle icon={<User size={17} />}>My profile</CardTitle>
      <div className="grid grid-cols-2 gap-3">
        <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" className={input} />
        <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" className={input} />
      </div>
      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className={input} />
      {form.email !== customer.email ? <p className="text-xs text-[var(--color-plum)]">Changing your email will ask you to verify it again.</p> : null}
      {error ? <p className="text-xs text-red-700">{error}</p> : null}
      <button type="submit" disabled={!live || !dirty || busy} className="btn btn-primary btn-sm">{busy ? 'Saving…' : saved ? 'Saved' : 'Save changes'}</button>
    </form>
  );
}

function PricingCard({ customer }: { customer: CustomerView }) {
  const { currency, country, channel } = usePreferences();
  const params = new URLSearchParams();
  if (currency) params.set('priceCurrency', currency);
  if (country) params.set('priceCountry', country);
  if (channel) params.set('priceChannel', channel);
  const { data } = useSWR(`price-context?${params.toString()}`, (p) => bffGet<PriceContextView>(p));
  const ctx = data && data.ok ? data.data : null;
  const group = ctx?.customerGroupKey ?? customer.customerGroupKey;
  return (
    <div className={card}>
      <CardTitle icon={<Tag size={17} />}>Membership &amp; pricing</CardTitle>
      {group ? (
        <p className="text-sm text-[var(--color-muted)]">
          You are a <strong className="text-[var(--color-ink)]">{group}</strong> member — the shop shows your member prices.
        </p>
      ) : (
        <p className="text-sm text-[var(--color-muted)]">You see our standard prices. Membership tiers unlock member pricing.</p>
      )}
      <p className="text-xs text-[var(--color-muted)]">
        Prices shown in {ctx?.currency ?? currency} for {ctx?.country ?? country}.
      </p>
    </div>
  );
}

function AddressBook({ customer, live }: { customer: CustomerView; live: boolean }) {
  const { addAddress, setDefaultShipping, removeAddress } = useAccount();
  const [adding, setAdding] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const act = async (key: string, fn: () => Promise<unknown>) => {
    if (busy) return;
    setBusy(key);
    try { await fn(); } finally { setBusy(null); }
  };
  return (
    <div className={card}>
      <div className="flex items-center justify-between">
        <CardTitle icon={<MapPin size={17} />}>Address book</CardTitle>
        {!adding ? <button onClick={() => setAdding(true)} disabled={!live} className={secondary}>+ Add address</button> : null}
      </div>
      {adding ? (
        <div className="rounded-[12px] border border-[var(--color-border)] p-5">
          <AddressForm
            initial={{ firstName: customer.firstName ?? '', lastName: customer.lastName ?? '' }}
            busy={busy === 'add'}
            onSubmit={(a) => act('add', async () => {
              await addAddress({ ...a, defaultShipping: customer.addresses.length === 0 });
              setAdding(false);
            })}
            onCancel={() => setAdding(false)}
          />
        </div>
      ) : null}
      {customer.addresses.length === 0 ? (
        <p className="text-sm text-[var(--color-muted)]">No saved addresses yet — add one, or save it at checkout.</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {customer.addresses.map((a: CustomerAddressView) => (
            <div key={a.id} className="rounded-[12px] border-[1.5px] border-[var(--color-border)] p-4 text-sm">
              <div className="mb-2 flex items-center justify-between">
                {a.defaultShipping ? <span className="pill pill-violet"><Check size={11} /> Default delivery</span> : <span className="pill pill-earth">Saved</span>}
                <button disabled={!live || busy !== null} onClick={() => act(a.id, () => removeAddress(a.id))} aria-label="Remove address"
                  className="text-[var(--color-muted)] hover:text-red-700 disabled:opacity-50"><Trash size={15} /></button>
              </div>
              <b className="block font-semibold">{[a.firstName, a.lastName].filter(Boolean).join(' ')}</b>
              <span className="text-[var(--color-muted)]">{formatAddress({ ...a, firstName: null, lastName: null })}</span>
              {!a.defaultShipping ? (
                <div className="mt-3">
                  <button disabled={!live || busy !== null} onClick={() => act(a.id, () => setDefaultShipping(a.id))} className="chip !h-8 !text-[13px] disabled:opacity-50">Set as default</button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function OrdersCard() {
  const locale = useLocale();
  const { unlocked } = useCapability('order.history');
  const { data } = useSWR(unlocked ? KEY_ORDERS : null, (p) => bffGet<OrderSummaryView[]>(p));
  const orders = data && data.ok ? data.data ?? [] : null;
  const shown = orders ?? [
    { orderNumber: 'LHC-20260914-7F3A2C', createdAt: new Date().toISOString(), total: { centAmount: 107700, currencyCode: 'EUR', fractionDigits: 2 }, orderState: 'Open', shipmentState: 'Pending', paymentState: 'Paid', customState: 'order-placed', lineCount: 3 },
  ];
  return (
    <div className={card}>
      <CardTitle icon={<Package size={17} />}>My orders</CardTitle>
      {orders && orders.length === 0 ? (
        <p className="text-sm text-[var(--color-muted)]">No orders yet. <Link href="/products" className="font-semibold text-[var(--color-violet-dark)]">Start shopping</Link></p>
      ) : (
        <ul className="divide-y divide-[var(--color-border)] text-sm">
          {shown.map((o) => (
            <li key={o.orderNumber} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
              <span>
                <Link href={`/checkout/confirmation?orderNumber=${encodeURIComponent(o.orderNumber)}`} className="font-mono font-semibold text-[var(--color-ink)] hover:text-[var(--color-violet)]">
                  {o.orderNumber}
                </Link>
                <span className="mt-0.5 block text-[var(--color-muted)]">
                  {new Date(o.createdAt).toLocaleDateString(locale)} · {o.lineCount} item{o.lineCount === 1 ? '' : 's'} · {formatMoney(o.total.centAmount, o.total.currencyCode, locale)}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="pill pill-violet">{o.customState ?? o.orderState}</span>
                {o.paymentState ? <span className={`pill ${/paid/i.test(o.paymentState) ? 'pill-teal' : 'pill-earth'}`}>{o.paymentState}</span> : null}
                <Link href={`/checkout/confirmation?orderNumber=${encodeURIComponent(o.orderNumber)}`} className={secondary}>View</Link>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PasswordCard({ live }: { live: boolean }) {
  const { changePassword } = useAccount();
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  return (
    <form
      className={card}
      onSubmit={async (e) => {
        e.preventDefault();
        if (!live || busy) return;
        setBusy(true); setMsg(null);
        const r = await changePassword(current, next);
        setBusy(false);
        if (r.ok) { setMsg({ ok: true, text: 'Password updated.' }); setCurrent(''); setNext(''); }
        else setMsg({ ok: false, text: r.status === 400 ? 'The current password is not correct.' : 'We couldn’t update your password. Please try again.' });
      }}
    >
      <CardTitle icon={<ShieldCheck size={17} />}>Change password</CardTitle>
      <input type="password" autoComplete="current-password" placeholder="Current password" value={current} onChange={(e) => setCurrent(e.target.value)} className={input} />
      <input type="password" autoComplete="new-password" minLength={8} placeholder="New password (min. 8 characters)" value={next} onChange={(e) => setNext(e.target.value)} className={input} />
      {msg ? <p className={`text-xs ${msg.ok ? 'text-[var(--color-teal-dark)]' : 'text-red-700'}`}>{msg.text}</p> : null}
      <button type="submit" disabled={!live || busy || !current || next.length < 8} className="btn btn-primary btn-sm">{busy ? 'Updating…' : 'Update password'}</button>
    </form>
  );
}

