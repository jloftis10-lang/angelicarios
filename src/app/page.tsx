import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { ThreePaths } from "@/components/sections/ThreePaths";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { serviceAreas, agent } from "@/config/site";
import angelicaPortrait from "@/assets/images/angelica-portrait.jpg";

export const metadata: Metadata = {
  title: "Peachtree City Realtor",
  description:
    "Personal real-estate guidance for buyers, sellers, and people relocating to Peachtree City and South Metro Atlanta.",
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
              Buying, selling, or relocating shouldn&apos;t feel transactional. Angelica brings thoughtful guidance, personal attention, and first-hand relocation experience to every move.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Talk With Angelica</Button>
              <Button href="/peachtree-city-ga" variant="secondary">
                Explore Peachtree City
              </Button>
            </div>
          </div>
          <PortraitImage
            src={angelicaPortrait}
            alt={`Angelica, ${agent.title} in ${serviceAreas.primary}`}
            aspect="aspect-[4/5]"
            priority
          />
        </Container>
      </section>

      <ThreePaths />

      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <PlaceholderImage label="Peachtree City multi-use path / lake" aspect="aspect-[4/3]" className="md:order-2" />
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              There&apos;s nowhere quite like Peachtree City.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Five villages connected by nearly 100 miles of multi-use paths, a golf-cart culture that shapes daily
              life, lakes and public recreation, and easy access to the rest of South Metro Atlanta.
            </p>
            <Button href="/peachtree-city-ga" variant="ghost" className="mt-6 px-0">
              Explore Peachtree City →
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
              Angelica&apos;s perspective on moving is shaped by experience on both sides of the country. After
              previously working in real estate in California and relocating from Newport Beach to Georgia, she
              understands that moving isn&apos;t simply about choosing a house — it&apos;s about figuring out where
              life fits next.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Clients work directly with Angelica throughout the process — as a mother and a dog lover herself, she
              brings the same attention to your move that she&apos;d want for her own family.
            </p>
            <Button href="/about" variant="ghost" className="mt-6 px-0">
              Meet Angelica →
            </Button>
          </div>
          <PlaceholderImage label="Angelica casual / lifestyle" aspect="aspect-[4/5]" />
        </Container>
      </section>

      <HowItWorks />
      <Testimonials />
      <FinalCta />
    </>
  );
}
