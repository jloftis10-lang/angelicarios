import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaMatch } from "@/components/AreaMatch";
import { AngelicasTake } from "@/components/sections/AngelicasTake";

export const metadata: Metadata = {
  title: "Which Peachtree City Area Fits You?",
  description:
    "Answer eight questions about paths, lot size, commute, and setting to see which Peachtree City villages and South Metro Atlanta communities are worth exploring for your move.",
  alternates: { canonical: "/area-match" },
};

export default function AreaMatchPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Area Match", href: "/area-match" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Narrow your search</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Which area fits how you actually live?
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            Eight questions, about two minutes. You&apos;ll get a short list of areas worth exploring and the reasons
            each one came up — not a ranking, and not a claim that any of them is objectively best.
          </p>
        </Container>
      </section>

      <AreaMatch />

      <section className="py-12">
        <Container className="max-w-2xl">
          <AngelicasTake>
            Tools like this are useful for narrowing, not deciding. What it cannot tell you is how a particular street
            feels on a Tuesday evening, or whether the specific house is worth the compromise you would be making. That
            part still takes visiting — and it is the part I actually help with.
          </AngelicasTake>
        </Container>
      </section>
    </>
  );
}
