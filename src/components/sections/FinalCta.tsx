import { agent, contact, serviceAreas } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PeachOrnament } from "@/components/brand/Logo";

/**
 * The closing block on most pages, and the site's one deliberately dark
 * surface. Two reasons it earns that: it anchors a long cream page with
 * something that reads upscale rather than washed out, and navy is the
 * only background where the peach accent clears AA as text (5.51:1), so
 * the brand colour gets a real home instead of appearing only as ornament.
 *
 * Keep this the one dark block on any page — its weight is the whole
 * point, and a second would cancel it out.
 *
 * The panel is a child of Container rather than Container itself. Putting
 * padding straight on Container overrides its gutter, which made the card
 * run edge-to-edge on mobile — unnoticeable when the fill was a near-
 * background sand, very noticeable in navy.
 */
export function FinalCta() {
  const hasPhone = !agent.phone.startsWith("[");
  const hasEmail = !agent.email.startsWith("[");

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy p-8 sm:p-10 md:p-16">
          <div className="flex items-center gap-3">
            <PeachOrnament className="h-5 w-auto shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peach">
              {serviceAreas.primary} &amp; {serviceAreas.secondary}
            </p>
          </div>

          <h2 className="font-display text-3xl font-semibold text-warm-white md:text-4xl">Thinking about a move?</h2>

          <p className="max-w-xl text-base leading-relaxed text-sand">
            Whether you&apos;re buying, selling, relocating, or just starting to explore your options, a conversation is
            a good place to begin.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="onDark">
              Talk With Angelica
            </Button>
            {hasPhone && (
              <Button href={contact.phoneHref} variant="onDarkSecondary">
                Call
              </Button>
            )}
            {hasPhone && (
              <Button href={contact.smsHref} variant="onDarkSecondary">
                Text
              </Button>
            )}
            {hasEmail && (
              <Button href={contact.emailHref} variant="onDarkSecondary">
                Email
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
