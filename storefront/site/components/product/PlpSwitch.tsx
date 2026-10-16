'use client';

import { useCapability } from '@/context/capabilities-context';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { ProductGrid } from './ProductGrid';
import { SearchPlp } from './SearchPlp';

/**
 * THE PLP cutover — one PLP, capability-switched. While the composed store-scoped search PLP
 * (search.plpV2) is locked, the storefront shows the Session-2 catalogue grid (gated on catalog.plp).
 * The moment search.plpV2 unlocks, it flips to the search-powered SearchPlp (facets, sort, paging,
 * post-filtering) — no page reload, driven live by the capabilities poll. `compact` renders just the first
 * eight cards (no facets, sort or pager) for the home page's Featured row.
 */
export function PlpSwitch({ compact = false }: { compact?: boolean }) {
  const { loading, unlocked } = useCapability('search.plpV2');
  if (loading) return null;
  if (unlocked) return <SearchPlp compact={compact} />;
  return (
    <FeatureGate capability="catalog.plp" title="Products">
      <ProductGrid compact={compact} />
    </FeatureGate>
  );
}
