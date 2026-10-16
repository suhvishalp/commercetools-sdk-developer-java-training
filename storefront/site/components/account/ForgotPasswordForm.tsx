'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { passwordReset } from '@/hooks/useAccount';
import { AuthLink, AuthShell, ErrorNote, field, primary } from './AuthShell';

const label = 'block text-[13px] font-medium text-[var(--color-muted)]';

/**
 * "Forgot password?" (5.7): request a reset token, then set a new password with it. In production the
 * token travels by EMAIL and the shopper lands here from the link; the course has no mail service, so
 * the BFF returns it and this page pre-fills it — the demo note makes that explicit.
 */
export function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [note, setNote] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [step, setStep] = useState<'request' | 'reset' | 'done'>('request');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await passwordReset.requestToken(email.trim());
    setBusy(false);
    if (!res.ok) {
      setError(res.status === 501 ? 'Password reset isn’t available right now. Please try again shortly.' : 'Something went wrong. Please try again.');
      return;
    }
    setToken(res.data?.tokenValue ?? '');
    setNote(res.data?.note ?? null);
    setStep('reset');
  };

  const reset = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await passwordReset.reset(token.trim(), password);
    setBusy(false);
    if (!res.ok) {
      setError(res.status === 400 ? 'That reset link is not valid any more — request a new one.' : 'Something went wrong. Please try again.');
      return;
    }
    setStep('done');
  };

  return (
    <FeatureGate capability="customer.password" title="Forgot password">
      <AuthShell
        title="Reset your password"
        subtitle={step === 'request' ? 'Enter your email and we will send you a reset link.' : undefined}
        panelTitle="We’ve got you."
        panelText="Reset your password in two steps and get back to your basket."
        footer={<><AuthLink href="/login">Back to sign in</AuthLink></>}
      >
        {step === 'request' ? (
          <form className="space-y-3.5" onSubmit={request}>
            <label className={label}>Email<input type="email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`${field} mt-1.5`} /></label>
            <ErrorNote message={error} />
            <button type="submit" disabled={busy} className={primary}>{busy ? 'Sending…' : 'Send reset link'}</button>
          </form>
        ) : step === 'reset' ? (
          <form className="space-y-3.5" onSubmit={reset}>
            <p className="text-sm text-[var(--color-muted)]">
              If an account exists for <strong>{email}</strong>, a reset link has been sent. Open it and choose a new password.
            </p>
            {note ? <p className="text-xs text-[var(--color-muted)]">Enter the code from the email and choose a new password.</p> : null}
            <label className={label}>Reset code<input required value={token} onChange={(e) => setToken(e.target.value)} className={`${field} mt-1.5 font-mono !text-xs`} /></label>
            <label className={label}>New password<input type="password" required minLength={8} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${field} mt-1.5`} /></label>
            <ErrorNote message={error} />
            <button type="submit" disabled={busy || !token} className={primary}>{busy ? 'Resetting…' : 'Set new password'}</button>
          </form>
        ) : (
          <div className="space-y-4 text-sm">
            <p className="font-medium text-[var(--color-teal-dark)]">Your password has been changed. Sign in with the new one.</p>
            <button onClick={() => router.push('/login')} className={primary}>Go to sign in</button>
          </div>
        )}
      </AuthShell>
    </FeatureGate>
  );
}
