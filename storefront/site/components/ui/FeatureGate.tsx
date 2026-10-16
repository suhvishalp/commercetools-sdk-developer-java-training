'use client';

import { useCapability } from '@/context/capabilities-context';
import { Unlock } from '@/components/ui/icons';
import { useUnlockDialog } from '@/context/unlock-dialog';

/**
 * Wraps a capability-gated feature. The real block always renders (feature components fall back to
 * sample content when the BFF has no data), so the storefront always looks like a real shop:
 *  - unlocked → the live feature, fully interactive
 *  - locked   → the block is dimmed + non-interactive with an "Unlock" button centered on it;
 *               clicking it opens the dialog (which session unlocks it, which task to implement)
 *
 * Carries id="cap-<capability>" so Commerce Canvas deep links (?focus=<capability>) can scroll here.
 */
export function FeatureGate({
  capability,
  title,
  children,
  className,
}: {
  capability: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { loading, unlocked, meta } = useCapability(capability);
  const { open } = useUnlockDialog();
  const showOverlay = !loading && !unlocked;

  return (
    <section id={`cap-${capability}`} data-capability={capability} className={`relative scroll-mt-28 ${className ?? ''}`}>
      <div className={showOverlay ? 'pointer-events-none select-none opacity-40' : ''} aria-hidden={showOverlay}>
        {children}
      </div>
      {showOverlay ? (
        <div className="absolute inset-0 z-10 grid place-items-center">
          <button
            onClick={() => open(meta)}
            className="btn btn-unlock !h-10 !px-4 !text-sm"
            title="Coming soon"
          >
            <Unlock size={14} />Unlock{title ? `: ${title}` : ''}
          </button>
        </div>
      ) : null}
    </section>
  );
}
