import Image from "next/image";
import degolianRealty from "@/assets/images/degolian-realty.png";
import { brokerage } from "@/config/site";

/**
 * Brand lockup: the brokerage's mark plus Angelica's name.
 *
 * Angelica does not carry a separate personal logo. Most brokerages require
 * their branding to be primary and many prohibit a competing agent mark
 * outright, so the DeGolian Realty logo is the mark and her name is the
 * wordmark beside it. The AR monogram this replaced is gone deliberately —
 * don't reintroduce one without DeGolian's written sign-off.
 *
 * The logo renders unaltered: never recolor it to match this site's palette,
 * never crop it down to just the floral element, never rebuild it as inline
 * SVG. It is the brokerage's asset and their brand guidelines govern it.
 *
 *   <Logo variant="horizontal" />  — header
 *   <Logo variant="stacked" />     — footer
 */

/**
 * Decorative peach used as a section divider (see BrandRule) and on the
 * closing CTA. A Georgia / Peachtree City motif rather than a personal
 * logo, so it survives the move to brokerage branding.
 */
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

export function PeachOrnament({ className }: { className?: string }) {
  return <PeachMark className={className} />;
}

/** The brokerage mark on its own, unaltered. Decorative — the adjacent
 *  wordmark and the link's aria-label carry the accessible name. */
export function BrokerageMark({ className, sizes }: { className?: string; sizes?: string }) {
  return (
    <Image
      src={degolianRealty}
      alt=""
      aria-hidden="true"
      sizes={sizes ?? "96px"}
      className={className}
      priority
    />
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
        <BrokerageMark className="h-auto w-[116px]" sizes="116px" />
        <span className="mt-3 font-display text-2xl font-medium uppercase tracking-[0.08em] text-navy">
          Angelica Rios
        </span>
        <span className="mt-2 flex w-full max-w-[16rem] items-center gap-3">
          <span className="h-px flex-1 bg-champagne" />
          <PeachOrnament className="h-5 w-5 shrink-0" />
          <span className="h-px flex-1 bg-champagne" />
        </span>
        <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-navy">
          Realtor · {brokerage.legalName}
        </span>
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-3 sm:gap-3.5 ${className ?? ""}`}>
      <BrokerageMark className="h-auto w-[52px] shrink-0 sm:w-[58px] md:w-[66px]" sizes="66px" />
      <span className="h-8 w-px shrink-0 bg-champagne/60 sm:h-9 md:h-10" aria-hidden="true" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="whitespace-nowrap font-display text-[1.05rem] font-medium uppercase tracking-[0.045em] text-navy sm:text-lg md:text-[1.3rem] md:tracking-[0.055em]">
          Angelica Rios
        </span>
        <span className="mt-1.5 whitespace-nowrap text-[0.43rem] font-semibold uppercase tracking-[0.16em] text-navy sm:mt-2 sm:text-[0.5rem] sm:tracking-[0.19em] md:text-[0.56rem] md:tracking-[0.2em]">
          Realtor · {brokerage.legalName}
        </span>
      </span>
    </span>
  );
}
