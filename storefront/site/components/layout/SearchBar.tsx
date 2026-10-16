'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Lock } from '@/components/ui/icons';
import { useRouter } from '@/i18n/routing';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';

/**
 * Storefront search box. Sets the `?q=` param on the products PLP, where the composed search reads it.
 * Gated on search.fullText (Task 3.3): until it unlocks the box is a locked affordance that opens the
 * unlock dialog; once unlocked it submits the query. Prefilled from the current `?q=` so the box
 * reflects the active search.
 */
export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loading, unlocked, meta } = useCapability('search.fullText');
  const { open } = useUnlockDialog();
  // Reflect the active query (e.g. on load, or when navigated to /products?q=…): when the URL's q changes,
  // adopt it as the box's value — the React-recommended "adjust state while rendering" pattern.
  const urlQ = searchParams.get('q') ?? '';
  const [q, setQ] = useState(urlQ);
  const [seenUrlQ, setSeenUrlQ] = useState(urlQ);
  if (urlQ !== seenUrlQ) {
    setSeenUrlQ(urlQ);
    setQ(urlQ);
  }

  if (loading) return null;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!unlocked) {
          open(meta);
          return;
        }
        router.push(`/products${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ''}`);
      }}
      className={`flex h-11 w-full items-center gap-2.5 rounded-full border-[1.5px] border-[var(--color-border)] bg-[var(--color-cream)] px-4 transition focus-within:border-[var(--color-violet)] focus-within:bg-white focus-within:shadow-[0_0_0_4px_var(--color-violet-light)] ${
        unlocked ? '' : 'opacity-70'
      }`}
    >
      {unlocked ? (
        <Search size={18} className="shrink-0 text-[var(--color-muted)]" />
      ) : (
        <button type="button" onClick={() => open(meta)} title="Coming soon">
          <Lock size={16} className="shrink-0 text-[var(--color-unlock)]" />
        </button>
      )}
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={unlocked ? undefined : () => open(meta)}
        readOnly={!unlocked}
        placeholder="Search armchairs, rugs, candles…"
        className="w-full bg-transparent text-[15px] outline-none placeholder:text-[var(--color-muted)]"
      />
    </form>
  );
}
