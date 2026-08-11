import type { BlogPost } from "./types";
import { post as movingToPeachtreeCity } from "./posts/moving-to-peachtree-city";
import { post as fiveVillages } from "./posts/five-villages";
import { post as golfCartPathGuide } from "./posts/golf-cart-path-guide";
import { post as movingFromCaliforniaToGeorgia } from "./posts/moving-from-california-to-georgia";

export const posts: BlogPost[] = [
  movingToPeachtreeCity,
  fiveVillages,
  golfCartPathGuide,
  movingFromCaliforniaToGeorgia,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
