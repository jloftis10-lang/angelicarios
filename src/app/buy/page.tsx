import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrackedLink } from "@/components/TrackedLink";
import { propertySearch } from "@/config/site";

export const metadata: Metadata = {
  title: "Buy a Home in Peachtree City",
  description:
    "Thoughtful guidance for buyers in Peachtree City and South Metro Atlanta — from priorities and neighborhood orientation through offer, due diligence, and closing.",
  alternates: { canonical: "/buy" },
};

const steps = [
  { title: "Conversation and priorities", copy: "Start with what matters to you — timing, budget, lifestyle, and must-haves." },
  { title: "Search and neighborhood orientation", copy: "Get oriented to the villages and areas that fit what you're looking for." },
  { title: "Offer and due diligence", copy: "Understand pricing, terms, and the inspection period before you commit." },
  { title: "Closing and move-in", copy: "Angelica stays involved through closing and the details that come with it." },
];

const hasApprovedSearch = !propertySearch.url.startsWith("[");

export default function BuyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Buy", href: "/buy" }]} />
      <PageHero
        eyebrow="Buying"
        title="Buying in Peachtree City shouldn't start with a search box."
        copy="Start with what matters to you — your timing, priorities, lifestyle, and budget — and let Angelica help you make sense of the options."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#buyer-form">Tell Me What You&apos;re Looking For</Button>
          {hasApprovedSearch && (
            <TrackedLink
              href={propertySearch.url}
              event="listing_search_click"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-warm-white"
            >
              Browse Current Listings
            </TrackedLink>
          )}
        </div>
      </PageHero>

      <ProcessSteps heading="How buying works" steps={steps} />

      <section className="py-16">
        <Container className="max-w-2xl">
          <p className="text-sm leading-relaxed text-slate">
            Before touring homes, Angelica will walk you through how buyer representation works and what it means for
            you — representation terms are discussed and documented up front, consistent with current industry
            practice.
          </p>
        </Container>
      </section>

      <section id="buyer-form" className="py-16 md:py-24">
        <Container className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Want Angelica to send you matches personally?
          </h2>
          <p className="mt-3 text-sm text-slate">
            Share a bit about what you&apos;re looking for and she&apos;ll follow up directly.
          </p>
          <div className="mt-8">
            <LeadForm
              intent="buyer"
              submitLabel="Send to Angelica"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "timeline",
                  label: "Timeline",
                  type: "select",
                  options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
                },
                { name: "priceRange", label: "Price range", type: "text", placeholder: "e.g. $400k–$500k" },
                { name: "lookingFor", label: "What are you looking for?", type: "text" },
                { name: "message", label: "Optional message", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
