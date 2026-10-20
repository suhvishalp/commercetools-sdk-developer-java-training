'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Package, Star, ShieldCheck, Leaf, Gift, RotateCcw } from '@/components/ui/icons';
import { Minus, Plus } from '@/components/ui/icons-extra';
import { useLocale } from 'next-intl';
import useSWR from 'swr';
import { bffGet } from '@/lib/bff/client';
import { formatMoney } from '@/lib/utils';
import { usePreferences } from '@/context/preferences-context';
import { useCapability } from '@/context/capabilities-context';
import { Link } from '@/i18n/routing';
import { FeatureGate } from '@/components/ui/FeatureGate';
import { Tag } from '@/components/ui/icons';
import { AddToCartButton } from './AddToCartButton';
import { WishlistButton } from './WishlistButton';
import { VariantSelector } from './VariantSelector';
import { BundleContents } from './BundleContents';
import { RelatedProducts } from './RelatedProducts';
import { FulfilmentSelect, DELIVERY } from '@/components/cart/FulfilmentSelect';
import { ProductView } from './types';
import { SAMPLE_PRODUCT } from './samples';
import { FeatureFlagsView } from '@/lib/ext-types';

/**
 * The PDP. Gated on catalog.pdp; the refinements (scoped pricing, variant matrix, inventory,
 * bundles) each gate on their own capability so they unlock independently.
 */
