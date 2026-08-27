import type { BlogPost } from "./types";
import { post as movingToPeachtreeCity } from "./posts/moving-to-peachtree-city";
import { post as fiveVillages } from "./posts/five-villages";
import { post as golfCartPathGuide } from "./posts/golf-cart-path-guide";
import { post as livingNearTrilith } from "./posts/living-near-trilith";
import { post as peachtreeCityVsFayetteville } from "./posts/peachtree-city-vs-fayetteville";
import { post as peachtreeCityVsNewnan } from "./posts/peachtree-city-vs-newnan";
import { post as peachtreeCityVsSenoia } from "./posts/peachtree-city-vs-senoia";
import { post as buyingAnOlderHome } from "./posts/buying-an-older-home-peachtree-city";
import { post as newConstruction } from "./posts/new-construction-near-peachtree-city";
import { post as buyingRemotely } from "./posts/buying-remotely-in-georgia";
import { post as dueDiligence } from "./posts/due-diligence-in-georgia";
import { post as sellersShouldFix } from "./posts/what-sellers-should-fix-before-listing";
import { post as notToRenovate } from "./posts/what-not-to-renovate-before-selling";
import { post as homeStyles } from "./posts/peachtree-city-home-styles";
import { post as firstWeekend } from "./posts/first-weekend-in-peachtree-city";
import { post as choosingAVillage } from "./posts/questions-before-choosing-a-village";

const publicationDates: Record<string, string> = {
  "moving-to-peachtree-city": "2026-03-12",
  "five-villages": "2026-03-28",
  "golf-cart-path-guide": "2026-04-10",
  "living-near-trilith": "2026-04-24",
  "peachtree-city-vs-fayetteville": "2026-05-08",
  "peachtree-city-vs-newnan": "2026-05-21",
  "peachtree-city-vs-senoia": "2026-06-03",
  "buying-an-older-home-peachtree-city": "2026-06-15",
  "new-construction-near-peachtree-city": "2026-06-27",
  "buying-remotely-in-georgia": "2026-07-06",
  "due-diligence-in-georgia": "2026-07-15",
  "what-sellers-should-fix-before-listing": "2026-07-24",
  "what-not-to-renovate-before-selling": "2026-08-02",
  "peachtree-city-home-styles": "2026-08-09",
  "first-weekend-in-peachtree-city": "2026-08-17",
  "questions-before-choosing-a-village": "2026-08-24",
};

const sourcePosts: BlogPost[] = [
  movingToPeachtreeCity,
  fiveVillages,
  golfCartPathGuide,
  livingNearTrilith,
  peachtreeCityVsFayetteville,
  peachtreeCityVsNewnan,
  peachtreeCityVsSenoia,
  buyingAnOlderHome,
  newConstruction,
  buyingRemotely,
  dueDiligence,
  sellersShouldFix,
  notToRenovate,
  homeStyles,
  firstWeekend,
  choosingAVillage,
];

export const posts: BlogPost[] = sourcePosts
  .map((post) => ({
    ...post,
    publishedAt: publicationDates[post.slug] ?? post.publishedAt,
  }))
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
