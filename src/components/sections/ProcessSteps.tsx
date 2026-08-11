import { Container } from "@/components/ui/Container";

export function ProcessSteps({
  heading,
  steps,
}: {
  heading?: string;
  steps: { title: string; copy: string }[];
}) {
  return (
    <section className="py-16">
      <Container>
        {heading && <h2 className="font-display text-3xl font-semibold text-navy">{heading}</h2>}
        <ol className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="font-display text-2xl text-sage">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
