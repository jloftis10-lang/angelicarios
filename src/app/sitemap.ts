import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { posts } from "@/content/blog";
import { villages } from "@/config/villages";
import { communityPages } from "@/config/communities";

/** Static routes. Community and village routes are derived from config so
 *  adding one to the data automatically adds it to the sitemap. */
const routes = [
  "",
  "/buy",
  "/sell",
  "/relocate",
  "/invest",
  "/peachtree-city-ga",
  "/communities",
  "/area-match",
  "/guide",
  "/moving-from-california-to-georgia",
  "/underwriting-experience-real-estate",
  "/about",
  "/contact",
  "/faq",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    priority: route === "" ? 1 : 0.8,
  }));

  const communityEntries = communityPages.map((community) => ({
    url: `${siteUrl}${community.href}`,
    lastModified: now,
    priority: 0.8,
  }));

  const villageEntries = villages.map((village) => ({
    url: `${siteUrl}/peachtree-city-ga/${village.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
    priority: 0.6,
  }));

  return [...staticEntries, ...communityEntries, ...villageEntries, ...postEntries];
}
