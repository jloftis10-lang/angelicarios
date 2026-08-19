import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // These started as blog posts and were promoted to standalone pillar
      // pages. Permanent redirects so existing links and any indexed URLs
      // land on the new canonical location instead of a 404.
      {
        source: "/blog/moving-from-california-to-georgia",
        destination: "/moving-from-california-to-georgia",
        permanent: true,
      },
      {
        source: "/blog/why-underwriting-experience-matters",
        destination: "/underwriting-experience-real-estate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
