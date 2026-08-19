import Link from "next/link";
import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "peachtree-city-vs-senoia",
  title: "Peachtree City vs Senoia: Two Different Ideas of Home",
  description:
    "A planned community with a path network versus a historic small town with a real downtown — how to tell which one you actually want.",
  publishedAt: "2026-08-19",
  Content: () => (
    <>
      <P>
        This is less a comparison than a fork. Peachtree City and Senoia are not competing versions of the same
        thing — they are two different ideas about what a place should be, and most people lean strongly toward one
        once they have spent an afternoon in each.
      </P>

      <H2>Peachtree City: designed</H2>
      <P>
        Five villages, a citywide path network, lakes and recreation facilities, and shared amenities that came from
        a plan rather than accumulating over time. The appeal is coherence — things connect because someone intended
        them to.
      </P>

      <H2>Senoia: accumulated</H2>
      <P>
        A historic downtown at the center and a town that grew around it. The appeal is character, and the specific
        kind of character that cannot be built new. Senoia is in Coweta County rather than Fayette, so the county
        systems differ from Peachtree City entirely.
      </P>

      <H2>The practical tradeoffs</H2>
      <UL>
        <LI>Senoia sits further from the airport and central Atlanta. If someone commutes, drive it before you decide.</LI>
        <LI>Older homes near a historic center carry both character and an older-home maintenance profile.</LI>
        <LI>Check whether any historic district or overlay rules affect what you can change about a property — get it in writing.</LI>
        <LI>Day-to-day errands work differently in a smaller town. Notice what you would routinely drive elsewhere for.</LI>
      </UL>

      <H2>How to tell which one you want</H2>
      <P>
        Spend a weekday evening in both. Not a Saturday — a Tuesday, when you are seeing the actual rhythm rather
        than the weekend version. Most people know within an hour.
      </P>
      <P>
        The failure mode is choosing Senoia for its character while needing Peachtree City&apos;s convenience, or
        choosing Peachtree City for its practicality while actually wanting somewhere with a center. Both are real
        mistakes and both are avoidable by visiting properly.
      </P>
      <P>
        Read the <Link href="/senoia-ga" className="underline">Senoia guide</Link> and the{" "}
        <Link href="/peachtree-city-ga" className="underline">Peachtree City overview</Link>, or consider{" "}
        <Link href="/newnan-ga" className="underline">Newnan</Link> if you want Coweta County with more scale.
      </P>
    </>
  ),
};
