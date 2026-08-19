import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "buying-remotely-in-georgia",
  title: "Buying a Home Remotely in Georgia",
  description:
    "How to run a home search from another state without making a decision you regret — narrowing before you fly, using your visit well, and what has to happen in person.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        Plenty of people buy here before they live here. It works — but it works much better with a deliberate
        process than with a scattershot one, and the most common mistake is trying to see everything at once.
      </P>

      <H2>Narrow before you fly</H2>
      <P>
        A visit spent orienting is a visit wasted. Do the orientation from home: understand how the communities
        relate to each other, get a rough sense of what your budget reaches where, and arrive with two or three areas
        you are genuinely testing rather than nine you are sampling.
      </P>
      <P>
        The <Link href="/communities" className="underline">community guides</Link> and the{" "}
        <Link href="/area-match" className="underline">area-match questions</Link> are built for exactly this stage.
      </P>

      <H2>What video tours are good and bad at</H2>
      <UL>
        <LI><strong>Good at:</strong> layout, flow, condition of finishes, how rooms connect, obvious red flags.</LI>
        <LI><strong>Bad at:</strong> scale, smell, noise, light at different hours, how steep that yard actually is.</LI>
        <LI><strong>Terrible at:</strong> the neighborhood. A camera pointed at a house tells you nothing about the street.</LI>
      </UL>
      <P>
        Ask for the walk to be slower than feels natural, ask for the things nobody photographs — the utility area,
        the back corner of the lot, the view from the driveway — and ask what it sounds like standing still.
      </P>

      <H2>Use your visit for what only a visit can answer</H2>
      <UL>
        <LI>Drive the commute at the hours you would really drive it.</LI>
        <LI>Walk or ride a path connection if path access is part of the appeal.</LI>
        <LI>See a neighborhood on a weekday evening, not just a Saturday afternoon.</LI>
        <LI>Stand in the yard for five quiet minutes. You learn a surprising amount.</LI>
      </UL>

      <H2>What must not be done remotely</H2>
      <P>
        Get a licensed inspector into the property, always. If you cannot attend, ask for a thorough report with
        photographs and a call to walk through it. An inspector working for you is the single most important set of
        eyes in a remote purchase.
      </P>
      <P>
        Ask early about how closing works if you will not be in the state — remote and mail-away closing arrangements
        exist, but the specifics vary and need to be confirmed with the closing attorney well before the date rather
        than in the final week.
      </P>

      <H2>Georgia specifics worth knowing</H2>
      <P>
        Transaction customs differ by state, and the due diligence period is a meaningful feature of Georgia
        contracts that deserves understanding before you write an offer. See{" "}
        <Link href="/blog/due-diligence-in-georgia" className="underline">
          what happens during due diligence in Georgia
        </Link>
        .
      </P>

      <H2>The rule that saves people</H2>
      <P>
        Do not buy a house you have never stood in unless you genuinely have no alternative — and if that is the
        case, build in more protection, not less. Slow down, inspect thoroughly, and make sure someone whose
        obligation is to you has physically been there.
      </P>
      <P>
        Relocating from further afield? See{" "}
        <Link href="/moving-from-california-to-georgia" className="underline">moving from California to Georgia</Link>{" "}
        or the <Link href="/relocate" className="underline">relocation page</Link>.
      </P>
    </>
  ),
};
