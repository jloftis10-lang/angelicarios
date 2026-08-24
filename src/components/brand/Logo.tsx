/** Angelica Rios — AR + peach brand system. */

export function PeachMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 82" className={className} role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="peachFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd0b5" />
          <stop offset="0.55" stopColor="#f7a17a" />
          <stop offset="1" stopColor="#e7805e" />
        </linearGradient>
      </defs>
      <path d="M39 24c-3-8 1-15 9-20" fill="none" stroke="var(--color-champagne)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M43 14c10-9 23-8 29-3-6 10-17 15-29 12" fill="var(--color-sage)" stroke="var(--color-champagne)" strokeWidth="1.4" />
      <path d="M34 18c-8-8-18-8-25-4 5 10 15 15 26 13" fill="#73826d" stroke="var(--color-champagne)" strokeWidth="1.4" />
      <path d="M38 24c-18-5-31 9-30 26 1 17 15 27 30 27 17 0 31-11 32-28 1-17-13-30-32-25Z" fill="url(#peachFill)" stroke="var(--color-champagne)" strokeWidth="1.5" />
      <path d="M39 28c7 10 7 31 0 45" fill="none" stroke="#df7c5e" strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
      <path d="M21 38c4-7 9-10 15-11" fill="none" stroke="#fff4ea" strokeWidth="2" strokeLinecap="round" opacity=".75" />
    </svg>
  );
}

export function BrandMonogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 150" className={className} role="presentation" aria-hidden="true">
      <text x="57" y="126" textAnchor="middle" fill="var(--color-navy)" fontFamily="var(--font-display)" fontSize="136" fontWeight="500">A</text>
      <text x="120" y="126" textAnchor="middle" fill="var(--color-navy)" fontFamily="var(--font-display)" fontSize="136" fontWeight="500">R</text>
      <path d="M39 109C63 77 87 57 129 34" fill="none" stroke="var(--color-navy)" strokeWidth="2.6" strokeLinecap="round" />
      <g transform="translate(54 69) scale(.58)"><PeachMark /></g>
    </svg>
  );
}

export function PeachOrnament({ className }: { className?: string }) {
  return <PeachMark className={className} />;
}

export function Logo({ variant = "horizontal", className }: { variant?: "horizontal" | "stacked"; className?: string }) {
  if (variant === "stacked") {
    return (
      <span className={`flex flex-col items-center text-center ${className ?? ""}`}>
        <BrandMonogram className="h-20 w-auto" />
        <span className="mt-1 font-display text-2xl font-medium uppercase tracking-[0.08em] text-navy">Angelica Rios</span>
        <span className="mt-2 flex w-full max-w-[16rem] items-center gap-3">
          <span className="h-px flex-1 bg-champagne" />
          <PeachOrnament className="h-5 w-5 shrink-0" />
          <span className="h-px flex-1 bg-champagne" />
        </span>
        <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-navy">Peachtree City Real Estate</span>
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}>
      <BrandMonogram className="h-9 w-auto shrink-0 sm:h-10 md:h-12" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="whitespace-nowrap font-display text-[1.05rem] font-medium uppercase tracking-[0.045em] text-navy sm:text-lg md:text-[1.35rem] md:tracking-[0.055em]">Angelica Rios</span>
        <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[0.43rem] font-semibold uppercase tracking-[0.16em] text-navy sm:mt-1.5 sm:gap-2 sm:text-[0.5rem] sm:tracking-[0.19em] md:text-[0.58rem] md:tracking-[0.21em]">
          <span className="h-px w-3 bg-champagne sm:w-4 md:w-5" aria-hidden="true" />
          Peachtree City Real Estate
        </span>
      </span>
    </span>
  );
}
