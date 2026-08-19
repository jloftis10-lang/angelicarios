/**
 * Thin, dependency-free analytics hook. Pushes to a dataLayer-style queue
 * so GA4/Clarity (or nothing, if not configured) can pick events up
 * without every call site knowing which provider is wired in.
 *
 * Privacy-conscious by construction: events carry intent and page context,
 * never personally identifying form values.
 */
export type AnalyticsEvent =
  | "contact_form_submit"
  | "buyer_lead"
  | "seller_lead"
  | "relocation_lead"
  | "investor_lead"
  | "guide_lead"
  | "area_match_complete"
  | "phone_click"
  | "text_click"
  | "email_click"
  | "community_click"
  | "village_click"
  | "listing_search_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
