'use client';

import useSWR, { mutate as globalMutate } from 'swr';
import { bffDelete, bffGet, bffPatch, bffPost, bffPut, BffResult } from '@/lib/bff/client';
import { AddressInput, CustomerView, TokenView } from '@/lib/customer-types';
import { KEY_ACCOUNT } from '@/lib/cache-keys';
import { useSession } from './useSession';

/**
 * The signed-in customer's account (5.4 – 5.8, 5.10): profile, address book, password, email
 * verification, deletion. Reads GET /api/account only while signed in; every write refreshes it.
 */
export function useAccount() {
  const { signedIn } = useSession();
  const { data, isLoading } = useSWR(signedIn ? KEY_ACCOUNT : null, (p) => bffGet<CustomerView>(p));
  const customer = data && data.ok ? data.data : null;

  async function run<T>(op: () => Promise<BffResult<T>>): Promise<BffResult<T>> {
    const res = await op();
    await globalMutate(KEY_ACCOUNT);
    return res;
  }

  return {
    customer,
    loading: isLoading,
    notImplemented: data?.notImplemented ?? false,

    /** 5.4 — any subset of first name / last name / email (changing the email resets verification). */
    updateProfile(patch: { firstName?: string; lastName?: string; email?: string }) {
      return run(() => bffPatch<CustomerView>('account', patch));
    },
    /** 5.5 — add an address, optionally as the default shipping / billing address in the same update. */
    addAddress(input: AddressInput) {
      return run(() => bffPost<CustomerView>('account/addresses', input));
    },
    setDefaultShipping(addressId: string) {
      return run(() => bffPut<CustomerView>(`account/addresses/${encodeURIComponent(addressId)}/default`));
    },
    removeAddress(addressId: string) {
      return run(() => bffDelete<CustomerView>(`account/addresses/${encodeURIComponent(addressId)}`));
    },
    /** 5.7 — change the password (signed in). */
    changePassword(currentPassword: string, newPassword: string) {
      return run(() => bffPost<CustomerView>('account/password', { currentPassword, newPassword }));
    },
    /** 5.8 — issue a verification token (demo: returned, in production emailed) and confirm it. */
    requestEmailVerification() {
      return bffPost<TokenView>('customers/email/token');
    },
    confirmEmail(tokenValue: string) {
      return run(() => bffPost<CustomerView>('customers/email/confirm', { tokenValue }));
    },
    /** 5.10 — delete the account; afterwards the session is a fresh guest. */
  };
}

/** 5.7 — "Forgot password": request a reset token (no session), then reset with it. */
export const passwordReset = {
  requestToken(email: string) {
    return bffPost<TokenView>('customers/password/reset-token', { email });
  },
  reset(tokenValue: string, newPassword: string) {
    return bffPost<CustomerView>('customers/password/reset', { tokenValue, newPassword });
  },
};
