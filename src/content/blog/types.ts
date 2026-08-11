import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  Content: () => ReactNode;
};
