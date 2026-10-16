'use client';

import { createContext, useContext, useState } from 'react';
import { Lock } from '@/components/ui/icons';
import { CapabilityMeta, unlockHeadline } from '@/lib/capabilities';

interface UnlockDialogValue {
  open: (meta: CapabilityMeta) => void;
}

const UnlockDialogContext = createContext<UnlockDialogValue | null>(null);

/**
 * Provides the shared "feature locked" dialog. Any locked feature calls open(meta); the dialog
 * explains which session unlocks it and which task to implement. Mounted once at layout level.
 */
export function UnlockDialogProvider({ children }: { children: React.ReactNode }) {
  const [meta, setMeta] = useState<CapabilityMeta | null>(null);

  return (
    <UnlockDialogContext.Provider value={{ open: setMeta }}>
      {children}
      {meta ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-plum)]/50 p-4 backdrop-blur-[2px]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMeta(null);
          }}
        >
          <div className="w-full max-w-md rounded-[20px] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-float)]">
            <div className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-[var(--color-unlock-light)] text-[var(--color-unlock-dark)]">
              <Lock size={20} />
            </div>
            <p className="eyebrow !text-[var(--color-unlock-dark)]">Coming soon</p>
            <h2 className="mt-1 text-[22px]">{meta.taskLabel}</h2>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              This part of the shop isn’t available yet. It switches on automatically as soon as it is ready — no reload needed.
            </p>
            <details className="mt-4 rounded-xl bg-[var(--color-earth)] px-3 py-2 text-xs text-[var(--color-muted)]">
              <summary className="cursor-pointer font-medium text-[var(--color-ink)]">Course notes</summary>
              <p className="mt-2">{unlockHeadline(meta)}.</p>
              {meta.bffEndpoint ? <p className="mt-1">Endpoint: <code className="font-mono">{meta.bffEndpoint}</code></p> : null}
              <p className="mt-1">Implement the task in Commerce Canvas and hit Try It.</p>
            </details>
            <button onClick={() => setMeta(null)} className="btn btn-primary mt-5 w-full">
              Got it
            </button>
          </div>
        </div>
      ) : null}
    </UnlockDialogContext.Provider>
  );
}

export function useUnlockDialog(): UnlockDialogValue {
  const ctx = useContext(UnlockDialogContext);
  if (!ctx) throw new Error('useUnlockDialog must be used within UnlockDialogProvider');
  return ctx;
}
