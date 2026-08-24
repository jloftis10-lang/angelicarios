/**
 * Angelica Rios brand lockup.
 *
 * Built as inline SVG + live text rather than a raster file so it stays
 * crisp at any size, weighs almost nothing, and inherits the site's real
 * design tokens (`navy`, `sage`, `sand`) and display font. Because the SVG
 * is inline in the document, its <text> nodes render in Newsreader — the
 * same serif as every heading on the site.
 *
 * Two lockups:
 *   <BrandMonogram />        — the AR + sage sprig mark on its own
 *   <Logo variant="…" />     — "horizontal" (header) or "stacked" (footer,
 *                              and anywhere the full lockup has room)
 *
 * The mark is decorative in both; the accessible name comes from the text
 * beside it, so every SVG here is aria-hidden.
 */

/** Almond leaf, drawn pointing right from its stem attachment at (0,0). */
const LEAF = "M0 0C4 -6 14 -8 20 -3.5C14 3 4 4.5 0 0Z";

/** Leaves along the sprig stem: [x, y, rotation°, scale]. */
const LEAVES: [number, number, number, number][] = [
  [97, 27, -38, 0.95],
  [95, 29, -102, 0.78],
  [113, 17, -34, 0.85],
  [111, 20, -98, 0.68],
  [57, 67, -158, 0.74],
  [50, 83, 148, 0.6],
];

export function BrandMonogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 148 122" className={className} role="presentation" aria-hidden="true">
      <text
        x="44"
        y="106"
        textAnchor="middle"
        fill="var(--color-navy)"
        fontFamily="var(--font-display)"
        fontSize="112"
        fontWeight="600"
      >
        A
      </text>
      <text
        x="100"
        y="106"
        textAnchor="middle"
        fill="var(--color-navy)"
        fontFamily="var(--font-display)"
        fontSize="112"
        fontWeight="600"
      >
        R
      </text>

      {/* Sage sprig woven through the monogram. */}
      <g stroke="var(--color-sage)" fill="var(--color-sage)">
        <path
          d="M46 98C52 78 60 60 76 44C93 28 111 18 128 12"
          fill="none"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {LEAVES.map(([x, y, rotate, scale], index) => (
          <path
            key={index}
            d={LEAF}
            stroke="none"
            transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
          />
        ))}
      </g>
    </svg>
  );
}

/** The small peach that sits in the divider rule of the stacked lockup. */
export function PeachOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 26" className={className} role="presentation" aria-hidden="true">
      <g fill="none" stroke="var(--color-peach)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 22.5c-5 0-9-3.4-9-7.9 0-4.2 3.2-7.4 7.1-7.4 .7 0 1.3.1 1.9.3.6-.2 1.2-.3 1.9-.3 3.9 0 7.1 3.2 7.1 7.4 0 4.5-4 7.9-9 7.9Z" />
        <path d="M14 7.5v14.9" />
        <path d="M14.3 7.2c.5-2.3 2.3-4 4.5-4.4" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "horizontal",
  className,
}: {
  variant?: "horizontal" | "stacked";
  className?: string;
}) {
  if (variant === "stacked") {
    return (
      <span className={`flex flex-col items-center text-center ${className ?? ""}`}>
        <BrandMonogram className="h-16 w-auto" />
        <span className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.06em] text-navy">
          Angelica Rios
        </span>
        <span className="mt-2 flex w-full max-w-[15rem] items-center gap-3">
          <span className="h-px flex-1 bg-sand" />
          <PeachOrnament className="h-5 w-auto shrink-0" />
          <span className="h-px flex-1 bg-sand" />
        </span>
        <span className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate">
          Peachtree City Realtor
        </span>
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <BrandMonogram className="h-9 w-auto shrink-0 md:h-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-navy md:text-xl">
          Angelica Rios
        </span>
        <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-slate md:text-[0.62rem]">
          Peachtree City Realtor
        </span>
      </span>
    </span>
  );
}
