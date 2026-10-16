'use client';

import Image from 'next/image';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { Link } from '@/i18n/routing';
import { ArrowRight } from '@/components/ui/icons';
import { useCategories } from './CategoryBar';
import { categoryImage } from './samples';

/** Homepage "Shop by room" — the top-level categories as image cards, fed by GET /api/categories. */
export function CategoryCards() {
  const cats = useCategories().slice(0, 5);
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-[32px]">Shop by room</h2>
          <p className="mt-1 text-[var(--color-muted)]">Start with the room, find the piece.</p>
        </div>
        <Link href="/products" className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-violet-dark)]">
          All products <ArrowRight size={16} />
        </Link>
      </div>
      <FeatureGate capability="catalog.categories" title="Categories">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {cats.map((c, i) => (
            <Link
              key={c.key}
              href={{ pathname: '/products', query: { category: c.key } }}
              className="surface group p-4 text-center transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative mb-3 h-[150px] overflow-hidden rounded-[10px] bg-[var(--color-earth)]">
                <Image src={categoryImage(c.key, i)} alt="" fill sizes="240px" className="object-cover mix-blend-multiply transition group-hover:scale-105" />
              </div>
              <b className="block font-semibold">{c.name}</b>
              <span className="text-[13px] text-[var(--color-muted)]">
                {(c.children ?? []).length > 0 ? (c.children ?? []).map((s) => s.name).slice(0, 2).join(' · ') : 'Shop all'}
              </span>
            </Link>
          ))}
        </div>
      </FeatureGate>
    </section>
  );
}