function ProductDetailInner({ slug }: { slug: string }) {
  const locale = useLocale();
  const { currency, country, channel, storeKey, storeName } = usePreferences();
  const { unlocked: pdpInStoreUnlocked } = useCapability('catalog.pdpInStore');
  const [subscribe, setSubscribe] = useState(false); // one-time vs Subscribe & Save (cart.recurring)
  const [pickup, setPickup] = useState<string>(DELIVERY); // 4.5 — "" = delivery, else a pickup store's channel key
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  // Session 7.2 (ext.customObjects): ops can switch Subscribe & Save off in the `lhc-config/feature-flags`
  // Custom Object — no deploy, no BFF restart. Read only once the task is unlocked; default = enabled.
  const { unlocked: flagsUnlocked } = useCapability('ext.customObjects');
  const { data: flagsRes } = useSWR(flagsUnlocked ? 'config/feature-flags' : null, (p) => bffGet<FeatureFlagsView>(p), {
    refreshInterval: 10000,
  });
  const subscriptionsEnabled = !(flagsUnlocked && flagsRes?.ok && flagsRes.data?.value?.subscriptionsEnabled === false);
  const params = new URLSearchParams({ locale });
  if (currency) params.set('priceCurrency', currency);
  if (country) params.set('priceCountry', country);
  if (channel) params.set('priceChannel', channel);
  // Task 2.5 (catalog.localeSlugs): resolve the PDP by its LOCALIZED slug. The URL slug differs per
  // locale (e.g. en `nala-two-seater-sofa` vs de `nala-zweisitzer-sofa`), so we resolve by slug — not
  // key. Until 2.5 is implemented the by-slug read returns 501, so we fall back to the by-key read
  // (Task 2.2), which only resolves when the slug happens to equal the product key (English). That's
  // the visible payoff: before 2.5 a localized (German) URL can't resolve; after 2.5 it does.
  const bySlug = useSWR(`products/by-slug/${slug}?${params.toString()}`, (p) => bffGet<ProductView>(p));
  const slugResolved = bySlug.data && bySlug.data.ok && bySlug.data.data ? bySlug.data.data : null;
  const { data: byKey } = useSWR(
    slugResolved ? null : `products/${slug}?${params.toString()}`,
    (p) => bffGet<ProductView>(p),
  );
  const keyResolved = byKey && byKey.ok && byKey.data ? byKey.data : null;
  // Global (project-wide) product, resolved by slug then by key.
  const global = slugResolved ?? keyResolved ?? null;

  // Task 3.2 (catalog.pdpInStore): when a store is active AND the in-store PDP is unlocked, re-read the
  // product by key WITH ?store= so it comes from that store's assortment (and store-scoped price). If
  // the product isn't in the store's assortment the BFF 404s — we surface a "not available" state
  // rather than crash, and keep the global product visible.
  const storeActive = Boolean(storeKey) && pdpInStoreUnlocked;
  const inStoreParams = new URLSearchParams(params);
  if (storeKey) inStoreParams.set('store', storeKey);
  const inStoreKey = storeActive && global?.key ? global.key : null;
  const inStore = useSWR(
    inStoreKey ? `products/${inStoreKey}?${inStoreParams.toString()}` : null,
    (p) => bffGet<ProductView>(p),
  );
  const inStoreProduct = inStore.data && inStore.data.ok && inStore.data.data ? inStore.data.data : null;
  const notInStore = Boolean(inStoreKey) && Boolean(inStore.data) && inStore.data!.status === 404;

  // Prefer the in-store product (store-scoped price/assortment) when available; else the global read;
  // else a sample product so the PDP always looks real while the capability is still locked or loading.
  const product = inStoreProduct ?? global ?? SAMPLE_PRODUCT;
  // Once the PDP is live, a slug that neither the by-slug read (2.5) nor the by-key fallback (2.2) can
  // resolve is a real "not found" — never the sample, which would look like some other product.
  const { unlocked: pdpUnlocked } = useCapability('catalog.pdp');
  const notFound =
    pdpUnlocked && !global && Boolean(bySlug.data) && byKey?.status === 404 &&
    (bySlug.data!.status === 404 || bySlug.data!.notImplemented);
  const money = (mv?: { centAmount: number; currencyCode: string } | null) =>
    mv ? formatMoney(mv.centAmount, mv.currencyCode, locale) : null;
  const recurringPriceLabel = product?.recurringPrice ? `${money(product.recurringPrice)}/mo` : null;
  const recurringOriginalLabel = money(product?.recurringOriginalPrice);
  const discounted = !!(product?.originalPrice && product?.price && product.originalPrice.centAmount > product.price.centAmount);
  const savingPct = discounted ? Math.round((1 - product.price!.centAmount / product.originalPrice!.centAmount) * 100) : 0;
  const shownPrice = subscribe && product?.recurringPrice ? product.recurringPrice : product?.price;
  const ctaTotal = shownPrice ? formatMoney(shownPrice.centAmount * qty, shownPrice.currencyCode, locale) : null;
  const sku = `${product?.key?.toUpperCase().slice(0, 4) ?? 'LHC'}-0${(product?.key?.length ?? 7) + 10}`;

  if (notFound) return <ProductNotFound />;

  return (
    <div>
      <nav className="mb-5 flex items-center gap-2 text-[13.5px] text-[var(--color-muted)]">
        <Link href="/" className="hover:text-[var(--color-violet)]">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[var(--color-violet)]">Products</Link>
        <span>/</span>
        <span className="text-[var(--color-ink)]">{product?.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
        {/* Gallery */}
        <div className="grid grid-cols-[84px_1fr] gap-3.5 self-start lg:sticky lg:top-[180px]">
          <div className="flex flex-col gap-2.5">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setImg(i)}
                className={`relative h-[84px] w-[84px] overflow-hidden rounded-[10px] border-[1.5px] bg-white ${img === i ? 'border-[var(--color-violet)]' : 'border-[var(--color-border)]'}`}
                aria-label={`Image ${i + 1}`}
              >
                {product?.imageUrl ? (
                  <Image src={product.imageUrl} alt="" fill sizes="84px" className="object-cover" style={i ? { transform: `scale(${1 + i * 0.35})`, objectPosition: ['center', 'left', 'right', 'bottom'][i] } : undefined} />
                ) : (
                  <Package size={22} className="m-auto text-[var(--color-muted)]" />
                )}
              </button>
            ))}
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[18px] border border-[var(--color-border)] bg-white">
            {product?.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product?.name ?? ''}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-150 hover:cursor-zoom-in"
                style={img ? { transform: `scale(${1 + img * 0.35})`, objectPosition: ['center', 'left', 'right', 'bottom'][img] } : undefined}
              />
            ) : (
              <div className="grid h-full place-items-center text-[var(--color-muted)]/30">
                <Package size={48} />
              </div>
            )}
            <div className="pointer-events-none absolute left-4 top-4 flex gap-1.5">
              {discounted ? <span className="pill pill-yellow">−{savingPct}%</span> : null}
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="eyebrow">
            Lifestyle &amp; Home · <span className="font-mono tracking-normal">{sku}</span>
          </p>
          <h1 className="mt-2 text-[38px]">{product?.name}</h1>
          <div className="mt-2.5 flex flex-wrap items-center gap-3.5 text-sm text-[var(--color-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <span className="stars inline-flex gap-px">{[0, 1, 2, 3].map((i) => (<Star key={i} size={14} filled />))}<Star size={14} /></span>
              4.1 <span>(137)</span>
            </span>
            <a href="#reviews" className="font-semibold text-[var(--color-violet-dark)]">Read reviews</a>
            <span>·</span>
            <FeatureGate capability="inventory.read" title="Availability" className="inline-block">
              <InventoryBadge sku={product?.key ?? slug} />
            </FeatureGate>
          </div>

          <div className="mt-3">
            <FeatureGate capability="catalog.pdpInStore" title="In-store availability">
              <StoreBadge storeName={storeName} storeActive={storeActive} notInStore={notInStore} />
            </FeatureGate>
          </div>

          <FeatureGate capability="pricing.resolve" title="Price" className="mt-5">
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-[34px] font-bold">{product?.price ? money(product.price) : '—'}</span>
                {product?.originalPrice ? <s className="text-lg text-[var(--color-muted)]">{money(product.originalPrice)}</s> : null}
                {discounted ? <span className="pill pill-yellow">Save {savingPct}%</span> : null}
              </div>
              <p className="mt-1 text-[13px] text-[var(--color-muted)]">
                Price includes tax for your country
                {recurringPriceLabel ? (
                  <> · or <span className="font-semibold text-[var(--color-teal-dark)]">{recurringPriceLabel}</span> with Subscribe &amp; Save</>
                ) : null}
              </p>
            </div>
          </FeatureGate>

          <FeatureGate capability="catalog.variantMatrix" title="Options" className="mt-6">
            <VariantSelector productKey={product?.key} />
          </FeatureGate>

          {subscriptionsEnabled ? (
            <FeatureGate capability="cart.recurring" title="Subscribe & Save" className="mt-6">
              <div className="overflow-hidden rounded-[14px] border-[1.5px] border-[var(--color-border)]">
                <label className={`flex cursor-pointer items-start gap-3 px-4 py-4 ${!subscribe ? 'bg-[var(--color-violet-50)]' : ''}`}>
                  <input type="radio" name="purchase" checked={!subscribe} onChange={() => setSubscribe(false)} className="mt-1 h-[18px] w-[18px] accent-[var(--color-violet)]" />
                  <span className="flex-1">
                    <b className="block font-semibold">One-time purchase</b>
                    <small className="text-[13px] text-[var(--color-muted)]">Ships in 1–2 business days</small>
                  </span>
                  <span className="font-bold">{product?.price ? money(product.price) : '—'}</span>
                </label>
                <label className={`flex cursor-pointer items-start gap-3 border-t-[1.5px] border-[var(--color-border)] px-4 py-4 ${subscribe ? 'bg-[var(--color-violet-50)]' : ''}`}>
                  <input type="radio" name="purchase" checked={subscribe} onChange={() => setSubscribe(true)} className="mt-1 h-[18px] w-[18px] accent-[var(--color-violet)]" />
                  <span className="flex-1">
                    <b className="block font-semibold">Subscribe &amp; Save</b>
                    <small className="text-[13px] text-[var(--color-muted)]">Delivered every month · skip or cancel anytime · price locked</small>
                  </span>
                  <span className="text-right font-bold">
                    {recurringOriginalLabel ? <s className="mr-1.5 font-normal text-[var(--color-muted)]">{recurringOriginalLabel}</s> : null}
                    {recurringPriceLabel ?? '—'}
                  </span>
                </label>
              </div>
            </FeatureGate>
          ) : (
            <p id="cap-ext.customObjects" data-capability="ext.customObjects" className="surface mt-6 border-dashed p-3 text-xs text-[var(--color-muted)]">
              Subscribe &amp; Save is currently unavailable.
            </p>
          )}

          <FeatureGate capability="cart.channel" title="Delivery or pick up" className="mt-5">
            <FulfilmentSelect id="pdp-fulfilment" value={pickup} onChange={setPickup} />
          </FeatureGate>

          <div className="mt-6 flex items-center gap-3">
            <div className="inline-flex h-[54px] items-center rounded-full border-[1.5px] border-[var(--color-border)] bg-white">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-full w-12 place-items-center" aria-label="Decrease quantity"><Minus size={16} /></button>
              <span className="min-w-9 text-center font-semibold">{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} className="grid h-full w-12 place-items-center" aria-label="Increase quantity"><Plus size={16} /></button>
            </div>
            <div className="flex-1">
              <AddToCartButton
                full
                productKey={product?.key ?? slug}
                quantity={qty}
                recurring={subscribe && subscriptionsEnabled}
                recurrencePolicy="monthly"
                fulfilment={pickup ? { supplyChannelKey: pickup } : undefined}
                label={ctaTotal ? `${subscribe ? 'Subscribe' : 'Add to bag'} · ${ctaTotal}` : undefined}
              />
            </div>
            <WishlistButton productKey={product?.key ?? slug} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2.5 text-[13.5px] text-[var(--color-muted)]">
            <span className="flex items-center gap-2.5"><RotateCcw size={17} className="shrink-0 text-[var(--color-teal-dark)]" /> 30-day returns, free label</span>
            <span className="flex items-center gap-2.5"><ShieldCheck size={17} className="shrink-0 text-[var(--color-teal-dark)]" /> 2-year guarantee</span>
            <span className="flex items-center gap-2.5"><Leaf size={17} className="shrink-0 text-[var(--color-teal-dark)]" /> FSC-certified wood, low-VOC finish</span>
            <span className="flex items-center gap-2.5"><Gift size={17} className="shrink-0 text-[var(--color-teal-dark)]" /> Gift message at checkout</span>
          </div>

          <FeatureGate capability="catalog.bundles" title="Bundle contents" className="mt-6">
            <BundleContents productKey={product?.key} />
          </FeatureGate>

          <div className="mt-7 border-t border-[var(--color-border)]">
            <Accordion title="Details" open>
              {product?.name} is made in small batches from solid oak and natural linen. Designed in Copenhagen, assembled in
              Portugal, finished by hand. Each piece carries slight variations in grain and tone.
            </Accordion>
            <Accordion title="Dimensions & materials">
              <table className="w-full text-sm">
                <tbody>
                  {[['Width', '82 cm'], ['Depth', '88 cm'], ['Height', '74 cm'], ['Frame', 'Solid oak, FSC'], ['Upholstery', '100% linen, removable cover']].map(([k, v]) => (
                    <tr key={k} className="border-t border-[var(--color-border)]"><td className="w-2/5 py-1.5 text-[var(--color-ink)]">{k}</td><td className="py-1.5">{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </Accordion>
            <Accordion title="Delivery & returns">
              Standard delivery 3–5 business days, free over €50. Express 1–2 days. Pickup in store ready within 2 hours.
              Returns are free within 30 days — print the label from your account.
            </Accordion>
            <Accordion title="Care">
              Vacuum weekly with an upholstery attachment. Spot-clean with a damp cloth. Covers are machine-washable at 30°C.
            </Accordion>
          </div>
        </div>
      </div>

      <RelatedProducts excludeKey={product?.key} />

      <section id="reviews" className="mt-16 grid gap-10 lg:grid-cols-[300px_1fr]">
        <div className="surface p-6">
          <p className="eyebrow">Reviews</p>
          <div className="mt-1 font-display text-[52px] font-bold leading-none">4.1</div>
          <span className="stars inline-flex gap-px">{[0, 1, 2, 3].map((i) => (<Star key={i} size={14} filled />))}<Star size={14} /></span>
          <span className="ml-2 text-sm text-[var(--color-muted)]">137 reviews</span>
          <div className="mt-3 space-y-2">
            {[[5, 68], [4, 22], [3, 7], [2, 2], [1, 1]].map(([s, pct]) => (
              <div key={s} className="flex items-center gap-2.5 text-[13px] text-[var(--color-muted)]">
                {s}★
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-earth-dark)]"><i className="block h-full bg-[var(--color-yellow)]" style={{ width: `${pct}%` }} /></div>
                {pct}%
              </div>
            ))}
          </div>
          <button type="button" className="btn btn-ghost btn-sm mt-5 w-full">Write a review</button>
        </div>
        <div>
          {[
            ['Exactly as pictured, softer than expected', 'Maya R.', '2 weeks ago', 'The linen is lovely and the frame feels solid. Delivery crew brought it upstairs without being asked.'],
            ['Pickup was effortless', 'Jonas K.', '1 month ago', 'Ordered at lunch, picked up on the way home. Fits our small flat better than I hoped.'],
            ['Good, with one caveat', 'Priya S.', '2 months ago', 'Beautiful piece. The cushion took a week to settle. Customer care sent a care guide proactively, which was a nice touch.'],
          ].map(([t, who, when, body]) => (
            <article key={t} className="border-b border-[var(--color-border)] py-5">
              <div className="flex items-center gap-2">
                <span className="stars inline-flex gap-px">{[0, 1, 2, 3, 4].map((i) => (<Star key={i} size={13} filled />))}</span>
                <span className="text-xs font-semibold text-[var(--color-teal-dark)]">Verified buyer</span>
              </div>
              <h3 className="mt-2 text-base">{t}</h3>
              <p className="mt-1.5 text-[14.5px] text-[var(--color-muted)]">{body}</p>
              <small className="mt-2 block text-[var(--color-muted)]">{who} · {when}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Accordion({ title, open, children }: { title: string; open?: boolean; children: React.ReactNode }) {
  return (
    <details open={open} className="group border-b border-[var(--color-border)]">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-semibold [&::-webkit-details-marker]:hidden">
        {title}
        <Plus size={18} className="text-[var(--color-muted)] transition group-open:rotate-45" />
      </summary>
      <div className="pb-4 text-[14.5px] leading-relaxed text-[var(--color-muted)]">{children}</div>
    </details>
  );
}

/**
 * In-store availability indicator (catalog.pdpInStore). Reflects the store-scoped PDP read: when a
 * store is active it shows the store the product is being shown for, or a "not available in this
 * store" state when the BFF 404s; with no store active it prompts to pick one.
 */
function StoreBadge({
  storeName,
  storeActive,
  notInStore,
}: {
  storeName: string | null;
  storeActive: boolean;
  notInStore: boolean;
}) {
  if (!storeActive) {
    return (
      <span className="pill pill-earth !h-7 !text-xs !font-medium">
        <Tag size={13} />Select a store for in-store availability
      </span>
    );
  }
  if (notInStore) {
    return (
      <span className="pill pill-earth !h-7 !text-xs !font-medium text-[var(--color-ink)]">
        <Tag size={13} />Not available in {storeName ?? 'this store'}
      </span>
    );
  }
  return (
    <span className="pill pill-teal !h-7 !text-xs">
      <Tag size={13} />Available at {storeName ?? 'your store'}
    </span>
  );
}

function InventoryBadge({ sku }: { sku: string }) {
  const { data } = useSWR(`inventory/${sku}`, (p) => bffGet<{ isOnStock?: boolean }>(p));
  const onStock = data?.data?.isOnStock;
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      <span className={`stock-dot ${onStock ? '' : '!bg-[var(--color-earth-dark)]'}`} />
      {onStock ? 'In stock · ships in 1–2 days' : 'Availability'}
    </span>
  );
}

/** The shopper-facing 404: the address names a product this shop does not have. */
function ProductNotFound() {
  return (
    <div className="surface mx-auto my-16 max-w-xl px-8 py-12 text-center">
      <Package size={40} className="mx-auto mb-4 text-[var(--color-muted)]" />
      <h1 className="font-display text-2xl font-semibold text-[var(--color-ink)]">We could not find that product</h1>
      <p className="mt-3 text-[15px] text-[var(--color-muted)]">
        The link may be out of date, or the product is no longer part of our range.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/products" className="btn btn-primary">Browse all products</Link>
        <Link href="/" className="btn btn-ghost">Back to home</Link>
      </div>
    </div>
  );
}

export function ProductDetail({ slug }: { slug: string }) {
  return (
    <FeatureGate capability="catalog.pdp" title="Product">
      <ProductDetailInner slug={slug} />
    </FeatureGate>
  );
}
