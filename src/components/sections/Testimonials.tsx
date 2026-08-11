import { testimonials } from "@/config/testimonials";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16">
      <Container className="grid gap-8 md:grid-cols-2">
        {testimonials.slice(0, 4).map((testimonial) => (
          <blockquote key={testimonial.attribution} className="rounded-2xl bg-canvas p-6">
            <p className="text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-3 text-sm font-medium text-slate">{testimonial.attribution}</footer>
          </blockquote>
        ))}
      </Container>
    </section>
  );
}
