/**
 * Peachtree City's five villages.
 *
 * FACT DISCIPLINE: geography, amenities named in general terms, and
 * housing character only. No HOA rules, no home values, no school
 * rankings, no demographic characterizations. Anything a buyer would act
 * on is framed as something to verify. Sourced from general research
 * rather than a single primary document — treat as orientation, not a
 * precise profile, and correct as better sourcing appears.
 */
export type Village = {
  slug: string;
  name: string;
  /** Card-level one-liner. */
  summary: string;
  /** Where it sits within the city. */
  geography: string;
  /** Housing character, neutral. */
  housing: string;
  /** Relationship to the path / cart network. */
  paths: string;
  /** Shopping / recreation orientation, general. */
  amenities: string;
  /** Concrete things worth noticing on a tour. */
  buyerNotes: string[];
  /** Editorial guidance in Angelica's voice — site copy, not a testimonial. */
  angelicasTake: string;
  /** Blog slugs worth surfacing. */
  relatedPosts: string[];
};

export const villages: Village[] = [
  {
    slug: "aberdeen",
    name: "Aberdeen",
    summary:
      "One of Peachtree City's established villages, near Flat Creek Country Club and Blue Smoke Park, connected to the rest of the city by the path network.",
    geography:
      "Aberdeen is one of the city's established villages, positioned near Flat Creek Country Club and Blue Smoke Park. Like every village, it connects into the citywide path system rather than functioning as an isolated pocket.",
    housing:
      "Housing stock varies by section rather than following one pattern, so two streets within Aberdeen can present quite differently in era, lot, and layout. That variation is worth taking seriously — it means touring a couple of different sections tells you more than touring one.",
    paths:
      "Aberdeen ties into the multi-use path network like the rest of Peachtree City. As always, the practical question is not whether the village has path access but how far this particular house sits from a connection you would actually use.",
    amenities:
      "Its position near Flat Creek Country Club and Blue Smoke Park shapes what is close by. Whether that proximity matters depends entirely on whether those are places you would genuinely use.",
    buyerNotes: [
      "Walk or ride from the specific address to the nearest path connection — proximity varies more within a village than buyers expect.",
      "Check the construction era of the specific home and what that implies for roof, HVAC, and systems at inspection.",
      "Look at the lot itself: trees, slope, drainage, and how much of it is genuinely usable.",
      "Confirm current school attendance zones for the exact address directly with the Fayette County School System.",
    ],
    angelicasTake:
      "Aberdeen is a village where I would tour more than one section before forming an opinion. The variation inside it is wide enough that a single showing can leave you with a misleading impression of the whole area.",
    relatedPosts: ["five-villages", "questions-before-choosing-a-village", "buying-an-older-home-peachtree-city"],
  },
  {
    slug: "braelinn",
    name: "Braelinn",
    summary:
      "A village on the western side of the city with its own shopping and dining cluster along the path system, including homes along the golf course.",
    geography:
      "Braelinn sits on the western side of Peachtree City and has its own retail cluster, which is part of the original village concept — each village anchored by its own everyday destinations rather than everyone driving to one center.",
    housing:
      "Braelinn includes homes along the golf course as well as more conventional streets away from it. Golf-course frontage carries its own considerations, from sightlines and privacy to the specifics of what the property actually adjoins.",
    paths:
      "The village's shopping and dining cluster sits along the path system, which is what makes cart-and-bike errands realistic here rather than theoretical. How useful that is to you depends on where in the village the house sits.",
    amenities:
      "The local retail cluster covers everyday needs without a drive across the city, and Braelinn Elementary School is in the area. Verify current attendance zoning for any specific address rather than assuming proximity determines it.",
    buyerNotes: [
      "If a home fronts the golf course, look closely at what it adjoins, how exposed it is, and whether that suits you day to day.",
      "Test the path route from the house to the retail cluster — that connection is a large part of the village's appeal.",
      "Compare a golf-course-adjacent home against a similar interior-street home to see what the frontage is actually costing you.",
      "Confirm school attendance zones for the exact address with the district; proximity is not the same as assignment.",
    ],
    angelicasTake:
      "Braelinn is one of the easier villages to evaluate honestly, because the retail cluster gives you something concrete to test. Ride the path from the house to the shops. If that trip is pleasant, the village is doing what it was designed to do.",
    relatedPosts: ["five-villages", "golf-cart-path-guide", "questions-before-choosing-a-village"],
  },
  {
    slug: "glenloch",
    name: "Glenloch",
    summary:
      "Home to Glenloch Recreation Area, known for larger estate-style homes, with Highway 54 running through and connecting toward Atlanta.",
    geography:
      "Glenloch contains Glenloch Recreation Area, one of the city's public recreation facilities, and Highway 54 runs through the village — which is both its main connection outward and something to account for depending on where a home sits relative to it.",
    housing:
      "Glenloch is known for larger, estate-style homes. That generally means bigger lots and more house, which also means more roof, more systems, and more maintenance — worth factoring into the real cost of ownership rather than just the purchase price.",
    paths:
      "The village connects into the citywide path network, and the recreation area gives that network a destination worth riding to. The value of that depends on how close the specific home is to a usable connection.",
    amenities:
      "Glenloch Recreation Area is the anchor amenity. Highway 54 access shapes how the village functions for anyone driving out of the city regularly.",
    buyerNotes: [
      "Consider where the home sits relative to Highway 54 — access and road noise are different concerns and both are worth checking in person.",
      "On a larger home, budget realistically for maintenance: roof area, HVAC units, and systems scale with the house.",
      "Walk the lot fully. On estate-style properties, a meaningful share of the land may be wooded, sloped, or otherwise not usable.",
      "Verify what the recreation area actually offers currently, and whether those are things your household would use.",
    ],
    angelicasTake:
      "Larger homes are where my underwriting background tends to earn its keep. The purchase price is only part of the picture — I want buyers thinking about the carrying cost of the roof and the mechanicals before they fall for the square footage.",
    relatedPosts: ["five-villages", "peachtree-city-home-styles", "buying-an-older-home-peachtree-city"],
  },
  {
    slug: "kedron",
    name: "Kedron",
    summary:
      "Built around Kedron Fieldhouse and other recreational facilities, with both single-family homes and apartment communities.",
    geography:
      "Kedron is organized around Kedron Fieldhouse and associated recreational facilities, with path connections into the surrounding area. That recreational anchor is the village's defining structural feature.",
    housing:
      "Kedron includes both single-family homes and apartment communities, which makes its housing mix broader than some other villages. For buyers, the relevant question is usually what sits immediately around a specific property rather than the village-wide mix.",
    paths:
      "Path connections run into the surrounding area, and the recreational facilities give those paths an obvious destination. Check the specific route from any home you are considering.",
    amenities:
      "Kedron Fieldhouse and the surrounding recreational facilities anchor the village. Confirm current programs, hours, and membership terms directly, since those change over time.",
    buyerNotes: [
      "Look at what directly adjoins the specific property, since the village's housing mix varies within short distances.",
      "If the recreational facilities are part of the appeal, confirm current offerings and any associated costs before counting on them.",
      "Check the path route from the house to the fieldhouse and to anywhere else you would ride regularly.",
      "Confirm current school attendance zones for the exact address with the Fayette County School System.",
    ],
    angelicasTake:
      "If the recreation facilities are why Kedron is on your list, go use them before you buy. It is a low-effort way to find out whether the thing drawing you to a village actually fits your routine.",
    relatedPosts: ["five-villages", "questions-before-choosing-a-village", "first-weekend-in-peachtree-city"],
  },
  {
    slug: "wilksmoor",
    name: "Wilksmoor",
    summary:
      "The most recently developed of the five villages, with a mix of newer-construction and custom-built homes.",
    geography:
      "Wilksmoor is the most recently developed of Peachtree City's five villages, which shows in its housing and layout compared with the older villages.",
    housing:
      "The village has a mix of newer construction and custom-built homes. Newer housing generally means fewer immediate system replacements, though newer construction carries its own set of things to check rather than none at all.",
    paths:
      "Wilksmoor connects into the citywide golf-cart and multi-use path system like the rest of the city. Because it developed later, it is worth confirming exactly how the connections work from a given street.",
    amenities:
      "As the newest village, what is established nearby differs from the longer-settled parts of the city. Confirm what is actually built and open now rather than what is planned.",
    buyerNotes: [
      "For newer construction, ask about builder warranty status and what remains transferable to you.",
      "Do not skip inspection because a home is new — newer homes have their own common issues, they are just different ones.",
      "Confirm the path connections from the specific street, since the newest areas can connect differently than older ones.",
      "Distinguish between what exists nearby today and what is planned. Buy on what is built.",
    ],
    angelicasTake:
      "Newer does not mean skip the inspection. Having managed renovations myself, I have seen enough recently built homes with real issues to treat that inspection as seriously as I would on a forty-year-old house.",
    relatedPosts: ["five-villages", "new-construction-near-peachtree-city", "questions-before-choosing-a-village"],
  },
];

export function getVillage(slug: string): Village | undefined {
  return villages.find((v) => v.slug === slug);
}
