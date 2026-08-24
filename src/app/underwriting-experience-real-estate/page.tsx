import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdvisoryDisclaimer } from "@/components/sections/AdvisoryDisclaimer";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { siteUrl, brand } from "@/config/site";

export const metadata: Metadata = {
  title: "How Mortgage Lending Experience Helps Home Buyers",
  description:
    "How Angelica Rios's mortgage lending and finance background helps buyers understand financing readiness, appraisal risk, lender communication, contingencies, and closing timelines.",
  alternates: { canonical: "/underwriting-experience-real-estate" },
};

const topics = [
  {
    heading: "Financing readiness starts before the offer",
    body: [
      "Angelica's mortgage background included helping borrowers understand loan programs, qualification, and the financing process. That experience makes financing readiness part of the real-estate conversation from the beginning rather than something considered only after a contract is signed.",
      "The practical question is not simply whether a buyer has spoken with a lender, but how far the lender has gone in reviewing the information needed to support the purchase.",
    ],
  },
  {
    heading: "Appraisal risk deserves attention before you write the offer",
    body: [
      "An appraisal that comes in below the contract price can force a buyer and seller to make difficult decisions. Thinking about that possibility before writing an offer is more useful than reacting to it after the transaction is underway.",
      "Comparable sales, property condition, and how unusual a home is for its area can all affect the conversation around value and financing.",
    ],
  },
  {
    heading: "Contingencies should be understood, not rushed",
    body: [
      "Financing, appraisal, and inspection-related contingencies protect against different risks. The right strategy depends on the buyer's circumstances and the specific transaction.",
      "A stronger offer is not automatically a better decision if the buyer does not understand what protections are being reduced or removed.",
    ],
  },
  {
    heading: "Lender communication matters",
    body: [
      "Responsive communication and early identification of documentation issues can make a meaningful difference in keeping a transaction on schedule.",
      "Angelica's years in mortgage sales taught her how many moving pieces sit behind a financing approval and why quick responses to lender requests matter.",
    ],
  },
  {
    heading: "Inspection issues and financing issues are different problems",
    body: [
      "An inspection finding is primarily a property-condition question. A financing issue is a question about whether the purchase can be funded on the agreed terms. The two can overlap, but they call for different conversations and different professionals.",
    ],
  },
  {
    heading: "Closing readiness starts well before closing week",
    body: [
      "Documentation, assets, credit, employment, appraisal, and lender conditions can all affect the path to closing. Buyers should avoid major financial changes during a transaction without first speaking with their lender.",
    ],
  },
];

export default function MortgageExperiencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Mortgage Lending Experience Helps Home Buyers",
    description:
      "How Angelica Rios's mortgage lending and finance experience informs the financing questions buyers encounter during a real-estate transaction.",
    author: { "@type": "Person", name: brand.name },
    url: `${siteUrl}/underwriting-experience-real-estate`,
  };

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Mortgage & Finance Experience", href: "/underwriting-experience-real-estate" }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Mortgage & finance perspective</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            How mortgage lending experience helps home buyers
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            Before becoming a Georgia real-estate professional, Angelica worked in mortgage lending and sales. She
            helped borrowers understand loan programs, qualification, and the financing process; she was a top producer
            at Canyon Capital Funding in 2005, 2006, and 2007 and later exceeded quotas by as much as 85% in another
            mortgage role.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            That background does not make her the buyer&apos;s lender. It does mean she understands how closely the home,
            the offer, the financing, and the closing timeline interact.
          </p>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-12">
            {topics.map((topic) => (
              <article key={topic.heading}>
                <h2 className="font-display text-2xl font-semibold text-navy">{topic.heading}</h2>
                {topic.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Where this experience stops</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Angelica is acting as a real-estate professional, not as a lender, mortgage broker, financial adviser,
            attorney, tax adviser, contractor, or inspector. Loan decisions and loan-specific advice come from the
            buyer&apos;s lender. Legal questions belong with an attorney, and property-condition questions belong with the
            appropriate licensed professionals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            The value of her background is that she can help buyers recognize financing questions earlier and know when
            to bring the right professional into the conversation.
          </p>
        </Container>
      </section>

      <AdvisoryDisclaimer />

      <RelatedGuides slugs={["due-diligence-in-georgia", "buying-remotely-in-georgia", "buying-an-older-home-peachtree-city"]} />

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Questions about your own home search?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            Whether you&apos;re buying, relocating, or evaluating an investment property, start with the goals and
            constraints that matter to you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">Talk With Angelica</Button>
            <Button href="/buy" variant="secondary">
              See How Buying Works
            </Button>
          </div>
          <p className="text-sm text-slate">
            Investing rather than buying to live in?{" "}
            <Link href="/invest" className="underline underline-offset-4 hover:text-navy">
              Send your buy box instead
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
