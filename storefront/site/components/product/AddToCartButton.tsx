'use client';

import { useState } from 'react';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { useCart } from '@/hooks/useCart';
import { bffGet } from '@/lib/bff/client';
import { Lock, ShoppingBag, Check } from '@/components/ui/icons';
import { FulfilmentChoice } from '@/lib/cart-types';

/**
 * Add-to-bag, gated on cart.lineItems. When locked it renders dimmed and opens the unlock dialog.
 * When unlocked it resolves the product's SKU (from the variant matrix — the storefront works in
 * product keys, the cart adds by SKU) and calls the real BFF add; SWR then refreshes the cart
 * everywhere by the shared "cart" key. `compact` is the PLP-card size; `tone="dark"` is the Plum
 * quick-add on cards, the default Violet is the PDP's primary action.
 */
export function AddToCartButton({
  full = false,
  compact = false,
  tone = 'primary',
  productKey,
  sku,
  quantity = 1,
  recurring = false,
  recurrencePolicy = 'monthly',
  fulfilment,
  label: labelOverride,
}: {
  full?: boolean;
  compact?: boolean;
  tone?: 'primary' | 'dark';
  productKey?: string;
  sku?: string;
  quantity?: number;
  /** When true, adds a subscription line (recurrenceInfo → recurrencePolicy) instead of a one-off. */
  recurring?: boolean;
  recurrencePolicy?: string;
  /** 4.5 — pick-up-in-store chosen on the PDP travels with the add (supplyChannelKey). */
  fulfilment?: FulfilmentChoice;
  /** Idle label override (e.g. "Add to bag · $424.15"). */
  label?: string;
}) {
  const { loading, unlocked, meta } = useCapability('cart.lineItems');
  const { open } = useUnlockDialog();
  const { addItem, addRecurring } = useCart();
  const [state, setState] = useState<'idle' | 'adding' | 'added'>('idle');
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
    if (state === 'adding') return;
    setState('adding');
    try {
      const resolved = await resolveSku();
      if (resolved) {
        if (recurring) {
          await addRecurring(resolved, recurrencePolicy);
        } else {
          await addItem(resolved, quantity, fulfilment);
        }
        setState('added');
        setTimeout(() => setState('idle'), 1500);
      } else {
        setState('idle');
      }
    } catch {
      setState('idle');
    }
  }

  const idleLabel = labelOverride ?? (recurring ? 'Subscribe & Save' : 'Add to bag');
  const label = state === 'adding' ? 'Adding…' : state === 'added' ? 'Added to bag' : idleLabel;
  const size = compact ? 'h-[42px] px-4 text-sm shadow-[0_6px_18px_rgba(25,23,65,0.18)]' : 'btn-lg';
  return (
    <button
      onClick={onClick}
      disabled={state === 'adding'}
      className={`btn ${tone === 'dark' ? 'btn-dark' : 'btn-primary'} ${size} ${full ? 'w-full' : ''} ${unlocked ? '' : '!opacity-60'}`}
    >
      {unlocked ? (
        <>
          {state === 'added' ? <Check size={16} /> : <ShoppingBag size={16} />}
          {label}
        </>
      ) : (
        <>
          <Lock size={14} />Add to bag
        </>
      )}
    </button>
  );
}
