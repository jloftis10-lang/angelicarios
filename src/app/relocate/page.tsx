import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Relocating to Peachtree City",
  description:
    "Moving to Peachtree City or South Metro Atlanta? Angelica relocated from Newport Beach, California and knows what the move actually involves.",
  alternates: { canonical: "/relocate" },
};

const topics = [
  { title: "The villages", copy: "Understanding how Peachtree City's five villages relate to each other." },
  { title: "Getting around", copy: "The golf-cart and multi-use path system, and how it factors into daily life." },
  { title: "Commute considerations", copy: "What proximity to the airport and Atlanta actually looks like day to day." },
  { title: "Touring remotely", copy: "Getting oriented and narrowing in on areas before you're able to visit in person." },
  { title: "Housing choices", copy: "The range of housing types across the city." },
  { title: "Moving logistics", copy: "Coordinating a move from another state, timeline, and next steps." },
];

export default function RelocatePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Relocate", href: "/relocate" }]} />
      <PageHero
        eyebrow="Relocation"
        title="Moving to Peachtree City? Start with someone who understands the move."
        copy="Angelica relocated from Newport Beach, California to Georgia and knows how many questions come before the boxes are ever packed."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#relocation-form">Plan Your Move</Button>
          <Button href="/guide" variant="secondary">
            Get the Peachtree City Guide
          </Button>
        </div>
      </PageHero>

      <section className="py-8">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <PlaceholderImage label="Angelica — relocation story" aspect="aspect-[4/5]" />
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Angelica has done this herself.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              She knows what it&apos;s like to leave a familiar coastline, a familiar market, and a familiar way of
              life — and to learn a brand-new community from scratch. That perspective shapes how she works with
              clients moving into Peachtree City and South Metro Atlanta today.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-navy">What relocating here actually involves</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic.title}>
                <h3 className="text-base font-semibold text-navy">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{topic.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="relocation-form" className="py-16 md:py-24">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy">Tell Angelica About Your Move</h2>
          <div className="mt-8">
            <LeadForm
              intent="relocation"
              submitLabel="Send to Angelica"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "movingFrom", label: "Where are you moving from?", type: "text", required: true },
                { name: "targetDate", label: "Target move date", type: "text" },
                {
                  name: "buyingOrRenting",
                  label: "Buying or renting?",
                  type: "select",
                  options: ["Buying", "Renting", "Not sure yet"],
                },
                { name: "budget", label: "Approximate budget", type: "text" },
                {
                  name: "priorities",
                  label: "Top priorities",
                  type: "text",
                  placeholder: "e.g. commute, home size, outdoor access, lot size",
                },
                { name: "message", label: "Optional message", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
