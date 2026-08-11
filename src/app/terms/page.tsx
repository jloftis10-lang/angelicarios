import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { brand } from "@/config/site";

export const metadata: Metadata = {
  title: "Website Disclaimer",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-navy">Website Disclaimer</h1>
        <div className="prose mt-6 flex flex-col gap-4 text-sm leading-relaxed text-slate">
          <p>
            This is a placeholder disclaimer pending formal legal review — see docs/launch-checklist.md.
          </p>
          <p>
            Content on this site, including any market statistics, is provided for general informational purposes
            and is not guaranteed to be current or complete. It does not constitute legal, financial, or tax advice.
          </p>
          <p>
            {brand.name} is a real-estate licensee; brokerage affiliation and license information appear in the site
            footer. Equal Housing Opportunity.
          </p>
        </div>
      </Container>
    </section>
  );
}
