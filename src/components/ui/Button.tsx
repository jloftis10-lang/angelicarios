import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkSecondary";

const variantClasses: Record<Variant, string> = {
  primary: "bg-navy text-warm-white hover:bg-navy-dark",
  secondary: "border border-navy text-navy hover:bg-navy hover:text-warm-white",
  ghost: "text-navy underline underline-offset-4 hover:text-navy-dark",
  // For use on a navy surface only. Cream on navy is 12.46:1; the sand
  // hover keeps it well clear of AA too.
  onDark: "bg-warm-white text-navy hover:bg-sand",
  onDarkSecondary: "border border-warm-white/50 text-warm-white hover:bg-warm-white hover:text-navy",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("sms:") || href.startsWith("mailto:");
    return (
      <Link href={href} className={classes} onClick={onClick} {...(isExternal ? { target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
