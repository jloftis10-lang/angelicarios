import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { posts } from "@/content/blog";

export function RecentPosts() {
  const recent = posts.slice(0, 3);
  if (recent.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">From the blog</h2>
          <Link href="/blog" className="text-sm font-medium text-navy hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-sand/60 bg-white p-6 transition-colors hover:border-navy/40"
            >
              <h3 className="font-display text-lg font-semibold text-navy">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{post.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
