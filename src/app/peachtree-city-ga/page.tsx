import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MarketStats } from "@/components/sections/MarketStats";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { brand } from "@/config/site";
import { villages } from "@/config/villages";

export const metadata: Metadata = {
  title: `Peachtree City GA Real Estate & Relocation Guide`,
  description:
    "A neutral orientation to living in Peachtree City, Georgia: the five villages, the multi-use path and golf-cart system, and how the city relates to South Metro Atlanta.",
  alternates: { canonical: "/peachtree-city-ga" },
};

export default function PeachtreeCityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Peachtree City", href: "/peachtree-city-ga" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Living in Peachtree City, Georgia
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            Peachtree City is a planned community in Fayette County, part of South Metro Atlanta, built around a
            network of villages connected by multi-use paths. Here&apos;s an orientation to what makes it distinct —
            this page will keep growing as more detail is confirmed.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">What makes Peachtree City different</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Multi-use path network", copy: "100+ miles of paths connect neighborhoods, schools, shopping, and recreation across the city — one of the largest municipal cart-path systems in the country." },
              { title: "Golf carts", copy: "Golf carts are a common, registered way to get around on the path system, alongside walking and biking." },
              { title: "Lakes and recreation", copy: "Several lakes and public recreation areas are woven through the city's villages." },
              { title: "Planned-community structure", copy: "The city is organized into distinct villages, each with its own character and amenities." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">The five villages</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate">
            Brief orientation to each village. Detailed neighborhood profiles are in progress — reach out to
            Angelica for a closer look at any specific one.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {villages.map((village) => (
              <div key={village.slug} id={village.slug} className="scroll-mt-24 rounded-2xl bg-canvas p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{village.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{village.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Getting around</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              The multi-use path system is central to daily life in Peachtree City — many residents use golf carts,
              bikes, or walking to reach schools, shopping, and recreation without necessarily driving. Cars remain
              the primary way to travel beyond the city itself.
            </p>
          </div>
          <PlaceholderImage label="Golf-cart / multi-use path" aspect="aspect-[4/3]" />
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Peachtree City and South Metro Atlanta</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Peachtree City sits in Fayette County, in South Metro Atlanta, with access to nearby communities including
            Fayetteville,{" "}
            <Link href="/blog/living-near-trilith" className="underline hover:text-navy">
              Trilith
            </Link>
            , Tyrone, Senoia, and Newnan, and to the broader Atlanta metro area.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Schools &amp; education resources</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Peachtree City is served by the Fayette County School System. For current attendance zones, ratings, and
            enrollment information, consult official school district resources directly rather than third-party
            summaries.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">Current Peachtree City market</h2>
          <div className="mt-6">
            <MarketStats />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Thinking about Peachtree City?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            {brand.shortName} is happy to talk through what living here actually looks like.
          </p>
          <Button href="/contact">Talk With Angelica</Button>
        </Container>
      </section>
    </>
  );
}
