import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { SiteImage } from "@/components/ui/SiteImage";
import { ExpertiseBadges } from "@/components/sections/ExpertiseBadges";
import { ThreePaths } from "@/components/sections/ThreePaths";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RecentPosts } from "@/components/sections/RecentPosts";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { serviceAreas, agent } from "@/config/site";
import { villages } from "@/config/villages";
import angelicaPortraitBlue from "@/assets/images/angelica-portrait-blue.jpg";
import angelicaLifestyle from "@/assets/images/angelica-lifestyle.jpg";
import ptcPathLake from "@/assets/images/ptc-path-lake.jpg";

export const metadata: Metadata = {
  title: "Peachtree City Realtor & Relocation Guide",
  description:
    "Personal real-estate guidance for buyers, sellers, investors, and people relocating to Peachtree City and South Metro Atlanta — backed by 15+ years in mortgage finance and underwriting.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>
              {serviceAreas.primary.toUpperCase()} • {serviceAreas.secondary.toUpperCase()}
            </Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Peachtree City real estate, handled personally.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
              Whether you&apos;re buying, selling, relocating from out of state, or looking at an investment
              property, you work directly with Angelica — not a team, not a rotating point of contact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Talk With Angelica</Button>
              <Button href="/guide" variant="secondary">
                Get the Peachtree City Guide
              </Button>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate">
              Mortgage finance &amp; underwriting experience · Property investor perspective · Firsthand
              California-to-Georgia relocation
            </p>
          </div>
          <PortraitImage
            src={angelicaPortraitBlue}
            alt={`Angelica Rios, ${agent.title} in ${serviceAreas.primary}`}
            aspect="aspect-[4/5]"
            priority
          />
        </Container>
      </section>

      <ExpertiseBadges />

      <ThreePaths />

      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <SiteImage
            src={ptcPathLake}
            alt="A multi-use path running alongside a lake with a fountain in Peachtree City"
            aspect="aspect-[4/3]"
            className="md:order-2"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              There&apos;s nowhere quite like Peachtree City.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Five villages connected by 100+ miles of multi-use paths, a golf-cart culture that shapes daily life,
              lakes and public recreation, and easy access to the rest of South Metro Atlanta.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Start with the{" "}
              <Link href="/peachtree-city-ga" className="underline underline-offset-4 hover:text-navy">
                Peachtree City overview
              </Link>
              , or go straight to a village:{" "}
              {villages.map((village, index) => (
                <span key={village.slug}>
                  <Link
                    href={`/peachtree-city-ga/${village.slug}`}
                    className="underline underline-offset-4 hover:text-navy"
                  >
                    {village.name}
                  </Link>
                  {index < villages.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/peachtree-city-ga" variant="ghost" className="px-0">
                Explore Peachtree City →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Not sure Peachtree City is the right fit?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
            Most searches around here span more than one community. These guides cover the surrounding options
            honestly — including when somewhere else is the better answer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/communities">Compare Communities</Button>
            <Button href="/area-match" variant="secondary">
              See Which Areas Fit You
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              Real estate is personal. Angelica treats it that way.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Angelica brings more than 15 years in mortgage finance and underwriting to every transaction, along
              with hands-on experience as a property investor and renovator — a view of a deal that goes beyond the
              real-estate side of it alone.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              That perspective is shaped by experience on both sides of the country, too. After previously working in
              real estate in California and{" "}
              <Link
                href="/moving-from-california-to-georgia"
                className="underline underline-offset-4 hover:text-navy"
              >
                relocating from Newport Beach to Georgia
              </Link>{" "}
              herself, she understands that moving isn&apos;t simply about choosing a house — it&apos;s about
              figuring out where life fits next.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/about" variant="ghost" className="px-0">
                Meet Angelica →
              </Button>
              <Button href="/underwriting-experience-real-estate" variant="ghost" className="px-0">
                Why underwriting experience matters →
              </Button>
            </div>
          </div>
          <PortraitImage
            src={angelicaLifestyle}
            alt="Angelica Rios, Peachtree City real-estate advisor"
            aspect="aspect-[4/5]"
          />
        </Container>
      </section>

      <HowItWorks />
      <RecentPosts />
      <Testimonials />
      <FinalCta />
    </>
  );
}
