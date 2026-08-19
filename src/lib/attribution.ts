import type { LeadAttribution } from "@/lib/leadTypes";

const LANDING_KEY = "ar_landing_page";

/**
 * Records the first page of this visit so a lead submitted from /contact
 * still shows which page actually brought the visitor in.
 *
 * Uses sessionStorage deliberately: it is scoped to this tab and cleared
 * when the session ends, so nothing persists across visits and there is no
 * cross-site tracking. Wrapped in try/catch because sessionStorage throws
 * in some privacy modes.
 */
export function recordLandingPage(): void {
  if (typeof window === "undefined") return;
  try {
    if (!window.sessionStorage.getItem(LANDING_KEY)) {
      window.sessionStorage.setItem(LANDING_KEY, window.location.pathname + window.location.search);
    }
  } catch {
    // sessionStorage unavailable — attribution degrades, forms still work.
  }
}

export function getAttribution(): LeadAttribution {
  if (typeof window === "undefined") return {};

  let landingPage: string | undefined;
  try {
    landingPage = window.sessionStorage.getItem(LANDING_KEY) ?? undefined;
  } catch {
    landingPage = undefined;
  }

  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer || undefined;

  // Only report an external referrer; our own pages aren't useful signal.
  let externalReferrer: string | undefined;
  if (referrer) {
    try {
      externalReferrer = new URL(referrer).host === window.location.host ? undefined : referrer;
    } catch {
      externalReferrer = referrer;
    }
  }

  const attribution: LeadAttribution = {
    landingPage,
    currentPage: window.location.pathname,
    referrer: externalReferrer,
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    utmContent: params.get("utm_content") ?? undefined,
    utmTerm: params.get("utm_term") ?? undefined,
  };

  // Drop empty keys so the notification email stays readable.
  return Object.fromEntries(
    Object.entries(attribution).filter(([, v]) => Boolean(v)),
  ) as LeadAttribution;
}
