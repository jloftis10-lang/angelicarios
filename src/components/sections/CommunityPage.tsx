import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { LeadForm } from "@/components/forms/LeadForm";
import { getCommunity, type Community } from "@/config/communities";
import { siteUrl, brand } from "@/config/site";

export function communityMetadata(slug: string): Metadata {
  const community = getCommunity(slug);
  if (!community) return {};
  return {
    title: community.metaTitle,
    description: community.metaDescription,
    alternates: { canonical: community.href },
  };
}

export function CommunityPage({ community }: { community: Community }) {
  const compare = community.compareWith
    .map(getCommunity)
    .filter((c) => c !== undefined);

  // Place schema is safe here: it describes a real named place and the
  // visible content on the page, with no fabricated ratings or stats.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${community.name}, Georgia`,
    description: community.metaDescription,
    url: `${siteUrl}${community.href}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: community.name,
      addressRegion: "GA",
      addressCountry: "US",
    },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Communities", href: "/communities" },
          { label: community.name, href: community.href },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            {community.county} · South Metro Atlanta
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Living in {community.name}, Georgia
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">{community.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#ask">Ask Angelica About {community.name}</Button>
            <Button href="/area-match" variant="secondary">
              See Which Areas Fit You
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">
            What makes {community.name} different
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {community.distinctives.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Housing and neighborhoods</h2>
          {community.housing.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Location and access</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">{community.location}</p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Things to understand before touring
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            These are questions to answer for a specific address rather than assumptions to carry into a search.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-relaxed text-slate">
            {community.considerations.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {community.angelicasTake && (
        <section className="py-8">
          <Container className="max-w-3xl">
            <AngelicasTake>{community.angelicasTake}</AngelicasTake>
          </Container>
        </section>
      )}

      {compare.length > 0 && (
        <section className="py-12">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-navy">Worth comparing with</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              Most searches around here end up spanning more than one community. These are the ones buyers most often
              weigh against {community.name}.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {compare.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="flex flex-col rounded-2xl border border-sand/60 bg-white p-6 transition-colors hover:border-navy/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage">{item.county}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.summary}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <RelatedGuides slugs={community.relatedPosts} />

      <section id="ask" className="py-16 md:py-24">
        <Container className="grid gap-10 rounded-3xl bg-canvas p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Ask Angelica about {community.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Tell her what you&apos;re weighing and she&apos;ll follow up personally — including an honest read on
              whether {community.name} is actually the right place to be looking.
            </p>
            <p className="mt-4 text-sm text-slate">
              Prefer to browse first? Start with the{" "}
              <Link href="/guide" className="underline underline-offset-4 hover:text-navy">
                Peachtree City relocation guide
              </Link>{" "}
              or the{" "}
              <Link href="/communities" className="underline underline-offset-4 hover:text-navy">
                full community overview
              </Link>
              .
            </p>
          </div>
          <LeadForm
            intent="relocation"
            submitLabel={`Ask About ${community.name}`}
            successMessage={`Thanks — ${brand.shortName} will follow up about ${community.name} personally.`}
            extraValues={{ areaOfInterest: community.name }}
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
              { name: "message", label: `What would you like to know about ${community.name}?`, type: "textarea" },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
