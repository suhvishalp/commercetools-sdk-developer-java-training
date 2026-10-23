'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Heart, Lock, Package } from '@/components/ui/icons';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { useShoppingList } from '@/hooks/useShoppingList';
import { SavedItemView } from '@/lib/shopping-list-types';
import { formatMoney } from '@/lib/utils';

/**
 * The header heart (cart.shoppingList): the saved-items count, and a panel that lists what the shopper
 * saved — thumbnail, name, price (when the list carries one), Move to bag, Remove. Locked → the heart
 * opens the unlock dialog. The bag page keeps its own fuller Saved-for-later panel.
 */
export function WishlistMenu() {
  const locale = useLocale();
  const { loading, unlocked, meta } = useCapability('cart.shoppingList');
  const { open: openUnlock } = useUnlockDialog();
  const { list, moveToCart, removeItem } = useShoppingList();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const items: SavedItemView[] = unlocked && list ? list.items : [];
  const saved = unlocked ? list?.itemCount ?? 0 : 0;

  const act = async (id: string, fn: () => Promise<unknown>) => {
    if (busy) return;
    setBusy(id);
    try { await fn(); } finally { setBusy(null); }
  };

  if (loading) {
    return (
      <span className="hbtn text-[var(--color-muted)]" aria-hidden="true">
        <Heart size={20} />
      </span>
    );
  }

  if (!unlocked) {
    return (
      <button onClick={() => openUnlock(meta)} className="hbtn text-[var(--color-unlock-dark)]" title="Coming soon" aria-label="Saved items">
        <Heart size={20} />
        <Lock size={11} />
      </button>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="hbtn"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Saved items (${saved})`}
        title="Saved for later"
      >
        <Heart size={20} />
        {saved > 0 ? <span className="badge-count">{saved}</span> : null}
      </button>
      {open ? (
        <div className="absolute right-0 z-30 mt-1 w-[360px] rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-[var(--shadow-float)]">
          <div className="flex items-center justify-between px-2 pb-2 pt-1">
            <p className="eyebrow">Saved for later</p>
            <span className="text-xs text-[var(--color-muted)]">{saved} item{saved === 1 ? '' : 's'}</span>
          </div>
          {items.length === 0 ? (
            <div className="px-2 pb-3 pt-1 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--color-violet-50)] text-[var(--color-violet)]">
                <Heart size={20} />
              </div>
              <p className="mt-2 text-sm font-semibold">Nothing saved yet</p>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">Tap the heart on a product to keep it here.</p>
              <Link href="/products" onClick={() => setOpen(false)} className="btn btn-light btn-sm mt-3">Browse products</Link>
            </div>
          ) : (
            <>
              <div className="max-h-[420px] divide-y divide-[var(--color-border)] overflow-y-auto">
                {items.map((it) => (
                  <div key={it.lineItemId} className="flex items-center gap-3 px-2 py-3">
                    <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-[var(--color-earth)] text-[var(--color-muted)]">
                      {it.imageUrl ? (
                        <Image src={it.imageUrl} alt={it.name} fill sizes="56px" className="object-cover" />
                      ) : (
                        <Package size={22} />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{it.name}</p>
                      <p className="text-xs text-[var(--color-muted)]">
                        {it.price ? formatMoney(it.price.centAmount, it.price.currencyCode, locale) : null}
                        {it.price && it.quantity > 1 ? ' · ' : ''}
                        {it.quantity > 1 ? `Qty ${it.quantity}` : null}
                        {!it.price && it.quantity <= 1 ? 'Saved' : null}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <button
                        onClick={() => act(it.lineItemId, () => moveToCart(it.lineItemId))}
                        disabled={!!busy}
                        className="btn btn-dark !h-8 !px-3 !text-xs disabled:opacity-50"
                      >
                        {busy === it.lineItemId ? 'Moving…' : 'Move to bag'}
                      </button>
                      <button
                        onClick={() => act(it.lineItemId, () => removeItem(it.lineItemId))}
                        disabled={!!busy}
                        className="text-xs text-[var(--color-muted)] underline disabled:opacity-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--color-border)] px-2 pb-1 pt-2">
                <Link href="/cart#saved" onClick={() => setOpen(false)} className="btn btn-light btn-sm w-full">
                  View all saved items
                </Link>
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
