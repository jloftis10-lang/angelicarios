import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "why-underwriting-experience-matters",
  title: "Why Underwriting Experience Matters During a Home Purchase",
  description:
    "How an underwriting-informed perspective can help buyers prepare more thoughtfully — without replacing the role of their lender or other advisers.",
  publishedAt: "2026-08-18",
  Content: () => (
    <>
      <P>
        Most real-estate agents see a transaction from one side — the property. Angelica spent more than 15 years in
        mortgage finance and underwriting before real estate, which means she also sees the financing side: the
        documentation, the risk factors, and the questions that tend to come up during underwriting.
      </P>

      <H2>What that actually means for a buyer</H2>
      <P>
        It doesn&apos;t mean Angelica replaces your lender — it means she can help you anticipate some of what&apos;s
        coming before it becomes a surprise mid-transaction. A few examples:
      </P>
      <UL>
        <LI>Understanding what documentation and timelines typically look like during underwriting.</LI>
        <LI>Recognizing property or financing factors worth flagging early rather than discovering them late.</LI>
        <LI>Asking sharper questions when comparing financing options.</LI>
        <LI>Reading a purchase contract&apos;s financing contingencies with a clearer sense of what they protect.</LI>
      </UL>

      <H2>An addition, not a replacement</H2>
      <P>
        This background doesn&apos;t substitute for a lender, inspector, contractor, attorney, or tax adviser — each
        of those roles matters, and Angelica works alongside them, not instead of them. What it does is help clients
        ask better questions and prepare more thoughtfully going into a transaction.
      </P>

      <H2>Curious how this applies to your situation?</H2>
      <P>
        <Link href="/contact" className="underline">Reach out</Link> and Angelica can walk through what her
        background means for your specific purchase, or see the{" "}
        <Link href="/buy" className="underline">Buy page</Link> for how the full process works.
      </P>
    </>
  ),
};
