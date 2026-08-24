import { PeachOrnament } from "@/components/brand/Logo";

/**
 * The peach-ornament divider lifted out of the stacked logo lockup, for use
 * as a section break.
 *
 * This is the one piece of brand ornament that repeats outside the logo
 * itself, which is exactly why it is a component rather than a pattern
 * people re-type: it stays identical everywhere, and there is a single
 * place to change it.
 *
 * Use it to separate major movements on a long page — not between every
 * section. Two or three on a page is elegant; one per section is clutter,
 * and the brief for this palette was explicitly "don't oversaturate".
 *
 * Purely decorative, so the whole thing is hidden from assistive tech; the
 * heading that follows already communicates the break.
 */
export function BrandRule({
  align = "center",
  className,
}: {
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : "justify-start"} ${className ?? ""}`}
    >
      {align === "center" && <span className="h-px w-16 bg-sand md:w-24" />}
      <PeachOrnament className="h-5 w-auto shrink-0" />
      <span className="h-px w-16 bg-sand md:w-24" />
    </div>
  );
}
