'use client';

import { useEffect, useRef, useState } from 'react';
import { Lock, ChevronDown, MapPin } from '@/components/ui/icons';
import useSWR from 'swr';
import { bffGet } from '@/lib/bff/client';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { usePreferences } from '@/context/preferences-context';

interface StoreView {
  key: string;
  name: string;
  languages: string[];
  countries: string[];
  channelKeys: string[];
}

/**
 * Header store picker (the "your store" every omnichannel shop has), gated on distribution.stores
 * (Task 1.2). Locked → dimmed pill that opens the unlock dialog. Unlocked → lists the real stores from
 * GET /api/stores. This is the visible storefront payoff for the "List Stores" task.
 */
export function StoreSelector() {
  const { loading, unlocked, meta } = useCapability('distribution.stores');
  const { open } = useUnlockDialog();
  const { selectStore, storeName, storeKey } = usePreferences();
  const [openList, setOpenList] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Only fetch once the task is implemented.
  const { data } = useSWR(unlocked ? 'stores' : null, (p) => bffGet<StoreView[]>(p));

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

  const stores = data?.ok ? (data.data ?? []) : [];

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
                onClick={() => {
                  selectStore(s);
                  setOpenList(false);
                }}
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
