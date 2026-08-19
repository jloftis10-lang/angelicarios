import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "what-not-to-renovate-before-selling",
  title: "What Not to Renovate Before Selling",
  description:
    "The pre-listing projects that most often fail to return what they cost — and why doing less, better, usually beats doing more.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        The instinct to renovate before selling is understandable and frequently expensive. Having managed
        renovations directly, the pattern is consistent: the projects sellers are most excited about are often the
        ones least likely to come back to them.
      </P>

      <H2>The full kitchen or bath gut</H2>
      <P>
        The most common expensive mistake. A full remodel right before listing costs real money, takes longer than
        planned, and gives a buyer finishes chosen by someone else. Buyers who care deeply about kitchens usually
        want to choose their own — you are pre-spending their budget on your taste.
      </P>
      <P>
        A dated but clean and functional kitchen sells. A half-finished one at listing time is far worse than either.
      </P>

      <H2>Highly personal or highly specific choices</H2>
      <UL>
        <LI>Bold color schemes and distinctive tile.</LI>
        <LI>Converting a bedroom into something that is no longer a bedroom. Bedroom count is how buyers search.</LI>
        <LI>Built-ins designed around your furniture and your hobbies.</LI>
        <LI>Anything that narrows who the house works for.</LI>
      </UL>

      <H2>Over-improving past your street</H2>
      <P>
        There is a practical limit to what a given neighborhood supports, and pushing well past it rarely returns
        the spend. It can also complicate appraisal — a home substantially above its comparables carries more
        uncertainty there, which is a real transaction risk and not just a pricing question.
      </P>

      <H2>Big-ticket items with long payback</H2>
      <P>
        Pools, major landscaping schemes, sunrooms, and substantial additions are things to do because you want to
        live with them, not as a pre-sale strategy. Some buyers actively discount features that add maintenance.
      </P>

      <H2>Replacing something that still works</H2>
      <P>
        A functioning ten-year-old HVAC system does not need replacing to sell a house. Buyers price age into their
        thinking. Disclose it, document the servicing, and let it be a known quantity rather than spending thousands
        to remove a conversation.
      </P>
      <P>
        Something actively broken is different — that belongs on the{" "}
        <Link href="/blog/what-sellers-should-fix-before-listing" className="underline">fix-first list</Link>.
      </P>

      <H2>The better strategy</H2>
      <P>
        Clean, declutter, fix what is broken, and present the house honestly. Then price it for what it actually is.
        Sellers who do less but do it properly generally finish ahead of sellers who spend thirty thousand dollars
        chasing a number.
      </P>
      <P>
        A <Link href="/sell" className="underline">local home value review</Link> is the place to sanity-check a
        project list before you commit to any of it.
      </P>
    </>
  ),
};
