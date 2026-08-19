export type LeadIntent =
  | "buyer"
  | "seller"
  | "relocation"
  | "investor"
  | "contact"
  | "guide"
  | "area-match"
  | "financing";

export type FieldType = "text" | "email" | "tel" | "select" | "textarea";

export type FormFieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  /** Optional helper text rendered under the label. */
  hint?: string;
};

/**
 * Where the lead came from. Captured client-side and passed through to the
 * notification email so Angelica can see which page and campaign produced
 * the inquiry. Privacy-conscious: no cookies, no fingerprinting, no
 * cross-site tracking — just this visit's own URL and referrer.
 */
export type LeadAttribution = {
  landingPage?: string;
  currentPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

export type LeadPayload = {
  intent: LeadIntent;
  values: Record<string, string>;
  attribution?: LeadAttribution;
  website?: string; // honeypot
};
