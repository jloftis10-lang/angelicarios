import { Container } from "@/components/ui/Container";
import { agent, expertise } from "@/config/site";

export function ExpertiseBadges() {
  return (
    <section className="border-y border-sand/60 bg-canvas/45 py-14 md:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Why work with Angelica</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
              Experience that helps you see the whole transaction.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate md:text-base">
              Angelica brings mortgage sales, finance, residential investment, renovation, staging, and relocation
              experience into the same conversation. That matters because buying or selling a home is never just one
              decision — financing, condition, presentation, timing, and negotiation all affect the outcome.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
              {agent.title} · License {agent.licenseNumber}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.background.map((item) => (
              <div key={item.label} className="rounded-2xl border border-sand/70 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl font-semibold text-navy">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
