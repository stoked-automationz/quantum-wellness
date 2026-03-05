import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { articleJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://quantumwellnesswarrior.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-widest text-quantum-gold/70 hover:text-quantum-gold transition-colors font-heading"
          >
            &larr; Back to Journal
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-quantum-gold/30 text-quantum-gold text-xs"
            >
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white-fire tracking-wide leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-silver-mist/70 leading-relaxed">
            {post.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <article
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-heading prose-headings:tracking-wide prose-headings:text-white-fire
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-silver-mist/80 prose-p:leading-relaxed
              prose-a:text-quantum-gold prose-a:underline-offset-4 hover:prose-a:text-quantum-gold/80
              prose-strong:text-white-fire
              prose-blockquote:border-quantum-gold/30 prose-blockquote:text-silver-mist/70
              prose-li:text-silver-mist/80
              prose-hr:border-quantum-gold/10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-quantum-gold/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-quantum-gold/20 text-muted-foreground text-xs"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.description,
              publishedTime: post.date,
              url: `https://quantumwellnesswarrior.com/blog/${slug}`,
            })
          ),
        }}
      />
    </>
  );
}
