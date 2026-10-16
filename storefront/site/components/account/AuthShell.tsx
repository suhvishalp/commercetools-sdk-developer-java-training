import { Link } from '@/i18n/routing';
import { Check } from '@/components/ui/icons';
import { BrandMark } from '@/components/layout/BrandMark';

export const field = 'field';
export const primary = 'btn btn-primary btn-lg w-full';

/**
 * The split-panel identity page (sign in / create account / forgot password): the value proposition on a
 * Violet→Plum panel, the form on white. One shell, three pages.
 */
export function AuthShell({ title, subtitle, children, footer, panelTitle, panelText }: {
  title: string; subtitle?: string; children: React.ReactNode; footer?: React.ReactNode; panelTitle?: string; panelText?: string;
}) {
  return (
    <div className="mx-auto my-4 grid max-w-[1080px] overflow-hidden rounded-[24px] shadow-[var(--shadow-float)] lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-plum)] p-12 text-white lg:flex">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight">
            <BrandMark /> Lifestyle &amp; Home
          </Link>
          <h2 className="mt-9 text-[40px]">{panelTitle ?? 'Your basket follows you.'}</h2>
          <p className="mt-3 max-w-[380px] text-[#DAD9F0]">
            {panelText ?? 'Sign in and the pieces you saved as a guest come with you — basket, wishlist and all.'}
          </p>
          <ul className="mt-7 space-y-3 text-[15px]">
            {['Free delivery on every order as a member', 'Early access to new drops', 'Faster checkout with saved addresses and cards', 'Order tracking and easy returns'].map((t) => (
              <li key={t} className="flex items-center gap-2.5"><Check size={16} className="text-[#29EDE3]" /> {t}</li>
            ))}
          </ul>
        </div>
        <small className="text-[#C2C2FF]">Powered by commercetools · Payments by commercetools Checkout</small>
      </div>
      <div className="bg-white p-8 md:p-12">
        <h1 className="text-[32px]">{title}</h1>
        {subtitle ? <p className="mt-1.5 text-[var(--color-muted)]">{subtitle}</p> : null}
        <div className="mt-6">{children}</div>
        {footer ? <div className="mt-5 text-center text-sm text-[var(--color-muted)]">{footer}</div> : null}
      </div>
    </div>
  );
}

export function ErrorNote({ message }: { message: string | null }) {
  if (!message) return null;
  return <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{message}</p>;
}

export function AuthLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="font-semibold text-[var(--color-violet-dark)] hover:text-[var(--color-violet)]">{children}</Link>;
}
