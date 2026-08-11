import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { agent } from "@/config/site";

export const metadata: Metadata = {
  title: "About Angelica",
  description:
    "Angelica relocated from Newport Beach, California to Georgia and works personally with every buyer, seller, and relocating client.",
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
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <PlaceholderImage label="Angelica professional portrait" aspect="aspect-[4/5]" />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-slate">
            <p>
              Angelica&apos;s path to Georgia real estate started in California, where she previously worked in real
              estate and held a California real-estate license while living in Newport Beach. Relocating from
              Newport Beach to Georgia gave her a firsthand understanding of what it actually takes to move across
              the country — the questions, the unknowns, and the adjustment that comes after the boxes are unpacked.
            </p>
            <p>
              Today she works with buyers, sellers, and relocating clients in Peachtree City and South Metro
              Atlanta. Every client works directly with her — not a team, not a rotating point of contact.
            </p>
            <p>
              Outside of work, Angelica is a mother and a dog lover. Her son is beginning college, a milestone
              that&apos;s given her a fresh appreciation for the way home and place shift at different stages of
              life — which is part of why she takes the same question seriously for every client: where does life
              fit next?
            </p>
            <p>
              That personal experience is why she treats real estate as a relationship, not a transaction — and why
              clients hear directly from her, from the first conversation through closing.
            </p>
          </div>
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
