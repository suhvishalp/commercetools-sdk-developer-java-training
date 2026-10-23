import { NextRequest } from 'next/server';

/**
 * Same-origin proxy to the training BFF. The browser only ever talks to this Next route
 * (avoids CORS and keeps the BFF origin off the client); it forwards to the BFF at BFF_URL.
 * Status codes are passed through unchanged — importantly, a BFF 501 stays a 501 so the
 * storefront can show a locked state. Works identically for the Java or the JS BFF.
 *
 * The shopper's session: the BFF keeps one session per browser behind ONE opaque cookie, `lhc_session`
 * (HttpOnly, SameSite=Lax). This proxy forwards only that cookie to the BFF and passes the BFF's
 * Set-Cookie back, so the browser holds the cookie for this origin and nothing it holds can call
 * commercetools. Other cookies on the origin are never forwarded.
 *
 * SSRF guard: BFF_URL is a fixed, server-side base. The user-controlled catch-all path is
 * validated segment-by-segment (safe characters only, no traversal) and the resolved URL is
 * confined to the configured BFF origin + base path before any request is made — so a crafted
 * path can never redirect the request to another host or escape above the API base.
 */
const BFF_URL = process.env.BFF_URL ?? 'http://localhost:8081/api';
// Normalise to a base URL with a trailing slash so relative segments resolve *under* it.
const BFF_BASE = new URL(BFF_URL.endsWith('/') ? BFF_URL : `${BFF_URL}/`);

// Allow only characters valid in commercetools keys/slugs ([-_~.a-zA-Z0-9]). This whitelist
// blocks anything that could change the scheme/host or encode a path separator.
const SAFE_SEGMENT = /^[A-Za-z0-9._~-]+$/;

/** The BFF's session cookie — the only cookie forwarded (see platform SessionCookieConfig in the BFF). */
const SESSION_COOKIE = 'lhc_session';

/** Resolve the forwarding target, confined to the BFF origin + base path; null if unsafe. */
function safeTarget(path: string[], search: string): URL | null {
  if (path.length === 0) return null;
  for (const seg of path) {
    if (seg === '.' || seg === '..' || !SAFE_SEGMENT.test(seg)) return null;
  }
  let target: URL;
  try {
    target = new URL(path.join('/'), BFF_BASE);
  } catch {
    return null;
  }
  // Defence in depth: never leave the configured BFF origin or climb above the base path.
  if (target.origin !== BFF_BASE.origin || !target.pathname.startsWith(BFF_BASE.pathname)) {
    return null;
  }
  target.search = search; // query string only — it cannot change the host
  return target;
}

async function forward(req: NextRequest, path: string[]): Promise<Response> {
  const target = safeTarget(path, req.nextUrl.search);
  if (!target) {
    return new Response(
      JSON.stringify({ statusCode: 400, message: 'Invalid BFF path.' }),
      { status: 400, headers: { 'content-type': 'application/json' } },
    );
  }
  try {
    // x-caller tells the BFF's trainer telemetry this attempt is a storefront page load, not Canvas Try It.
    const headers: Record<string, string> = { accept: 'application/json', 'content-type': 'application/json', 'x-caller': 'storefront' };
    const session = req.cookies.get(SESSION_COOKIE);
    if (session) headers.cookie = `${SESSION_COOKIE}=${session.value}`;
    const init: RequestInit = { method: req.method, headers, cache: 'no-store' };
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = await req.text();
    }
    const res = await fetch(target, init);
    const body = await res.text();
    const out = new Headers({ 'content-type': res.headers.get('content-type') ?? 'application/json' });
    for (const cookie of res.headers.getSetCookie()) out.append('set-cookie', cookie);
    return new Response(body, { status: res.status, headers: out });
  } catch {
    return new Response(
      JSON.stringify({ statusCode: 502, message: 'Training BFF is unreachable.' }),
      { status: 502, headers: { 'content-type': 'application/json' } },
    );
  }
}

interface Ctx {
  params: Promise<{ path: string[] }>;
}

export async function GET(req: NextRequest, ctx: Ctx): Promise<Response> {
  const { path } = await ctx.params;
  return forward(req, path);
}

export async function POST(req: NextRequest, ctx: Ctx): Promise<Response> {
  const { path } = await ctx.params;
  return forward(req, path);
}

export async function PUT(req: NextRequest, ctx: Ctx): Promise<Response> {
  const { path } = await ctx.params;
  return forward(req, path);
}

export async function PATCH(req: NextRequest, ctx: Ctx): Promise<Response> {
  const { path } = await ctx.params;
  return forward(req, path);
}

export async function DELETE(req: NextRequest, ctx: Ctx): Promise<Response> {
  const { path } = await ctx.params;
  return forward(req, path);
}
