import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandRule } from "@/components/brand/BrandRule";
import { AdvisoryDisclaimer } from "@/components/sections/AdvisoryDisclaimer";
import { agent, additionalLanguageList, serviceAreas } from "@/config/site";
import angelicaPatio from "@/assets/images/angelica-patio.webp";
import angelicaSonFalls from "@/assets/images/angelica-son-falls.jpg";

export const metadata: Metadata = {
  title: "About Angelica Rios",
  description:
    "Meet Angelica Rios, a Georgia-licensed real-estate professional in Peachtree City with a background in mortgage lending, residential investment, renovation, finance consulting, and entrepreneurship.",
  alternates: { canonical: "/about" },
};

const professionalHighlights = [
  {
    title: "Mortgage lending & sales",
    copy:
      "Angelica worked in mortgage lending and sales, helping clients understand loan programs, qualification, and the financing process. At Canyon Capital Funding, she was a top producer in 2005, 2006, and 2007.",
  },
  {
    title: "Residential investment & renovation",
    copy:
      "From 2014–2018, Angelica participated in residential acquisitions, financing, fix-and-flip projects, renovation coordination, staging, and resale preparation with Solar Design.",
  },
  {
    title: "Finance consulting",
    copy:
      "From 2019–2025, she worked as a finance consultant and ERC specialist, helping business owners understand complex program requirements, documentation, and financial opportunities.",
  },
  {
    title: "Entrepreneurship & relationship building",
    copy:
      "Angelica founded and operated Babysitting Your Angels, growing the business to approximately 10–15 employees and building referral relationships with concierge teams at four- and five-star hotels.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Meet Angelica Rios</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Real-estate guidance shaped by financing, investing, renovation, and real life.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            Angelica&apos;s background reaches well beyond showing homes. She has worked in mortgage lending, residential
            real-estate investment, renovation and staging, finance consulting, sales, and entrepreneurship — experience
            that helps her understand how financing, property condition, presentation, and client goals come together in
            a transaction.
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <PortraitImage
              src={angelicaPatio}
              alt={`Angelica Rios, ${agent.title} serving ${serviceAreas.primary}`}
              aspect="aspect-[4/5]"
            />
            <p className="mt-3 text-xs leading-relaxed text-slate">
              Angelica Rios — personal, direct real-estate guidance in Peachtree City and South Metro Atlanta.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-slate">
            <p>
              In mortgage sales, Angelica developed leads, helped borrowers understand available loan programs, and
              supported clients through the financing process. She was a top producer at Canyon Capital Funding in
              2005, 2006, and 2007, and she developed marketing initiatives for the Hispanic community. In an earlier
              mortgage role with Chase Mortgage / Mortgage Lynx, she exceeded quotas by as much as 85%.
            </p>
            <p>
              Her real-estate investment experience is hands-on. As a partner with Solar Design from 2014 to 2018, she
              identified residential properties for acquisition, participated in financing and fix-and-flip projects,
              coordinated with a licensed contractor on renovations, and helped stage and prepare properties for resale.
            </p>
            <p>
              She later spent 2019 through 2025 consulting business owners on Employee Retention Credit and COVID-era
              business relief programs, translating complicated financial requirements into practical client decisions.
              That work reinforced a skill that carries directly into real estate: explaining complex information clearly
              and staying engaged throughout a process.
            </p>
            <p>
              Angelica is a Georgia-licensed real-estate professional, licensed in August 2026, and works with buyers,
              sellers, investors, and relocating clients in Peachtree City and South Metro Atlanta. Every client works
              directly with her — not a rotating team of handoffs.
            </p>
            <p>
              She communicates in English, Spanish, French, and Italian. Spanish and Italian are part of her documented
              verbal and written professional communication background, and French is part of her spoken language ability.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-canvas">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Professional background</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
              Experience that helps Angelica see more of the transaction.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {professionalHighlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-sand/60 bg-white p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-navy">A business owner before becoming a Georgia agent.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Angelica founded Babysitting Your Angels and grew it to approximately 10–15 employees, managing staffing,
            scheduling, customer relationships, and day-to-day operations while building referral relationships with
            concierge teams at four- and five-star hotels. That experience gave her a practical foundation in service,
            follow-through, referrals, and the responsibility that comes with earning a client&apos;s trust.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Her path to Georgia also includes firsthand interstate relocation experience. After moving from California to
            Georgia herself, she understands that choosing a home is only one piece of a much larger move — learning a new
            area, understanding daily life, and deciding where the next chapter actually fits.
          </p>
        </Container>
      </section>

      <BrandRule className="py-4" />

      <AdvisoryDisclaimer />

      <section className="py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Beyond real estate</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy">At home in Georgia.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Outside of work, Angelica treasures time with her son Alexander and enjoys exploring the outdoors with
              her partner and their dog — waterfalls, trails, and the parts of Georgia you only find by going looking.
              Her appreciation for home, family, and community shapes the care she brings to every relationship.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-ink">
              {[
                "Georgia real-estate license obtained August 2026",
                "Top mortgage producer in 2005, 2006, and 2007",
                "Residential acquisition, renovation, staging, and resale experience",
                "Business owner who managed approximately 10–15 employees",
                `Communicates in English, ${additionalLanguageList}`,
                "Personal California-to-Georgia relocation experience",
              ].map((item) => (
                <li key={item} className="border-t border-sand/60 pt-3 first:border-t-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PortraitImage
            src={angelicaSonFalls}
            alt="Angelica Rios and her son Alexander on a boardwalk in front of a waterfall"
            aspect="aspect-[4/5]"
          />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-sand/30 p-10 md:p-16">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Work directly with {agent.firstName}.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate">
            Buying, selling, investing, or relocating? Start with a conversation about what you&apos;re trying to accomplish.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </Container>
      </section>
    </>
  );
}
