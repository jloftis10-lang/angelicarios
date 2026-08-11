/**
 * Neutral, non-invented orientation copy for each of Peachtree City's five
 * villages. Keep entries to housing/geography/amenities/infrastructure
 * facts only — no HOA rules, home values, or school rankings until
 * sourced. Extend `detail` as real information is confirmed.
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
      "One of Peachtree City's established villages, connected to the rest of the city by the multi-use path network. Housing stock and amenities vary by section — a fuller neighborhood profile is in progress.",
  },
  {
    slug: "braelinn",
    name: "Braelinn",
    summary:
      "A village on the western side of the city with its own shopping and dining cluster along the path system. A fuller neighborhood profile is in progress.",
  },
  {
    slug: "glenloch",
    name: "Glenloch",
    summary:
      "Home to Glenloch Recreation Area, one of the city's public lake and recreation facilities. A fuller neighborhood profile is in progress.",
  },
  {
    slug: "kedron",
    name: "Kedron",
    summary:
      "A village built around Kedron Fieldhouse and other recreational facilities, with path connections into the surrounding area. A fuller neighborhood profile is in progress.",
  },
  {
    slug: "wilksmoor",
    name: "Wilksmoor",
    summary:
      "One of Peachtree City's villages, linked into the citywide golf-cart and multi-use path system. A fuller neighborhood profile is in progress.",
  },
];
