import { Link } from '@/i18n/routing';
import { LanguageSwitch } from './LanguageSwitch';
import { CountrySwitch } from './CountrySwitch';
import { CurrencySwitch } from './CurrencySwitch';
import { BrandMark } from './BrandMark';

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Shop',
    links: [
      { label: 'All products', href: '/products' },
      { label: 'Furniture', href: '/products?category=furniture' },
      { label: 'Home Decor', href: '/products?category=home-decor' },
      { label: 'Kitchen', href: '/products?category=kitchen' },
      { label: 'Bundles', href: '/products?category=bundles' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Track your order', href: '/account#orders' },
      { label: 'Delivery & pickup', href: '/cart' },
      { label: 'Returns & exchanges', href: '/account' },
      { label: 'Contact us', href: '/account' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', href: '/' },
      { label: 'Sustainability', href: '/' },
      { label: 'Stores', href: '/' },
      { label: 'Careers', href: '/' },
    ],
  },
];

/** The shop footer: columns, the Region controls (language · country · currency), payments, legal. */
export function Footer() {
  return (
    <footer className="mt-10 bg-[var(--color-plum)] text-[#C9C8E6]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-7 pt-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white">
              <BrandMark /> Lifestyle &amp; Home
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Considered furniture and home décor, thoughtfully made in small batches. Delivered to your door or
              ready for pickup in store.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-white">{c.title}</h4>
              {c.links.map((l) => (
                <Link key={l.label} href={l.href} className="block py-1 text-sm hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-white">Region</h4>
            <div className="flex flex-col gap-2 [&_select]:w-full [&_select]:border-white/25 [&_select]:bg-transparent [&_select]:text-white [&_span]:text-white">
              <LanguageSwitch />
              <CountrySwitch />
              <CurrencySwitch />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs">
          <span>© 2026 Lifestyle &amp; Home Corp · Powered by commercetools · Payments by commercetools Checkout</span>
          <span className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} className="inline-flex h-6 items-center rounded-md bg-white/10 px-2.5 text-[11px] font-bold tracking-wide text-white">
                {p}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
