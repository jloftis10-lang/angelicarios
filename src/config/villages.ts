/**
 * Neutral, non-invented orientation copy for each of Peachtree City's five
 * villages. Keep entries to housing/geography/amenities/infrastructure
 * facts only — no HOA rules, home values, school rankings, or demographic
 * characterizations. Sourced from general web research (city/CVB/real-estate
 * guide summaries) rather than a single verified primary document — treat
 * as a solid orientation, not a precise/exhaustive profile, and correct
 * anything that turns out to be off as better sourcing becomes available.
 */
export type Village = {
  slug: string;
  name: string;
  summary: string;
};

export const villages: Village[] = [
  {
    slug: "aberdeen",
    name: "Aberdeen",
    summary:
      "One of Peachtree City's established villages, near Flat Creek Country Club and Blue Smoke Park. Connected to the rest of the city by the multi-use path network; housing stock varies by section.",
  },
  {
    slug: "braelinn",
    name: "Braelinn",
    summary:
      "A village on the western side of the city with its own shopping and dining cluster along the path system. Includes homes along the golf course and is near Braelinn Elementary School.",
  },
  {
    slug: "glenloch",
    name: "Glenloch",
    summary:
      "Home to Glenloch Recreation Area, one of the city's public lake and recreation facilities. Known for larger, estate-style homes; Highway 54 runs through the village, connecting it toward Atlanta.",
  },
  {
    slug: "kedron",
    name: "Kedron",
    summary:
      "A village built around Kedron Fieldhouse and other recreational facilities, with both single-family homes and apartment communities, and path connections into the surrounding area.",
  },
  {
    slug: "wilksmoor",
    name: "Wilksmoor",
    summary:
      "The most recently developed of Peachtree City's five villages, with a mix of newer-construction and custom-built homes, linked into the citywide golf-cart and multi-use path system.",
  },
];
