'use client';

import useSWR from 'swr';
import { useLocale } from 'next-intl';
import { bffGet } from '@/lib/bff/client';
import { usePreferences } from '@/context/preferences-context';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { ProductCard } from './ProductCard';
import { ProductPageView, ProductView } from './types';
import { SAMPLE_PRODUCTS } from './samples';
import { SectionHeader } from './HomeSections';

/** "Complete the look" under the PDP — four other products from the catalogue read (catalog.plp). */
export function RelatedProducts({ excludeKey }: { excludeKey?: string }) {
  const locale = useLocale();
  const { currency, country, channel } = usePreferences();
  const params = new URLSearchParams({ locale });
  if (currency) params.set('priceCurrency', currency);
  if (country) params.set('priceCountry', country);
  if (channel) params.set('priceChannel', channel);
  const { data } = useSWR(`products?${params.toString()}`, (p) => bffGet<ProductPageView>(p));
  const all: ProductView[] = data && data.ok && data.data?.products?.length ? data.data.products : SAMPLE_PRODUCTS;
  const picks = all.filter((p) => p.key !== excludeKey).slice(0, 4);
  return (
    <section className="mt-16">
      <SectionHeader title="Complete the look" lead="Pairs well with this piece." href="/products" cta="Shop all" />
      <FeatureGate capability="catalog.plp" title="Related products">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {picks.map((p) => (
            <ProductCard key={p.key} product={p} />
          ))}
        </div>
      </FeatureGate>
    </section>
  );
}
