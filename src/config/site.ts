/**
 * Central source of truth for every real-world fact used on the site:
 * agent identity, brokerage/compliance info, contact details, service
 * area, social links, and market data. Nothing here is invented — every
 * unconfirmed field is an explicit placeholder token, never a guess.
 *
 * When a real value is confirmed, update it here only. Do not hardcode
 * phone numbers, emails, license numbers, or addresses anywhere else in
 * the codebase.
 */

export const PLACEHOLDER = {
  brokerageLegalName: "[BROKERAGE_LEGAL_NAME]",
  brokerageLicense: "[BROKERAGE_LICENSE]",
  brokeragePhone: "[BROKERAGE_PHONE]",
  brokerageAddress: "[BROKERAGE_ADDRESS]",
  brokerageWebsite: "[BROKERAGE_WEBSITE]",
  brokerageSearchUrl: "[BROKERAGE_SEARCH_URL]",
  instagramUrl: "[INSTAGRAM_URL]",
  facebookUrl: "[FACEBOOK_URL]",
  linkedinUrl: "[LINKEDIN_URL]",
  siteUrl: "[SITE_URL]",
} as const;

/** True while any field required for public launch is still a placeholder. */
export const isMissingComplianceInfo = (): boolean => {
  return [
    agent.phone,
    agent.email,
    agent.licenseNumber,
    brokerage.legalName,
    brokerage.licenseNumber,
    brokerage.officePhone,
  ].some((value) => value.startsWith("["));
};

export const brand = {
  name: "Angelica Rios",
  shortName: "Angelica",
  tagline: "Peachtree City real estate, handled personally.",
  supportingLine: "Local guidance. Personal attention. A move you can feel good about.",
};

export const agent = {
  firstName: "Angelica",
  lastName: "Rios",
  fullName: "Angelica Rios",
  title: "Realtor",
  phone: "714-785-2859",
  email: "angelicarios@yahoo.com",
  licenseNumber: "455962",
};

/**
 * Resume-backed professional background used as concrete differentiators.
 * Keep these facts tied to documented roles rather than broad marketing claims.
 */
export const expertise = {
  background: [
    { label: "Top Producer", detail: "Mortgage sales, 2005–2007" },
    { label: "Up to 85%", detail: "Above quota in mortgage sales" },
    { label: "Investor Experience", detail: "Acquisition, renovation, staging & resale" },
    { label: "Spanish + Italian", detail: "Verbal and written communication" },
  ],
};

/**
 * Languages supported by Angelica's resume. The resume describes Spanish
 * and Italian verbal/written communication; it does not characterize fluency.
 */
export const languages = [
  { name: "English", code: "en" },
  { name: "Spanish", code: "es" },
  { name: "Italian", code: "it" },
] as const;

/** "Spanish and Italian" — the non-English list, ready for prose. */
export const additionalLanguageList = (() => {
  const names = languages.filter((l) => l.code !== "en").map((l) => l.name);
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
})();

export const brokerage = {
  legalName: PLACEHOLDER.brokerageLegalName,
  licenseNumber: PLACEHOLDER.brokerageLicense,
  officePhone: PLACEHOLDER.brokeragePhone,
  address: PLACEHOLDER.brokerageAddress,
  website: PLACEHOLDER.brokerageWebsite,
};

export const contact = {
  phoneHref: `tel:${agent.phone}`,
  smsHref: `sms:${agent.phone}`,
  emailHref: `mailto:${agent.email}`,
};

export const serviceAreas = {
  primary: "Peachtree City, Georgia",
  secondary: "South Metro Atlanta",
  mentioned: [
    "Fayetteville",
    "Trilith",
    "Tyrone",
    "Senoia",
    "Newnan",
    "Serenbe",
    "Palmetto",
    "Sharpsburg",
    "Coweta County",
  ],
};

export const social = {
  instagram: PLACEHOLDER.instagramUrl,
  facebook: PLACEHOLDER.facebookUrl,
  linkedin: PLACEHOLDER.linkedinUrl,
};

export const propertySearch = {
  // Brokerage-approved IDX/search URL. Leave as placeholder until the
  // brokerage confirms an approved external search link — do not link to
  // an unapproved third-party portal in the meantime.
  url: PLACEHOLDER.brokerageSearchUrl,
};

/**
 * Refreshed periodically from a named public source. Any field left null
 * is hidden in the UI rather than rendered as a fabricated number.
 */
export type MarketPulse = {
  medianSalePrice: number | null;
  medianListPrice: number | null;
  daysOnMarket: number | null;
  inventory: number | null;
  newListings: number | null;
  saleToListRatio: number | null;
  /** e.g. "+3.2%" — stored as a string because the sign and unit matter. */
  yearOverYearChange: string | null;
  /** e.g. "August 2026". Required for anything to render. */
  dataAsOf: string | null;
  /** Required for anything to render — a stat without a source is not publishable. */
  sourceName: string | null;
  sourceUrl: string | null;
};

/**
 * Market statistics. Every field starts null and the UI renders NOTHING
 * until `dataAsOf` and `sourceName` are both present — an unsourced or
 * undated statistic on a real-estate site is worse than no statistic.
 * Populate from a source you can name and cite, and update `dataAsOf`
 * every time you refresh the numbers.
 */
export const marketData: { peachtreeCity: MarketPulse } = {
  peachtreeCity: {
    medianSalePrice: null,
    medianListPrice: null,
    daysOnMarket: null,
    inventory: null,
    newListings: null,
    saleToListRatio: null,
    yearOverYearChange: null,
    dataAsOf: null,
    sourceName: null,
    sourceUrl: null,
  },
};

export const compliance = {
  // Georgia Real Estate Commission advertising rules require the
  // brokerage's licensed name and telephone number to accompany agent
  // advertising. This footer text is rendered on every page.
  footerText: () =>
    `${agent.fullName}, ${agent.title} — ${brokerage.legalName} | ${brokerage.officePhone}`,
};

export const analyticsConfig = {
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID ?? null,
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_ID ?? null,
};

/**
 * Drives canonical URLs, the sitemap, RSS links, and absolute OG image
 * URLs. The default is the real production domain (the apex 308-redirects
 * to www, so www is the canonical form) — do NOT leave this as a
 * placeholder domain, or every canonical tag on the live site points
 * somewhere that isn't the site. `NEXT_PUBLIC_SITE_URL` overrides it for
 * preview/staging environments.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.angelicarios.com";

export const siteConfig = {
  brand,
  agent,
  expertise,
  brokerage,
  contact,
  serviceAreas,
  social,
  propertySearch,
  marketData,
  compliance,
  analytics: analyticsConfig,
  siteUrl,
};

export default siteConfig;
