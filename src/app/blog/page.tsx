import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on Peachtree City, relocating to South Metro Atlanta, and the local real-estate market.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">Blog</h1>
          <p className="mt-5 text-base leading-relaxed text-slate">
            Notes on Peachtree City, relocating to South Metro Atlanta, and what actually matters along the way.
          </p>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container className="max-w-2xl">
          <div className="flex flex-col divide-y divide-sand/60">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0">
                <time dateTime={post.publishedAt} className="text-xs font-semibold uppercase tracking-wide text-sage">
                  {formatDate(post.publishedAt)}
                </time>
                <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-navy hover:underline">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
