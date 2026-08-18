import Link from "next/link";
import { H2, P } from "@/components/blog/Prose";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "five-villages",
  title: "Peachtree City's Five Villages, Explained",
  description:
    "A closer look at Aberdeen, Braelinn, Glenloch, Kedron, and Wilksmoor — how they differ and what to know about each.",
  publishedAt: "2026-08-06",
  Content: () => (
    <>
      <P>
        Peachtree City&apos;s five villages were each planned with their own housing, shopping, and recreational
        facilities, connected by the citywide multi-use path system. Here&apos;s a closer look at what sets each one
        apart, geographically and physically — not a ranking, just an orientation.
      </P>

      <H2>Aberdeen</H2>
      <P>
        One of the city&apos;s established villages, located near Flat Creek Country Club and Blue Smoke Park.
        Housing stock varies by section, and it&apos;s connected into the rest of the city by the path network like
        every other village.
      </P>

      <H2>Braelinn</H2>
      <P>
        On the western side of the city, Braelinn has its own shopping and dining cluster along the path system,
        includes homes along the golf course, and is near Braelinn Elementary School.
      </P>

      <H2>Glenloch</H2>
      <P>
        Home to Glenloch Recreation Area, one of the city&apos;s public lake and recreation facilities. Glenloch is
        known for larger, estate-style homes, and Highway 54 runs through the village, providing a direct connection
        toward Atlanta.
      </P>

      <H2>Kedron</H2>
      <P>
        Built around Kedron Fieldhouse and other recreational facilities, Kedron includes both single-family homes
        and apartment communities, with path connections into the surrounding area.
      </P>

      <H2>Wilksmoor</H2>
      <P>
        The most recently developed of the five villages, Wilksmoor has a mix of newer-construction and
        custom-built homes, and is linked into the same citywide golf-cart and multi-use path system as the rest of
        the city.
      </P>

      <H2>Figuring out which one fits</H2>
      <P>
        The right village usually comes down to commute direction, housing type, and which recreational facilities
        matter most to you. That&apos;s a conversation worth having directly —{" "}
        <Link href="/contact" className="underline">reach out</Link> and Angelica can walk through the tradeoffs based on
        what you&apos;re actually looking for.
      </P>
    </>
  ),
};
