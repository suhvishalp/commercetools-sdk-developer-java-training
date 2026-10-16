'use client';

import { Suspense } from 'react';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { CategoryBar } from './CategoryBar';

/** Category navigation — the shared category → subcategory bar (see {@link CategoryBar}), gated on catalog.categories. */
export function CategoryNav({ variant = 'pills' }: { variant?: 'header' | 'pills' }) {
  return (
    <FeatureGate capability="catalog.categories" title="Categories" className={variant === 'header' ? 'min-w-0' : ''}>
      <Suspense fallback={null}>
        <CategoryBar variant={variant} />
      </Suspense>
    </FeatureGate>
  );
}
