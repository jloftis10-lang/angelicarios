import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "peachtree-city-home-styles",
  title: "Peachtree City Home Styles: A Buyer's Orientation",
  description:
    "Why housing varies so much across Peachtree City's villages, what the different construction eras mean practically, and how to read a listing photo.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        Peachtree City has been developing since the 1950s, and it shows. Rather than one prevailing style, the city
        holds several decades of building layered across five villages — which is why two homes at the same price can
        feel completely different.
      </P>
      <P>
        Understanding what era you are looking at tells you more about a home&apos;s practical realities than the
        style label ever will.
      </P>

      <H2>What construction era actually tells you</H2>
      <UL>
        <LI><strong>Earlier decades:</strong> often more mature lots and established tree cover, with systems that have likely been replaced at least once. Ask what, and when.</LI>
        <LI><strong>Middle decades:</strong> layouts start moving toward more open plans. Frequently the sweet spot for buyers who want settled surroundings without a full renovation.</LI>
        <LI><strong>Recent construction:</strong> current systems and contemporary layouts, on lots that have not filled in yet. Concentrated in the newer sections, particularly <Link href="/peachtree-city-ga/wilksmoor" className="underline">Wilksmoor</Link>.</LI>
      </UL>

      <H2>Layout matters more than style</H2>
      <P>
        The most consequential difference between homes here is usually the floor plan, not the exterior. Older homes
        tend toward defined, separated rooms; newer ones toward open connected space. Neither is better — but people
        have strong preferences and often do not realize it until they walk both.
      </P>
      <P>
        Tour one of each early. It will narrow your search faster than almost anything else.
      </P>

      <H2>Reading a listing photo</H2>
      <UL>
        <LI>Look at the trees. Mature canopy means an established area — and a roof and gutters that get worked on.</LI>
        <LI>Look at the driveway and how the house sits on the lot. Slope shows up here before anyone mentions it.</LI>
        <LI>Notice what is not photographed. Utility spaces, the back corner of the lot, and the side elevation are where the honest information lives.</LI>
        <LI>Windows suggest era, and often whether they have been updated.</LI>
      </UL>

      <H2>Style does not track village</H2>
      <P>
        People sometimes assume a village implies a house type. It does not, reliably. Sections within a single
        village were built at different times, which is why touring one street tells you relatively little about the
        village as a whole.
      </P>
      <P>
        See the <Link href="/peachtree-city-ga" className="underline">village guides</Link> for how each one is laid
        out, and{" "}
        <Link href="/blog/questions-before-choosing-a-village" className="underline">
          questions to ask before choosing a village
        </Link>{" "}
        for narrowing between them.
      </P>
    </>
  ),
};
