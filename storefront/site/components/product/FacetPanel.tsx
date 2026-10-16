'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useCapability } from '@/context/capabilities-context';
import { Lock, ChevronDown } from '@/components/ui/icons';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { formatMoney } from '@/lib/utils';
import { FacetView } from './types';

interface FacetPanelProps {
  /** When provided (rail mode), render the real facets returned by the composed PLP. Omit for the
   *  legacy Session-2 locked control. */
  facets?: FacetView[];
  selectedColours?: string[];
  /** Selected price window, in minor units (centAmount), or null when unset. */
  priceFrom?: number | null;
  priceTo?: number | null;
  currencyCode?: string;
  onToggleColour?: (key: string) => void;
  onPriceChange?: (from: number | null, to: number | null) => void;
}

/** Swatch colours for the catalogue's colour facet keys (a shop would take these from the attribute's labels). */
const SWATCH: Record<string, string> = {
  white: '#F4F1EA', yellow: '#E7B200', gray: '#9A9A9A', grey: '#9A9A9A', brown: '#8B5E3C', transparent: '#DDE7EE',
  pink: '#E8A1B5', green: '#7BA67A', blue: '#5B7DB1', black: '#222222', purple: '#7B5EA7', red: '#C2473F', beige: '#D9C7A7',
};

/**
 * The facet rail. Two modes:
 *  - LEGACY (no `facets` prop): the Session-2 static control, gated on search.facets — locked shows a
 *    dimmed "Filters" button that opens the unlock dialog.
 *  - RAIL (given `facets`): renders the real colour buckets (as swatch chips with counts) + a price range
 *    from the PLP's facet stats. Displaying buckets needs only the composed PLP; APPLYING a filter is
 *    gated on search.postFilter (so counts stay stable) — locked, the controls open the unlock dialog.
 */
export function FacetPanel(props: FacetPanelProps) {
  if (props.facets === undefined) return <LegacyFacetPanel />;
  return <FacetRail {...props} />;
}

function LegacyFacetPanel() {
  const { loading, unlocked, meta } = useCapability('search.facets');
  const { open } = useUnlockDialog();
  if (loading) return null;
  if (!unlocked) {
    return (
      <button onClick={() => open(meta)} className="chip chip-locked !h-9">
        <Lock size={13} />Filters
      </button>
    );
  }
  return (
    <div className="flex items-center gap-2 text-sm">
      {['Colour', 'Material', 'Price'].map((f) => (
        <button key={f} className="chip !h-9">
          {f}<ChevronDown size={13} />
        </button>
      ))}
    </div>
  );
}

export function labelFor(key: string): string {
  return key ? key.charAt(0).toUpperCase() + key.slice(1) : key;
}

function FacetRail({
  facets = [],
  selectedColours = [],
  priceFrom = null,
  priceTo = null,
  currencyCode = 'EUR',
  onToggleColour,
  onPriceChange,
}: FacetPanelProps) {
  const { unlocked, meta } = useCapability('search.postFilter');
  const { open } = useUnlockDialog();

  const colour = facets.find((f) => f.name === 'colour' || f.name === 'color');
  const stats = facets.find((f) => f.type === 'stats')?.stats ?? null;

  const guard = (fn: () => void) => (unlocked ? fn() : open(meta));

  return (
    <aside className="w-full space-y-7 lg:sticky lg:top-[172px]">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-plum-muted)]">Filters</h2>
        {!unlocked ? (
          <button
            onClick={() => open(meta)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-unlock-dark)]"
            title="Coming soon"
          >
            <Lock size={12} />Unlock
          </button>
        ) : selectedColours.length > 0 || priceFrom != null || priceTo != null ? (
          <button
            onClick={() => { selectedColours.forEach((c) => onToggleColour?.(c)); onPriceChange?.(null, null); }}
            className="text-xs text-[var(--color-muted)] underline"
          >
            Clear
          </button>
        ) : null}
      </div>

      {colour && colour.buckets && colour.buckets.length > 0 ? (
        <div className={unlocked ? '' : 'opacity-60'}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Colour</h3>
          <div className="flex flex-wrap gap-2">
            {colour.buckets.map((b) => {
              const checked = selectedColours.includes(b.key);
              return (
                <button key={b.key} onClick={() => guard(() => onToggleColour?.(b.key))} className={`chip ${checked ? 'on' : ''}`}>
                  <span className="h-3.5 w-3.5 rounded-full border border-black/10" style={{ background: SWATCH[b.key.toLowerCase()] ?? '#CBD5E1' }} />
                  {labelFor(b.key)} <b>{b.count}</b>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {stats && stats.max > stats.min ? (
        <PriceSlider
          min={stats.min}
          max={stats.max}
          from={priceFrom}
          to={priceTo}
          currencyCode={currencyCode}
          disabled={!unlocked}
          onApply={(f, t) => guard(() => onPriceChange?.(f, t))}
        />
      ) : null}

      <div className="space-y-3 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-muted)]">
        <p className="flex items-center gap-2"><span className="stock-dot" /> In stock · ships in 1–2 days</p>
        <p className="flex items-center gap-2"><span className="stock-dot" /> Pickup in store, ready in 2 hours</p>
        <p className="flex items-center gap-2"><span className="stock-dot" /> Free delivery over €50</p>
      </div>
    </aside>
  );
}

function PriceSlider({
  min,
  max,
  from,
  to,
  currencyCode,
  disabled,
  onApply,
}: {
  min: number;
  max: number;
  from: number | null;
  to: number | null;
  currencyCode: string;
  disabled: boolean;
  onApply: (from: number | null, to: number | null) => void;
}) {
  const locale = useLocale();
  const [lo, setLo] = useState<number>(from ?? min);
  const [hi, setHi] = useState<number>(to ?? max);

  // Keep local thumbs in sync when the applied window (URL) changes or the bounds shift — adjusted while
  // rendering (React's recommended pattern) rather than in an effect.
  const window = `${from ?? ''}|${to ?? ''}|${min}|${max}`;
  const [seenWindow, setSeenWindow] = useState(window);
  if (window !== seenWindow) {
    setSeenWindow(window);
    setLo(from ?? min);
    setHi(to ?? max);
  }

  const step = Math.max(1, Math.round((max - min) / 100));
  const dirty = lo !== (from ?? min) || hi !== (to ?? max);

  return (
    <div className={disabled ? 'opacity-60' : ''}>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Price</h3>
      <div className="space-y-2">
        <input type="range" aria-label="Minimum price" min={min} max={max} step={step} value={lo}
          onChange={(e) => setLo(Math.min(Number(e.target.value), hi))} className="w-full accent-[var(--color-violet)]" />
        <input type="range" aria-label="Maximum price" min={min} max={max} step={step} value={hi}
          onChange={(e) => setHi(Math.max(Number(e.target.value), lo))} className="w-full accent-[var(--color-violet)]" />
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">{formatMoney(lo, currencyCode, locale)}</span>
          <span className="font-medium">{formatMoney(hi, currencyCode, locale)}</span>
        </div>
        <div className="flex gap-2 pt-1">
          <button onClick={() => onApply(lo <= min ? null : lo, hi >= max ? null : hi)} className="btn btn-dark btn-sm disabled:opacity-40" disabled={!dirty}>
            Apply
          </button>
          {from != null || to != null ? (
            <button onClick={() => onApply(null, null)} className="btn btn-light btn-sm">
              Reset
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
