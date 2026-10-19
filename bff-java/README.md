# bff-java — the BFF you build

A layered ("hexagonal") Spring Boot **Backend-for-Frontend** for commercetools. This is where the
course tasks live: you implement one SDK call at a time, and the storefront lights up.

## The shape (four layers)
```
api             controllers + DTOs (the HTTP contract)
application     services — mapping + your logic
domain          your own models — SDK-free
infrastructure  the commercetools SDK call — the ONLY place SDK types live
```
**Golden rule:** SDK types never leak past `infrastructure`. The repository returns raw SDK types; the
service maps them to your `domain` models.

## Modules
- `platform` — shared kernel (the single `ProjectApiRoot` client, config, error advice, and the
  `ShopperSession` — the anonymous id · active cart · signed-in customer every module reads). Don't edit.
- `project` — the worked reference (`GET /api/project`) **plus your Session-1 Stores tasks**.
- `catalog` — **your Session-2 tasks**: products (PLP/PDP), categories, variants, bundles, slug routing.
- `product-discovery` — **your Session-3 tasks**: store-scoped Product Search over GraphQL — search,
  full-text, category subtree, facets, PLP orchestration, postFilter.
- `cart` — **your Session-4 tasks**: the guest cart and its write model — create, line items, the bundle
  in the cart, a Subscribe & Save line, promo code, the cart summary (channel · address · shipping ·
  shopping list ship pre-built).
- `customer` — **your Session-5 tasks**: sign-up, sign-in, the guest → customer cart merge, the address
  book, password change / reset, the customer-group price context and `GET /api/session` (profile, email
  verification and the wishlist carry-over ship pre-built).
- `order` — **your Session-6 tasks**: the Checkout Session with your own order number, reading the order and
  its payment ledger, capture, the guarded order state machine, order history, the subscription born from
  Subscribe & Save (readiness and the ledger ship pre-built).
- `extensibility` — **your Session-7 tasks**: Custom Fields (gift message), Custom Objects (feature flags),
  Messages (order timeline) + the idempotent consumer, the API Extension registration and its cart-rules
  handler, the Import API price feed, and the extensibility decision.
- `training` — task/progress tracking (powers Commerce Canvas). Don't edit.
- `app` — the aggregator; runs the full BFF on **:8081**.

## Setup
1. **`.env`** — copy `.env.example` → `.env` and fill in your API-client credentials.
2. **AI toolchain** — in your editor (Claude Code), install the commercetools plugin:
   ```
   /plugin marketplace add commercetools/commercetools-ai-plugins
   /plugin install commercetools@commercetools
   ```
   When the plugin loads, Claude asks to approve a new MCP server — choose **"Use this and all future
   MCP servers in this project."**
   Validate it: ask the Knowledge MCP to confirm an SDK call. **From now on, ground every commercetools
   call on the Knowledge MCP — never guess the API.**
   > Only the **Knowledge MCP** (`commercetools-developer`, HTTP, no credentials) is required — it's
   > what grounds your code. It connects automatically.

### Optional — enable the Commerce MCP
The plugin also ships a **Commerce MCP** that lets the AI *call* your project's APIs. It's **optional**
(not needed for Session 1) and needs your API-client credentials as environment variables — note the
names differ from `.env` (no `CTP_` prefix):

```bash
export CLIENT_ID=…  CLIENT_SECRET=…  PROJECT_KEY=…  AUTH_URL=…  API_URL=…
```
(map from your `.env`: `CTP_CLIENT_ID → CLIENT_ID`, `CTP_CLIENT_SECRET → CLIENT_SECRET`,
`CTP_PROJECT_KEY → PROJECT_KEY`, `CTP_AUTH_URL → AUTH_URL`, `CTP_API_URL → API_URL`), then **restart
Claude**. Heads-up: a GUI IDE may not see shell `export`s — launch the editor from a terminal that has
them, or set them in the environment your IDE inherits.

