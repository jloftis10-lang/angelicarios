import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { posts, getPostBySlug } from "@/content/blog";
import { agent, brand, siteUrl } from "@/config/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: brand.name },
    url: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <time dateTime={post.publishedAt} className="text-xs font-semibold uppercase tracking-wide text-sage">
            {formatDate(post.publishedAt)}
          </time>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate">By {agent.firstName}</p>

          <div className="mt-8">
            <post.Content />
          </div>
        </Container>
      </article>

      <section className="pb-16 md:pb-24">
        <Container className="max-w-2xl rounded-3xl bg-sand/30 p-10">
          <h2 className="font-display text-2xl font-semibold text-navy">Thinking about a move?</h2>
          <p className="mt-2 text-sm text-slate">A conversation is a good place to start.</p>
          <Button href="/contact" className="mt-5">
            Talk With Angelica
          </Button>
        </Container>
      </section>
    </>
  );
}
