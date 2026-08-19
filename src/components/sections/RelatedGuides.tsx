import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getPostBySlug } from "@/content/blog";

/**
 * Surfaces related articles by slug. Silently skips slugs that don't
 * resolve, so a page referencing a post that hasn't been written yet
 * degrades instead of breaking the build.
 */
export function RelatedGuides({
  slugs,
  heading = "Related guides",
  className = "",
}: {
  slugs: string[];
  heading?: string;
  className?: string;
}) {
  const posts = slugs.map(getPostBySlug).filter((p) => p !== undefined);
  if (posts.length === 0) return null;

  return (
    <section className={`py-14 ${className}`}>
      <Container>
        <h2 className="font-display text-2xl font-semibold text-navy">{heading}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
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
