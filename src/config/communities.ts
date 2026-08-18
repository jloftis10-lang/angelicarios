export type Community = {
  slug: string;
  name: string;
  county: string;
  summary: string;
  href: string; // where "learn more" points — an existing page if one exists
};

/**
 * Nearby South Metro Atlanta communities Angelica also serves, beyond
 * Peachtree City itself. Neutral, general-character facts only — no
 * invented home values, school rankings, or demographic claims.
 */
export const communities: Community[] = [
  {
    slug: "peachtree-city",
    name: "Peachtree City",
    county: "Fayette County",
    summary:
      "A master-planned community known for lakes, wooded scenery, and a 100+ mile shared-use path network connecting neighborhoods with everyday destinations.",
    href: "/peachtree-city-ga",
  },
  {
    slug: "trilith",
    name: "Trilith",
    county: "Fayette County",
    summary:
      "A walkable, mixed-use community built around Trilith Studios, just outside Peachtree City in Fayetteville.",
    href: "/blog/living-near-trilith",
  },
  {
    slug: "fayetteville",
    name: "Fayetteville",
    county: "Fayette County",
    summary:
      "A growing Fayette County community offering established neighborhoods, newer development, and access to South Metro Atlanta amenities.",
    href: "/contact",
  },
  {
    slug: "newnan",
    name: "Newnan",
    county: "Coweta County",
    summary: "A Coweta County destination with a historic downtown, varied housing choices, and room for different styles of living.",
    href: "/contact",
  },
  {
    slug: "tyrone",
    name: "Tyrone",
    county: "Fayette County",
    summary:
      "A smaller Fayette County community with a quieter pace and convenient access to Peachtree City and the Atlanta region.",
    href: "/contact",
  },
  {
    slug: "senoia",
    name: "Senoia",
    county: "Coweta County",
    summary: "A distinctive Coweta County town known for its historic center, community character, and residential surroundings.",
    href: "/contact",
  },
];
