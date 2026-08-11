import type { MetadataRoute } from "next";
import { brand } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.shortName,
    description: brand.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#193247",
  };
}
