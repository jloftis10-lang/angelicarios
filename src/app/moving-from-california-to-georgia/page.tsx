import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AngelicasTake } from "@/components/sections/AngelicasTake";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { LeadForm } from "@/components/forms/LeadForm";
import { SiteImage } from "@/components/ui/SiteImage";
import { siteUrl, brand } from "@/config/site";
import angelicaPortraitBlue from "@/assets/images/angelica-portrait-blue.jpg";

export const metadata: Metadata = {
  title: "Moving From California to Georgia",
  description:
    "What relocating from California to Georgia actually involves — practical differences to expect, how to search remotely, and guidance from an agent who made the move herself.",
  alternates: { canonical: "/moving-from-california-to-georgia" },
};

const differences = [
  {
    title: "Housing gets bigger and lots change shape",
    copy: "Buyers arriving from California are often surprised by how the same budget translates. That extra space comes with more roof, more systems, and more yard to maintain — which is worth planning for rather than discovering in year two.",
  },
  {
    title: "Trees, humidity, and seasons",
    copy: "The climate is genuinely different. Tree cover, humidity, and real seasons affect roofs, gutters, HVAC load, drainage, and yard work in ways a Southern California house never required you to think about.",
  },
  {
    title: "Different transaction customs",
    copy: "Georgia's purchase process, standard timelines, and closing conventions differ from California's. Neither is harder — but assuming your last transaction is a template for this one causes avoidable surprises.",
  },
  {
    title: "Community structure varies more",
    copy: "In this part of Georgia, the difference between a planned community like Peachtree City and a conventional suburb nearby is substantial. Choosing between them is a real decision, not a detail.",
  },
];

const remoteSteps = [
  {
    title: "Get oriented before you search",
    copy: "Understand how the communities relate to each other first. Listings mean very little until you know what area you are actually looking at.",
  },
  {
    title: "Narrow to two or three areas",
    copy: "Trying to evaluate the whole South Metro area at once wastes the visit. Arrive with a short list you can genuinely test.",
  },
  {
    title: "Plan the trip around questions, not just showings",
    copy: "Drive the commute at real hours. Walk a path connection. See a neighborhood on a weekday evening, not only a Saturday afternoon.",
  },
  {
    title: "Decide what the trip has to answer",
    copy: "Know in advance what would rule an area in or out, so you come home with a decision rather than more impressions.",
  },
];

export default function MovingFromCaliforniaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Moving From California to Georgia",
    description:
      "What relocating from California to Georgia actually involves, and how to run a remote home search in the Peachtree City area.",
    author: { "@type": "Person", name: brand.name },
    url: `${siteUrl}/moving-from-california-to-georgia`,
  };

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Moving From California", href: "/moving-from-california-to-georgia" }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Relocation</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Moving from California to Georgia
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate">
              Angelica relocated from Newport Beach, California to Georgia herself. She previously worked in real
              estate and held a California license there, so she has seen this particular move from both sides — as
              the person making it and as the agent helping others through it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#move-form">Tell Angelica About Your Move</Button>
              <Button href="/guide" variant="secondary">
                Read the Peachtree City Guide
              </Button>
            </div>
          </div>
          <SiteImage
            src={angelicaPortraitBlue}
            alt="Angelica Rios, who relocated from Newport Beach, California to Georgia"
            aspect="aspect-[4/5]"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            It is more than a real-estate transaction
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            A cross-country move means leaving a familiar market, a familiar climate, and a familiar set of routines,
            then learning a new community from scratch — schools, doctors, where you buy groceries, which route you
            take. The house is one decision inside a much larger adjustment.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Most of the difficulty in these moves is not finding a property. It is having enough context to know
            whether the property is in the right place for the life you are rebuilding.
          </p>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">Practical differences to expect</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {differences.map((item) => (
              <div key={item.title} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate">
            Tax, insurance, and cost-of-living differences are real too, but they depend enough on your specific
            situation that they belong with your accountant and an insurance agent rather than a general guide.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">Running the search from 2,000 miles away</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {remoteSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-canvas p-6">
                <span className="font-display text-2xl text-sage">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="max-w-3xl">
          <AngelicasTake>
            The mistake I see most from out-of-state buyers is trying to evaluate everything at once on a single trip.
            You will learn far more from two areas explored properly than from nine drive-bys. Narrow before you fly.
          </AngelicasTake>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">Where to start reading</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            If Peachtree City is on your list, start with the{" "}
            <Link href="/peachtree-city-ga" className="underline underline-offset-4 hover:text-navy">
              Peachtree City overview
            </Link>{" "}
            and its{" "}
            <Link href="/peachtree-city-ga/braelinn" className="underline underline-offset-4 hover:text-navy">
              five villages
            </Link>
            . If you are not sure the city itself is right, the{" "}
            <Link href="/communities" className="underline underline-offset-4 hover:text-navy">
              community comparisons
            </Link>{" "}
            cover the surrounding options, and{" "}
            <Link href="/area-match" className="underline underline-offset-4 hover:text-navy">
              the area-match tool
            </Link>{" "}
            can narrow things in a couple of minutes.
          </p>
        </Container>
      </section>

      <RelatedGuides slugs={["buying-remotely-in-georgia", "moving-to-peachtree-city", "first-weekend-in-peachtree-city"]} />

      <section id="move-form" className="py-16 md:py-24">
        <Container className="grid gap-10 rounded-3xl bg-canvas p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Tell Angelica about your move</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Where you&apos;re coming from, when you need to be here, and what you&apos;re trying to figure out.
              She&apos;ll follow up personally.
            </p>
          </div>
          <LeadForm
            intent="relocation"
            submitLabel="Tell Angelica About My Move"
            successMessage="Thanks — Angelica will follow up about your move personally."
            extraValues={{ relocationOrigin: "California (page context)" }}
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "movingFrom", label: "Where are you moving from?", type: "text", required: true },
              { name: "targetDate", label: "Target move date", type: "text" },
              {
                name: "buyingOrRenting",
                label: "Buying or renting first?",
                type: "select",
                options: ["Buying", "Renting first", "Not sure yet"],
              },
              {
                name: "visitPlans",
                label: "Have you been able to visit yet?",
                type: "select",
                options: ["Not yet", "Visiting soon", "Been once", "Been several times"],
              },
              { name: "priorities", label: "Top priorities", type: "text", placeholder: "e.g. commute, lot size, path access" },
              { name: "message", label: "What are you trying to figure out?", type: "textarea" },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
