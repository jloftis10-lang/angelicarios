import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { AdvisoryDisclaimer } from "@/components/sections/AdvisoryDisclaimer";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Investment Property — Peachtree City & South Metro Atlanta",
  description:
    "Investment property guidance in Peachtree City and South Metro Atlanta from an agent with hands-on acquisition, renovation, staging, and resale experience. Send Angelica your buy box.",
  alternates: { canonical: "/invest" },
};

const capabilities = [
  {
    title: "Acquisition thinking",
    copy: "Working backward from what the finished property needs to be, rather than forward from the asking price.",
  },
  {
    title: "Renovation awareness",
    copy: "Having managed renovations directly, Angelica reads a property for what the work would actually involve — not a rule-of-thumb per square foot.",
  },
  {
    title: "Underwriting perspective",
    copy: "Fifteen years in mortgage finance shapes the questions asked about financing structure, appraisal risk, and what a lender will scrutinize.",
  },
  {
    title: "Value-add evaluation",
    copy: "Separating changes buyers pay for from changes that mostly spend your money.",
  },
  {
    title: "Staging and resale view",
    copy: "Considering how the finished property will present when it is time to sell or lease it.",
  },
  {
    title: "Honest disqualification",
    copy: "Being told early that a property does not work is more valuable than being walked through one that doesn't.",
  },
];

export default function InvestPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Invest", href: "/invest" }]} />
      <PageHero
        eyebrow="For property investors"
        title="See the opportunity — and the risk."
        copy="Hands-on acquisition, renovation, staging, and resale experience means Angelica reads an investment property for what the work actually involves, not just what the listing says."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#buy-box">Send Angelica Your Buy Box</Button>
          <Button href="/underwriting-experience-real-estate" variant="secondary">
            Why Underwriting Experience Matters
          </Button>
        </div>
      </PageHero>

      <section className="py-8">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">What that experience brings</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-3xl">
          <AngelicasTake>
            I have bought properties, managed the renovations, staged them, and sold them. That mostly taught me how
            wrong the optimistic version of a rehab budget usually is. When I look at a property with you, I am
            thinking about what it will really take — not what it would take if nothing went wrong.
          </AngelicasTake>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">What this is not</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            No projected returns, no rental income estimates, no promises about appreciation. Those numbers depend on
            your financing, your tax situation, your renovation costs, and market conditions nobody can guarantee —
            and any site that hands you one has made assumptions on your behalf that you should be making yourself.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            What Angelica provides is real-estate representation informed by an unusual background. Your lender,
            accountant, attorney, and contractor still do their own jobs.
          </p>
        </Container>
      </section>

      <AdvisoryDisclaimer />

      <RelatedGuides
        slugs={[
          "buying-an-older-home-peachtree-city",
          "new-construction-near-peachtree-city",
          "due-diligence-in-georgia",
        ]}
      />

      <section id="buy-box" className="py-16 md:py-24">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy">Send Angelica your buy box</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            The clearer your criteria, the faster she can tell you whether something is worth your time. Not sure
            about a field? Leave it blank — or start with the{" "}
            <Link href="/communities" className="underline underline-offset-4 hover:text-navy">
              community guides
            </Link>{" "}
            to narrow the target area first.
          </p>
          <div className="mt-8">
            <LeadForm
              intent="investor"
              submitLabel="Send My Buy Box"
              successMessage="Thanks — Angelica will review your criteria and follow up personally."
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "targetArea",
                  label: "Target area",
                  type: "text",
                  placeholder: "e.g. Peachtree City, Newnan, open to Coweta County",
                },
                { name: "budget", label: "Budget range", type: "text" },
                {
                  name: "strategy",
                  label: "Strategy",
                  type: "select",
                  options: [
                    "Fix and flip",
                    "Buy and hold rental",
                    "BRRRR / refinance after rehab",
                    "New construction",
                    "Still deciding",
                  ],
                },
                {
                  name: "propertyType",
                  label: "Property type",
                  type: "select",
                  options: ["Single family", "Multi-family", "Townhome or condo", "Land", "Open to options"],
                },
                {
                  name: "financing",
                  label: "Financing",
                  type: "select",
                  options: ["Cash", "Conventional", "Hard money", "Portfolio / DSCR", "Not yet determined"],
                },
                {
                  name: "rehabTolerance",
                  label: "Rehab tolerance",
                  type: "select",
                  options: [
                    "Cosmetic only",
                    "Moderate — kitchens, baths, systems",
                    "Heavy — structural or full gut",
                    "Depends on the numbers",
                  ],
                },
                { name: "bedsBaths", label: "Beds / baths minimum", type: "text", placeholder: "e.g. 3/2 minimum" },
                {
                  name: "timeline",
                  label: "Timeline",
                  type: "select",
                  options: ["Ready now", "0–3 months", "3–6 months", "6–12 months", "Building a pipeline"],
                },
                { name: "message", label: "Anything else about your criteria?", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
