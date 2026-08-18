import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "moving-from-california-to-georgia",
  title: "What Moving from California to Georgia Actually Involves",
  description:
    "A firsthand perspective on relocating from Newport Beach, California to Georgia — and what that experience means for clients making a similar move.",
  publishedAt: "2026-08-10",
  Content: () => (
    <>
      <P>
        Angelica relocated from Newport Beach, California to Georgia, and previously worked in real estate and held
        a California real-estate license there. That move shapes how she works with clients today who are making a
        similar cross-country transition into Peachtree City and South Metro Atlanta.
      </P>

      <H2>It&apos;s more than a real-estate transaction</H2>
      <P>
        Moving across the country involves leaving a familiar market, a familiar climate, and a familiar way of
        life, and learning a new community from the ground up — schools, routines, neighborhoods, all of it at once.
        Having gone through that personally changes how you think about what relocating clients actually need beyond
        a house.
      </P>

      <H2>What tends to matter most in the transition</H2>
      <UL>
        <LI>Getting oriented to a new area remotely, before being able to visit in person.</LI>
        <LI>Understanding how a new city is organized — in Peachtree City&apos;s case, the five villages and the path system.</LI>
        <LI>Having someone to ask the practical, unglamorous questions to along the way.</LI>
      </UL>

      <H2>Starting the conversation</H2>
      <P>
        If you&apos;re considering a similar move, the <Link href="/relocate" className="underline">Relocate page</Link>{" "}
        covers how Angelica works with out-of-state clients, from remote orientation through closing.
      </P>
    </>
  ),
};
