/**
 * Verified client testimonials.
 *
 * HARD RULE: nothing goes in this array that a real client did not say and
 * give permission to publish. No composites, no paraphrases of a general
 * impression, no "representative" examples. An empty array renders nothing
 * at all, which is the correct behavior — a site with no testimonials is
 * honest, a site with invented ones is not.
 *
 * `permissionGranted` must be true for an entry to render, so a quote can
 * be captured here while permission is still being confirmed without
 * accidentally publishing it.
 */
export type Testimonial = {
  quote: string;
  /** First name, or first name + last initial. Never a full name without explicit consent. */
  attribution: string;
  /** e.g. "Buyer", "Seller", "Relocation" — helps a reader judge relevance. */
  transactionType?: string;
  /** e.g. "Peachtree City" — omit if the client would rather not say. */
  location?: string;
  /** Where it came from: "Direct", "Google", "Zillow", etc. Never fabricate a platform. */
  source?: string;
  /** Must be true to render. Defaults to not rendering. */
  permissionGranted: boolean;
};

export const testimonials: Testimonial[] = [];

/** Only permission-cleared testimonials are ever shown. */
export const publishableTestimonials = testimonials.filter((t) => t.permissionGranted);
