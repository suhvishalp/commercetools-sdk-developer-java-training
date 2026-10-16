'use client';

import useSWR from 'swr';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/i18n/routing';
import { bffGet } from '@/lib/bff/client';
import { useCapability } from '@/context/capabilities-context';
import { usePreferences } from '@/context/preferences-context';
import { X } from '@/components/ui/icons-extra';
import { formatMoney } from '@/lib/utils';
import { ProductCard } from './ProductCard';
import { SortDropdown } from './SortDropdown';
import { FacetPanel, labelFor } from './FacetPanel';
import { PlpView, ProductView } from './types';
import { SAMPLE_PRODUCTS } from './samples';

const PAGE_SIZE = 24;
const COLOUR_PREFIX = 'colour:';
const PRICE_PREFIX = 'price:';

/**
 * The Session-3 search-powered PLP (search.plpV2). The whole page — grid, facet rail, sort and pager
 * — is ONE call to the composed store-scoped endpoint GET /api/plp (see DiscoveryController#plp):
 *   ?store=<storeKey>&q=&category=&sort=&page=&size= + locale + price context.
 * The URL search params are the single source of truth: the header SearchBar drives `q`, CategoryNav
 * drives `category`, SortDropdown drives `sort`, and the FacetPanel pushes `filter=` (gated on
 * search.postFilter). Rendered only when search.plpV2 is unlocked; still degrades to the sample
 * catalogue if the composed call is unavailable, so it never crashes.
 */
