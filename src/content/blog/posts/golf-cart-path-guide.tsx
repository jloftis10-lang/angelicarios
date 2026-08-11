import { H2, P, UL, LI } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "golf-cart-path-guide",
  title: "Peachtree City's Golf Cart & Path System: A Practical Guide",
  description:
    "How Peachtree City's 100+ mile multi-use path system actually works, and what to know if you're new to it.",
  publishedAt: "2026-08-08",
  Content: () => (
    <>
      <P>
        Peachtree City&apos;s multi-use path system is one of the largest of its kind in the country — more than
        100 miles of paths connecting neighborhoods to schools, shopping, and recreation across the city. For
        newcomers, here&apos;s the practical version of how it works.
      </P>

      <H2>What the paths are for</H2>
      <P>
        The path system is shared by pedestrians, cyclists, and golf carts. It&apos;s not a single loop trail — it&apos;s
        a network that runs through and between the city&apos;s five villages, so many everyday trips (school,
        shopping, recreation) can happen on it without necessarily needing a car.
      </P>

      <H2>Golf carts are registered vehicles here</H2>
      <UL>
        <LI>Carts used on the path system are registered with the city rather than treated as toys or informal transportation.</LI>
        <LI>They&apos;re a genuine transportation option for many residents, not just a novelty — it&apos;s common to see carts used for errands, school pickup, and getting to recreation areas.</LI>
        <LI>Cars remain necessary for travel beyond the city itself; the path system covers local trips.</LI>
      </UL>

      <H2>What this means if you&apos;re moving in</H2>
      <P>
        If a golf cart is part of your plan, it&apos;s worth factoring into your move-in checklist alongside the
        usual utilities and address changes. And if you&apos;re choosing between homes in different villages, proximity
        to the path system — not just proximity to a road — is worth walking or riding before you decide.
      </P>

      <H2>Learn more</H2>
      <P>
        The <a href="/peachtree-city-ga" className="underline">Peachtree City guide</a> has more on how the path
        system connects to each village, and the city&apos;s own resources are the best source for current
        registration rules and path maps.
      </P>
    </>
  ),
};
