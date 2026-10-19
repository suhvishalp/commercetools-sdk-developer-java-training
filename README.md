# The commercetools SDK Developer — Java training

Welcome. Over three days you will build the backend of a real storefront — a **BFF** (Backend-for-Frontend)
on commercetools — **one method at a time, with an AI coding assistant as your co-pilot**. Every task you
complete unlocks a capability, and a section of the live **storefront** lights up.

This repository is **read-only** for participants: clone it and work locally. You never need to push
anything here — your progress is tracked by the course dashboard, not by git.

## Branches

| Branch | What it is |
|---|---|
| **`main`** | **The starter — this is where you work.** Repository methods are stubbed (they return `501 Not Implemented`); you implement them. |
| **`solution`** | The reference answers. Peek only if you're stuck — try it yourself first. |

```bash
git clone git@github.com:commercetools/commercetools-sdk-developer-java-training.git
cd commercetools-sdk-developer-java-training   # you're on main (the starter)
git switch solution                           # to see the answers
git switch main                               # back to your work
```

Because the repository is read-only, keep your work local. If you like to commit as you go, create a
branch of your own (`git switch -c my-work`) — nothing has to leave your laptop.

## What's inside

| Folder | What it is | You edit it? |
|---|---|---|
| [`bff-java/`](bff-java/) | The BFF you build — a layered ("hexagonal") Spring Boot service. | **Yes** — the tasks live here. |
| [`commerce-canvas/`](commerce-canvas/) | Your **progress dashboard + "Try It" console** — shows tasks, capabilities, and live requests. | No — run it. |
| [`storefront/`](storefront/) | The **live store** that lights up as your capabilities unlock. | No — run it. |

## Related repositories (Day 3 — commercetools Connect)

Sessions 8 and 9 move the Session-7 handlers onto **commercetools Connect**. The connectors live in their
own repositories because Connect deploys a repository at a git tag, with `connect.yaml` at the root. They
are read-only too: the trainer walks the code through and deploys it once into the shared project; you
clone and run them locally.

| Repository | What it is | Session |
|---|---|---|
| [`sphere-b2c-connector-2026`](https://github.com/commercetools/sphere-b2c-connector-2026) | The cart-rules **Service** app (an API Extension's production home) and the order-events **Event** app (a Subscription-fed handler). | 8 · 9 |
| [`lhc-price-feed-connector`](https://github.com/commercetools/lhc-price-feed-connector) | The nightly price-feed **Job** app (CSV → Import API). | 8 · 9 |

## Prerequisites
- **JDK 17** and **Maven** · **Node 18+** and **npm** · **Git**
- A **commercetools project** + **Merchant Center** access *(provided for the course)*
- An **AI coding tool** (Claude Code, Codex, Copilot, Cursor or similar) with the **commercetools plugin** *(installed in Session 1)* — every task also works without one.
- You've completed the **Platform Foundations** prerequisite.

## Setup (in order)
1. **Clone** this repository (you land on `main`, the starter).
2. **Create your API client** in Merchant Center (*Settings → Developer settings → API clients*). Name it with **your own name** — that's your identity in the progress tracker. Copy the credentials (shown once).
3. **Configure `.env`:** in `bff-java/`, copy `.env.example` to `.env` and paste your credentials.
4. **Install the AI toolchain:** in your editor, add the commercetools plugin (see [`bff-java/README.md`](bff-java/README.md)).

## Run it (three terminals)
```bash
# 1 · the BFF            → http://localhost:8081
cd bff-java && mvn -pl app spring-boot:run

# 2 · Commerce Canvas    → http://localhost:5173   (your dashboard + Try It)
cd commerce-canvas && npm install && npm run dev

# 3 · the Storefront     → http://localhost:3000   (lights up as you build)
cd storefront/site && npm install && npm run dev
```

## How you work through a task
1. Open **Commerce Canvas**, pick the next task.
2. Implement the **one stubbed method** in `bff-java` — **ground it on the Knowledge MCP; never guess the API.**
3. Hit **Try It** in Canvas → the endpoint returns `200` → the capability unlocks → the storefront section lights up.
   *(From Session 4 the tasks are **writes** — Try It sends a pre-filled JSON body you can edit.)*
4. **Explain it back** in your own words. Stuck? Compare with the `solution` branch.

Per-project detail: [`bff-java/README.md`](bff-java/README.md) · [`commerce-canvas/README.md`](commerce-canvas/README.md) · [`storefront/README.md`](storefront/README.md).
