import { Link } from '@/i18n/routing';

/** The thin promo bar every shop has — Plum with a Yellow accent; the right side carries utility links. */
export function AnnouncementBar() {
  return (
    <div className="bg-[var(--color-plum)] text-[13px] text-white">
      <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between gap-4 px-6">
        <span className="truncate">
          <span className="font-semibold text-[var(--color-yellow)]">Welcome offer</span> · 10% off your first order with code{' '}
          <span className="font-mono">SAVE10</span> · free delivery over €50
        </span>
        <span className="hidden gap-5 text-[#C2C2FF] md:flex">
          <Link href="/products?category=new-arrivals" className="hover:text-white">New arrivals</Link>
          <Link href="/account#orders" className="hover:text-white">Track order</Link>
          <Link href="/cart" className="hover:text-white">Pickup in store</Link>
        </span>
      </div>
    </div>
  );
}
