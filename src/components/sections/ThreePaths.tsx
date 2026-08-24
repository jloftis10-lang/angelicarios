import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const paths = [
  {
    heading: "Find the right home without feeling rushed.",
    copy: "Get thoughtful guidance on neighborhoods, homes, offers, inspections, and the decisions that matter along the way.",
    cta: "Explore Buying",
    href: "/buy",
  },
  {
    heading: "Sell with a clear plan.",
    copy: "Pricing, preparation, presentation, and negotiation matter — especially as buyers have more choices.",
    cta: "Explore Selling",
    href: "/sell",
  },
  {
    heading: "Moving here? Start with someone who's done it herself.",
    copy: "Angelica knows what it feels like to relocate across the country and learn a completely new community from the ground up.",
    cta: "Plan Your Move",
    href: "/relocate",
  },
  {
    heading: "Evaluating an investment property?",
    copy: "Hands-on acquisition and renovation experience, plus a mortgage lending and finance background, applied to what a property would really take.",
    cta: "Send Your Buy Box",
    href: "/invest",
  },
];

export function ThreePaths() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((path) => (
          <div key={path.href} className="flex flex-col rounded-2xl border border-sand/60 bg-white p-7">
            <h2 className="font-display text-lg font-semibold text-navy">{path.heading}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{path.copy}</p>
            <Button href={path.href} variant="ghost" className="mt-6 self-start px-0">
              {path.cta} →
            </Button>
          </div>
        ))}
      </Container>
    </section>
  );
}