export function SearchPlp({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { storeKey, currency, country, channel } = usePreferences();
  const { unlocked: postFilterUnlocked } = useCapability('search.postFilter');

  const q = searchParams.get('q') ?? '';
  const category = searchParams.get('category') ?? '';
  const sort = searchParams.get('sort') ?? '';
  const page = Math.max(0, Number(searchParams.get('page') ?? '0') || 0);

  // Selected facet filters only take effect once post-filtering (3.7) is unlocked.
  const rawFilters = searchParams.getAll('filter');
  const activeFilters = postFilterUnlocked ? rawFilters : [];
  const selectedColours = activeFilters
    .filter((f) => f.startsWith(COLOUR_PREFIX))
    .map((f) => f.slice(COLOUR_PREFIX.length));
  const [priceFrom, priceTo] = parsePrice(activeFilters.find((f) => f.startsWith(PRICE_PREFIX)));

  // ONE composed call. store/q/category/sort/paging + locale + price context (+ selected filters).
  const params = new URLSearchParams({ locale, page: String(page), size: String(PAGE_SIZE) });
  if (storeKey) params.set('store', storeKey);
  if (q) params.set('q', q);
  if (category) params.set('category', category);
  if (sort) params.set('sort', sort);
  if (currency) params.set('priceCurrency', currency);
  if (country) params.set('priceCountry', country);
  if (channel) params.set('priceChannel', channel);
  activeFilters.forEach((f) => params.append('filter', f));
  const path = `plp?${params.toString()}`;

  const { data } = useSWR(path, (p) => bffGet<PlpView>(p));
  const envelope = data?.ok ? data.data : null;
  // Live envelope when the composed call resolves; otherwise the sample catalogue so the grid still
  // reads like a real shop (mirrors ProductGrid's fallback). 501/unreachable => samples, no crash.
  const usingSample = !envelope;
  const cards: ProductView[] = usingSample ? SAMPLE_PRODUCTS : envelope.cards;
  const facets = usingSample ? [] : envelope.facets;
  const total = usingSample ? cards.length : envelope.total;
  const offset = usingSample ? 0 : envelope.offset;
  const limit = usingSample ? cards.length : envelope.limit;

  const setParams = (mutate: (p: URLSearchParams) => void) => {
    const next = new URLSearchParams(searchParams.toString());
    mutate(next);
    const qs = next.toString();
    router.push(qs ? `/products?${qs}` : '/products');
  };

  const onSort = (v: string) =>
    setParams((p) => {
      if (v) p.set('sort', v);
      else p.delete('sort');
      p.delete('page');
    });

  const toggleColour = (key: string) =>
    setParams((p) => {
      const token = `${COLOUR_PREFIX}${key}`;
      const all = p.getAll('filter');
      p.delete('filter');
      const nextFilters = all.includes(token) ? all.filter((f) => f !== token) : [...all, token];
      nextFilters.forEach((f) => p.append('filter', f));
      p.delete('page');
    });

  const setPrice = (from: number | null, to: number | null) =>
    setParams((p) => {
      const kept = p.getAll('filter').filter((f) => !f.startsWith(PRICE_PREFIX));
      p.delete('filter');
      kept.forEach((f) => p.append('filter', f));
      if (from != null || to != null) p.append('filter', `${PRICE_PREFIX}${from ?? ''}-${to ?? ''}`);
      p.delete('page');
    });

  const gotoPage = (n: number) =>
    setParams((p) => {
      if (n > 0) p.set('page', String(n));
      else p.delete('page');
    });

  const hasPrev = page > 0;
  const hasNext = !usingSample && offset + limit < total;
  const pageCount = usingSample ? 1 : Math.max(1, Math.ceil(total / Math.max(1, limit)));

  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {cards.slice(0, 8).map((p) => (
          <ProductCard key={p.key} product={p} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid items-start gap-9 lg:grid-cols-[260px_1fr]">
      <FacetPanel
        facets={facets}
        selectedColours={selectedColours}
        priceFrom={priceFrom}
        priceTo={priceTo}
        currencyCode={currency}
        onToggleColour={toggleColour}
        onPriceChange={setPrice}
      />

      <div>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <p className="text-sm text-[var(--color-muted)]">
            {usingSample ? null : <><b className="text-[var(--color-ink)]">{total}</b> product{total === 1 ? '' : 's'}</>}
            {q ? <> · “{q}”</> : null}
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedColours.map((c) => (
              <button key={c} className="chip on !h-8 !text-[13px]" onClick={() => toggleColour(c)}>
                {labelFor(c)} <X size={13} />
              </button>
            ))}
            {priceFrom != null || priceTo != null ? (
              <button className="chip on !h-8 !text-[13px]" onClick={() => setPrice(null, null)}>
                {priceFrom != null ? formatMoney(priceFrom, currency, locale) : '…'} – {priceTo != null ? formatMoney(priceTo, currency, locale) : '…'} <X size={13} />
              </button>
            ) : null}
          </div>
          <div className="ml-auto">
            <SortDropdown value={sort} onChange={onSort} />
          </div>
        </div>

        {cards.length === 0 ? (
          <div className="surface border-dashed p-14 text-center">
            <h3 className="text-lg">No products match these filters</h3>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Try clearing a filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {cards.map((p) => (
              <ProductCard key={p.key} product={p} />
            ))}
          </div>
        )}

        {hasPrev || hasNext ? (
          <div className="mt-9 flex items-center justify-center gap-1.5 text-sm">
            <button onClick={() => gotoPage(page - 1)} disabled={!hasPrev} className="btn btn-light btn-sm disabled:opacity-40">
              ‹ Previous
            </button>
            {Array.from({ length: Math.min(pageCount, 7) }, (_, i) => i).map((i) => (
              <button
                key={i}
                onClick={() => gotoPage(i)}
                className={`grid h-[38px] min-w-[38px] place-items-center rounded-full border text-sm ${
                  i === page ? 'border-[var(--color-plum)] bg-[var(--color-plum)] text-white' : 'border-[var(--color-border)] bg-white hover:border-[var(--color-plum)]'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => gotoPage(page + 1)} disabled={!hasNext} className="btn btn-light btn-sm disabled:opacity-40">
              Next ›
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** Parse a `price:<from>-<to>` filter token (minor units; either bound may be blank). */
function parsePrice(token: string | undefined): [number | null, number | null] {
  if (!token) return [null, null];
  const range = token.slice(PRICE_PREFIX.length);
  const dash = range.indexOf('-');
  if (dash < 0) return [null, null];
  const from = range.slice(0, dash);
  const to = range.slice(dash + 1);
  return [from ? Number(from) : null, to ? Number(to) : null];
}
