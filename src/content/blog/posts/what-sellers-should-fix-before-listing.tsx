import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "what-sellers-should-fix-before-listing",
  title: "What Sellers Should Fix Before Listing",
  description:
    "The pre-listing work that tends to be worth doing — the cheap fixes with outsized impact, and the real repairs worth handling before a buyer's inspector finds them.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        Sellers usually ask this question as &ldquo;what will get me more money.&rdquo; The more useful framing is
        &ldquo;what will stop a buyer from talking themselves out of the house, or using something as leverage
        later.&rdquo; Those are often cheap.
      </P>

      <H2>The inexpensive things that matter more than they should</H2>
      <UL>
        <LI><strong>Deep cleaning.</strong> Nothing else returns as much per dollar. Nothing.</LI>
        <LI><strong>Decluttering.</strong> Buyers cannot see space that is full of your things. Rooms read larger when there is less in them.</LI>
        <LI><strong>Light.</strong> Open everything, replace dead bulbs, match color temperature. Dim rooms photograph badly and show worse.</LI>
        <LI><strong>Smell.</strong> You cannot smell your own house. Ask someone blunt.</LI>
        <LI><strong>Sticking doors and windows, running toilets, dripping taps.</strong> Individually trivial. Collectively they read as &ldquo;this house was not looked after.&rdquo;</LI>
        <LI><strong>The front approach.</strong> It sets expectations before anyone is through the door.</LI>
      </UL>

      <H2>Real repairs worth doing first</H2>
      <P>
        Anything a buyer&apos;s inspector will certainly find and that will certainly come back at you is usually
        better handled beforehand — you control the cost and the contractor, rather than negotiating under time
        pressure with someone who now has leverage.
      </P>
      <UL>
        <LI>Active leaks, anywhere. Water is the issue buyers react to most strongly.</LI>
        <LI>Visible damage to roof, gutters, or flashing.</LI>
        <LI>Anything unsafe — exposed wiring, unstable railings, broken steps.</LI>
        <LI>Drainage that visibly sends water toward the house.</LI>
        <LI>Non-functioning systems. A buyer assumes the worst about anything that does not work.</LI>
      </UL>

      <H2>Consider what your documentation says about you</H2>
      <P>
        Receipts and service records for the roof, HVAC, and major work do real quiet work. They tell a buyer the
        house has been maintained by someone who paid attention, which makes everything else easier to believe.
      </P>

      <H2>The test to apply</H2>
      <P>
        Before spending on anything, ask: does this remove a reason to say no, or is it an upgrade I hope someone
        pays extra for? The first is usually worth doing. The second frequently is not — see{" "}
        <Link href="/blog/what-not-to-renovate-before-selling" className="underline">
          what not to renovate before selling
        </Link>
        .
      </P>

      <H2>Get a read before you spend</H2>
      <P>
        The right list is specific to your house, your price range, and what you are competing against right now.
        Spending five thousand dollars on the wrong thing is a common and avoidable mistake.
      </P>
      <P>
        A <Link href="/sell" className="underline">local home value review</Link> covers this — including being told
        plainly when something you were planning is not worth doing.
      </P>
    </>
  ),
};
