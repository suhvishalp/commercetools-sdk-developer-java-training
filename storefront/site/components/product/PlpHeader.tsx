'use client';

import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { findCategory, useCategories } from './CategoryBar';

const LEADS: Record<string, string> = {
  furniture: 'Armchairs, sofas, tables and storage — made to be lived in.',
  'home-decor': 'Rugs, candles, art and the small things that finish a room.',
  bedding: 'Pillow covers, sheets and bundles for calmer nights.',
  kitchen: 'Plates, bowls, glassware and bar tools for slow dinners.',
  bundles: 'Curated sets, priced as a set.',
  'new-arrivals': 'Fresh this month, in small batches.',
};

/** Breadcrumbs + the collection title block: the category name (or the search query) and a one-line lead. */
export function PlpHeader() {
  const params = useSearchParams();
  const q = params.get('q');
  const key = params.get('category');
  const cats = useCategories();
  const cat = key ? findCategory(cats, key) : null;
  const parent = key ? cats.find((c) => c.key !== key && (c.children ?? []).some((s) => s.key === key || (s.children ?? []).some((l) => l.key === key))) : null;
  const title = q ? `Results for “${q}”` : cat?.name ?? (key ?? 'All products');
  const lead = q ? 'Across the whole store, in your language and currency.' : (key ? LEADS[key] : 'Everything we make, thoughtfully built to last.') ?? 'Thoughtfully made, built to last.';
  return (
    <div>
      <nav className="mb-3 flex items-center gap-2 text-[13.5px] text-[var(--color-muted)]">
        <Link href="/" className="hover:text-[var(--color-violet)]">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[var(--color-violet)]">Products</Link>
        {parent ? (
          <>
            <span>/</span>
            <Link href={{ pathname: '/products', query: { category: parent.key } }} className="hover:text-[var(--color-violet)]">{parent.name}</Link>
          </>
        ) : null}
        {cat || q ? (
          <>
            <span>/</span>
            <span className="text-[var(--color-ink)]">{title}</span>
          </>
        ) : null}
      </nav>
      <p className="eyebrow">{q ? 'Search' : 'Collection'}</p>
      <h1 className="mt-1 text-[40px]">{title}</h1>
      <p className="mt-2 max-w-[620px] text-[var(--color-muted)]">{lead}</p>
    </div>
  );
}
