'use client';

import { useState } from 'react';
import { Bed, Sofa, Armchair, Lightbulb, Flame, Utensils, Leaf, Droplet, Layers, Sparkles, Tag, ChevronDown } from '@/components/ui/icons';
import useSWR from 'swr';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { bffGet } from '@/lib/bff/client';
import { Link } from '@/i18n/routing';
import { CategoryView } from './types';
import { SAMPLE_CATEGORIES } from './samples';

const ICONS: Array<[string, typeof Tag]> = [
  ['bed', Bed], ['bedroom', Bed], ['sofa', Sofa], ['living', Sofa], ['chair', Armchair], ['furniture', Armchair],
  ['light', Lightbulb], ['lamp', Lightbulb], ['candle', Flame], ['deco', Flame], ['décor', Flame],
  ['kitchen', Utensils], ['garden', Leaf], ['bath', Droplet], ['rug', Layers], ['bundle', Layers], ['new', Sparkles],
];
function categoryIcon(name: string, props: { size: number; className: string }) {
  const n = (name ?? '').toLowerCase();
  const Icon = ICONS.find(([k]) => n.includes(k))?.[1] ?? Tag;
  return <Icon {...props} />;
}

/** Fetches the BFF category tree (top-level nodes with `children`); falls back to samples. */
export function useCategories(): CategoryView[] {
  const locale = useLocale();
  const { data } = useSWR(`categories?locale=${locale}`, (p) => bffGet<CategoryView[]>(p));
  return data && data.ok && data.data && data.data.length > 0 ? data.data : SAMPLE_CATEGORIES;
}

/** Does this category (or any descendant) carry `key`? Used to mark the active nav item. */
function contains(c: CategoryView, key: string): boolean {
  return c.key === key || (c.children ?? []).some((s) => contains(s, key));
}

/** Finds a category anywhere in the tree by key. */
export function findCategory(cats: CategoryView[], key: string): CategoryView | null {
  for (const c of cats) {
    if (c.key === key) return c;
    const hit = findCategory(c.children ?? [], key);
    if (hit) return hit;
  }
  return null;
}

/**
 * Category → subcategory navigation. Two looks for one data source:
 *  - `header`: the text row under the search bar (what every shop has), each item opening a panel of
 *    its subcategories on hover/focus.
 *  - `pills`: the chip row used on the PLP page.
 */
export function CategoryBar({ variant = 'pills' }: { variant?: 'header' | 'pills' }) {
  const cats = useCategories();
  const active = useSearchParams().get('category') ?? '';
  if (variant === 'header') {
    return (
      <nav className="flex items-center gap-0.5">
        {cats.map((c) => (
          <HeaderItem key={c.key} category={c} active={!!active && contains(c, active)} />
        ))}
      </nav>
    );
  }
  return (
    <nav className="flex flex-wrap gap-2">
      {cats.map((c) => (
        <CategoryPill key={c.key} category={c} active={!!active && contains(c, active)} />
      ))}
    </nav>
  );
}

function HeaderItem({ category, active }: { category: CategoryView; active: boolean }) {
  const [open, setOpen] = useState(false);
  const children = category.children ?? [];
  const isNew = /new/i.test(category.name);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      <Link
        href={{ pathname: '/products', query: { category: category.key } }}
        className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[14.5px] font-medium hover:bg-[var(--color-earth)] ${
          active ? 'bg-[var(--color-earth)]' : ''
        } ${isNew ? 'text-[var(--color-violet-dark)]' : ''}`}
      >
        {category.name}
        {children.length > 0 ? <ChevronDown size={13} className="text-[var(--color-muted)]" /> : null}
      </Link>
      {open && children.length > 0 ? (
        <div className="absolute left-0 top-full z-30 pt-1">
          <div className="grid min-w-[520px] grid-cols-2 gap-6 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-float)]">
            {children.map((sub) => (
              <div key={sub.key}>
                <Link href={{ pathname: '/products', query: { category: sub.key } }} className="eyebrow block pb-2 hover:text-[var(--color-violet)]">
                  {sub.name}
                </Link>
                {(sub.children ?? []).map((leaf) => (
                  <Link key={leaf.key} href={{ pathname: '/products', query: { category: leaf.key } }} className="block py-1 text-[15px] hover:text-[var(--color-violet)]">
                    {leaf.name}
                  </Link>
                ))}
                {(sub.children ?? []).length === 0 ? (
                  <Link href={{ pathname: '/products', query: { category: sub.key } }} className="block py-1 text-[15px] hover:text-[var(--color-violet)]">
                    All {sub.name}
                  </Link>
                ) : null}
              </div>
            ))}
            <Link href={{ pathname: '/products', query: { category: category.key } }} className="col-span-2 mt-1 border-t border-[var(--color-border)] pt-3 text-sm font-semibold text-[var(--color-violet-dark)]">
              Shop all {category.name} →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CategoryPill({ category, active }: { category: CategoryView; active: boolean }) {
  const [open, setOpen] = useState(false);
  const children = category.children ?? [];
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={{ pathname: '/products', query: { category: category.key } }} className={`chip ${active ? 'on' : ''}`}>
        {categoryIcon(category.name, { size: 15, className: active ? 'text-white' : 'text-[var(--color-muted)]' })}
        <span>{category.name}</span>
        {children.length > 0 ? <ChevronDown size={14} className={active ? 'text-white' : 'text-[var(--color-muted)]'} /> : null}
      </Link>
      {open && children.length > 0 ? (
        <div className="absolute left-0 top-full z-20 pt-1">
          <div className="min-w-48 rounded-2xl border border-[var(--color-border)] bg-white p-1.5 shadow-[var(--shadow-float)]">
            {children.map((sub) => (
              <Link key={sub.key} href={{ pathname: '/products', query: { category: sub.key } }} className="block rounded-xl px-3 py-1.5 text-sm hover:bg-[var(--color-earth)]">
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
