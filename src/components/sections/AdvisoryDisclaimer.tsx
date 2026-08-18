import { Container } from "@/components/ui/Container";

export function AdvisoryDisclaimer() {
  return (
    <section className="py-12">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">A meaningful advantage</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
          Underwriting insight. Investor perspective.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          Angelica&apos;s background spans mortgage finance, underwriting, property acquisition, renovation,
          staging, and resale. That experience does not replace a lender, inspector, contractor, attorney, or tax
          adviser — it helps clients ask better questions, recognize tradeoffs, and prepare more thoughtfully.
        </p>
      </Container>
    </section>
  );
}
