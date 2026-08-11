import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Peachtree City Starter Guide",
  description: "What to know about the villages, paths, lifestyle, and moving to Peachtree City.",
  alternates: { canonical: "/guide" },
};

// TODO(launch): Replace this page with a link to (or embed of) the finished
// guide asset once it exists. For now the page itself works as the "guide" —
// a signup here lets Angelica follow up personally with the details.
export default function GuidePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Guide", href: "/guide" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            The Peachtree City Starter Guide
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            What to know about the villages, paths, lifestyle, and moving to Peachtree City.
          </p>
          <div className="mt-8">
            <LeadForm
              intent="guide"
              submitLabel="Send Me the Guide"
              successMessage="Angelica will send the guide your way personally."
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
