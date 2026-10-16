'use client';

import Image from 'next/image';
import useSWR from 'swr';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { bffGet } from '@/lib/bff/client';
import { usePreferences } from '@/context/preferences-context';
import { formatMoney } from '@/lib/utils';
import { ArrowRight } from '@/components/ui/icons';
import { ProductPageView, ProductView } from './types';
import { IMG, SAMPLE_PRODUCTS } from './samples';

/**
 * The product-led hero every real shop opens with: one featured piece (the first discounted product the
 * catalogue returns, else the first with an image), its price, and one call to action — plus two
 * merchandising tiles (the welcome offer, the bundle). Falls back to sample content while catalog.plp
 * is still a stub, so day one looks like a shop and not a placeholder.
 */
export function Hero() {
  const locale = useLocale();
  const { currency, country, channel } = usePreferences();
  const params = new URLSearchParams({ locale });
  if (currency) params.set('priceCurrency', currency);
  if (country) params.set('priceCountry', country);
  if (channel) params.set('priceChannel', channel);
  const { data } = useSWR(`products?${params.toString()}`, (p) => bffGet<ProductPageView>(p));
  const products: ProductView[] = data && data.ok && data.data?.products?.length ? data.data.products : SAMPLE_PRODUCTS;
  const featured =
    products.find((p) => p.imageUrl && p.originalPrice && p.price && p.originalPrice.centAmount > p.price.centAmount) ??
    products.find((p) => p.imageUrl) ??
    products[0];
  const price = featured?.price ? formatMoney(featured.price.centAmount, featured.price.currencyCode, locale) : null;

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[24px] bg-[var(--color-plum)] px-9 py-11 text-white md:min-h-[520px] md:px-14 md:py-13">
        <div className="pointer-events-none absolute -bottom-44 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--color-violet)] opacity-50 blur-[90px]" />
        {featured?.imageUrl ? (
          <Image
            src={featured.imageUrl}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-right [mask-image:linear-gradient(90deg,transparent_18%,#000_55%)]"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-plum)] from-[28%] via-[rgba(25,23,65,0.55)] via-[52%] to-transparent to-[74%]" />
        <div className="relative">
          <p className="eyebrow !text-[#29EDE3]">New season · 2026</p>
          <h1 className="mt-3 max-w-[560px] text-[44px] font-bold leading-[1.02] md:text-[60px]">Considered pieces for calmer living.</h1>
          <p className="mt-4 max-w-[440px] text-[17px] text-[#DAD9F0]">
            Furniture and home décor, thoughtfully made in small batches and built to last. Delivered, or ready for
            pickup today.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary btn-lg">
              Shop the collection
            </Link>
            {featured ? (
              <Link
                href={`/products/${featured.slug || featured.key}`}
                className="btn btn-lg border-[1.5px] border-white/40 text-white hover:border-white hover:bg-white/10"
              >
                {featured.name}
                {price ? <span className="text-[#C2C2FF]"> · {price}</span> : null}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
        <Tile
          tone="yellow"
          eyebrow="Welcome offer"
          title="10% off your first order"
          text="Use code SAVE10 at the basket — on everything, this week."
          cta="Shop now"
          href="/products"
          image={IMG.candle}
        />
        <Tile
          tone="teal"
          eyebrow="Bundle & save"
          title="The Bedding Bundle"
          text="Two pillow covers and a sheet, priced as a set."
          cta="Build yours"
          href="/products?category=bundles"
          image={IMG.pillow}
        />
      </div>
    </section>
  );
}

function Tile({ tone, eyebrow, title, text, cta, href, image }: {
  tone: 'yellow' | 'teal'; eyebrow: string; title: string; text: string; cta: string; href: string; image: string;
}) {
  return (
    <Link
      href={href}
      className={`relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-[24px] p-7 text-[var(--color-plum)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
        tone === 'yellow' ? 'bg-[var(--color-yellow)]' : 'bg-[var(--color-teal-light)]'
      }`}
    >
      <div className="absolute inset-y-0 right-0 w-[48%]">
        <Image src={image} alt="" fill sizes="320px" className="object-cover" />
      </div>
      <div className="relative max-w-[55%]">
        <p className="eyebrow !text-[var(--color-plum-light)]">{eyebrow}</p>
        <h3 className="mt-2 text-[26px] font-bold">{title}</h3>
        <p className="mt-1 text-sm text-[var(--color-plum-light)]">{text}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-semibold">
          {cta} <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
