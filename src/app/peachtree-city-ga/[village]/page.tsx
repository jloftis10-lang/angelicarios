import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { villages } from "@/config/villages";

export function generateStaticParams() {
  return villages.map((village) => ({ village: village.slug }));
}

function getVillage(slug: string) {
  return villages.find((village) => village.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ village: string }> }): Promise<Metadata> {
  const { village: slug } = await params;
  const village = getVillage(slug);
  if (!village) return {};

  return {
    title: `${village.name}, Peachtree City GA Neighborhood Guide`,
    description: `${village.summary} Learn how ${village.name} fits into a Peachtree City home search and relocation plan.`,
    alternates: { canonical: `/peachtree-city-ga/${village.slug}` },
  };
}

export default async function VillagePage({ params }: { params: Promise<{ village: string }> }) {
  const { village: slug } = await params;
  const village = getVillage(slug);
  if (!village) notFound();

  const otherVillages = villages.filter((item) => item.slug !== village.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Peachtree City", href: "/peachtree-city-ga" },
          { label: village.name, href: `/peachtree-city-ga/${village.slug}` },
        ]}
      />
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Peachtree City village guide</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {village.name}, Peachtree City
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">{village.summary}</p>
        </Container>
      </section>

      <section className="pb-14">
        <Container className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-sand/60 bg-white p-6">
            <h2 className="text-base font-semibold text-navy">Look beyond the village name</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Street, lot, age, condition, path access, and proximity to your daily destinations can matter as much as
              the village label itself.
            </p>
          </div>
          <div className="rounded-2xl border border-sand/60 bg-white p-6">
            <h2 className="text-base font-semibold text-navy">Compare before narrowing</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Touring more than one village early can make your priorities clearer and prevent an overly narrow search.
            </p>
          </div>
          <div className="rounded-2xl border border-sand/60 bg-white p-6">
            <h2 className="text-base font-semibold text-navy">Verify current details</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Confirm current property, school-zone, HOA, and listing-specific information from primary documents before
              making a decision.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-navy">How {village.name} fits into a home search</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Use this guide as an orientation rather than a ranking. Angelica can help compare available homes in
            {` ${village.name}`} with options elsewhere in Peachtree City based on your budget, timing, commute,
            preferred home style, lot needs, and path access.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/buy">Plan a Home Search</Button>
            <Button href="/relocate" variant="secondary">Plan a Relocation</Button>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">Compare the other Peachtree City villages</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherVillages.map((item) => (
              <Link
                key={item.slug}
                href={`/peachtree-city-ga/${item.slug}`}
                className="rounded-full border border-sand bg-white px-4 py-2 text-sm font-medium text-navy hover:bg-canvas"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
