import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "new-construction-near-peachtree-city",
  title: "New Construction Near Peachtree City: What to Ask",
  description:
    "Buying new is a different transaction from buying resale — warranties, inspections, timelines, and the questions worth asking before you sign a builder contract.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        New construction appeals for obvious reasons: current systems, current layouts, and nothing to fix on day
        one. What surprises people is that buying new is a genuinely different transaction from buying resale, with
        its own risks rather than none.
      </P>

      <H2>Yes, you still get an inspection</H2>
      <P>
        The most expensive assumption in new construction is that a new house does not need inspecting. New homes
        have issues — they are just different issues. Things get missed. Trades work fast.
      </P>
      <P>
        Consider inspecting at more than one stage where the builder allows it, and always before closing. A
        municipal inspection confirms code compliance; it is not the same as someone looking out for your interests
        specifically.
      </P>

      <H2>Understand the warranty properly</H2>
      <UL>
        <LI>What is covered, for how long, and by whom — builder, manufacturer, or a third-party warranty company?</LI>
        <LI>How do you actually submit a claim, and what response time is committed to?</LI>
        <LI>Which items have short windows? Some cosmetic and adjustment items expire quickly.</LI>
        <LI>What transfers if you sell within the warranty period?</LI>
      </UL>

      <H2>Builder contracts are not neutral documents</H2>
      <P>
        A builder&apos;s purchase agreement is written by the builder. That is normal, but it means the terms
        generally favor them — timelines, change orders, what happens if completion slips, and what your deposit is
        exposed to. Read it, and get help reading it. An attorney reviewing a builder contract is money well spent.
      </P>

      <H2>Representation still matters</H2>
      <P>
        The agent in the model home works for the builder. That is not a criticism — it is their job. It does mean
        they are not representing you.
      </P>
      <P>
        Most builders account for buyer representation in their process, but the specifics vary and should be
        confirmed early, usually before your first registered visit to a community. Ask about this at the start
        rather than after.
      </P>

      <H2>Questions worth asking</H2>
      <UL>
        <LI>What is included versus an upgrade? Model homes are typically shown heavily upgraded.</LI>
        <LI>What happens if the completion date slips, and what are your options if it slips substantially?</LI>
        <LI>What is still to be built nearby, and what will the surrounding area look like when the community finishes?</LI>
        <LI>How does lot premium pricing work, and what are you actually getting for it?</LI>
        <LI>Which lots have drainage or grading considerations? Walk them after heavy rain if you can.</LI>
      </UL>

      <H2>Buy what exists</H2>
      <P>
        Renderings and site plans show intent, not commitment. Amenities and future phases can change. Base your
        decision on what is built and open now, and treat anything else as upside rather than something you are
        paying for.
      </P>
      <P>
        <Link href="/peachtree-city-ga/wilksmoor" className="underline">Wilksmoor</Link> is the newest of Peachtree
        City&apos;s villages, and{" "}
        <Link href="/trilith-ga" className="underline">Trilith</Link> offers newer construction in a very different
        format. For the other side of the tradeoff, see{" "}
        <Link href="/blog/buying-an-older-home-peachtree-city" className="underline">buying an older home</Link>.
      </P>
    </>
  ),
};
