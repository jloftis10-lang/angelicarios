import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { AdvisoryDisclaimer } from "@/components/sections/AdvisoryDisclaimer";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Property Investors — Peachtree City & South Metro Atlanta",
  description:
    "Investment-property guidance in Peachtree City and South Metro Atlanta from an agent with hands-on acquisition, renovation, staging, and resale experience.",
  alternates: { canonical: "/invest" },
};

const capabilities = [
  "Investment criteria discovery",
  "On- and off-market opportunity awareness",
  "Renovation-minded property evaluation",
  "Staging and resale presentation perspective",
  "Finance- and underwriting-informed questions",
];

export default function InvestPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Invest", href: "/invest" }]} />
      <PageHero
        eyebrow="For property investors"
        title="See the opportunity."
        copy="Hands-on acquisition, renovation, staging, resale, and property-sourcing experience helps Angelica recognize both potential and risk in a property — not just the listing price."
      />

      <section className="py-8">
        <Container className="max-w-2xl">
          <ul className="grid gap-3 text-sm text-ink sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="rounded-lg bg-canvas px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AdvisoryDisclaimer />

      <section id="investor-form" className="py-16 md:py-24">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy">Tell Angelica What You&apos;re Looking For</h2>
          <p className="mt-3 text-sm text-slate">
            Share your investment criteria and she&apos;ll follow up personally.
          </p>
          <div className="mt-8">
            <LeadForm
              intent="investor"
              submitLabel="Send to Angelica"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "investmentType",
                  label: "What are you looking for?",
                  type: "select",
                  options: ["Fix and flip", "Buy and hold rental", "New construction", "Not sure yet"],
                },
                { name: "budget", label: "Approximate budget", type: "text" },
                { name: "criteria", label: "Investment criteria", type: "text", placeholder: "e.g. lot size, condition, area" },
                { name: "message", label: "Optional message", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
