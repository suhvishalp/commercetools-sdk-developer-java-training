'use client';

import { useState } from 'react';
import { usePreferences } from '@/context/preferences-context';
import { ShippingAddressInput } from '@/lib/cart-types';
import { countryLabel } from '@/lib/utils';

const label = 'flex flex-col gap-1.5 text-[13px] font-medium text-[var(--color-muted)]';

/**
 * The one address form, used by the checkout's delivery step and the account's address book. Country
 * is the field the platform needs (zones + tax) and is limited to the shop's countries.
 */
export function AddressForm({
  initial,
  submitLabel = 'Save address',
  busy = false,
  onSubmit,
  onCancel,
  extra,
}: {
  /** Pre-fill values — a cart or address-book address (nullable fields) or a partial input. */
  initial?: Partial<Record<keyof ShippingAddressInput, string | null | undefined>> | null;
  submitLabel?: string;
  busy?: boolean;
  onSubmit: (address: ShippingAddressInput) => void | Promise<void>;
  onCancel?: () => void;
  /** Extra controls rendered above the buttons (e.g. "save to my address book"). */
  extra?: React.ReactNode;
}) {
  const { countries, country: defaultCountry } = usePreferences();
  const [a, setA] = useState<ShippingAddressInput>({
    country: initial?.country ?? defaultCountry ?? countries[0] ?? 'DE',
    firstName: initial?.firstName ?? '',
    lastName: initial?.lastName ?? '',
    streetName: initial?.streetName ?? '',
    streetNumber: initial?.streetNumber ?? '',
    postalCode: initial?.postalCode ?? '',
    city: initial?.city ?? '',
  });
  const set = (k: keyof ShippingAddressInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setA((prev) => ({ ...prev, [k]: e.target.value }));
  const valid = a.country && a.firstName && a.lastName && a.streetName && a.postalCode && a.city;

  return (
    <form
      className="space-y-3.5"
      onSubmit={(e) => {
        e.preventDefault();
        if (valid && !busy) void onSubmit(a);
      }}
    >
      <div className="grid grid-cols-2 gap-3.5">
        <label className={label}>First name<input required autoComplete="given-name" value={a.firstName} onChange={set('firstName')} className="field" /></label>
        <label className={label}>Last name<input required autoComplete="family-name" value={a.lastName} onChange={set('lastName')} className="field" /></label>
      </div>
      <div className="grid grid-cols-[1fr_7rem] gap-3.5">
        <label className={label}>Street<input required autoComplete="address-line1" value={a.streetName} onChange={set('streetName')} className="field" /></label>
        <label className={label}>No.<input value={a.streetNumber} onChange={set('streetNumber')} className="field" /></label>
      </div>
      <div className="grid grid-cols-[9rem_1fr] gap-3.5">
        <label className={label}>Postal code<input required autoComplete="postal-code" value={a.postalCode} onChange={set('postalCode')} className="field" /></label>
        <label className={label}>City<input required autoComplete="address-level2" value={a.city} onChange={set('city')} className="field" /></label>
      </div>
      <label className={label}>
        Country
        <select value={a.country} onChange={set('country')} className="field" aria-label="Country">
          {(countries.length ? countries : [a.country]).map((c) => (
            <option key={c} value={c}>{countryLabel(c)}</option>
          ))}
        </select>
      </label>
      {extra}
      <div className="flex items-center gap-3 pt-1">
        <button type="submit" disabled={!valid || busy} className="btn btn-primary">
          {busy ? 'Saving…' : submitLabel}
        </button>
        {onCancel ? (
          <button type="button" onClick={onCancel} className="text-sm text-[var(--color-muted)] underline">Cancel</button>
        ) : null}
      </div>
    </form>
  );
}
