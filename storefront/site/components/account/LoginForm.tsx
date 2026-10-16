'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { useCapability } from '@/context/capabilities-context';
import { useSession } from '@/hooks/useSession';
import { useCart } from '@/hooks/useCart';
import { AuthLink, AuthShell, ErrorNote, field, primary } from './AuthShell';

type MergeMode = 'MergeWithExistingCustomerCart' | 'UseAsNewActiveCustomerCart';

/** The BFF's 409 reason, said the way a shopper would read it. */
function explainConflict(message: string | undefined): string {
  const cur = message?.match(/different currencies \((\w+) vs (\w+)\)/);
  if (cur) return `This basket is in ${cur[1]}, but the basket saved on your account is in ${cur[2]}, so the two can’t be combined.`;
  if (message && /different stores/.test(message)) return 'This basket belongs to a different store than the basket saved on your account, so the two can’t be combined.';
  return 'This basket can’t be combined with the basket saved on your account.';
}

/**
 * Sign in (5.2) — and the merge decision (5.3) made visible: when the shopper already has a guest basket
 * they can choose to combine it with the basket on their account (the default) or replace it. The BFF
 * carries the choice as ?mergeMode=; the cart page then shows what happened. When the two baskets can’t
 * be combined (different currency or store) the BFF answers 409 — the shopper gets a plain-language
 * choice: keep this basket (sign in again with UseAsNewActiveCustomerCart) or go back.
 */
export function LoginForm() {
  const router = useRouter();
  const next = useSearchParams().get('next') ?? '/account';
  const { login } = useSession();
  const { cart } = useCart();
  const { unlocked: mergeUnlocked } = useCapability('customer.cartMerge');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<MergeMode>('MergeWithExistingCustomerCart');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conflict, setConflict] = useState<string | null>(null);
  const hasGuestBasket = !!cart?.id && cart.owner === 'guest' && cart.lines.length > 0;

  const signIn = async (chosen: MergeMode | undefined) => {
    if (busy) return;
    setBusy(true);
    setError(null);
    setConflict(null);
    const res = await login(email.trim(), password, chosen);
    setBusy(false);
    if (res.ok) {
      router.push(next.startsWith('/') ? next : '/account');
      return;
    }
    const msg = (res.data as unknown as { message?: string } | null)?.message;
    if (res.status === 409) {
      setConflict(explainConflict(msg));
      return;
    }
    setError(
      res.status === 501 ? 'Sign-in isn’t available right now. Please try again shortly.'
        : res.status === 400 ? 'We could not sign you in with that email and password.'
        : 'We could not sign you in. Please try again.',
    );
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // The merge mode only travels when the shopper has something to merge AND the 5.3 endpoint is live.
    await signIn(mergeUnlocked && hasGuestBasket ? mode : undefined);
  };

  return (
    <FeatureGate capability="customer.login" title="Sign in">
      <AuthShell
        title="Sign in"
        subtitle="Welcome back — your basket and saved items stay with you."
        panelTitle="Welcome back."
        panelText="Your saved basket and wishlist are waiting. Sign in to see them."
        footer={<>New to Lifestyle &amp; Home? <AuthLink href="/register">Create an account</AuthLink></>}
      >
        <form className="space-y-3.5" onSubmit={submit}>
          <label className="block text-[13px] font-medium text-[var(--color-muted)]">Email
            <input type="email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`${field} mt-1.5`} />
          </label>
          <label className="block text-[13px] font-medium text-[var(--color-muted)]">Password
            <input type="password" required autoComplete="current-password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className={`${field} mt-1.5`} />
          </label>
          {hasGuestBasket && !conflict ? (
            <FeatureGate capability="customer.cartMerge" title="Basket merge">
              <fieldset className="rounded-[12px] bg-[var(--color-yellow-light)] p-4 text-sm">
                <legend className="sr-only">Guest basket</legend>
                <p className="font-semibold">You have {cart!.itemCount} item{cart!.itemCount === 1 ? '' : 's'} in your basket.</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setMode('MergeWithExistingCustomerCart')} className={`chip ${mode === 'MergeWithExistingCustomerCart' ? 'on' : ''}`}>
                    Combine with my saved basket
                  </button>
                  <button type="button" onClick={() => setMode('UseAsNewActiveCustomerCart')} className={`chip ${mode === 'UseAsNewActiveCustomerCart' ? 'on' : ''}`}>
                    Keep this basket only
                  </button>
                </div>
                <p className="mt-2 text-xs text-[var(--color-plum-light)]">
                  {mode === 'MergeWithExistingCustomerCart' ? 'Recommended — items from both baskets, larger quantity kept.' : 'The basket saved on your account is set aside.'}
                </p>
              </fieldset>
            </FeatureGate>
          ) : null}
          {conflict ? (
            <div className="rounded-[12px] border-[1.5px] border-[var(--color-unlock)] bg-[var(--color-unlock-light)] p-4 text-sm">
              <p className="font-semibold text-[var(--color-plum)]">We couldn’t combine your baskets</p>
              <p className="mt-1 text-[var(--color-plum)]">{conflict}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" disabled={busy} onClick={() => signIn('UseAsNewActiveCustomerCart')} className="btn btn-dark btn-sm">
                  {busy ? 'Signing in…' : 'Keep this basket & sign in'}
                </button>
                <button type="button" disabled={busy} onClick={() => setConflict(null)} className="btn btn-light btn-sm">
                  Back
                </button>
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)]">The basket saved on your account is set aside, not deleted.</p>
            </div>
          ) : null}
          <ErrorNote message={error} />
          {!conflict ? <button type="submit" disabled={busy} className={primary}>{busy ? 'Signing in…' : 'Sign in'}</button> : null}
          <p className="text-sm"><AuthLink href="/forgot-password">Forgot your password?</AuthLink></p>
        </form>
      </AuthShell>
    </FeatureGate>
  );
}
