import { Container } from "@/components/ui/Container";
import { expertise } from "@/config/site";

export function ExpertiseBadges() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          {expertise.background.map((item) => (
            <div key={item.label} className="rounded-2xl border border-sand/60 bg-white p-6 text-center">
              <p className="font-display text-2xl font-semibold text-navy">{item.label}</p>
              <p className="mt-1 text-sm text-slate">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
