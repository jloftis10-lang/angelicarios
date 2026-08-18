const artForLabel = (label: string) => {
  const normalized = label.toLowerCase();

  if (normalized.includes("path") || normalized.includes("lake") || normalized.includes("golf-cart")) {
    return (
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dfe9e4" />
            <stop offset="100%" stopColor="#f3eee5" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8ea8ac" />
            <stop offset="100%" stopColor="#6f8d92" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#sky)" />
        <path d="M0 360 C150 315 240 350 380 330 C520 310 635 260 800 300 L800 600 L0 600 Z" fill="#78947f" />
        <path d="M0 430 C170 390 300 410 450 390 C600 368 690 350 800 370 L800 600 L0 600 Z" fill="url(#water)" />
        <path d="M110 600 C170 470 270 420 420 380 C535 350 625 300 720 215" fill="none" stroke="#e9ddc8" strokeWidth="70" strokeLinecap="round" />
        <path d="M110 600 C170 470 270 420 420 380 C535 350 625 300 720 215" fill="none" stroke="#c7b89d" strokeWidth="4" strokeDasharray="14 20" strokeLinecap="round" />
        <g transform="translate(530 305)">
          <rect x="0" y="20" width="105" height="55" rx="16" fill="#193247" />
          <rect x="20" y="0" width="65" height="38" rx="12" fill="#d9e2dc" stroke="#193247" strokeWidth="7" />
          <circle cx="25" cy="82" r="15" fill="#263c49" />
          <circle cx="82" cy="82" r="15" fill="#263c49" />
        </g>
        <circle cx="120" cy="120" r="45" fill="#f4d9a6" opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="600" fill="#f3eee5" />
      <rect y="360" width="800" height="240" fill="#d6dfd4" />
      <path d="M140 360 L390 145 L650 360 Z" fill="#193247" />
      <rect x="205" y="300" width="380" height="215" rx="8" fill="#fffdf8" />
      <rect x="250" y="350" width="92" height="100" rx="5" fill="#9fb3b5" />
      <rect x="440" y="335" width="95" height="180" rx="5" fill="#c8b89e" />
      <circle cx="105" cy="395" r="75" fill="#7e9a82" />
      <circle cx="690" cy="420" r="95" fill="#6f8d78" />
      <path d="M0 520 C200 475 330 510 500 480 C635 455 710 470 800 445 L800 600 L0 600 Z" fill="#c4d1c7" />
    </svg>
  );
};

/**
 * Editorial site artwork used where licensed photography has not yet been supplied.
 * This component intentionally avoids fake people or fake listings while keeping the
 * experience polished and on-brand. Replace with real local photography when available.
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
      className={`${aspect} ${className} relative overflow-hidden rounded-2xl border border-sand/50 bg-canvas shadow-sm`}
      role="img"
      aria-label={label}
    >
      {artForLabel(label)}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/55 to-transparent px-5 pb-4 pt-16">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-warm-white/95">Peachtree City</span>
      </div>
    </div>
  );
}
