'use client';

import useSWR, { mutate as globalMutate } from 'swr';
import { bffGet, bffPost, BffResult } from '@/lib/bff/client';
import { MergeReportView, SessionView, SignInView } from '@/lib/customer-types';
import { CartView } from '@/lib/cart-types';
import { KEY_ACCOUNT, KEY_ORDERS, KEY_SESSION, KEY_WISHLIST } from '@/lib/cache-keys';
import { refreshCartEverywhere } from './useCart';

const MERGE_NOTICE_KEY = 'lhc.mergeReport';

/** Everything that changes when the shopper's identity changes: session, profile, cart, wishlist, orders. */
export async function refreshIdentityEverywhere(): Promise<void> {
  await Promise.all([
    globalMutate(KEY_SESSION),
    globalMutate(KEY_ACCOUNT),
    globalMutate(KEY_WISHLIST),
    globalMutate(KEY_ORDERS),
    refreshCartEverywhere(),
  ]);
}

/** Remember the last sign-in's merge report so the cart page can show "we combined your basket" once. */
export function rememberMergeReport(report: MergeReportView | null | undefined): void {
  if (typeof window === 'undefined') return;
  if (report && report.anonymousCartId && (report.mergedLines > 0 || report.addedLines > 0 || report.leftBehind.length > 0)) {
    sessionStorage.setItem(MERGE_NOTICE_KEY, JSON.stringify(report));
  } else {
    sessionStorage.removeItem(MERGE_NOTICE_KEY);
  }
  notifyMerge();
}

const mergeListeners = new Set<() => void>();
function notifyMerge(): void {
  mergeListeners.forEach((l) => l());
}

/** The pending merge notice as an external store, for useSyncExternalStore (null on the server). */
export const mergeNoticeStore = {
  subscribe(listener: () => void): () => void {
    mergeListeners.add(listener);
    return () => mergeListeners.delete(listener);
  },
  getSnapshot(): string | null {
    return typeof window === 'undefined' ? null : sessionStorage.getItem(MERGE_NOTICE_KEY);
  },
  getServerSnapshot(): string | null {
    return null;
  },
  /** Dismiss: forget the notice (shown once). */
  clear(): void {
    if (typeof window !== 'undefined') sessionStorage.removeItem(MERGE_NOTICE_KEY);
    notifyMerge();
  },
};

/** Parse a stored merge notice; null when absent or unreadable. */
export function parseMergeReport(raw: string | null): MergeReportView | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as MergeReportView;
  } catch {
    return null;
  }
}

/**
 * Who is shopping (5.9): GET /api/session says signed in / a first name / a pricing tier — nothing more.
 * The BFF holds the session; this hook only mirrors it and exposes the identity actions (5.1 / 5.2 /
 * 5.3 / sign-out). After a successful sign-in or sign-up the cart is pre-filled from the account
 * (default address → default delivery method) so checkout is one step shorter.
 */
export function useSession() {
  const { data, isLoading } = useSWR(KEY_SESSION, (p) => bffGet<SessionView>(p), {
    revalidateOnFocus: true,
  });
  const session = data && data.ok ? data.data : null;

  async function afterSignIn(res: BffResult<SignInView>): Promise<BffResult<SignInView>> {
    if (res.ok && res.data) {
      rememberMergeReport(res.data.mergeReport);
      // Idempotent: the account's default address lands on the cart and a delivery method is selected.
      await bffPost<CartView>('cart/prefill');
    }
    await refreshIdentityEverywhere();
    return res;
  }

  return {
    session,
    loading: isLoading,
    /** true while GET /api/session is still a 501 (task 5.9 not implemented). */
    notImplemented: data?.notImplemented ?? false,
    signedIn: session?.signedIn ?? false,
    firstName: session?.firstName ?? null,
    customerGroupKey: session?.customerGroupKey ?? null,

    /** 5.2 / 5.3 — sign in; `mergeMode` (optional) is the 5.3 decision made explicit by the shopper. */
    async login(email: string, password: string, mergeMode?: string) {
      const path = mergeMode ? `customers/login?mergeMode=${encodeURIComponent(mergeMode)}` : 'customers/login';
      return afterSignIn(await bffPost<SignInView>(path, { email, password }));
    },
    /** 5.1 — create the account; the guest basket and wishlist come along (same anonymousId). */
    async register(input: { email: string; password: string; firstName: string; lastName: string; store?: string | null }) {
      return afterSignIn(await bffPost<SignInView>('customers/signup', input));
    },
    /** Sign out: the BFF forgets the customer and the cart and mints a fresh guest identity. */
    async signOut() {
      const res = await bffPost<SessionView>('session/sign-out');
      rememberMergeReport(null);
      await refreshIdentityEverywhere();
      return res;
    },
  };
}
