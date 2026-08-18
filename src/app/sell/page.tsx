import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sell Your Home in Peachtree City",
  description:
    "Pricing, preparation, and positioning matter. Request a home value consultation with Angelica before listing in Peachtree City or South Metro Atlanta.",
  alternates: { canonical: "/sell" },
};

const steps = [
  { title: "Understand your goals", copy: "Why you're considering a sale shapes everything that follows." },
  { title: "Evaluate property and market", copy: "Comparable sales, current competition, and your home's specifics." },
  { title: "Prepare and position", copy: "What's worth doing before listing — and what isn't." },
  { title: "Launch and negotiate", copy: "Get the home in front of buyers and negotiate from a position of preparation." },
  { title: "Close", copy: "Angelica stays involved through closing." },
];

const sellerSupport = [
  "Property preparation plan",
  "Home staging and presentation guidance",
  "Market positioning and pricing",
  "Launch and showing strategy",
  "Offer comparison and negotiation",
  "Contract-to-closing oversight",
];

const overlooked = [
  "condition",
  "renovations",
  "lot characteristics",
  "competitive listings",
  "buyer behavior",
  "micro-location",
  "current market dynamics",
];

export default function SellPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Sell", href: "/sell" }]} />
      <PageHero
        eyebrow="Selling"
        title="Selling starts with getting the price right."
        copy="In a market where buyers have more options, pricing and positioning matter. Angelica will look at your home, your timing, recent comparable sales, current competition, and the details an algorithm can miss."
      />

      <ProcessSteps heading="How selling works" steps={steps} />

      <section className="py-16">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">How Angelica helps</h2>
          <ul className="mt-5 grid gap-3 text-sm text-ink sm:grid-cols-2">
            {sellerSupport.map((item) => (
              <li key={item} className="rounded-lg bg-canvas px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Why not just use an online estimate?</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            Automated estimates can be useful reference points, but they cannot fully account for:
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink sm:grid-cols-3">
            {overlooked.map((item) => (
              <li key={item} className="rounded-lg bg-canvas px-3 py-2 capitalize">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="seller-form" className="py-16 md:py-24">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy">Request a Home Value Consultation</h2>
          <p className="mt-3 text-sm text-slate">Angelica will follow up personally to talk through your home and your timeline.</p>
          <div className="mt-8">
            <LeadForm
              intent="seller"
              submitLabel="Request a Consultation"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "address", label: "Property address", type: "text", required: true },
                {
                  name: "timeline",
                  label: "Approximate timeline",
                  type: "select",
                  options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
                },
                { name: "reason", label: "Reason for considering a sale", type: "text" },
                { name: "message", label: "Optional message", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
