'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Lock } from '@/components/ui/icons';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { usePreferences } from '@/context/preferences-context';
import { languageLabel } from '@/lib/utils';
import { LanguageSwitch } from './LanguageSwitch';
import { CountrySwitch } from './CountrySwitch';
import { CurrencySwitch } from './CurrencySwitch';

/**
 * "US · English · USD" — one quiet control in the category row that opens the region settings
 * (language → locale, country + currency → price selection). Keeps the shop chrome clean while the
 * price-selection demo axes stay one click away.
 */
export function RegionMenu() {
  const { country, language, currency, storeName } = usePreferences();
  // Session 1 — project settings (languages · currencies · countries) feed these options; until 1.1 is
  // implemented the control is the locked affordance and the Canvas deep link (cap-project.info) lands here.
  const { unlocked, meta } = useCapability('project.info');
  const { open: openUnlock } = useUnlockDialog();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const short = languageLabel(language).replace(/\s*\(.*\)$/, '');
  return (
    <div className="relative scroll-mt-28" ref={ref} id="cap-project.info" data-capability="project.info">
      <button
        type="button"
        onClick={() => (unlocked ? setOpen((o) => !o) : openUnlock(meta))}
        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs hover:bg-[var(--color-earth)] ${
          unlocked ? 'text-[var(--color-muted)] hover:text-[var(--color-ink)]' : 'font-semibold text-[var(--color-unlock-dark)]'
        }`}
        aria-haspopup="dialog"
        aria-expanded={open}
        title={unlocked ? (storeName ? `Shopping ${storeName}` : undefined) : 'Coming soon'}
      >
        {unlocked ? <>{country} · {short} · {currency}<ChevronDown size={12} /></> : <><Lock size={11} /> Region</>}
      </button>
      {open ? (
        <div className="absolute right-0 z-30 mt-2 w-72 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-float)]">
          <p className="eyebrow mb-3">Region{storeName ? <span className="ml-2 font-sans text-xs font-normal normal-case tracking-normal text-[var(--color-muted)]">· {storeName}</span> : null}</p>
          <div className="space-y-3 text-sm [&_select]:w-full">
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-[var(--color-muted)]">Language</span>
              <LanguageSwitch />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-[var(--color-muted)]">Country · prices &amp; tax</span>
              <CountrySwitch />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-[var(--color-muted)]">Currency</span>
              <CurrencySwitch />
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
}
