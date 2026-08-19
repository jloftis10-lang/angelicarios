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

export const posts: BlogPost[] = [
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
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
