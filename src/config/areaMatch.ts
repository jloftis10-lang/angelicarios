/**
 * Question set and scoring for the /area-match tool.
 *
 * IMPORTANT FRAMING: this does not compute an objective "best" area. It
 * surfaces areas worth exploring based on stated priorities, and every
 * result carries the reasons it appeared so the visitor can judge for
 * themselves. Weights encode structural characteristics we can defend
 * (Peachtree City has the path network; Trilith is walkable and dense;
 * Tyrone and Newnan skew toward more land for the money) — never home
 * values, school quality, or desirability.
 */

export type AreaKey =
  | "peachtree-city"
  | "trilith"
  | "fayetteville"
  | "tyrone"
  | "senoia"
  | "newnan"
  | "serenbe"
  | "palmetto"
  | "sharpsburg";

export type AreaMatchOption = {
  value: string;
  label: string;
  /** Points added per area, plus the reason to show if this option drove a match. */
  weights: Partial<Record<AreaKey, number>>;
  reason?: string;
};

export type AreaMatchQuestion = {
  id: string;
  question: string;
  help?: string;
  options: AreaMatchOption[];
};

export const areaMatchQuestions: AreaMatchQuestion[] = [
  {
    id: "paths",
    question: "How much does the golf-cart and multi-use path network matter to you?",
    help: "It is the single biggest structural difference between Peachtree City and everywhere around it.",
    options: [
      {
        value: "essential",
        label: "It's a main reason I'm looking here",
        weights: { "peachtree-city": 5 },
        reason: "the path network is central to how Peachtree City works day to day",
      },
      {
        value: "nice",
        label: "Nice to have, not decisive",
        weights: { "peachtree-city": 2, fayetteville: 1, tyrone: 1 },
      },
      {
        value: "indifferent",
        label: "Not important to me",
        weights: { fayetteville: 2, newnan: 2, tyrone: 2, senoia: 2, sharpsburg: 2, palmetto: 1 },
        reason: "you're not tied to the path network, which opens up the surrounding communities",
      },
    ],
  },
  {
    id: "walkability",
    question: "Do you want to be able to walk to shops and restaurants?",
    options: [
      {
        value: "yes",
        label: "Yes — walkability is a priority",
        weights: { trilith: 5, serenbe: 4, senoia: 2 },
        reason: "you want a walkable setting rather than a drive-to-everything layout",
      },
      { value: "somewhat", label: "Somewhat — a short drive is fine", weights: { "peachtree-city": 2, fayetteville: 1, senoia: 1 } },
      { value: "no", label: "No — I expect to drive", weights: { tyrone: 2, newnan: 2, sharpsburg: 2, palmetto: 2, fayetteville: 1 } },
    ],
  },
  {
    id: "lot",
    question: "What matters more: lot size or being close to things?",
    options: [
      {
        value: "lot",
        label: "More land, further out",
        weights: { tyrone: 4, palmetto: 4, sharpsburg: 3, senoia: 3, newnan: 2 },
        reason: "you prioritized land, which generally means looking outside the denser planned areas",
      },
      { value: "balance", label: "A balance of both", weights: { "peachtree-city": 2, fayetteville: 3 } },
      {
        value: "close",
        label: "Closer in, smaller lot is fine",
        weights: { trilith: 4, serenbe: 3, "peachtree-city": 2 },
        reason: "you're willing to trade lot size for proximity",
      },
    ],
  },
  {
    id: "housingAge",
    question: "Established neighborhood or newer construction?",
    options: [
      {
        value: "established",
        label: "Established, with mature trees",
        weights: { "peachtree-city": 3, fayetteville: 2, senoia: 2, newnan: 2 },
        reason: "you leaned toward established neighborhoods",
      },
      {
        value: "newer",
        label: "Newer construction",
        weights: { trilith: 4, serenbe: 3, "peachtree-city": 2, fayetteville: 2, sharpsburg: 1 },
        reason: "you leaned toward newer construction",
      },
      { value: "either", label: "Either, depends on the house", weights: { fayetteville: 2, newnan: 2, "peachtree-city": 1 } },
    ],
  },
  {
    id: "commute",
    question: "How often will you drive toward the airport or Atlanta?",
    help: "Whatever you pick, drive the route yourself at the hours you'd really be driving it.",
    options: [
      {
        value: "often",
        label: "Regularly — most weeks",
        weights: { tyrone: 3, fayetteville: 3, trilith: 2 },
        reason: "you'll be driving toward the airport or Atlanta regularly, which favors the northern part of the county",
      },
      { value: "sometimes", label: "Occasionally", weights: { "peachtree-city": 2, fayetteville: 2, newnan: 1 } },
      {
        value: "rarely",
        label: "Rarely — I work locally or remotely",
        weights: { senoia: 3, serenbe: 3, palmetto: 2, newnan: 2, sharpsburg: 2, "peachtree-city": 2 },
        reason: "the commute isn't a constraint for you, which widens the map considerably",
      },
    ],
  },
  {
    id: "character",
    question: "Which setting appeals more?",
    options: [
      {
        value: "planned",
        label: "A planned community with shared amenities",
        weights: { "peachtree-city": 4, serenbe: 3, trilith: 2 },
        reason: "you're drawn to a planned setting with shared amenities",
      },
      {
        value: "historic",
        label: "A historic small town with a real downtown",
        weights: { senoia: 5, newnan: 3, palmetto: 2 },
        reason: "you're drawn to a historic small-town setting",
      },
      {
        value: "conventional",
        label: "A conventional suburb with variety",
        weights: { fayetteville: 4, newnan: 3, tyrone: 2, sharpsburg: 2 },
        reason: "you're drawn to a conventional suburban setting with more variety",
      },
    ],
  },
  {
    id: "recreation",
    question: "How important are lakes, golf, and outdoor recreation nearby?",
    options: [
      {
        value: "very",
        label: "Very — I'd use them regularly",
        weights: { "peachtree-city": 4 },
        reason: "Peachtree City's lakes and recreation areas line up with how you want to spend time",
      },
      { value: "somewhat", label: "Somewhat", weights: { "peachtree-city": 2, fayetteville: 1, senoia: 1 } },
      { value: "not", label: "Not a factor", weights: { fayetteville: 2, newnan: 2, tyrone: 1 } },
    ],
  },
  {
    id: "renovation",
    question: "How do you feel about a home that needs work?",
    options: [
      {
        value: "willing",
        label: "Open to it — I'd take on a project",
        weights: { newnan: 3, senoia: 3, tyrone: 2, palmetto: 2, sharpsburg: 2 },
        reason: "you're open to a project, which tends to widen what's worth looking at",
      },
      { value: "cosmetic", label: "Cosmetic updates only", weights: { "peachtree-city": 2, fayetteville: 2, newnan: 1 } },
      {
        value: "turnkey",
        label: "I want it move-in ready",
        weights: { trilith: 3, "peachtree-city": 2, fayetteville: 1 },
        reason: "you want something move-in ready",
      },
    ],
  },
];
