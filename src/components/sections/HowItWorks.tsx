import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Start with a conversation",
    copy: "Tell Angelica what you're considering.",
  },
  {
    number: "02",
    title: "Build a plan",
    copy: "Understand your timing, options, and priorities.",
  },
  {
    number: "03",
    title: "Move forward with confidence",
    copy: "Angelica stays personally involved from first conversation through closing.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy py-16 text-warm-white md:py-24">
      <Container>
        <h2 className="max-w-xl font-display text-3xl font-semibold md:text-4xl">How it works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-3xl text-sand">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-white/80">{step.copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
