import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteImage } from "@/components/ui/SiteImage";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { communities } from "@/config/communities";
import ptcPathWalkers from "@/assets/images/ptc-path-walkers.jpg";

export const metadata: Metadata = {
  title: "Communities — Peachtree City & South Metro Atlanta",
  description:
    "Compare Peachtree City, Trilith, Fayetteville, Tyrone, Senoia, Newnan, Serenbe, Palmetto, and Sharpsburg — how these South Metro Atlanta communities differ and which are worth exploring for your move.",
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
              Most home searches around here span more than one community. These guides are an orientation, not a
              ranking — the right fit depends on your priorities and what your weeks actually look like.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/area-match">See Which Areas Fit You</Button>
              <Button href="/guide" variant="secondary">
                Read the Relocation Guide
              </Button>
            </div>
          </div>
          <SiteImage
            src={ptcPathWalkers}
            alt="Two people walking along a shaded multi-use path beside a lake"
            aspect="aspect-[4/5]"
          />
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <article key={community.slug} className="flex flex-col rounded-2xl border border-sand/60 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-sage">{community.county}</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-navy">{community.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{community.summary}</p>
              <Link
                href={community.href}
                className="mt-4 inline-block text-sm font-medium text-navy underline underline-offset-4"
              >
                {community.slug === "peachtree-city"
                  ? "Explore Peachtree City"
                  : `Read the ${community.name} guide`}
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <AngelicasTake>
            Almost nobody who contacts me has narrowed it to one community, and that is completely normal. The useful
            first step is usually working out which tradeoff you care about most — path access, lot size, house age,
            or the drive — because that answers the community question faster than touring ever will.
          </AngelicasTake>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Let&apos;s find the area that fits your life.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            Tell Angelica what matters most and she&apos;ll help you narrow it down — including telling you when an
            area you are considering probably is not the right fit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/relocate">Plan Your Relocation</Button>
            <Button href="/contact" variant="secondary">
              Talk With Angelica
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
