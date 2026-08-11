import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

const routes = ["", "/buy", "/sell", "/relocate", "/peachtree-city-ga", "/about", "/contact", "/guide"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
