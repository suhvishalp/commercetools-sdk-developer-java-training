'use client';

import { usePreferences } from '@/context/preferences-context';

/**
 * Horizontal distribution-channel selector, shown only when the active store exposes more than one
 * channel. The selected channel becomes the `priceChannel` for PLP/PDP price selection, so switching
 * channels re-fetches and shows that channel's price (falling back to the currency price when the
 * channel has none). A single-channel (or no-channel) store hides this bar.
 */
export function ChannelBar() {
  const { channels, channel, setChannel } = usePreferences();
  if (channels.length <= 1) return null;

  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-earth)]/50">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 overflow-x-auto px-6 py-1.5 text-xs">
        <span className="shrink-0 text-[var(--color-muted)]">Price channel:</span>
        {channels.map((c) => (
          <button key={c} onClick={() => setChannel(c)} className={`chip !h-7 shrink-0 !text-xs ${channel === c ? 'on' : ''}`}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
