'use client';

import { useState, useSyncExternalStore } from 'react';
import { MapPin } from '@/components/ui/icons';
import { storeDefaults, usePreferences } from '@/context/preferences-context';
import { createBasketInStore, refreshCartEverywhere, useCart } from '@/hooks/useCart';
import { storeConflictStore } from '@/lib/store-choice';

/**
 * "Your basket was started in <store>" — the store-switch decision, mirroring the currency rule: a basket
 * belongs to the store it was started in. Raised by the store picker (items in the basket, other store)
 * or by any basket creation the BFF refused for the same reason. Keep → the shop stays in (or returns
 * to) the basket's store. Start new → a fresh basket in the chosen store, the shop switches with it.
 * Mounted once, in the header.
 */
export function StoreSwitchDialog() {
  const pending = useSyncExternalStore(storeConflictStore.subscribe, storeConflictStore.getSnapshot, storeConflictStore.getServerSnapshot);
  const { stores, storeKey, currencies, selectStore } = usePreferences();
  const { cart } = useCart();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!pending) return null;

  const toStore = stores.find((s) => s.key === pending.toKey) ?? null;
  const fromStore = stores.find((s) => s.key === cart?.storeKey) ?? null;
  const toName = toStore?.name ?? 'the other store';
  const fromName = fromStore?.name ?? 'another store';
  const count = cart?.itemCount ?? 0;

  const keep = () => {
    if (busy) return;
    // The shop follows the basket: if it had already moved on (a refused creation), bring it back.
    if (fromStore && storeKey !== fromStore.key) selectStore(fromStore);
    setFailed(false);
    storeConflictStore.close();
  };

  const startNew = async () => {
    if (busy || !toStore) return;
    setBusy(true);
    setFailed(false);
    const res = await createBasketInStore({ store: toStore.key, ...storeDefaults(toStore, currencies) }, true);
    if (res.ok) {
      selectStore(toStore);
      await refreshCartEverywhere();
      setBusy(false);
      storeConflictStore.close();
      return;
    }
    setBusy(false);
    setFailed(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-plum)]/50 p-4 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) keep();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-switch-title"
    >
      <div className="w-full max-w-md rounded-[20px] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-float)]">
        <div className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-[var(--color-yellow-light)] text-[var(--color-plum)]">
          <MapPin size={20} />
        </div>
        <p className="eyebrow">Your basket</p>
        <h2 id="store-switch-title" className="mt-1 text-[22px]">Your basket was started in {fromName}</h2>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          A basket stays with the store it was started in. Keep the {count > 0 ? `${count} item${count === 1 ? '' : 's'} ` : ''}
          you have and carry on shopping in {fromName}, or start a new basket in {toName}.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <button type="button" onClick={keep} disabled={busy} className="btn btn-dark w-full disabled:opacity-60">
            Keep my basket
          </button>
          <button type="button" onClick={startNew} disabled={busy || !toStore} className="btn btn-light w-full disabled:opacity-60">
            {busy ? 'Starting a new basket…' : `Start a new basket in ${toName}`}
          </button>
        </div>
        {failed ? (
          <p className="mt-3 text-sm text-[var(--color-plum)]">We couldn’t start a new basket just now. Please try again.</p>
        ) : (
          <p className="mt-3 text-xs text-[var(--color-muted)]">Starting a new basket sets the current one aside.</p>
        )}
      </div>
    </div>
  );
}
