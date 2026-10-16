'use client';

import Image from 'next/image';
import { Package, Lock, Unlock, Star } from '@/components/ui/icons';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { formatMoney } from '@/lib/utils';
import { useCapability } from '@/context/capabilities-context';
import { useUnlockDialog } from '@/context/unlock-dialog';
import { ProductView } from './types';
import { AddToCartButton } from './AddToCartButton';
import { WishlistButton } from './WishlistButton';

/**
 * One PLP card: image on a quiet surface with the discount badge and the wishlist heart, a quick
 * "Add to bag" that appears on hover (always visible on touch), then name · rating · price. The card
 * links to the PDP, gated on catalog.pdp (Task 2.2) — until that read is implemented the card shows an
 * Unlock affordance instead of navigating to a dead page.
 */
export function ProductCard({ product }: { product: ProductView }) {
  const locale = useLocale();
  const { unlocked: pdpUnlocked, meta } = useCapability('catalog.pdp');
  const { open } = useUnlockDialog();
  const href = `/products/${product.slug || product.key}`;
  const unlockTitle = 'Coming soon';

  const discounted =
    product.originalPrice && product.price && product.originalPrice.centAmount > product.price.centAmount;
  const savingPct = discounted
    ? Math.round((1 - product.price!.centAmount / product.originalPrice!.centAmount) * 100)
    : 0;

  const media = (
    <div className="relative aspect-square bg-[var(--color-cream)]">
      {product.imageUrl ? (
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="grid h-full place-items-center text-[var(--color-muted)]/30">
          <Package size={36} />
        </div>
      )}
    </div>
  );

  return (
    <article className="product-card group surface relative flex flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        {pdpUnlocked ? (
          <Link href={href} className="block">
            {media}
          </Link>
        ) : (
          <button type="button" onClick={() => open(meta)} className="block w-full" title={unlockTitle}>
            {media}
          </button>
        )}
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {discounted && savingPct > 0 ? <span className="pill pill-yellow">−{savingPct}%</span> : null}
          {!pdpUnlocked ? (
            <span className="pill pill-unlock">
              <Lock size={11} />
            </span>
          ) : null}
        </div>
        <div className="absolute right-3 top-3">
          <WishlistButton variant="icon" productKey={product.key} />
        </div>
        <div className="quick absolute inset-x-3 bottom-3 flex gap-2">
          {pdpUnlocked ? (
            <AddToCartButton full compact tone="dark" productKey={product.key} />
          ) : (
            <button
              type="button"
              onClick={() => open(meta)}
              className="btn btn-unlock h-[42px] w-full"
              title={unlockTitle}
            >
              <Unlock size={14} />Unlock
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-4 pt-3.5">
        {pdpUnlocked ? (
          <Link href={href} className="line-clamp-2 min-h-[2.6rem] text-[15.5px] font-semibold leading-snug hover:text-[var(--color-violet)]">
            {product.name}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => open(meta)}
            className="line-clamp-2 min-h-[2.6rem] text-left text-[15.5px] font-semibold leading-snug hover:text-[var(--color-violet)]"
          >
            {product.name}
          </button>
        )}
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
          <span className="stars inline-flex items-center gap-px">
            {[0, 1, 2, 3].map((i) => <Star key={i} size={12} filled />)}<Star size={12} />
          </span>
          4.2 <span>(24)</span>
        </div>
        <div className="mt-auto flex min-h-[1.5rem] flex-wrap items-baseline gap-x-2 pt-1">
          <span className="text-[17px] font-bold">
            {product.price ? formatMoney(product.price.centAmount, product.price.currencyCode, locale) : '—'}
          </span>
          {discounted ? (
            <>
              <s className="text-[13px] text-[var(--color-muted)]">
                {formatMoney(product.originalPrice!.centAmount, product.originalPrice!.currencyCode, locale)}
              </s>
              <em className="text-[12.5px] font-semibold not-italic text-[var(--color-violet-dark)]">
                Save {formatMoney(product.originalPrice!.centAmount - product.price!.centAmount, product.price!.currencyCode, locale)}
              </em>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
