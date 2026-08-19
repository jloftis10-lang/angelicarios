import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { LeadForm } from "@/components/forms/LeadForm";
import { villages, getVillage } from "@/config/villages";
import { brand, siteUrl } from "@/config/site";

export function generateStaticParams() {
  return villages.map((village) => ({ village: village.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ village: string }>;
}): Promise<Metadata> {
  const { village: slug } = await params;
  const village = getVillage(slug);
  if (!village) return {};

  return {
    title: `Living in ${village.name}, Peachtree City GA`,
    description: `${village.summary} What to notice about ${village.name} before touring homes in Peachtree City.`,
    alternates: { canonical: `/peachtree-city-ga/${village.slug}` },
  };
}

export default async function VillagePage({ params }: { params: Promise<{ village: string }> }) {
  const { village: slug } = await params;
  const village = getVillage(slug);
  if (!village) notFound();

  const otherVillages = villages.filter((item) => item.slug !== village.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${village.name}, Peachtree City, Georgia`,
    description: village.summary,
    url: `${siteUrl}/peachtree-city-ga/${village.slug}`,
    containedInPlace: {
      "@type": "Place",
      name: "Peachtree City, Georgia",
      url: `${siteUrl}/peachtree-city-ga`,
    },
  };

  const sections = [
    { heading: "Where it sits", body: village.geography },
    { heading: "Housing character", body: village.housing },
    { heading: "Paths and cart access", body: village.paths },
    { heading: "Shopping and recreation", body: village.amenities },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Peachtree City", href: "/peachtree-city-ga" },
          { label: village.name, href: `/peachtree-city-ga/${village.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            Peachtree City village guide
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Living in {village.name}, Peachtree City
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">{village.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#ask">Ask Angelica About {village.name}</Button>
            <Button href="/area-match" variant="secondary">
              See Which Villages Fit You
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid max-w-4xl gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.heading} className="rounded-2xl border border-sand/60 bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-navy">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Things buyers should notice in {village.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Use these as questions for a specific address. Village-level generalizations are a starting point, not a
            substitute for looking closely at the actual house.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-relaxed text-slate">
            {village.buyerNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {village.angelicasTake && (
        <section className="py-8">
          <Container className="max-w-3xl">
            <AngelicasTake>{village.angelicasTake}</AngelicasTake>
          </Container>
        </section>
      )}

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            How {village.name} fits into a home search
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Treat this as orientation rather than a ranking. Angelica can help compare available homes in{" "}
            {village.name} against options elsewhere in{" "}
            <Link href="/peachtree-city-ga" className="underline underline-offset-4 hover:text-navy">
              Peachtree City
            </Link>{" "}
            and{" "}
            <Link href="/communities" className="underline underline-offset-4 hover:text-navy">
              nearby communities
            </Link>{" "}
            based on your budget, timing, commute, preferred home style, lot needs, and path access.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/buy">Plan a Home Search</Button>
            <Button href="/relocate" variant="secondary">
              Plan a Relocation
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Compare the other Peachtree City villages
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {otherVillages.map((item) => (
              <Link
                key={item.slug}
                href={`/peachtree-city-ga/${item.slug}`}
                className="rounded-2xl border border-sand/60 bg-white p-5 transition-colors hover:border-navy/40"
              >
                <h3 className="font-display text-lg font-semibold text-navy">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">{item.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <RelatedGuides slugs={village.relatedPosts} />

      <section id="ask" className="py-16 md:py-24">
        <Container className="grid gap-10 rounded-3xl bg-canvas p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Ask Angelica about homes in {village.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Tell her what you&apos;re looking for and she&apos;ll follow up personally — including an honest read on
              whether {village.name} is the right village to be focused on.
            </p>
          </div>
          <LeadForm
            intent="buyer"
            submitLabel={`Ask About ${village.name}`}
            successMessage={`Thanks — ${brand.shortName} will follow up about ${village.name} personally.`}
            extraValues={{ villageOfInterest: village.name }}
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel" },
              {
                name: "timeline",
                label: "Timeline",
                type: "select",
                options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
              },
              { name: "message", label: `What would you like to know about ${village.name}?`, type: "textarea" },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
