import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "buying-an-older-home-peachtree-city",
  title: "Buying an Older Home in Peachtree City",
  description:
    "What to look at, budget for, and ask about when the house you want was built decades ago — from someone who has renovated properties directly.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        Peachtree City has been developing since the 1950s, so a large share of its housing is not new. Established
        neighborhoods often have the mature trees, larger lots, and settled feel that newer sections cannot offer
        yet. They also come with systems that have a service life.
      </P>
      <P>
        None of this is a reason to avoid an older home. It is a reason to know what you are buying.
      </P>

      <H2>The four expensive things</H2>
      <UL>
        <LI><strong>Roof.</strong> Ask the age and the material. A roof near the end of its life is a known, plannable cost — not a dealbreaker, but not a surprise you want at closing either.</LI>
        <LI><strong>HVAC.</strong> Age, and whether it has been serviced. Georgia summers work these systems hard.</LI>
        <LI><strong>Water heater.</strong> Cheaper than the others, but a failure makes a mess.</LI>
        <LI><strong>Windows.</strong> Rarely urgent, frequently expensive, and a real comfort difference.</LI>
      </UL>
      <P>
        Ask for ages and any service records on all four before you are emotionally committed to the house.
      </P>

      <H2>What the inspection is really for</H2>
      <P>
        On an older home the inspection is not a pass/fail test. It is how you build a realistic picture of what the
        next five years cost. Go to it if you can. Reading a report is not the same as watching someone point at
        something and explain it.
      </P>
      <P>
        Consider what specialized follow-ups make sense based on what the general inspection turns up — that decision
        is easier to make with the inspector standing there.
      </P>

      <H2>Things specific to older homes here</H2>
      <UL>
        <LI>Mature trees are an asset and a responsibility. Look at what overhangs the roof and what the drainage does in heavy rain.</LI>
        <LI>Additions and renovations: were they permitted, and does the work look like it was done properly?</LI>
        <LI>Original layouts sometimes reflect how households worked decades ago. Decide whether you would live with it or change it — and price the change realistically.</LI>
        <LI>Ask what has already been updated. A home with a newer roof and recent HVAC is a genuinely different purchase from one where everything is original.</LI>
      </UL>

      <H2>Where financing intersects</H2>
      <P>
        Some property conditions affect what a lender will finance. If a home has significant deferred maintenance,
        that can become a financing question rather than just a repair question — worth raising with your lender
        early rather than discovering during underwriting. More on that in{" "}
        <Link href="/underwriting-experience-real-estate" className="underline">
          why underwriting experience matters
        </Link>
        .
      </P>

      <H2>The honest framing</H2>
      <P>
        Older homes are often the better buy, particularly in established villages where location and lot are hard to
        replicate. The buyers who regret it are usually the ones who budgeted for the purchase price and not for the
        first two years. Plan for both and an older home can be a genuinely good decision.
      </P>
      <P>
        See the <Link href="/peachtree-city-ga" className="underline">village guides</Link> for where the older
        housing tends to be, or read about{" "}
        <Link href="/blog/new-construction-near-peachtree-city" className="underline">
          new construction
        </Link>{" "}
        for the other side of the tradeoff.
      </P>
    </>
  ),
};
