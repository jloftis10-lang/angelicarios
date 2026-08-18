import Link from "next/link";
import { H2, P } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "living-near-trilith",
  title: "Living Near Trilith Studios",
  description:
    "A neutral orientation to Trilith, the mixed-use community and studio campus just outside Peachtree City in Fayetteville, Georgia.",
  publishedAt: "2026-08-16",
  Content: () => (
    <>
      <P>
        Trilith sits just outside Peachtree City in Fayetteville, Georgia, and it comes up often for buyers and
        relocating clients looking at this part of South Metro Atlanta. Here&apos;s a neutral orientation to what it
        actually is.
      </P>

      <H2>What Trilith is</H2>
      <P>
        Trilith is a mixed-use, walkable community built around Trilith Studios, a large film and television
        production campus. The development combines residential housing with retail, dining, and public space
        designed around walkability rather than a typical car-centric suburban layout.
      </P>

      <H2>How it relates to Peachtree City</H2>
      <P>
        Trilith is a separate community from Peachtree City — not one of its five villages — but it&apos;s close by
        and part of the same general South Metro Atlanta area Angelica serves. For buyers weighing Peachtree City
        against nearby alternatives, Trilith&apos;s walkable, mixed-use layout is a genuinely different housing and
        lifestyle format worth understanding as a point of comparison.
      </P>

      <H2>What to know if you&apos;re considering the area</H2>
      <P>
        The presence of a major studio campus shapes some of the local economy and rental demand nearby, which is
        worth factoring in if that matters to your plans. Beyond that, the practical questions — commute, housing
        type, budget — are the same ones worth working through for any home search in this part of Fayette County.
      </P>

      <H2>Questions about the area?</H2>
      <P>
        If Trilith or the broader Fayetteville area is on your list alongside Peachtree City,{" "}
        <Link href="/contact" className="underline">reach out</Link> and Angelica can walk through how the options compare.
      </P>
    </>
  ),
};
