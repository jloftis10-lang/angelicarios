import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { faqCategories } from "@/config/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about buying, selling, and relocating to Peachtree City and South Metro Atlanta with Angelica.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            Common questions about buying, selling, and relocating. If something isn&apos;t covered here, that&apos;s
            what a conversation is for.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-12">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h2 className="font-display text-2xl font-semibold text-navy">{category.category}</h2>
                <div className="mt-4 flex flex-col divide-y divide-sand/60 rounded-2xl border border-sand/60 bg-white">
                  {category.items.map((item) => (
                    <details key={item.question} className="group px-6 py-4 open:pb-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-base font-medium text-ink marker:content-none">
                        {item.question}
                        <span className="shrink-0 text-slate transition-transform group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">Still have questions?</h2>
          <Button href="/contact">Talk With Angelica</Button>
        </Container>
      </section>
    </>
  );
}
