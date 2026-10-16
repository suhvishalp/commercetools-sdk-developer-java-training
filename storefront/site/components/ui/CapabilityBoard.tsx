'use client';

import { useCapabilities } from '@/context/capabilities-context';
import { Lock } from '@/components/ui/icons';
import { capabilitiesBySession } from '@/lib/capabilities';

/**
 * Training-oriented overview of every capability, grouped session-wise, with its live/locked state.
 * Each row links to the feature (?focus=<capability>).
 */
export function CapabilityBoard() {
  const { isUnlocked, loading } = useCapabilities();
  const groups = capabilitiesBySession();

  return (
    <div className="rounded-xl bg-[var(--color-cream)] p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg">Feature status by session</h2>
        <span className="text-xs text-[var(--color-muted)]">
          {loading ? 'checking BFF…' : 'live from /api/training/capabilities'}
        </span>
      </div>

      <div className="space-y-5">
        {groups.map((g) => {
          const done = g.items.filter((c) => isUnlocked(c.capability)).length;
          return (
            <div key={g.session}>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-sm font-semibold">{g.session}</span>
                <span className="text-sm text-[var(--color-muted)]">— {g.sessionName}</span>
                <span className="ml-auto text-xs text-[var(--color-muted)]">
                  {done}/{g.items.length}
                </span>
              </div>
              <ul className="divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)] bg-white">
                {g.items.map((meta) => {
                  const unlocked = isUnlocked(meta.capability);
                  return (
                    <li key={meta.capability} className="flex items-center justify-between gap-3 px-3 py-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          <code className="font-mono">{meta.capability}</code>
                        </p>
                        <p className="truncate text-xs text-[var(--color-muted)]">
                          {meta.taskLabel} · <code className="font-mono">{meta.bffEndpoint}</code>
                        </p>
                      </div>
                      <a href={`?focus=${meta.capability}`} className={`pill shrink-0 ${unlocked ? 'pill-teal' : 'pill-unlock'}`}>
                        {unlocked ? 'live' : (<span className="inline-flex items-center gap-1"><Lock size={11} /> locked</span>)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
