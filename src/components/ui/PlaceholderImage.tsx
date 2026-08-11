/**
 * Stand-in for real photography. No AI-generated likeness of Angelica and
 * no stock photo dressed up to look like her — see /public/images/README.md
 * for the exact shot list. Swap for a real <Image> using the same
 * className/aspect wrapper once photography is delivered.
 */
export function PlaceholderImage({
  label,
  aspect = "aspect-[4/5]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br from-sage/40 via-sand/40 to-slate/30`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
      <span className="relative z-10 m-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-warm-white">
        Photo needed: {label}
      </span>
    </div>
  );
}
