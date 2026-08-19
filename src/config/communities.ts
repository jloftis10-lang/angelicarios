/**
 * South Metro Atlanta communities Angelica serves, and the content that
 * drives both the /communities hub and each community landing page.
 *
 * FACT DISCIPLINE: county assignments and broad character notes only.
 * No home values, no school ratings, no demographic claims, no commute
 * times stated as guarantees, no HOA specifics. Anything a buyer would
 * act on is framed as a question to verify rather than an assertion.
 */
export type Community = {
  slug: string;
  /** Public route. Some communities are covered by their own page, others point elsewhere. */
  href: string;
  name: string;
  county: string;
  /** One-liner used on cards and in nav-adjacent contexts. */
  summary: string;
  /** Longer orientation used at the top of the community page. */
  intro: string;
  /** "What makes this area different" — neutral, structural characteristics. */
  distinctives: { title: string; copy: string }[];
  /** Housing / neighborhood orientation paragraphs. */
  housing: string[];
  /** Location + access context. */
  location: string;
  /** Other community slugs worth comparing against. */
  compareWith: string[];
  /** Home-search considerations, phrased as things to check rather than claims. */
  considerations: string[];
  /** Editorial guidance in Angelica's voice — site copy, not a testimonial quote. */
  angelicasTake: string;
  /** Blog slugs worth surfacing on this page. */
  relatedPosts: string[];
  metaTitle: string;
  metaDescription: string;
};

