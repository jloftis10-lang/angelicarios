import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteImage } from "@/components/ui/SiteImage";
import { communities } from "@/config/communities";
import ptcPathWalkers from "@/assets/images/ptc-path-walkers.jpg";

export const metadata: Metadata = {
  title: "Communities — Peachtree City & South Metro Atlanta",
  description:
    "Explore Peachtree City, Trilith, Fayetteville, Newnan, Tyrone, and Senoia — the South Metro Atlanta communities Angelica serves.",
  alternates: { canonical: "/communities" },
};

export default function CommunitiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Communities", href: "/communities" }]} />
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">South Metro Atlanta</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Find your place along the way.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate">
              Explore Peachtree City and the surrounding communities — a starting orientation, not a ranking. The
              right fit depends on your priorities and what daily life looks like for you.
            </p>
          </div>
          <SiteImage
            src={ptcPathWalkers}
            alt="Two people walking along a shaded multi-use path beside a lake"
            aspect="aspect-[4/5]"
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <article key={community.slug} className="rounded-2xl border border-sand/60 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-sage">{community.county}</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-navy">{community.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{community.summary}</p>
              <Link href={community.href} className="mt-4 inline-block text-sm font-medium text-navy underline underline-offset-4">
                Ask about {community.name}
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Let&apos;s find the area that fits your life.
          </h2>
          <Button href="/relocate">Plan Your Relocation</Button>
        </Container>
      </section>
    </>
  );
}
