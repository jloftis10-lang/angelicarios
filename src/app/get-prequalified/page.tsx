import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MortgageReadiness } from "@/components/MortgageReadiness";
import { documentChecklist, keepItCleanRules } from "@/config/mortgageReadiness";
import { siteUrl, brand, expertise } from "@/config/site";

export const metadata: Metadata = {
  title: "How to Get Prequalified for a Mortgage in Georgia",
  description:
    "What prequalification and preapproval actually mean, what documents to gather, what underwriters look at, and a short readiness check — from a Peachtree City Realtor with 15+ years in mortgage finance.",
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
      "No. Prequalification and preapproval come from a licensed mortgage lender, not from a real-estate agent. What Angelica can do is help you arrive at that conversation prepared, explain what the lender is likely to ask and why, and introduce you to lenders if you'd like an introduction.",
  },
  {
    question: "Do I need to be prequalified before I start looking?",
    answer:
      "You can look at any point, and plenty of people start browsing well before they talk to anyone. But before touring seriously — and certainly before writing an offer — a letter is close to essential. Many listing agents will ask for one with any offer, and without it your offer may not be presented on equal footing.",
  },
  {
    question: "Does getting prequalified hurt my credit?",
    answer:
      "Ask the lender exactly what they're doing before they do it, since practices vary. Credit scoring models are generally designed so that shopping among mortgage lenders within a short window counts as a single inquiry rather than several. That is a question for your lender, not for a Realtor.",
  },
  {
    question: "How long is a preapproval letter good for?",
    answer:
      "They expire, and the window is typically measured in weeks or a few months rather than indefinitely. Ask your lender for the date on yours and what would cause it to change — a job change, a new debt, or a shift in your credit picture can all matter.",
  },
  {
    question: "I'm self-employed. Is this going to be harder?",
    answer:
      "Not harder so much as more documented. Self-employed borrowers get approved routinely; the difference is that income is established through returns and business records rather than a pay stub, and that takes longer to assemble. Starting earlier is the whole strategy.",
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
        title="Getting prequalified, explained properly."
        copy="Most buyers are told to 'get prequalified' without being told what that means, what it takes, or why the order matters. Here's the whole picture — including the parts that trip people up."
      />

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Prequalified, preapproved, and why the difference matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Prequalification</strong> is a lender&apos;s read on what you
            told them. It&apos;s quick, it&apos;s useful for setting expectations, and it isn&apos;t verified.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            <strong className="font-semibold text-ink">Preapproval</strong> means the lender has looked at your
            documents — income, assets, credit — and issued a letter on that basis. It takes longer to get and it is
            worth considerably more when an offer is on the table.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Neither one is a loan commitment. The final decision comes after a full underwriting review of both you and
            the property, which is a different step again. Anyone who tells you a preapproval letter guarantees a
            closing is overstating it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            The practical consequence is simple: if you intend to write an offer, get the strongest letter you can
            before you fall for a house, not after.
          </p>
        </Container>
      </section>

      <section className="bg-canvas py-12 md:py-16">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Why this page exists</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
            Angelica spent {expertise.yearsInFinance}+ years on the other side of this.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Before real estate, Angelica worked in mortgage finance and underwriting — the side of the transaction that
            reads the file and decides what it actually supports. That doesn&apos;t make her your lender, and it
            doesn&apos;t let her approve anything. What it means is that she has seen what stalls a loan, and most of
            it is preventable with preparation rather than luck.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Nearly every avoidable delay traces back to the same handful of things: a deposit nobody can explain, an
            income structure documented too late, a gap in employment history that surfaces at the worst moment, or a
            new line of credit opened between preapproval and closing.
          </p>
          <div className="mt-6">
            <Button href="/underwriting-experience-real-estate" variant="ghost" className="px-0">
              Why underwriting experience matters →
            </Button>
          </div>
        </Container>
      </section>

      <MortgageReadiness />

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">What to gather before you apply</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Lenders differ, and yours will give you their own list — this is the documentation that comes up almost
            every time. Assembling it in advance is the single biggest thing you control about how fast this goes.
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
            Send documents only to your lender, through whatever secure method they provide — never by ordinary email,
            and never to a real-estate agent. Angelica does not need and will not ask for your financial documents.
          </p>
        </Container>
      </section>

      <section className="bg-canvas py-12 md:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            After you have a letter: don&apos;t disturb the file
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            A preapproval describes you at a moment in time. Lenders re-check before closing, and deals fall apart at
            the last minute over things that felt harmless when they happened.
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
              Angelica Rios is a licensed real-estate agent, not a mortgage lender, loan originator, credit counselor,
              or tax adviser. Nothing on this page is a loan offer, a commitment to lend, an assessment of whether you
              qualify, or advice about a specific loan product. Prequalification, preapproval, rates, terms, and
              approval decisions come from licensed lenders, and the details vary by lender, program, and your own
              circumstances. Use this page to prepare — then take the actual questions to a lender.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
