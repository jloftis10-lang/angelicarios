import type { BlogPost } from "./types";
import { post as movingToPeachtreeCity } from "./posts/moving-to-peachtree-city";
import { post as fiveVillages } from "./posts/five-villages";
import { post as golfCartPathGuide } from "./posts/golf-cart-path-guide";
import { post as movingFromCaliforniaToGeorgia } from "./posts/moving-from-california-to-georgia";
import { post as livingNearTrilith } from "./posts/living-near-trilith";
import { post as whyUnderwritingExperienceMatters } from "./posts/why-underwriting-experience-matters";

export const posts: BlogPost[] = [
  movingToPeachtreeCity,
  fiveVillages,
  golfCartPathGuide,
  movingFromCaliforniaToGeorgia,
  livingNearTrilith,
  whyUnderwritingExperienceMatters,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
