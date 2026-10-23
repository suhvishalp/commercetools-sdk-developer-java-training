'use client';

import { useEffect, useRef, useState } from 'react';
import { Lock, ChevronDown, MapPin } from '@/components/ui/icons';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { StoreLite, storeDefaults, usePreferences } from '@/context/preferences-context';
import { createBasketInStore, refreshCartEverywhere, useCart } from '@/hooks/useCart';
import { storeConflictStore } from '@/lib/store-choice';

/**
 * Header store picker (the "your store" every omnichannel shop has), gated on distribution.stores
 * (Task 1.2). Locked → dimmed pill that opens the unlock dialog. Unlocked → lists the real stores from
 * GET /api/stores (read by the preferences, which also put every shopper in a default store).
 *
 * Switching store is a basket decision, like currency: a basket belongs to the store it was started in.
 * With items in the basket the pick is held and the shopper chooses — keep the basket (stay) or start a
 * new one in the other store (StoreSwitchDialog). With an empty basket the store switches at once and
 * the basket follows it (the BFF re-creates an empty one there, once cart.create is live).
 */
export function StoreSelector() {
  const { loading, unlocked, meta } = useCapability('distribution.stores');
  const { unlocked: basketsLive } = useCapability('cart.create');
  const { open } = useUnlockDialog();
  const { stores, selectStore, storeName, storeKey, currencies } = usePreferences();
  const { cart } = useCart();
  const [openList, setOpenList] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openList) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenList(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [openList]);

  if (loading) return null;

  if (!unlocked) {
    return (
      <button
        onClick={() => open(meta)}
        className="hbtn hidden text-[var(--color-unlock-dark)] lg:inline-flex"
        title="Coming soon"
      >
        <MapPin size={18} />Stores<Lock size={11} />
      </button>
    );
  }

  const pick = async (store: StoreLite) => {
    setOpenList(false);
    if (store.key === storeKey) return;
    const hasItems = !!cart?.id && cart.lines.length > 0;
    if (hasItems && cart.storeKey !== store.key) {
      // Hold the switch: the shopper decides what happens to the basket first.
      storeConflictStore.open(store.key);
      return;
    }
    selectStore(store);
    if (basketsLive && cart?.storeKey !== store.key) {
      // Empty (or no) basket: let it follow the store so the next item lands in the right basket.
      const res = await createBasketInStore({ store: store.key, ...storeDefaults(store, currencies) });
      if (res.ok) await refreshCartEverywhere();
    }
  };

  return (
    <div className="relative hidden lg:block" ref={ref}>
      <button onClick={() => setOpenList((o) => !o)} className="hbtn" aria-haspopup="listbox" aria-expanded={openList}>
        <MapPin size={18} />
        <span className="max-w-[180px] truncate">{storeKey ? storeName : 'Choose a store'}</span>
        <ChevronDown size={13} />
      </button>
      {openList ? (
        <div className="absolute right-0 z-30 mt-1 w-72 rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-[var(--shadow-float)]">
          <p className="eyebrow px-2 pb-2 pt-1">Your store</p>
          {stores.length === 0 ? (
            <p className="px-2 py-1 text-sm text-[var(--color-muted)]">No stores configured.</p>
          ) : (
            stores.map((s) => (
              <button
                key={s.key}
                onClick={() => pick(s)}
                className={`block w-full rounded-xl px-3 py-2 text-left hover:bg-[var(--color-earth)] ${
                  storeKey === s.key ? 'bg-[var(--color-violet-50)]' : ''
                }`}
              >
                <div className="text-sm font-medium">{s.name}</div>
                <div className="text-xs text-[var(--color-muted)]">
                  {s.countries.join(', ') || '—'} · {s.languages.join(', ') || '—'}
                </div>
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
