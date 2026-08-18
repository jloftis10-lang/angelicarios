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
    "A practical orientation to living in Peachtree City, Georgia: the five villages, multi-use paths, golf-cart culture, nearby communities, and relocation planning.",
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
            network of villages connected by multi-use paths. This guide is designed to help buyers and relocating
            families understand the city before they start narrowing homes.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/guide">Read the Relocation Guide</Button>
            <Button href="/contact" variant="secondary">Talk With Angelica</Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">What makes Peachtree City different</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Multi-use path network", copy: "100+ miles of shared-use paths connect neighborhoods with shopping, schools, parks, offices, recreation centers, places of worship, and lakes." },
              { title: "Golf-cart culture", copy: "Registered golf carts are a familiar part of local transportation on the path system, alongside walking and biking." },
              { title: "Lakes and recreation", copy: "Lakes, parks, recreation facilities, and green space are woven through the city and its villages." },
              { title: "Five-village structure", copy: "Peachtree City is organized into Aberdeen, Braelinn, Glenloch, Kedron, and Wilksmoor — useful starting points for understanding the city." },
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
            Use the village guides as orientation, not rankings. Individual streets, properties, lots, path access,
            and daily routines matter more than a label alone.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {villages.map((village) => (
              <article key={village.slug} className="rounded-2xl bg-canvas p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{village.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{village.summary}</p>
                <Link
                  href={`/peachtree-city-ga/${village.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-navy underline underline-offset-4"
                >
                  Explore {village.name}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Getting around</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              The multi-use path system is central to daily life in Peachtree City. It serves motorized carts,
              pedestrians, runners, and cyclists — many residents use golf carts, bikes, or walking for local trips,
              while cars remain the primary way to travel beyond the city. Registration and use rules change from
              time to time, so confirm current requirements with the city directly before assuming anything.
            </p>
            <Link href="/blog/golf-cart-path-guide" className="mt-5 inline-block text-sm font-medium text-navy underline underline-offset-4">
              Read the golf-cart and path guide
            </Link>
          </div>
          <PlaceholderImage label="Golf-cart and multi-use path in Peachtree City" aspect="aspect-[4/3]" />
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Peachtree City and South Metro Atlanta</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            A Peachtree City home search can overlap with Fayetteville, Trilith, Tyrone, Senoia, Newnan, and other
            parts of Fayette and Coweta counties. Comparing nearby areas can help clarify the tradeoffs that matter to
            your household.
          </p>
          <Link href="/communities" className="mt-5 inline-block text-sm font-medium text-navy underline underline-offset-4">
            Explore all nearby communities
          </Link>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Schools &amp; education resources</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            Peachtree City is served by the Fayette County School System. For current attendance zones, enrollment,
            programs, and other school information, verify details directly with official district resources rather
            than relying on third-party summaries.
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
            {brand.shortName} can help you compare areas, plan a visit, or get oriented before you start touring homes.
          </p>
          <Button href="/contact">Talk With Angelica</Button>
        </Container>
      </section>
    </>
  );
}
