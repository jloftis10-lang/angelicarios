import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { villages } from "@/config/villages";

export const metadata: Metadata = {
  title: "Moving to Peachtree City GA: Relocation Guide",
  description:
    "A practical starter guide to moving to Peachtree City: villages, golf-cart paths, nearby communities, home-search planning, and relocation questions.",
  alternates: { canonical: "/guide" },
};

const planningQuestions = [
  "How often will you commute into Atlanta or to the airport?",
  "How important is direct access to the multi-use path network?",
  "Do you prefer established neighborhoods or newer construction?",
  "How much yard and outdoor space fits the way you live?",
  "Will you need to tour remotely before visiting in person?",
  "Are nearby communities such as Fayetteville, Tyrone, Senoia, or Newnan also in play?",
];

export default function GuidePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Relocation Guide", href: "/guide" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Peachtree City relocation</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            The Peachtree City Starter Guide
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            A practical orientation for people considering a move to Peachtree City and South Metro Atlanta — before
            you start booking showings or trying to make sense of neighborhoods from a map.
          </p>
        </Container>
      </section>

      <section className="pb-14">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-canvas p-7">
            <h2 className="font-display text-2xl font-semibold text-navy">Why Peachtree City feels different</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Peachtree City is organized around five villages and a large multi-use path network. Golf carts are part
              of everyday transportation for many residents, and housing choices vary meaningfully by village, age,
              lot, access, and proximity to daily destinations.
            </p>
            <Link href="/peachtree-city-ga" className="mt-5 inline-block text-sm font-medium text-navy underline underline-offset-4">
              Explore the Peachtree City overview
            </Link>
          </div>
          <div className="rounded-3xl border border-sand/70 bg-white p-7">
            <h2 className="font-display text-2xl font-semibold text-navy">Angelica&apos;s relocation perspective</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Angelica moved from Newport Beach, California to Georgia herself. That experience is why her relocation
              process starts with orientation: understand the community, narrow your priorities, then decide which
              homes deserve your attention.
            </p>
            <Link href="/relocate" className="mt-5 inline-block text-sm font-medium text-navy underline underline-offset-4">
              See how relocation help works
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-navy">The five villages</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
            These are starting points, not rankings. The right fit depends on the home itself, your routines, and the
            tradeoffs that matter to you.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {villages.map((village) => (
              <article key={village.slug} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{village.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{village.summary}</p>
                <Link
                  href={`/peachtree-city-ga/${village.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-navy underline underline-offset-4"
                >
                  Read the {village.name} guide
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Questions to answer before touring</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate">
              {planningQuestions.map((question) => (
                <li key={question} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Nearby areas worth understanding</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              A Peachtree City search often overlaps with Fayetteville, Trilith, Tyrone, Senoia, Newnan, and other
              parts of Fayette and Coweta counties. Comparing those areas can clarify what you value most instead of
              treating city limits as the first decision.
            </p>
            <Link href="/blog/living-near-trilith" className="mt-5 inline-block text-sm font-medium text-navy underline underline-offset-4">
              Read about living near Trilith
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 rounded-3xl bg-canvas p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Want help applying the guide to your move?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Share your name and email and Angelica can follow up personally about your relocation questions and next
              steps.
            </p>
          </div>
          <LeadForm
            intent="guide"
            submitLabel="Send to Angelica"
            successMessage="Thanks — Angelica will follow up personally."
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
