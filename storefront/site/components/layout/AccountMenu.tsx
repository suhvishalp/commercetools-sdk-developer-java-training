'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { useSession } from '@/hooks/useSession';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { ChevronDown, Lock, User } from '@/components/ui/icons';

/**
 * The header's identity affordance — what every shop has top-right. Guest: "Sign in". Signed in:
 * "Hi, Ada ▾" with My account / Sign out. Reads GET /api/session (5.9); until that task is implemented
 * the BFF answers 501 and the menu falls back to a plain Account link (the sign-in page still works —
 * it only needs 5.2). Carries id="cap-customer.session" for the Canvas deep link.
 */
export function AccountMenu() {
  const t = useTranslations('nav');
  const router = useRouter();
  const { signedIn, firstName, notImplemented, signOut } = useSession();
  const { unlocked, meta } = useCapability('customer.session');
  const { open: openUnlock } = useUnlockDialog();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const wrap = (child: React.ReactNode) => (
    <div id="cap-customer.session" data-capability="customer.session" className="relative scroll-mt-28" ref={ref}>
      {child}
    </div>
  );

  if (notImplemented || !unlocked) {
    // 5.9 pending: the storefront cannot ask who is signed in, so it offers the account entry point and
    // explains what unlocks the greeting.
    return wrap(
      <Link
        href="/login"
        onClick={(e) => {
          if (!unlocked) {
            e.preventDefault();
            openUnlock(meta);
          }
        }}
        className="hbtn"
        title="Coming soon"
      >
        <User size={20} />
        <span className="hidden sm:inline">{t('signIn')}</span>
        <Lock size={11} className="text-[var(--color-unlock)]" />
      </Link>,
    );
  }

  if (!signedIn) {
    return wrap(
      <Link href="/login" className="hbtn">
        <User size={20} />
        <span className="hidden sm:inline">{t('signIn')}</span>
      </Link>,
    );
  }

  return wrap(
    <>
      <button type="button" onClick={() => setOpen((o) => !o)} className="hbtn" aria-haspopup="menu" aria-expanded={open}>
        <User size={20} />
        <span className="hidden sm:inline">{firstName ? t('hi', { name: firstName }) : t('myAccount')}</span>
        <ChevronDown size={13} />
      </button>
      {open ? (
        <div role="menu" className="absolute right-0 z-30 mt-1 w-56 rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-[var(--shadow-float)]">
          <Link href="/account" role="menuitem" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--color-earth)]">
            {t('myAccount')}
          </Link>
          <Link href="/account#orders" role="menuitem" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--color-earth)]">
            My orders
          </Link>
          <Link href="/account#addresses" role="menuitem" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--color-earth)]">
            Addresses
          </Link>
          <button
            type="button"
            role="menuitem"
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              try {
                await signOut();
                setOpen(false);
                router.push('/');
              } finally {
                setBusy(false);
              }
            }}
            className="mt-1 block w-full rounded-xl border-t border-[var(--color-border)] px-3 py-2 text-left text-sm text-[var(--color-muted)] hover:bg-[var(--color-earth)] disabled:opacity-50"
          >
            {busy ? '…' : t('signOut')}
          </button>
        </div>
      ) : null}
    </>,
  );
}