export const communities: Community[] = [
  {
    slug: "peachtree-city",
    href: "/peachtree-city-ga",
    name: "Peachtree City",
    county: "Fayette County",
    summary:
      "A master-planned community known for lakes, wooded scenery, and a 100+ mile shared-use path network connecting neighborhoods with everyday destinations.",
    intro:
      "Peachtree City is a planned community in Fayette County built around five villages and a citywide path network. It is the anchor of most home searches in this part of South Metro Atlanta.",
    distinctives: [],
    housing: [],
    location: "",
    compareWith: ["fayetteville", "tyrone", "newnan"],
    considerations: [],
    angelicasTake: "",
    relatedPosts: ["moving-to-peachtree-city", "five-villages", "golf-cart-path-guide"],
    metaTitle: "",
    metaDescription: "",
  },
  {
    slug: "fayetteville",
    href: "/fayetteville-ga",
    name: "Fayetteville",
    county: "Fayette County",
    summary:
      "The Fayette County seat, mixing long-established neighborhoods with newer development, and generally the first area buyers compare against Peachtree City.",
    intro:
      "Fayetteville is the county seat of Fayette County and sits just northeast of Peachtree City. For a lot of buyers it becomes the natural second option — same county, a different development pattern, and a different set of tradeoffs.",
    distinctives: [
      {
        title: "A conventional street grid",
        copy: "Fayetteville developed in a more traditional pattern than Peachtree City's village-and-path structure. That means getting around is mostly car-based rather than organized around a shared-use path network.",
      },
      {
        title: "A wide span of housing ages",
        copy: "You will find long-established neighborhoods and newer subdivisions in relatively close proximity, which tends to widen the range of what your budget reaches.",
      },
      {
        title: "County-seat civic center",
        copy: "As the seat of Fayette County, Fayetteville holds county government functions and an associated concentration of services and retail.",
      },
      {
        title: "Proximity to Trilith",
        copy: "Trilith and the studio campus sit within the Fayetteville area, which gives one part of the city a distinctly different, walkable, mixed-use character.",
      },
    ],
    housing: [
      "Housing in Fayetteville is less uniform than in a planned community. Because the city grew over a longer period without a single master plan, construction era, lot size, and neighborhood layout vary considerably from one area to the next.",
      "That variety is the main practical reason buyers look here. If a Peachtree City search feels constrained on lot size, home age, or price, the same budget in Fayetteville often reaches a different mix — but it is genuinely a different lifestyle rather than a straight substitution.",
    ],
    location:
      "Fayetteville sits in Fayette County, adjacent to Peachtree City and within the broader South Metro Atlanta area. It provides access toward Hartsfield-Jackson Atlanta International Airport and the wider metro, though actual drive times vary by traffic, time of day, and exactly where in the city you are starting from — worth timing yourself during the hours you would really be driving.",
    compareWith: ["peachtree-city", "trilith", "tyrone"],
    considerations: [
      "How much does the shared-use path network matter to you? It is the single biggest structural difference from Peachtree City.",
      "Which construction era fits what you want — and what does that imply for systems, roof, and mechanicals at inspection?",
      "How far is this specific address from the daily destinations you will actually drive to?",
      "If Trilith is of interest, how does that part of the area compare with the rest of Fayetteville for your purposes?",
      "What are the current, verified school attendance zones for the specific address? Confirm directly with the district rather than a listing site.",
    ],
    angelicasTake:
      "Buyers often arrive set on Peachtree City and discover partway through that what they actually wanted was a particular lot size or house age. Fayetteville is usually where we test that. If the path network is the reason you came to this area, that is worth knowing early — it is the one thing Fayetteville cannot replicate.",
    relatedPosts: ["peachtree-city-vs-fayetteville", "living-near-trilith", "moving-to-peachtree-city"],
    metaTitle: "Fayetteville GA Real Estate & Relocation Guide",
    metaDescription:
      "An orientation to buying a home in Fayetteville, Georgia — how it compares with Peachtree City, housing variety, location context, and what to verify before touring.",
  },
  {
    slug: "trilith",
    href: "/trilith-ga",
    name: "Trilith",
    county: "Fayette County",
    summary:
      "A walkable, mixed-use community built around Trilith Studios in Fayetteville — a genuinely different housing format for this area.",
    intro:
      "Trilith is a mixed-use, walkable community built around Trilith Studios, a film and television production campus in Fayetteville. It comes up constantly in South Metro Atlanta home searches because it offers a format that almost nothing else nearby does.",
    distinctives: [
      {
        title: "Built for walking, not driving",
        copy: "Trilith was planned around walkability and shared public space, with residential, retail, and dining designed to sit close together rather than being separated into zones.",
      },
      {
        title: "A studio campus at its center",
        copy: "Trilith Studios anchors the community. That shapes the local economy and creates demand patterns you would not find in a purely residential neighborhood.",
      },
      {
        title: "Distinctive architecture",
        copy: "The community was developed with a deliberate and consistent architectural approach, which makes it visually unlike the surrounding subdivisions.",
      },
      {
        title: "Higher density by design",
        copy: "Walkability comes from density. Lot sizes and the relationship between homes are generally different from conventional suburban development nearby.",
      },
    ],
    housing: [
      "Trilith's housing is purpose-built to support a walkable layout, which means the tradeoffs are different from a typical Fayette County subdivision. Buyers who want a large private lot generally find the format works against them; buyers who want to walk to dinner tend to find it is the only nearby option that delivers that.",
      "Because it is a newer, deliberately designed community, homes here are less varied in era and style than in Fayetteville generally. That consistency is part of the appeal for some buyers and a limitation for others.",
    ],
    location:
      "Trilith is located within the Fayetteville area of Fayette County, near Peachtree City and within South Metro Atlanta. Its position gives reasonable access toward the airport and the metro, but as always the number that matters is your own drive at your own hours.",
    compareWith: ["fayetteville", "peachtree-city", "senoia"],
    considerations: [
      "Does a walkable, higher-density layout genuinely fit how you live, or does it mainly appeal in the abstract?",
      "What are the current HOA or community association terms, fees, and rules for the specific property? Verify these in the actual governing documents.",
      "How does the density tradeoff compare against what the same budget buys on a conventional lot nearby?",
      "If proximity to the studio campus is part of your reasoning, what specifically are you counting on it for?",
      "What is the resale picture for this particular home type, given it is a more specialized product than a standard subdivision house?",
    ],
    angelicasTake:
      "Trilith is one of the few places around here where the format itself is the product. I encourage buyers to walk it at the time of day they would actually be out — a weekday evening tells you far more than a Saturday afternoon showing does.",
    relatedPosts: ["living-near-trilith", "peachtree-city-vs-fayetteville", "new-construction-near-peachtree-city"],
    metaTitle: "Trilith GA Real Estate & Community Guide",
    metaDescription:
      "An orientation to Trilith in Fayetteville, Georgia — the walkable mixed-use community around Trilith Studios, how its housing format differs, and what to verify before buying.",
  },
  {
    slug: "tyrone",
    href: "/tyrone-ga",
    name: "Tyrone",
    county: "Fayette County",
    summary:
      "A smaller Fayette County town with a quieter pace and convenient access to Peachtree City and the wider Atlanta region.",
    intro:
      "Tyrone is a smaller town in Fayette County, immediately north of Peachtree City. It tends to attract buyers who want proximity to Peachtree City without the planned-community structure.",
    distinctives: [
      {
        title: "Smaller scale",
        copy: "Tyrone is a smaller municipality than either Peachtree City or Fayetteville, which shapes the pace and the amount of retail and services inside the town itself.",
      },
      {
        title: "Adjacent to Peachtree City",
        copy: "Its position next to Peachtree City means many residents use Peachtree City amenities while living under a different municipality with different rules and services.",
      },
      {
        title: "Northward orientation",
        copy: "Being on the northern side of Fayette County shifts the drive toward the airport and the metro compared with starting from southern Peachtree City.",
      },
      {
        title: "Less uniform development",
        copy: "Housing is not organized under a single master plan, so neighborhoods vary more in lot size, era, and layout than they do inside Peachtree City's villages.",
      },
    ],
    housing: [
      "Tyrone's appeal for many buyers is lot size and a less structured setting. Because it did not develop under one plan, you will find more variation from street to street — which rewards looking at specific properties rather than generalizing about the town.",
      "Buyers weighing Tyrone against Peachtree City are usually trading path-network access and village amenities for land, price, or a quieter setting. Which side of that trade is right depends entirely on how you spend your weeks.",
    ],
    location:
      "Tyrone sits in northern Fayette County, adjacent to Peachtree City and within South Metro Atlanta. Its northern position generally shortens the drive toward the airport and Atlanta relative to points further south in the county, but verify your own route at your own commuting hours.",
    compareWith: ["peachtree-city", "fayetteville", "trilith"],
    considerations: [
      "Do you need to be inside Peachtree City limits for any specific reason — services, path access, or something else?",
      "For any property that appeals, what is the lot actually like: drainage, trees, usable space, access?",
      "What are the utility arrangements at the specific address — public water and sewer, or well and septic?",
      "How does the northern position change your real commute compared with a Peachtree City address?",
      "If you plan to use Peachtree City amenities regularly, how far is this address from the ones you would actually use?",
    ],
    angelicasTake:
      "Tyrone rewards looking at individual properties rather than the town as a whole. The variation street to street is wide enough that a general impression of Tyrone will not tell you much about the specific house you are considering.",
    relatedPosts: ["moving-to-peachtree-city", "questions-before-choosing-a-village", "buying-an-older-home-peachtree-city"],
    metaTitle: "Tyrone GA Real Estate & Relocation Guide",
    metaDescription:
      "An orientation to buying a home in Tyrone, Georgia — how this smaller Fayette County town compares with Peachtree City, housing variation, and what to verify before touring.",
  },
  {
    slug: "senoia",
    href: "/senoia-ga",
    name: "Senoia",
    county: "Coweta County",
    summary:
      "A distinctive Coweta County town known for its historic center and small-town character, south of Peachtree City.",
    intro:
      "Senoia is a small town in Coweta County, south of Peachtree City, known for its historic downtown and the character that comes with it. It is a genuinely different proposition from the planned-community model just north of it.",
    distinctives: [
      {
        title: "A historic center",
        copy: "Senoia's downtown is the organizing feature of the town, which gives it a defined center in a way that newer suburban development usually lacks.",
      },
      {
        title: "Different county, different systems",
        copy: "Senoia is in Coweta County rather than Fayette. County government, school district, and services are therefore different from Peachtree City, Fayetteville, and Tyrone.",
      },
      {
        title: "Small-town scale",
        copy: "The scale of the town shapes daily life — what is available locally versus what you would drive to.",
      },
      {
        title: "Filming history",
        copy: "The town has been used as a filming location, which has contributed to the preservation and visibility of its historic center.",
      },
    ],
    housing: [
      "Senoia includes older housing stock near the historic center alongside newer development around it. Those are two quite different buying experiences: an older in-town home carries character and the maintenance profile that comes with age, while newer construction nearby carries a different set of considerations entirely.",
      "Buyers drawn to Senoia are usually responding to the town's character rather than optimizing for commute or amenity density. It is worth being honest with yourself about which of those is actually driving the search.",
    ],
    location:
      "Senoia sits in Coweta County, south of Peachtree City and further from the airport and central Atlanta than the Fayette County options. If commute is a significant factor, this is the community where you most need to drive the route yourself before committing.",
    compareWith: ["newnan", "peachtree-city", "trilith"],
    considerations: [
      "Have you driven your realistic commute from Senoia, at the actual hours you would drive it?",
      "For an older in-town home, what does the inspection reveal about systems, roof, foundation, and any historic-district requirements?",
      "Are there any historic district or overlay rules affecting what you can change about the property? Verify in writing.",
      "Because this is Coweta County, have you confirmed the school, tax, and services picture separately from what applies in Fayette County?",
      "What is available in town day to day versus what you would routinely drive elsewhere for?",
    ],
    angelicasTake:
      "Senoia usually appeals to people for reasons that have nothing to do with square footage. That is a completely legitimate basis for a decision — it just needs to be weighed honestly against the drive, especially if someone in the household commutes daily.",
    relatedPosts: ["peachtree-city-vs-senoia", "buying-an-older-home-peachtree-city", "moving-to-peachtree-city"],
    metaTitle: "Senoia GA Real Estate & Community Guide",
    metaDescription:
      "An orientation to buying a home in Senoia, Georgia — the historic Coweta County town south of Peachtree City, its housing mix, and what to verify before touring.",
  },
  {
    slug: "newnan",
    href: "/newnan-ga",
    name: "Newnan",
    county: "Coweta County",
    summary:
      "The largest Coweta County city nearby, with a historic downtown, a wide housing range, and more scale than the smaller towns around it.",
    intro:
      "Newnan is the largest of the nearby Coweta County cities, with a historic downtown and a considerably wider range of housing than the smaller towns around it. It is the main Coweta County alternative for buyers who started in Peachtree City.",
    distinctives: [
      {
        title: "Scale and services",
        copy: "Newnan is large enough to support a broader base of retail, services, and employment than the smaller surrounding towns.",
      },
      {
        title: "Historic downtown",
        copy: "The city has a historic downtown core, giving it a defined center alongside newer development spreading outward from it.",
      },
      {
        title: "Wide housing range",
        copy: "Because the city has grown across many eras and directions, the range of housing types, ages, and price points is unusually broad for this area.",
      },
      {
        title: "Coweta County systems",
        copy: "Like Senoia, Newnan is in Coweta County, so county government, schools, and services differ from the Fayette County communities.",
      },
    ],
    housing: [
      "Newnan's housing range is its defining practical feature. Historic homes near downtown, mid-century neighborhoods, and newer subdivisions on the edges all exist within the same city — which means 'a house in Newnan' describes almost nothing on its own.",
      "For buyers whose budget feels tight in Peachtree City, Newnan frequently widens the options. The honest tradeoff is distance and a different community structure rather than a like-for-like swap.",
    ],
    location:
      "Newnan sits in Coweta County, west and south of Peachtree City, positioned along the I-85 corridor. That corridor position shapes the drive toward Atlanta differently than the Fayette County communities do — again, worth timing yourself rather than relying on an estimate.",
    compareWith: ["senoia", "peachtree-city", "fayetteville"],
    considerations: [
      "Which part of Newnan are you actually looking at? The city is large enough that neighborhoods differ substantially from one another.",
      "Have you driven the commute at real hours, particularly if it involves I-85?",
      "For an older home, what does inspection say about systems and structure, and what would updating actually cost?",
      "Have you verified Coweta County school zoning, taxes, and services for the specific address?",
      "If budget is what brought you here, is the distance tradeoff one you will still be happy with in year three?",
    ],
    angelicasTake:
      "Newnan is big enough that generalizing about it is a mistake. When someone tells me they are considering Newnan, my first question is which part — the answer changes the conversation completely.",
    relatedPosts: ["peachtree-city-vs-newnan", "buying-an-older-home-peachtree-city", "new-construction-near-peachtree-city"],
    metaTitle: "Newnan GA Real Estate & Relocation Guide",
    metaDescription:
      "An orientation to buying a home in Newnan, Georgia — the largest nearby Coweta County city, its wide housing range, location context, and what to verify before touring.",
  },
];

/** Communities that have their own dedicated landing page under a top-level route. */
export const communityPages = communities.filter((c) => c.href.endsWith("-ga") && c.slug !== "peachtree-city");

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
