'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { ShoppingBag, Heart, Truck } from '@/components/ui/icons';
import { Link } from '@/i18n/routing';
import { useCart } from '@/hooks/useCart';
import { useShoppingList } from '@/hooks/useShoppingList';
import { ChannelBar } from './ChannelBar';
import { StoreSelector } from './StoreSelector';
import { AnnouncementBar } from './AnnouncementBar';
import { AccountMenu } from './AccountMenu';
import { SearchBar } from './SearchBar';
import { RegionMenu } from './RegionMenu';
import { BrandMark } from './BrandMark';
import { CartCurrencySync } from './CartCurrencySync';
import { CategoryNav } from '@/components/product/CategoryNav';

/**
 * The shop header: promo bar · logo + search + store / account / wishlist / bag · the category row with
 * the region control at its right (which also carries the project.info gate). The price-channel strip stays beneath it.
 */
export function Header() {
  const t = useTranslations();
  const { cart } = useCart();
  const count = cart?.itemCount ?? 0;
  const { list } = useShoppingList();
  const saved = list?.itemCount ?? 0;
  return (
    <header className="sticky top-0 z-20">
      <CartCurrencySync />
      <AnnouncementBar />
      <div className="border-b border-[var(--color-border)] bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center gap-6 px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 font-display text-[22px] font-bold tracking-tight">
            <BrandMark />
            {t('common.shopName').replace(/\s*Corp$/, '')}
          </Link>
          <div className="hidden min-w-0 flex-1 md:block md:max-w-[560px]">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
          </div>
          <nav className="ml-auto flex items-center gap-1 text-sm">
            <StoreSelector />
            <AccountMenu />
            <Link href="/cart" aria-label={`Saved items (${saved})`} title="Saved for later" className="hbtn">
              <Heart size={20} />
              {saved > 0 ? <span className="badge-count">{saved}</span> : null}
            </Link>
            <Link href="/cart" className="hbtn">
              <ShoppingBag size={20} />
              <span className="hidden sm:inline">{t('nav.cart')}</span>
              {count > 0 ? <span className="badge-count">{count}</span> : null}
            </Link>
          </nav>
        </div>
        <div className="border-t border-[var(--color-border)]">
          <div className="mx-auto flex h-12 w-full max-w-7xl items-center gap-2 px-6">
            <CategoryNav variant="header" />
            <div className="ml-auto hidden items-center gap-4 text-xs text-[var(--color-muted)] lg:flex">
              <span className="inline-flex items-center gap-1.5"><Truck size={14} /> Free delivery over €50</span>
              <span>30-day returns</span>
              <RegionMenu />
            </div>
          </div>
        </div>
      </div>
      <ChannelBar />
    </header>
  );
}
