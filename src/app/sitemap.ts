import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { posts } from "@/content/blog";
import { villages } from "@/config/villages";

const routes = [
  "",
  "/buy",
  "/sell",
  "/relocate",
  "/peachtree-city-ga",
  "/about",
  "/contact",
  "/communities",
  "/invest",
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

  const villageEntries = villages.map((village) => ({
    url: `${siteUrl}/peachtree-city-ga/${village.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...villageEntries, ...postEntries];
}
