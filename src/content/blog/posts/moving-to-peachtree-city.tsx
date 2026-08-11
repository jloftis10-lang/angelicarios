import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "moving-to-peachtree-city",
  title: "Moving to Peachtree City: What to Know Before You Arrive",
  description:
    "A practical orientation to Peachtree City, Georgia for anyone relocating in — the villages, the path system, and how the pieces fit together.",
  publishedAt: "2026-08-04",
  Content: () => (
    <>
      <P>
        Peachtree City is a planned community in Fayette County, part of South Metro Atlanta, and it doesn&apos;t
        look or function quite like most suburban cities. If you&apos;re moving in from somewhere else, a few things
        are worth understanding before you arrive rather than after.
      </P>

      <H2>It&apos;s built around five villages</H2>
      <P>
        Instead of one undifferentiated grid, Peachtree City is organized into five villages — Aberdeen, Braelinn,
        Glenloch, Kedron, and Wilksmoor — each originally planned with its own housing, shopping, and recreational
        facilities. Where you land among them shapes your day-to-day more than it would in a typical subdivision.
      </P>

      <H2>The path system is central, not a bonus amenity</H2>
      <P>
        Peachtree City has 100+ miles of multi-use paths connecting neighborhoods to schools, shopping, and
        recreation. Golf carts are a common, registered way to get around on that system, alongside walking and
        biking — it&apos;s a genuine part of how residents get from place to place, not just a recreational trail
        network.
      </P>

      <H2>A few practical things to plan around</H2>
      <UL>
        <LI>Cars are still the primary way to travel beyond the city itself — the path system covers local trips.</LI>
        <LI>Golf carts used on the path system are registered with the city; if you plan to use one, factor that into your move-in checklist.</LI>
        <LI>Each village has its own character and amenities — it&apos;s worth spending time in more than one before deciding where to focus a home search.</LI>
      </UL>

      <H2>Where to start</H2>
      <P>
        If you&apos;re relocating from out of state, remote orientation and a touring strategy matter more than they
        would for a local move — see the <a href="/relocate" className="underline">Relocate page</a> for how that
        typically works, or the <a href="/peachtree-city-ga" className="underline">Peachtree City guide</a> for more
        detail on the villages and getting around.
      </P>
    </>
  ),
};
