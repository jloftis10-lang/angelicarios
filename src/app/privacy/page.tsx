import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { agent, brand, contact } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-navy">Privacy Policy</h1>
        <div className="prose mt-6 flex flex-col gap-4 text-sm leading-relaxed text-slate">
          <p>
            This page describes how {brand.name} handles information submitted through this website. It is a
            placeholder pending formal legal review — see docs/launch-checklist.md — and should not be treated as a
            complete privacy policy until reviewed.
          </p>
          <p>
            Information you submit through a form on this site (such as your name, email, phone number, and message)
            is used only to respond to your inquiry about real-estate services. It is not sold to third parties.
          </p>
          <p>
            This site may use analytics tools to understand general site usage. See the site&apos;s cookie/analytics
            configuration for details.
          </p>
          <p>
            Questions about this policy can be directed to {agent.firstName} at{" "}
            <a href={contact.emailHref} className="underline">
              {agent.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
