import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "What Is My Peachtree City Home Worth?",
  description:
    "Request a local home value review for your Peachtree City or South Metro Atlanta home — a personal assessment of condition, improvements, and current competition, not an automated estimate.",
  alternates: { canonical: "/sell" },
};

const steps = [
  { title: "Understand your goals", copy: "Why you're considering a sale shapes everything that follows." },
  { title: "Review property and market", copy: "Condition, improvements, comparable sales, and what you'd actually be competing against." },
  { title: "Prepare and position", copy: "What's worth doing before listing — and, just as important, what isn't." },
  { title: "Launch and negotiate", copy: "Get the home in front of buyers and negotiate from a position of preparation." },
  { title: "Close", copy: "Angelica stays involved through closing and the details that come with it." },
];

const sellerSupport = [
  "Property preparation plan",
  "Home staging and presentation guidance",
  "Market positioning and pricing",
  "Launch and showing strategy",
  "Offer comparison and negotiation",
  "Contract-to-closing oversight",
];

const whatReviewCovers = [
  { title: "Condition", copy: "What a buyer and an inspector will actually see, and what that does to your negotiating position." },
  { title: "Improvements", copy: "What you've done, when you did it, and how much of it a buyer will genuinely pay for." },
  { title: "Lot characteristics", copy: "Size, slope, trees, privacy, and how your lot compares within your own neighborhood." },
  { title: "Micro-location", copy: "Where the home sits on its street, its path access, and what adjoins it." },
  { title: "Current competition", copy: "What a buyer would be choosing between if they saw your home this month." },
  { title: "Comparable sales", copy: "What has actually closed nearby, and how similar those homes really were." },
  { title: "Buyer behavior", copy: "What buyers in this area are reacting to right now, and what they're walking away from." },
  { title: "Layout", copy: "How the floor plan shows, and whether it works with or against the way buyers here live." },
];

export default function SellPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Sell", href: "/sell" }]} />
      <PageHero
        eyebrow="Selling"
        title="What is my Peachtree City home worth?"
        copy="The honest answer is that it depends on details no algorithm can see. Angelica will look at your home, your timing, recent comparable sales, and what buyers are actually responding to right now — then tell you what she really thinks."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#seller-form">Get My Local Home Value Review</Button>
          <Button href="/contact" variant="secondary">
            Talk With Angelica First
          </Button>
        </div>
      </PageHero>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            A local review, not an instant estimate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            This site deliberately does not generate an automatic valuation. Producing a number from public data
            alone would mean guessing at the things that move a price most — and a number that sounds precise but
            isn&apos;t is worse than no number at all, because you might make decisions on it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Automated estimates are a reasonable reference point. They just can&apos;t see inside your house.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">What a local value review looks at</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatReviewCovers.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sand/60 bg-white p-5">
                <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-3xl">
          <AngelicasTake>
            Working on the mortgage side taught me what makes a deal fall apart after it is under contract — appraisal
            gaps, condition surprises, financing that was never solid. I would rather raise those with you before we
            list than manage them during due diligence.
          </AngelicasTake>
        </Container>
      </section>

      <ProcessSteps heading="How selling works" steps={steps} />

      <section className="py-12">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">How Angelica helps</h2>
          <ul className="mt-5 grid gap-3 text-sm text-ink sm:grid-cols-2">
            {sellerSupport.map((item) => (
              <li key={item} className="rounded-lg bg-canvas px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate">
            Not sure whether it&apos;s worth doing the work before listing? Start with{" "}
            <Link href="/blog/what-sellers-should-fix-before-listing" className="underline underline-offset-4 hover:text-navy">
              what&apos;s usually worth fixing
            </Link>{" "}
            and{" "}
            <Link href="/blog/what-not-to-renovate-before-selling" className="underline underline-offset-4 hover:text-navy">
              what usually isn&apos;t
            </Link>
            .
          </p>
        </Container>
      </section>

      <RelatedGuides
        slugs={[
          "what-sellers-should-fix-before-listing",
          "what-not-to-renovate-before-selling",
          "due-diligence-in-georgia",
        ]}
      />

      <section id="seller-form" className="py-16 md:py-24">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy">Get my local home value review</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            The more detail you share, the more useful the first conversation is. Everything past your contact
            details is optional — send what you know and Angelica will ask about the rest.
          </p>
          <div className="mt-8">
            <LeadForm
              intent="seller"
              submitLabel="Get My Local Home Value Review"
              successMessage="Thanks — Angelica will review the details and follow up personally."
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "address", label: "Property address", type: "text", required: true },
                { name: "beds", label: "Bedrooms", type: "text" },
                { name: "baths", label: "Bathrooms", type: "text" },
                {
                  name: "improvements",
                  label: "Major improvements",
                  type: "textarea",
                  hint: "Roof, HVAC, kitchen, baths, windows, systems — whatever comes to mind.",
                },
                {
                  name: "improvementDates",
                  label: "Roughly when were those done?",
                  type: "text",
                  placeholder: "e.g. roof 2019, HVAC 2022",
                },
                {
                  name: "condition",
                  label: "Current condition",
                  type: "select",
                  options: [
                    "Move-in ready",
                    "Good, some cosmetic updates needed",
                    "Dated but sound",
                    "Needs significant work",
                    "Not sure",
                  ],
                },
                {
                  name: "timeline",
                  label: "Approximate timeline",
                  type: "select",
                  options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
                },
                { name: "reason", label: "Reason for considering a sale", type: "text" },
                { name: "message", label: "Anything else worth knowing?", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
