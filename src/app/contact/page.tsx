import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrackedLink } from "@/components/TrackedLink";
import { agent, contact } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Angelica",
  description: "Start a conversation with Angelica about buying, selling, or relocating to Peachtree City.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const hasPhone = !agent.phone.startsWith("[");
  const hasEmail = !agent.email.startsWith("[");

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Start with a conversation.
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact-form" variant="secondary">
              Buying
            </Button>
            <Button href="#contact-form" variant="secondary">
              Selling
            </Button>
            <Button href="#contact-form" variant="secondary">
              Relocating
            </Button>
          </div>
          {(hasPhone || hasEmail) && (
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate">
              {hasPhone && (
                <>
                  <TrackedLink href={contact.phoneHref} event="phone_click" params={{ location: "contact_page" }} className="hover:text-navy">
                    Call {agent.phone}
                  </TrackedLink>
                  <TrackedLink href={contact.smsHref} event="text_click" params={{ location: "contact_page" }} className="hover:text-navy">
                    Text
                  </TrackedLink>
                </>
              )}
              {hasEmail && (
                <a href={contact.emailHref} className="hover:text-navy">
                  Email
                </a>
              )}
            </div>
          )}
        </Container>
      </section>

      <section id="contact-form" className="pb-16 md:pb-24">
        <Container className="max-w-xl">
          <LeadForm
            intent="contact"
            submitLabel="Send"
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel" },
              {
                name: "interest",
                label: "I'm interested in",
                type: "select",
                required: true,
                options: ["Buying", "Selling", "Relocating", "Just exploring"],
              },
              {
                name: "timeline",
                label: "Timeline",
                type: "select",
                options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
              },
              {
                name: "preferredContact",
                label: "Preferred contact method",
                type: "select",
                options: ["Call", "Text", "Email"],
              },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
