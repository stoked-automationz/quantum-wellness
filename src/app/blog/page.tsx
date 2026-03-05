import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Journal | Dispatches from The Forge",
  description:
    "Insights on transformation, breathwork, permaculture, and volcanic living from Quantum Wellness Warrior on Hawaii's Big Island.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative py-24 md:py-32 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide">
            The <span className="text-quantum-gold">Journal</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Dispatches from the volcanic training ground. Insights on
            transformation, breathwork, permaculture, and the philosophy behind
            The Forge.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-4xl px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                The first dispatches are being forged. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="bg-volcanic-ash border-quantum-gold/10 hover:border-quantum-gold/30 transition-all group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-3">
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
                      <h2 className="font-heading text-2xl font-bold text-white-fire tracking-wide group-hover:text-quantum-gold transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-silver-mist/70 leading-relaxed">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
