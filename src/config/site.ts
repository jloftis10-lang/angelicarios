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
  agentPhone: "[ANGELICA_PHONE]",
  agentEmail: "[ANGELICA_EMAIL]",
  agentLicense: "[ANGELICA_LICENSE]",
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
  phone: PLACEHOLDER.agentPhone,
  email: PLACEHOLDER.agentEmail,
  licenseNumber: PLACEHOLDER.agentLicense,
};

export const brokerage = {
  legalName: PLACEHOLDER.brokerageLegalName,
  licenseNumber: PLACEHOLDER.brokerageLicense,
  officePhone: PLACEHOLDER.brokeragePhone,
  address: PLACEHOLDER.brokerageAddress,
  website: PLACEHOLDER.brokerageWebsite,
};

export const contact = {
  phoneHref: `tel:${PLACEHOLDER.agentPhone}`,
  smsHref: `sms:${PLACEHOLDER.agentPhone}`,
  emailHref: `mailto:${PLACEHOLDER.agentEmail}`,
};

export const serviceAreas = {
  primary: "Peachtree City, Georgia",
  secondary: "South Metro Atlanta",
  mentioned: ["Fayetteville", "Trilith", "Tyrone", "Senoia", "Newnan", "Coweta County"],
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
export const marketData = {
  peachtreeCity: {
    medianListPrice: null as number | null,
    medianSalePrice: null as number | null,
    daysOnMarket: null as number | null,
    inventory: null as number | null,
    dataAsOf: null as string | null,
    sourceName: null as string | null,
    sourceUrl: null as string | null,
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

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";

export const siteConfig = {
  brand,
  agent,
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
