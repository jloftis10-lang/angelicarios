/**
 * Primary nav is deliberately short — five items plus the CTA. Everything
 * else lives under Resources so the header stays legible on a laptop and
 * the mobile menu stays scannable.
 */
export const primaryNav = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Relocate", href: "/relocate" },
  { label: "Communities", href: "/communities" },
  { label: "About", href: "/about" },
] as const;

export const resourcesNav = [
  { label: "Peachtree City Guide", href: "/peachtree-city-ga", description: "The five villages, paths, and how the city works" },
  { label: "Relocation Guide", href: "/guide", description: "A practical starter guide for planning a move here" },
  { label: "Which Area Fits You?", href: "/area-match", description: "Eight questions to narrow where to look" },
  { label: "Get Prequalified", href: "/get-prequalified", description: "What it means, what to gather, and a readiness check" },
  { label: "Investment Property", href: "/invest", description: "Send Angelica your buy box" },
  { label: "Blog", href: "/blog", description: "Guides on buying, selling, and moving here" },
  { label: "FAQ", href: "/faq", description: "Common questions, answered plainly" },
] as const;

export const footerNav = [
  { label: "Contact", href: "/contact" },
  { label: "Peachtree City", href: "/peachtree-city-ga" },
  { label: "Relocation Guide", href: "/guide" },
  { label: "Which Area Fits You?", href: "/area-match" },
  { label: "Get Prequalified", href: "/get-prequalified" },
  { label: "Invest", href: "/invest" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
