'use client';

import { useState } from 'react';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { useShoppingList } from '@/hooks/useShoppingList';
import { bffGet } from '@/lib/bff/client';
import { Heart } from '@/components/ui/icons';

/**
 * ♡ Save-for-later, gated on cart.shoppingList. Resolves the SKU from the variant matrix (the storefront
 * works in product keys; the list saves by SKU) and adds it to the guest wishlist. Locked → opens the
 * unlock dialog. `variant="icon"` is the small white disc on a product card; the default is the PDP's
 * round button next to Add to bag.
 */
export function WishlistButton({ productKey, sku, variant = 'default' }: { productKey?: string; sku?: string; variant?: 'default' | 'icon' }) {
  const { loading, unlocked, meta } = useCapability('cart.shoppingList');
  const { open } = useUnlockDialog();
  const { save } = useShoppingList();
  const [state, setState] = useState<'idle' | 'saving' | 'saved'>('idle');
  if (loading) return null;

  async function resolveSku(): Promise<string | null> {
    if (sku) return sku;
    if (!productKey) return null;
    const r = await bffGet<{ defaultSku?: string; variants?: { sku: string }[] }>(
      `products/${encodeURIComponent(productKey)}/variants`,
    );
    return r.data?.defaultSku ?? r.data?.variants?.[0]?.sku ?? null;
  }

  async function onClick() {
    if (!unlocked) {
      open(meta);
      return;
    }
    if (state === 'saving') return;
    setState('saving');
    try {
      const resolved = await resolveSku();
      if (resolved) {
        await save(resolved, 1);
        setState('saved');
        setTimeout(() => setState('idle'), 1500);
      } else {
        setState('idle');
      }
    } catch {
      setState('idle');
    }
  }

  const label = state === 'saved' ? 'Saved ✓' : 'Save for later';
  const saved = state === 'saved';
  const shape =
    variant === 'icon'
      ? 'grid h-9 w-9 place-items-center rounded-full bg-white shadow-[0_2px_8px_rgba(25,23,65,0.12)]'
      : 'grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full border-[1.5px] border-[var(--color-border)] bg-white hover:border-[var(--color-violet)]';
  return (
    <button
      onClick={onClick}
      disabled={state === 'saving'}
      title={label}
      aria-label={label}
      className={`${shape} transition disabled:opacity-60 ${
        saved ? 'text-[var(--color-violet)]' : 'text-[var(--color-muted)] hover:text-[var(--color-violet)]'
      } ${unlocked ? '' : 'opacity-80'}`}
    >
      <Heart size={variant === 'icon' ? 17 : 20} fill={saved ? 'currentColor' : 'none'} />
    </button>
  );
}
