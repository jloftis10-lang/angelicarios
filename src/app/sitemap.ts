import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { posts } from "@/content/blog";

const routes = [
  "",
  "/buy",
  "/sell",
  "/relocate",
  "/peachtree-city-ga",
  "/about",
  "/contact",
  "/faq",
  "/blog",
  "/guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
  }));

  return [...staticEntries, ...postEntries];
}
