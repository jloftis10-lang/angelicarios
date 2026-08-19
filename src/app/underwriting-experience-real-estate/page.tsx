import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { AdvisoryDisclaimer } from "@/components/sections/AdvisoryDisclaimer";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { siteUrl, brand } from "@/config/site";

export const metadata: Metadata = {
  title: "Why Underwriting Experience Matters in a Home Purchase",
  description:
    "How mortgage finance and underwriting experience changes what a real-estate agent notices — financing readiness, appraisal risk, contingencies, and closing timelines — and where that experience stops.",
  alternates: { canonical: "/underwriting-experience-real-estate" },
};

const topics = [
  {
    heading: "Financing readiness is not the same as pre-qualification",
    body: [
      "A pre-qualification is a light-touch estimate. A pre-approval involves real documentation. The gap between them is where a lot of deals get into trouble, because a seller reading an offer cannot always tell which one they are looking at.",
      "The practical question is what your lender has actually verified: income documentation, assets, credit, and employment. If those have not been reviewed by someone who can commit, your offer carries more risk than it appears to — and in a competitive situation, that difference matters.",
    ],
  },
  {
    heading: "Appraisal risk deserves attention before you write the offer",
    body: [
      "An appraisal that comes in below the contract price forces a decision nobody enjoys: renegotiate, bring cash to close the gap, or walk. Thinking about this before you write is far more comfortable than reacting to it two weeks in.",
      "Whether a specific price is likely to appraise depends on comparable sales, the condition of the home relative to those comparables, and how unusual the property is for its area. A distinctive home in a neighborhood of conventional ones carries more appraisal uncertainty, regardless of whether it is genuinely worth the money.",
    ],
  },
  {
    heading: "Contingencies are the structure of your protection",
    body: [
      "Financing, appraisal, and inspection-related contingencies each protect against a different failure. Waiving one to strengthen an offer is a legitimate strategy — but it should be a deliberate decision with a clear understanding of what you are giving up, not something agreed to in a hurry.",
      "The right question is not whether waiving a contingency makes an offer stronger. It obviously does. The question is what happens to you specifically if the thing that contingency protects against actually occurs.",
    ],
  },
  {
    heading: "Timelines are commitments, not estimates",
    body: [
      "The dates in a purchase contract create real obligations. Underwriting, appraisal scheduling, and document turnaround all take time, and delays in any of them compound rather than absorb.",
      "Knowing roughly how long each step tends to take makes it easier to agree to dates you can actually meet — and to recognize when a proposed timeline is optimistic before you sign up for it.",
    ],
  },
  {
    heading: "Lender communication is a real variable",
    body: [
      "How responsive your lender is, and how early they surface issues, meaningfully affects whether a transaction stays on schedule. This is worth weighing alongside rate when you choose who to work with.",
      "Documentation requests during underwriting are normal, not a sign something is wrong. Answering them quickly is one of the few parts of the process a buyer directly controls.",
    ],
  },
  {
    heading: "Inspection issues and financing issues are different problems",
    body: [
      "An inspection finding is a question about the property and what you want to do about it. A financing issue is a question about whether the transaction can close at all. They get discussed in the same conversations, but they carry different urgency and different remedies.",
      "Some conditions sit in both categories — certain property issues can affect what a lender will finance. Recognizing which category something falls into changes how you respond to it.",
    ],
  },
  {
    heading: "Closing readiness starts well before closing week",
    body: [
      "Funds properly sourced and seasoned, documentation current, and no unexpected changes to your credit or employment. Opening a new account or financing furniture before closing has derailed transactions that were otherwise finished.",
      "The general rule for the period between contract and closing: change nothing about your financial picture without asking your lender first.",
    ],
  },
];

export default function UnderwritingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Underwriting Experience Matters in a Home Purchase",
    description:
      "How mortgage finance and underwriting experience changes what a real-estate agent notices during a transaction — and where that experience stops.",
    author: { "@type": "Person", name: brand.name },
    url: `${siteUrl}/underwriting-experience-real-estate`,
  };

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Underwriting Experience", href: "/underwriting-experience-real-estate" }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Finance perspective</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Why underwriting experience matters in a home purchase
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            Most agents see a transaction from the property side. Angelica spent more than 15 years in mortgage
            finance and underwriting before real estate, which means she also sees the financing side — the
            documentation, the risk factors, and the questions that surface once a file is in underwriting.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Here is what that background actually changes, and — just as importantly — where it stops.
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

      <section className="py-10">
        <Container className="max-w-3xl">
          <AngelicasTake>
            My job is to help you ask better questions and prepare more thoroughly — not to replace your lender. When
            a financing question comes up that belongs with them, I will tell you so rather than guess at it.
          </AngelicasTake>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Where this experience stops</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Angelica is a licensed real-estate salesperson. She is not acting as your lender, mortgage broker,
            financial adviser, attorney, tax adviser, contractor, or inspector, and nothing on this page is financial,
            legal, or tax advice. Loan decisions come from a lender. Legal questions go to an attorney. Property
            condition questions go to a licensed inspector.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            What the background does is help you walk into those conversations knowing what to ask.
          </p>
        </Container>
      </section>

      <AdvisoryDisclaimer />

      <RelatedGuides slugs={["due-diligence-in-georgia", "buying-remotely-in-georgia", "buying-an-older-home-peachtree-city"]} />

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Questions about your own situation?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            Whether you&apos;re buying, selling, or evaluating an investment property, a conversation is a reasonable
            place to start.
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
