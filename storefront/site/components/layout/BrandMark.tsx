/** The shop's mark — a Violet→Teal tile with a Yellow facet, echoing the commercetools palette. */
export function BrandMark({ size = 30 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative inline-block shrink-0 rounded-[9px] bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-teal)]"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[30%] rotate-45 rounded-[3px] bg-[var(--color-yellow)]" />
    </span>
  );
}
