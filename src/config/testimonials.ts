export type Testimonial = {
  quote: string;
  attribution: string;
};

// TODO(launch): Populate with real, permission-cleared client testimonials
// before launch. Never fabricate quotes — the Testimonials component
// renders nothing while this stays empty.
export const testimonials: Testimonial[] = [];
