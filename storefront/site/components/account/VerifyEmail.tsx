'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { bffPost } from '@/lib/bff/client';
import { CustomerView } from '@/lib/customer-types';
import { KEY_ACCOUNT } from '@/lib/cache-keys';
import { mutate } from 'swr';

/**
 * Where the verification email's link lands (5.8). The token in the URL is the proof: no session is needed,
 * the BFF calls POST /customers/email/confirm and the account shows the verified badge from then on.
 * `?status=ok|invalid|retry` is the shape the CIL track's connector receiver redirects with after confirming itself
 * (`retry` = the platform was unavailable for a moment; the link itself is still good).
 */
export function VerifyEmail() {
  const params = useSearchParams();
  const token = params.get('token');
  const preset = params.get('status');
  const [state, setState] = useState<'working' | 'ok' | 'invalid' | 'retry'>(
    preset === 'ok' ? 'ok' : preset === 'invalid' ? 'invalid' : preset === 'retry' ? 'retry' : 'working',
  );
  useEffect(() => {
    if (!token || preset) return;
    let cancelled = false;
    bffPost<CustomerView>('customers/email/confirm', { tokenValue: token }).then((r) => {
      if (cancelled) return;
      setState(r.ok ? 'ok' : 'invalid');
      if (r.ok) void mutate(KEY_ACCOUNT);
    });
    return () => { cancelled = true; };
  }, [token, preset]);
  const body =
    !token && !preset ? { title: 'No verification code', text: 'This link is missing its code. Open the link from your email again.' }
    : state === 'working' ? { title: 'Verifying your email…', text: 'One moment.' }
    : state === 'ok' ? { title: 'Your email is verified', text: 'Thank you. You can close this page or continue to your account.' }
    : state === 'retry' ? { title: 'Please try again in a moment', text: 'We could not reach the service just now. Your link is still valid: open it again shortly.' }
    : { title: 'This link is no longer valid', text: 'Verification links expire. Sign in and request a new one from your account page.' };
  return (
    <section className="mx-auto max-w-md space-y-4 px-6 py-16 text-center">
      <h1 className="text-2xl">{body.title}</h1>
      <p className="text-sm text-[var(--color-text-muted)]">{body.text}</p>
      <Link href="/account" className="btn btn-dark">Go to my account</Link>
    </section>
  );
}
