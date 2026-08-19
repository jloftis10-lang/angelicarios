import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "due-diligence-in-georgia",
  title: "What Happens During Due Diligence in Georgia",
  description:
    "An orientation to the due diligence period in a Georgia home purchase — what it is for, what typically happens, and why buyers moving from other states should pay attention to it.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        If you have bought a home in another state, this is one of the parts of a Georgia transaction most likely to
        work differently from what you are used to. It is worth understanding before you write an offer rather than
        after.
      </P>
      <P>
        This is a general orientation, not legal advice. Contract terms are negotiated per transaction, and specific
        questions belong with your real-estate attorney.
      </P>

      <H2>What the period is for</H2>
      <P>
        Broadly, a due diligence period gives a buyer a defined window early in the contract to investigate the
        property and decide whether to proceed. The length is negotiated between buyer and seller — it is a term of
        your contract, not a fixed statewide rule.
      </P>
      <P>
        The practical effect is that your investigation window is finite and starts running immediately. That is why
        being ready to move quickly matters more here than buyers from slower-paced markets expect.
      </P>

      <H2>What typically happens inside it</H2>
      <UL>
        <LI>General home inspection, and any specialized follow-up inspections it prompts.</LI>
        <LI>Reviewing whatever disclosures and documents the seller has provided.</LI>
        <LI>If applicable, reviewing HOA or community association documents — read these, do not skim them.</LI>
        <LI>Getting repair estimates for anything significant the inspection surfaced.</LI>
        <LI>Deciding whether to proceed, request something of the seller, or exercise your rights under the contract.</LI>
      </UL>

      <H2>Why the clock is the hard part</H2>
      <P>
        Inspectors get booked. Specialists get booked faster. Estimates take days to come back. A due diligence
        period that sounded generous when you signed can feel very tight when you are waiting on a second opinion
        about something the inspector flagged.
      </P>
      <P>
        The buyers who use this period well are the ones who lined up their inspector before they were under
        contract. That is the single most useful thing you can do in advance.
      </P>

      <H2>Due diligence is not the same as financing</H2>
      <P>
        Investigating the property and financing the purchase are separate tracks with separate timelines and
        separate protections. It is entirely possible for the property to check out while the financing runs into
        trouble, or the reverse.
      </P>
      <P>
        Understanding which track a given problem belongs to changes how you respond to it — more on that in{" "}
        <Link href="/underwriting-experience-real-estate" className="underline">
          why underwriting experience matters
        </Link>
        .
      </P>

      <H2>What to have ready before you write</H2>
      <UL>
        <LI>An inspector identified, and ideally already spoken to about availability.</LI>
        <LI>Your lender genuinely ready, not just verbally comfortable.</LI>
        <LI>A clear sense of what would actually change your mind about the house.</LI>
        <LI>Time in your own calendar. This period demands attention, especially remotely.</LI>
      </UL>

      <H2>Buying from out of state</H2>
      <P>
        A compressed investigation window is harder from a distance. Build in more margin, get the inspector in
        early, and make sure someone whose obligation is to you has physically walked the property. See{" "}
        <Link href="/blog/buying-remotely-in-georgia" className="underline">buying a home remotely in Georgia</Link>{" "}
        for the rest of that process.
      </P>
    </>
  ),
};
