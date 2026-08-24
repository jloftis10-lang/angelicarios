import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandRule } from "@/components/brand/BrandRule";
import { AdvisoryDisclaimer } from "@/components/sections/AdvisoryDisclaimer";
import { agent, additionalLanguageList, serviceAreas } from "@/config/site";
import angelicaPortrait from "@/assets/images/angelica-portrait.jpg";
import angelicaSonFalls from "@/assets/images/angelica-son-falls.jpg";

export const metadata: Metadata = {
  title: "About Angelica",
  description:
    "15+ years in mortgage finance and underwriting, plus firsthand relocation experience from Newport Beach, California to Georgia. Angelica works personally with every client.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            A real-estate relationship should feel like a relationship.
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-sage">
            Underwriter&apos;s insight. Realtor&apos;s guidance. A neighbor&apos;s care.
          </p>
          <blockquote className="mt-8 border-l-2 border-sage pl-5 font-display text-xl italic text-navy md:text-2xl">
            &ldquo;My clients deserve to understand not only what is happening, but why it matters.&rdquo;
          </blockquote>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <PortraitImage
            src={angelicaPortrait}
            alt={`Angelica, ${agent.title} in ${serviceAreas.primary}`}
            aspect="aspect-[4/5]"
          />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-slate">
            <p>
              Angelica brings more than 15 years in mortgage finance and underwriting to her real-estate work, along
              with hands-on experience as a property investor and renovator. That background gives her a 360-degree
              view of a transaction — the financing, the property condition, and the numbers behind a deal, not just
              the real-estate side of it.
            </p>
            <p>
              Her path to Georgia real estate started in California, where she previously worked in real estate and
              held a California real-estate license while living in Newport Beach. Relocating from Newport Beach to
              Georgia gave her a firsthand understanding of what it actually takes to move across the country — the
              questions, the unknowns, and the adjustment that comes after the boxes are unpacked.
            </p>
            <p>
              Today she works with buyers, sellers, and relocating clients in Peachtree City and South Metro
              Atlanta, holding Georgia real-estate license #{agent.licenseNumber}. Every client works directly with
              her — not a team, not a rotating point of contact.
            </p>
            <p>
              She is fluent in {additionalLanguageList} as well as English. Buying or selling a home involves
              contracts, disclosures, and deadlines that are demanding to follow in any language, and being able to
              work through them in the one a client thinks in changes how much of it actually lands.
            </p>
            <p>
              Her son is beginning college, a milestone that&apos;s given her a fresh appreciation for the way home
              and place shift at different stages of life — which is part of why she takes the same question
              seriously for every client: where does life fit next?
            </p>
            <p>
              That personal experience is why she treats real estate as a relationship, not a transaction — and why
              clients hear directly from her, from the first conversation through closing.
            </p>
          </div>
        </Container>
      </section>

      <BrandRule className="py-4" />

      <AdvisoryDisclaimer />

      <section className="py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Beyond real estate</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy">At home in Georgia.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Outside of work, Angelica treasures time with her son Alexander and enjoys exploring the outdoors with
              her partner and their dog — waterfalls, trails, and the parts of Georgia you only find by going
              looking. Her appreciation for home, family, and community shapes the care she brings to every
              relationship.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-ink">
              {[
                "Peachtree City resident",
                "Personal interstate relocation experience",
                "15+ years in mortgage finance and underwriting",
                `Fluent in ${additionalLanguageList} as well as English`,
                "Hands-on acquisition, renovation, staging, and resale experience",
              ].map((item) => (
                <li key={item} className="border-t border-sand/60 pt-3 first:border-t-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PortraitImage
            src={angelicaSonFalls}
            alt="Angelica Rios and her son Alexander on a boardwalk in front of a waterfall"
            aspect="aspect-[4/5]"
          />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Work directly with {agent.firstName}.
          </h2>
          <Button href="/contact">Start a Conversation</Button>
        </Container>
      </section>
    </>
  );
}
