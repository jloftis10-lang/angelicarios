import { agent, contact } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  const hasPhone = !agent.phone.startsWith("[");
  const hasEmail = !agent.email.startsWith("[");

  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
        <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">Thinking about a move?</h2>
        <p className="max-w-xl text-base leading-relaxed text-slate">
          Whether you&apos;re buying, selling, relocating, or just starting to explore your options, a conversation is a good place to begin.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Talk With Angelica</Button>
          {hasPhone && (
            <Button href={contact.phoneHref} variant="secondary">
              Call
            </Button>
          )}
          {hasPhone && (
            <Button href={contact.smsHref} variant="secondary">
              Text
            </Button>
          )}
          {hasEmail && (
            <Button href={contact.emailHref} variant="secondary">
              Email
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
