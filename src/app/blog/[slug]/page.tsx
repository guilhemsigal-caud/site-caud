import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Collective Audience Blog` };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <article className="bg-ca-dark py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: post.accent, borderColor: `${post.accent}30`, background: `${post.accent}0a` }}>{post.category}</span>
            <span className="text-xs text-ca-muted">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="text-xs text-ca-muted">· {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ca-text leading-snug">{post.title}</h1>
          <p className="text-lg text-ca-muted leading-relaxed mb-10 border-b border-ca-border pb-10">{post.excerpt}</p>

          {/* Article body placeholder */}
          <div className="prose prose-invert max-w-none">
            <p className="text-ca-muted leading-relaxed mb-6">This is a placeholder for the full article content. In production, this would be sourced from a CMS, MDX files, or a headless content API.</p>
            <p className="text-ca-muted leading-relaxed mb-6">The article would contain in-depth analysis, data visualizations, expert quotes, and actionable takeaways for publishers and advertisers navigating the open web.</p>
            <div className="rounded-2xl border border-ca-border bg-ca-surface p-6 my-8">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: post.accent }}>Key Takeaway</div>
              <p className="text-ca-text font-medium">{post.excerpt}</p>
            </div>
            <p className="text-ca-muted leading-relaxed">To read the full article or access our complete research library, visit the <Link href="/resources/studies" className="text-ca-blue hover:underline">Studies & White Papers</Link> section.</p>
          </div>
        </div>
      </article>
      <CTABanner />
    </main>
  );
}
