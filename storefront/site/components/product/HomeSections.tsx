'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Truck, Store, RotateCcw, ShieldCheck, Star } from '@/components/ui/icons';
import { IMG } from './samples';

/** The trust strip under the hero: delivery · pickup · returns · secure checkout. */
export function UspStrip() {
  const items = [
    { icon: Truck, title: 'Free delivery over €50', text: 'Standard 3–5 days, Express 1–2' },
    { icon: Store, title: 'Pickup in store', text: 'Ready in 2 hours at your store' },
    { icon: RotateCcw, title: '30-day easy returns', text: 'Free label, no questions' },
    { icon: ShieldCheck, title: 'Secure checkout', text: 'Paid through commercetools Checkout' },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="surface flex items-center gap-3 px-4 py-4 text-sm">
          <Icon size={22} className="shrink-0 text-[var(--color-violet)]" />
          <span>
            <b className="block font-semibold">{title}</b>
            <span className="text-[var(--color-muted)]">{text}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/** Section header: big Archivo title, one-line lead, optional link on the right. */
export function SectionHeader({ title, lead, href, cta }: { title: string; lead?: string; href?: string; cta?: string }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-[32px]">{title}</h2>
        {lead ? <p className="mt-1 text-[var(--color-muted)]">{lead}</p> : null}
      </div>
      {href && cta ? (
        <Link href={href} className="shrink-0 font-semibold text-[var(--color-violet-dark)] hover:text-[var(--color-violet)]">
          {cta} →
        </Link>
      ) : null}
    </div>
  );
}

/** Members banner — the account value proposition, pointing at registration (5.1). */
export function MembersBanner() {
  return (
    <section className="relative grid items-center gap-8 overflow-hidden rounded-[24px] bg-gradient-to-r from-[var(--color-violet)] via-[var(--color-violet-dark)] to-[var(--color-plum)] px-9 py-11 text-white md:grid-cols-[1.2fr_.8fr] md:px-14">
      <div>
        <p className="eyebrow !text-[#29EDE3]">Members</p>
        <h2 className="mt-2 max-w-[560px] text-[34px] font-bold md:text-[40px]">Create an account and your basket follows you.</h2>
        <p className="mt-3 max-w-[520px] text-[#DAD9F0]">
          Saved addresses, faster checkout, order tracking and easy returns. The basket you filled as a guest comes
          with you when you sign up.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-[10px] border border-dashed border-white/50 bg-white/10 px-3.5 py-2.5 font-mono text-[15px]">
            Welcome code <b className="text-[var(--color-yellow)]">SAVE10</b>
          </span>
          <Link href="/register" className="btn btn-lg bg-white text-[var(--color-plum)] hover:bg-[var(--color-earth)]">
            Create account
          </Link>
        </div>
      </div>
      <div className="relative hidden h-[280px] rotate-[-2deg] overflow-hidden rounded-2xl shadow-[var(--shadow-float)] md:block">
        <Image src={IMG.sofa} alt="" fill sizes="480px" className="object-cover" />
      </div>
    </section>
  );
}

/** Stories & guides — editorial cards that make the shop feel curated. */
export function Editorial() {
  const items = [
    { kind: 'Guide', title: 'How to pick an armchair that lasts', img: IMG.leah },
    { kind: 'Style', title: 'Layering rugs in a small living room', img: IMG.rug },
    { kind: 'Care', title: 'Keeping ceramics looking new', img: IMG.plate },
  ];
  return (
    <section>
      <SectionHeader title="Stories & guides" lead="How to choose, style and care." />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <Link key={it.title} href="/products" className="surface group overflow-hidden transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-[var(--shadow-card)]">
            <div className="relative h-[200px] bg-[var(--color-earth)]">
              <Image src={it.img} alt="" fill sizes="420px" className="object-cover transition group-hover:scale-[1.03]" />
            </div>
            <div className="p-[18px]">
              <p className="eyebrow">{it.kind}</p>
              <h3 className="mt-1.5 text-[19px]">{it.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">5 min read</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Social proof — three verified-buyer quotes. */
export function Testimonials() {
  const items = [
    ['The Charlie armchair is the most comfortable thing in our flat. Delivery was two days early.', 'Maya R. · Berlin'],
    ['Pickup in store was ready within the hour. The pillow covers feel far more expensive than they are.', 'Jonas K. · Austin'],
    ['Returned a rug that didn’t fit, label in the box, refund in three days. Will buy again.', 'Priya S. · London'],
  ];
  return (
    <section>
      <SectionHeader title="Loved in 12,400 homes" lead="4.8 average from verified buyers." />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(([q, who]) => (
          <div key={who} className="surface p-[22px]">
            <span className="stars inline-flex gap-0.5">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={13} filled />)}</span>
            <p className="my-3 text-[15px]">“{q}”</p>
            <small className="text-[var(--color-muted)]">
              {who} · <span className="font-semibold text-[var(--color-teal-dark)]">Verified buyer</span>
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Newsletter capture — local state only; a real shop would post this to its marketing platform. */
export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-[var(--color-earth)] px-9 py-10 md:flex-row md:items-center md:px-14">
      <div>
        <h2 className="text-[30px]">Get 10% off your first order.</h2>
        <p className="mt-1.5 text-[var(--color-muted)]">New pieces, styling ideas and member-only drops. Once a week, no noise.</p>
      </div>
      {done ? (
        <p className="font-semibold text-[var(--color-teal-dark)]">You are on the list — check your inbox for the code.</p>
      ) : (
        <form
          className="flex w-full max-w-md gap-2.5"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <input type="email" required placeholder="you@example.com" className="field !h-[50px] flex-1 !rounded-full !px-5" />
          <button className="btn btn-primary btn-lg">Subscribe</button>
        </form>
      )}
    </section>
  );
}
