'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { usePreferences } from '@/context/preferences-context';
import { useSession } from '@/hooks/useSession';
import { useCart } from '@/hooks/useCart';
import { AuthLink, AuthShell, ErrorNote, field, primary } from './AuthShell';

const label = 'block text-[13px] font-medium text-[var(--color-muted)]';

/** Create an account (5.1). The guest basket and wishlist follow the shopper — same anonymousId. */
export function RegisterForm() {
  const router = useRouter();
  const { register } = useSession();
  const { cart } = useCart();
  const { storeKey } = usePreferences();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const basket = cart?.itemCount ?? 0;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    // The account is created GLOBAL (no store) so it can sign in through the general endpoint; pass
    // `store: storeKey` instead to make a store-specific customer (then sign-in must be in-store too).
    void storeKey;
    const res = await register({ ...form, email: form.email.trim(), store: null });
    setBusy(false);
    if (res.ok) {
      router.push('/account');
      return;
    }
    setError(
      res.status === 501 ? 'Registration isn’t available right now. Please try again shortly.'
        : res.status === 409 ? 'An account with this email already exists — sign in instead.'
        : 'We couldn’t create your account. Please try again.',
    );
  };

  return (
    <FeatureGate capability="customer.register" title="Create an account">
      <AuthShell
        title="Create your account"
        subtitle={basket > 0 ? `Your ${basket} basket item${basket === 1 ? '' : 's'} and saved items come with you.` : 'Takes under a minute. Faster checkout, saved addresses and your order history.'}
        panelTitle="Your basket follows you."
        panelText="Create an account and the pieces you saved as a guest come with you — basket, wishlist and all."
        footer={<>Already have an account? <AuthLink href="/login">Sign in</AuthLink></>}
      >
        <form className="space-y-3.5" onSubmit={submit}>
          <div className="grid grid-cols-2 gap-3.5">
            <label className={label}>First name<input required autoComplete="given-name" value={form.firstName} onChange={set('firstName')} className={`${field} mt-1.5`} /></label>
            <label className={label}>Last name<input required autoComplete="family-name" value={form.lastName} onChange={set('lastName')} className={`${field} mt-1.5`} /></label>
          </div>
          <label className={label}>Email<input type="email" required autoComplete="email" placeholder="you@example.com" value={form.email} onChange={set('email')} className={`${field} mt-1.5`} /></label>
          <label className={label}>Password<input type="password" required minLength={8} autoComplete="new-password" placeholder="Min. 8 characters" value={form.password} onChange={set('password')} className={`${field} mt-1.5`} /></label>
          <ErrorNote message={error} />
          <button type="submit" disabled={busy} className={primary}>{busy ? 'Creating your account…' : 'Create account'}</button>
          <p className="text-center text-xs text-[var(--color-muted)]">
            By creating an account you agree to our terms. We only store what the shop needs.
          </p>
        </form>
      </AuthShell>
    </FeatureGate>
  );
}
