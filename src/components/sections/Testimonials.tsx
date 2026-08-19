import { publishableTestimonials } from "@/config/testimonials";
import { Container } from "@/components/ui/Container";

/**
 * Renders nothing until real, permission-cleared testimonials exist. No
 * empty-state card, no "reviews coming soon" placeholder — the section
 * simply isn't there, which is preferable to advertising its absence.
 */
export function Testimonials() {
  if (publishableTestimonials.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <h2 className="font-display text-3xl font-semibold text-navy">What clients say</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {publishableTestimonials.slice(0, 4).map((testimonial) => (
            <blockquote key={testimonial.attribution} className="rounded-2xl bg-canvas p-6">
              <p className="text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-3 text-sm text-slate">
                <span className="font-medium">{testimonial.attribution}</span>
                {testimonial.transactionType && <> · {testimonial.transactionType}</>}
                {testimonial.location && <> · {testimonial.location}</>}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