## Run
```bash
mvn -pl app spring-boot:run     # full BFF on http://localhost:8081
```
Health check: `GET http://localhost:8081/api/project` should return the project (the worked reference).

## Dev loop (fast — no reinstall per task)
This applies to **every task**. The app ships with **Spring Boot DevTools**, which auto-restarts (~1–2s)
when compiled classes change — so you never run `mvn clean install` after a task.

0. **Open `bff-java/pom.xml` as a project** (File → Open → pick the `pom.xml` → *Open as Project*). If the run
   arrow stays grey and there is no run configuration, IntelliJ did not link the Maven build: right-click
   `pom.xml` → **Add as Maven Project** (or Maven tool window → **+**), wait for the import, then the ten
   modules appear and the green ▶ shows on `BffApplication`. Set the configuration's **Working directory**
   to the `bff-java` folder (where `.env` lives), otherwise the credentials are not found at startup.
1. **Run via the `BffApplication` run configuration** in IntelliJ (the green ▶ on `BffApplication`) —
   *not* the Maven `spring-boot:run` goal. This puts every module's `target/classes` on the classpath
   as directories, so DevTools watches your edits across all modules.
2. **Edit** your repository method → **recompile** (⇧⌘F9 *Recompile*, or ⌘F9 *Build Project*) →
   DevTools restarts automatically → hit **Try It**.
3. **Hands-free:** *Settings → Build, Execution, Deployment → Compiler → "Build project automatically"*
   — then a save triggers the compile and restart, no manual build.

> Full `mvn clean install` is only needed when a **`pom.xml`/dependency** changes, or to clear a stale
> build. If you run `mvn spring-boot:run` from a plain terminal instead of the IntelliJ config, edits in
> a *sibling* module won't be picked up until you rebuild that module (`mvn install -pl <module>`).

## Working a task
- Each task = **one stubbed method** in an `infrastructure` repository (it throws → `501`).
- Implement only that method (grounded on the MCP); the `application`/`api`/`domain` layers are wired.
- Endpoint returns `200` → capability unlocks → the storefront section lights up (watch it in Commerce
  Canvas / the storefront).
- **Session-1 tasks:** list stores, get a store by key (clean 404), and resolve the active store /
  region with a safe fallback.
- **Session-2 tasks:** list products (PLP) + product by key (PDP) with price selection (channel +
  country + currency), list categories, browse-by-category subtree, variant matrix, bundle roll-up,
  and localized slug routing.
- **Session-3 tasks:** store-scoped Product Search (GraphQL `productsSearch`) returning hydrated cards,
  full-text (+fuzzy), category subtree, facets (colour + price range/slider), the composed PLP
  (sort + pagination), and postFilter (stable facet counts) — plus the configurable-facets stretch.
- **Session-4 tasks (the first writes):** create the guest cart, add / change / remove line items (the
  service owns `version` + the 409 retry — you write the SDK call), the bundle in the cart, the recurring
  Subscribe & Save line, inventory modes, the promo code, and the cart summary.
- **Session-5 tasks (identity):** sign-up and sign-in (carry the guest's `anonymousId`), the deliberate
  cart merge with a merge report, the address book (one update, default by key), password change + the
  two-step reset, the customer-group price context, and `GET /api/session` — identity lives in the BFF
  session, never in a request parameter. Some tasks are `application`-layer logic (T2), not just one SDK
  call — the Canvas card says which.
- **Session-6 tasks (checkout):** create the Checkout Session carrying your order number, read the order
  Checkout wrote and its payment ledger, capture at fulfilment, the order state machine, order history and
  the subscription — the storefront's checkout wizard pays through commercetools Checkout's widget.
- **Session-7 tasks (beyond the BFF):** a Custom Field and a Custom Object, Messages and a consumer that
  survives replays, an API Extension the platform calls before it saves your cart (your BFF behind a
  `cloudflared` quick tunnel — see `.env.example`), and an Import API price feed.

Stuck? The **`solution`** branch has the reference implementation — try it yourself first. The repository is
read-only for participants, so keep your work local (a branch of your own is fine).
