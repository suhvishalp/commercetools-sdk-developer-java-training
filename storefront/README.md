# storefront — the store that lights up

A Next.js storefront that consumes **your BFF** (never commercetools directly). Each section is
**capability-gated**: it stays locked until you implement the task that unlocks it — so the store
literally comes alive as you build.

> **Sessions 1–7:** you'll light up the header's **Region menu** — country · language · currency, naming your
> store (S1), the **catalogue PLP/PDP** (S2), the **store-scoped, searchable, faceted PLP** — search box, filter
> rail, sort — that the region switch re-scopes (S3), the **bag** — add to bag, the bundle as one unit, the
> Subscribe & Save line, promo, the order summary, pickup vs delivery, the wishlist (S4) — the **account
> area** — sign in / register, the basket-merge choice, profile, address book, your pricing tier, password,
> email verification (S5) — the **checkout wizard and confirmation page**, where the hosted payment widget
> takes over and the order comes back with its ledger, state and subscription (S6), and finally the **gift
> message and white-glove badge** your own API Extension puts on the bag (S7).
>
> The shop is written for a real shopper: locked features show a signal-orange **Unlock** button (tooltip
> "Coming soon"); the course detail — which session and task unlock it — sits in the unlock dialog's
> collapsed **Course notes**. Each browser is its own shopper (an incognito window is a second guest).

## Run
```bash
cd site
npm install
npm run dev          # http://localhost:3000
```
Point it at the BFF on **:8081** (default). Start `bff-java` first, then this.

## What you'll see
- Before you implement a task, its section shows a **locked** state (the orange **Unlock** button).
- Implement the task in `bff-java` → the capability unlocks → the section renders **real data**
  (including your own store, once you create it in Merchant Center).
