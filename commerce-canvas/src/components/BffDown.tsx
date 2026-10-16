import { Unplug } from '../lib/icons';
import { track } from '../lib/track';

/** Shown when the training API is unreachable — never an error, just a nudge. */
export function BffDown() {
  const t = track();
  return (
    <div className="grid flex-1 place-items-center">
      <div className="max-w-md rounded-2xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-8 text-center">
        <div className="mb-3 flex justify-center text-[var(--color-text-muted)]"><Unplug size={32} /></div>
        <h2 className="text-lg font-semibold">Start your {t.backendName}</h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Commerce Canvas can’t reach the training API on <code>{t.backendLocation}</code>. Start it and
          this connects automatically — no reload needed.
        </p>
        <div className="mt-4 space-y-2 text-left text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
          {t.startCommands.map((c) => (
            <pre key={c} className="overflow-x-auto rounded-md bg-[var(--color-bg-base)] p-3 text-[var(--color-text-secondary)]">
              {c}
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
}
