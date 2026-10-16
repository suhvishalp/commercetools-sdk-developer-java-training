'use client';

// GENERATED COPY — the source is courses/functional-architect-b2c/assets/decision-registry/overlay/ArchitectMode.tsx.
// Edit it there and run `node sync.mjs` in that folder; both storefronts get the same file.

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { DECISIONS, SESSIONS, type ArchitectDecision } from '@/lib/architect/decisions';

/**
 * Architect mode — the reference storefront explained for the Sphere Architect course.
 *
 * Turn it on with `?architect=1` (it stays on for this browser until `?architect=0`). A panel lists the
 * architectural decisions behind what is on the page: for each one, where it is set in the Merchant Center, what
 * changes in the storefront when you change it, whether it is a live demo or explained, and which task implements it
 * in each developer course (The commercetools SDK Developer · The Commerce Integration Layer Developer).
 * Hovering a decision outlines the parts of the page it drives.
 *
 * It reads nothing from commercetools: the page's own `data-capability` markers plus the shared decision registry.
 */

const STORAGE_KEY = 'lhc-architect-mode';

function onPageCapabilities(): Set<string> {
  const found = new Set<string>();
  document.querySelectorAll<HTMLElement>('[data-capability]').forEach((el) => {
    const c = el.dataset.capability;
    if (c) found.add(c);
  });
  return found;
}

function subscribeStorage(onChange: () => void): () => void {
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
}
const readStored = () => localStorage.getItem(STORAGE_KEY);

function outline(capabilities: string[], on: boolean) {
  for (const c of capabilities) {
    document.querySelectorAll<HTMLElement>(`[data-capability="${CSS.escape(c)}"]`).forEach((el) => {
      el.style.outline = on ? '3px solid #6359FF' : '';
      el.style.outlineOffset = on ? '4px' : '';
      el.style.borderRadius = on ? '12px' : '';
    });
  }
}

export function ArchitectMode() {
  const params = useSearchParams();
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [onPage, setOnPage] = useState<Set<string>>(new Set());
  const [backend, setBackend] = useState<'sdk' | 'cil' | null>(null);

  // On/off: ?architect=1|0, remembered per browser.
  const q = params.get('architect');
  const stored = useSyncExternalStore(subscribeStorage, readStored, () => null);
  useEffect(() => {
    if (q === '1') localStorage.setItem(STORAGE_KEY, '1');
    if (q === '0') localStorage.removeItem(STORAGE_KEY);
  }, [q]);
  const enabled = q === '1' || (q !== '0' && stored === '1');

  // Which backend serves this storefront: the CIL storefront answers training/meta with track "cil".
  useEffect(() => {
    if (!enabled || backend) return;
    fetch('/api/bff/training/meta')
      .then((r) => (r.ok ? r.json() : null))
      .then((m: { track?: string } | null) => setBackend(m?.track === 'cil' ? 'cil' : 'sdk'))
      .catch(() => setBackend('sdk'));
  }, [enabled, backend]);

  // What the page shows: re-scan after navigation and as sections render.
  useEffect(() => {
    if (!enabled) return;
    const scan = () => setOnPage(onPageCapabilities());
    const first = requestAnimationFrame(scan);
    const observer = new MutationObserver(() => scan());
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(first);
      observer.disconnect();
    };
  }, [enabled, pathname]);

  const decisions = useMemo(() => {
    const always = new Set(['D3', 'D39']);
    return DECISIONS.filter((d) => always.has(d.id) || d.capabilities.some((c) => onPage.has(c))).sort(
      (a, b) => a.session - b.session || Number(a.id.slice(1)) - Number(b.id.slice(1)),
    );
  }, [onPage]);

  const highlight = useCallback((d: ArchitectDecision, on: boolean) => outline(d.capabilities, on), []);

  if (!enabled) return null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[60] rounded-full bg-[var(--color-plum)] px-4 py-2 text-sm font-semibold text-white shadow-lg"
      >
        Architect mode · {decisions.length} decisions
      </button>
    );
  }

  return (
    <aside className="fixed bottom-5 right-5 top-24 z-[60] flex w-[400px] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-2xl">
      <header className="bg-[var(--color-plum)] px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9FF7EE]">Architect mode</p>
          <button onClick={() => setOpen(false)} className="text-xs text-white/70 hover:text-white">
            Minimise
          </button>
        </div>
        <p className="mt-1 text-sm">
          The decisions behind this page · served by{' '}
          <b>{backend === 'cil' ? 'the Commerce Integration Layer' : backend === 'sdk' ? 'your own backend (SDK)' : '…'}</b>
        </p>
      </header>
      <ol className="flex-1 space-y-3 overflow-y-auto p-4">
        {decisions.map((d) => (
          <li
            key={d.id}
            onMouseEnter={() => highlight(d, true)}
            onMouseLeave={() => highlight(d, false)}
            className="rounded-xl border border-[var(--color-border)] p-3 text-sm hover:border-[var(--color-violet)]"
          >
            <div className="flex items-start gap-2">
              <span className="rounded-md bg-[var(--color-violet)] px-1.5 py-0.5 text-xs font-bold text-white">{d.id}</span>
              <p className="font-semibold leading-snug text-[var(--color-ink)]">{d.title}</p>
            </div>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Session {d.session} · {SESSIONS[String(d.session)]} ·{' '}
              <span className={d.demoable === 'live' ? 'font-semibold text-[#089A9A]' : 'font-semibold text-[var(--color-muted)]'}>
                {d.demoable === 'live' ? 'live demo' : 'explained'}
              </span>
            </p>
            <p className="mt-2 text-xs">
              <b>Merchant Center:</b> {d.mc.join(' · ')}
            </p>
            <p className="mt-1 text-xs">
              <b>What changes:</b> {d.demo}
            </p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              <b>Built in:</b> SDK course {d.sdkTasks.length ? d.sdkTasks.join(', ') : '—'} · CIL course{' '}
              {d.cilTasks.length ? d.cilTasks.join(', ') : '—'}
            </p>
            {d.cilNote ? <p className="mt-1 text-xs text-[#B4530A]"><b>On the Integration Layer:</b> {d.cilNote}</p> : null}
          </li>
        ))}
      </ol>
    </aside>
  );
}
