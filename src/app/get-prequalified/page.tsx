import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MortgageReadiness } from "@/components/MortgageReadiness";
import { documentChecklist, keepItCleanRules } from "@/config/mortgageReadiness";
import { siteUrl, brand } from "@/config/site";

export const metadata: Metadata = {
  title: "How to Get Prequalified for a Mortgage in Georgia",
  description:
    "What prequalification and preapproval mean, what documents to gather, what lenders may review, and a short readiness check — from a Peachtree City Realtor with mortgage lending experience.",
  alternates: { canonical: "/get-prequalified" },
};

const faqs = [
  {
    question: "What's the difference between prequalified and preapproved?",
    answer:
      "Prequalification is based on information you give a lender, usually in a conversation, without documents being verified. Preapproval means the lender has actually reviewed your documentation. Both produce a letter, but they do not carry the same weight — a seller comparing two offers can tell the difference, and so can the listing agent advising them.",
  },
  {
    question: "Can Angelica prequalify me?",
    answer:
      "No. Prequalification and preapproval come from a licensed mortgage lender, not from a real-estate agent. What Angelica can do is help you arrive at that conversation prepared, explain common financing questions, and introduce you to lenders if you'd like an introduction.",
  },
  {
    question: "Do I need to be prequalified before I start looking?",
    answer:
      "You can look at any point, and plenty of people start browsing well before they talk to anyone. But before touring seriously — and certainly before writing an offer — a lender letter is often important. Many listing agents will ask for one with an offer.",
  },
  {
    question: "Does getting prequalified hurt my credit?",
    answer:
      "Ask the lender exactly what they're doing before they do it, since practices vary. Questions about credit pulls and scoring belong with your lender, not your real-estate agent.",
  },
  {
    question: "How long is a preapproval letter good for?",
    answer:
      "Preapproval letters expire. Ask your lender for the date on yours and what changes in employment, debt, assets, or credit could affect it.",
  },
  {
    question: "I'm self-employed. Is this going to be harder?",
    answer:
      "Self-employed borrowers are approved every day, but the documentation can be different. Ask a lender early what tax returns, business records, and other documentation they will need so you have time to gather it.",
  },
];

export default function GetPrequalifiedPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Get Prequalified for a Mortgage in Georgia",
    author: { "@type": "Person", name: brand.name },
    publisher: { "@type": "Person", name: brand.name },
    url: `${siteUrl}/get-prequalified`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, articleJsonLd]) }}
      />
      <Breadcrumbs items={[{ label: "Get Prequalified", href: "/get-prequalified" }]} />

      <PageHero
        eyebrow="Financing"
        title="Getting prequalified, explained clearly."
        copy="Most buyers are told to 'get prequalified' without being told what that means, what to gather, or what happens next. This guide helps you prepare for the lender conversation."
      />

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Prequalified, preapproved, and why the difference matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Prequalification</strong> is generally an early lender estimate
            based on information you provide. It can help set expectations, but it is not the same as a fully reviewed
            loan file.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Preapproval</strong> typically means the lender has reviewed more
            documentation before issuing a letter. The exact process varies by lender and program.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Neither one guarantees a closing. Final approval depends on the lender, the borrower&apos;s documentation, the
            property, and the loan program.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            The practical takeaway: if you intend to write an offer, talk with a lender early enough that financing is
            not the last piece you are trying to solve.
          </p>
        </Container>
      </section>

      <section className="bg-canvas py-12 md:py-16">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Why this page exists</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
            Angelica has worked on the mortgage side of the home-buying process.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Before becoming a Georgia real-estate professional, Angelica worked in mortgage lending and sales. Her
            experience included helping clients understand loan programs, developing leads, supporting borrowers through
            the financing process, and managing mortgage-sales activity. She was a top producer at Canyon Capital Funding
            in 2005, 2006, and 2007.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            That does not make her your lender and does not give her authority to approve a loan. It gives her useful
            context for recognizing when a financing question belongs in the conversation and when the lender needs to
            answer it directly.
          </p>
          <div className="mt-6">
            <Button href="/underwriting-experience-real-estate" variant="ghost" className="px-0">
              How mortgage lending experience helps buyers →
            </Button>
          </div>
        </Container>
      </section>

      <MortgageReadiness />

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">What to gather before you apply</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Lenders differ, and yours will give you their own list. The checklist below is a planning aid so you can
            start organizing common categories of documents before the conversation.
          </p>
          <div className="mt-8 flex flex-col gap-6">
            {documentChecklist.map((group) => (
              <div key={group.title} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-navy">{group.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate">
            Send financial documents only to your lender through the secure method they provide. Angelica does not
            need and will not ask you to send her sensitive mortgage documentation.
          </p>
        </Container>
      </section>

      <section className="bg-canvas py-12 md:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            After you have a letter: protect your financial picture
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            A preapproval describes your circumstances at a point in time. Before making significant financial changes
            during a transaction, ask your lender whether they could affect the loan.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {keepItCleanRules.map((rule) => (
              <li
                key={rule}
                className="rounded-2xl border border-sand/60 bg-white p-5 text-sm leading-relaxed text-slate"
              >
                {rule}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Common questions</h2>
          <div className="mt-8 flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-lg font-semibold text-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-slate">
            More questions about the process are answered on the{" "}
            <Link href="/faq" className="underline underline-offset-4 hover:text-navy">
              FAQ page
            </Link>
            , and the{" "}
            <Link href="/buy" className="underline underline-offset-4 hover:text-navy">
              buying page
            </Link>{" "}
            covers what happens once you&apos;re ready to look.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-sand/60 bg-canvas p-6 md:p-8">
            <h2 className="font-display text-lg font-semibold text-navy">An important distinction</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Angelica Rios is a licensed real-estate professional, not a mortgage lender, loan originator, credit
              counselor, or tax adviser. Nothing on this page is a loan offer, a commitment to lend, an assessment of
              whether you qualify, or advice about a specific loan product. Prequalification, preapproval, rates, terms,
              and approval decisions come from licensed lenders, and the details vary by lender, program, and your own
              circumstances. Use this page to prepare — then take loan-specific questions to a lender.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
