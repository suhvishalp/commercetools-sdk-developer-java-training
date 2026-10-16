'use client';

import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { usePickupLocations } from '@/hooks/useCart';
import { PickupLocationView } from '@/lib/cart-types';
import { Lock, MapPin, Truck, Store } from '@/components/ui/icons';

export const DELIVERY = '';

const SAMPLE_LOCATIONS: PickupLocationView[] = [
  { id: 'sample', key: 'pickup-store', name: 'Market St', description: null, street: 'Market St 1', city: 'San Francisco', country: 'US' },
];

/**
 * 4.5 — the fulfilment choice every shop with stores offers: Delivery, or Pick up at a store. One control,
 * used on the PDP (choose before adding — as two option tiles) and on each cart line (change after adding —
 * a compact select). `value` is the supply channel: "" for delivery, a pickup location's key otherwise.
 * Gated on cart.channel: locked shows the sample choice and opens the unlock dialog.
 */
export function FulfilmentSelect({
  value,
  onChange,
  disabled = false,
  compact = false,
  id,
}: {
  value: string;
  onChange: (supplyChannelKey: string) => void;
  disabled?: boolean;
  compact?: boolean;
  id?: string;
}) {
  const { loading, unlocked, meta } = useCapability('cart.channel');
  const { open } = useUnlockDialog();
  const { locations } = usePickupLocations(unlocked);
  if (loading) return null;
  const shown = unlocked ? locations : SAMPLE_LOCATIONS;
  const current = shown.find((l) => l.key === value) ?? null;

  if (!unlocked) {
    return (
      <button
        type="button"
        onClick={() => open(meta)}
        className={`chip chip-locked ${compact ? '!h-8 !text-xs' : 'w-full justify-between'}`}
        title="Coming soon"
      >
        <span className="inline-flex items-center gap-1.5"><Truck size={13} /> Delivery</span>
        <Lock size={11} />
      </button>
    );
  }

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs">
        <label htmlFor={id} className="inline-flex items-center gap-1.5 text-[var(--color-muted)]">
          {current ? <MapPin size={13} /> : <Truck size={13} />}
        </label>
        <select id={id} value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} className="select-pill !h-9 !text-[13px] disabled:opacity-60">
          <option value={DELIVERY}>Delivery to my address</option>
          {shown.map((l) => (
            <option key={l.key} value={l.key}>
              Pick up · {l.name}{l.city ? ` (${l.city})` : ''} · ready in 2h
            </option>
          ))}
        </select>
      </div>
    );
  }

  // PDP: two option tiles — Delivery, or Pickup at the first (or chosen) store; more stores via the select.
  const firstStore = shown[0] ?? null;
  const pickupKey = current?.key ?? firstStore?.key ?? null;
  return (
    <div className="space-y-2" id={id}>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange(DELIVERY)}
          className={`flex items-start gap-3 rounded-[10px] border-[1.5px] p-3.5 text-left ${!current ? 'border-[var(--color-violet)] bg-[var(--color-violet-50)]' : 'border-[var(--color-border)] bg-white'}`}
        >
          <Truck size={20} className="mt-0.5 shrink-0 text-[var(--color-violet)]" />
          <span><b className="block text-[14.5px] font-semibold">Delivery</b><small className="text-[12.5px] text-[var(--color-muted)]">Free over €50 · 3–5 days</small></span>
        </button>
        <button
          type="button"
          disabled={disabled || !pickupKey}
          onClick={() => pickupKey && onChange(pickupKey)}
          className={`flex items-start gap-3 rounded-[10px] border-[1.5px] p-3.5 text-left disabled:opacity-50 ${current ? 'border-[var(--color-violet)] bg-[var(--color-violet-50)]' : 'border-[var(--color-border)] bg-white'}`}
        >
          <Store size={20} className="mt-0.5 shrink-0 text-[var(--color-violet)]" />
          <span>
            <b className="block text-[14.5px] font-semibold">Pickup{current ? ` · ${current.name}` : firstStore ? ` · ${firstStore.name}` : ''}</b>
            <small className="text-[12.5px] text-[var(--color-muted)]">{firstStore ? 'Ready in 2 hours · free' : 'Not available in your area'}</small>
          </span>
        </button>
      </div>
      {current && shown.length > 1 ? (
        <select value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} className="select-pill w-full disabled:opacity-60" aria-label="Pickup store">
          {shown.map((l) => (
            <option key={l.key} value={l.key}>
              {l.name}{l.city ? ` · ${l.city}` : ''}
            </option>
          ))}
        </select>
      ) : null}
      {current ? (
        <p className="text-xs text-[var(--color-muted)]">
          {[current.street, current.city, current.country].filter(Boolean).join(', ')} — usually ready in 2 hours, free.
        </p>
      ) : null}
    </div>
  );
}
