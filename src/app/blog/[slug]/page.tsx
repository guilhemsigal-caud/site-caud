import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Collective Audience Blog`, description: post.excerpt };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-ca-text mt-8 mb-3">
          {line.slice(2, -2)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-ca-muted text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-ca-blue flex-shrink-0 mt-2" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ca-text font-semibold">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.match(/^\d+\. /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-ca-muted text-sm leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-ca-blue/20 text-ca-blue text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">{j + 1}</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ca-text font-semibold">$1</strong>') }} />
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("✓ ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("✓ ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-center gap-3 text-ca-muted text-sm">
              <span className="text-ca-mint font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // empty line = paragraph break, skip
    } else {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ca-text font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      elements.push(
        <p key={i} className="text-ca-muted leading-relaxed my-3 text-base"
          dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main>
      <article>
        {/* ── Header ── */}
        <section className="bg-ca-dark py-16 border-b border-ca-border">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Blog
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
                style={{ color: post.accent, borderColor: `${post.accent}30`, background: `${post.accent}0a` }}>
                {post.category}
              </span>
              <span className="text-xs text-ca-muted">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="text-xs text-ca-muted">· {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ca-text leading-snug">
              {post.title}
            </h1>
            <p className="text-lg text-ca-muted leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="bg-ca-dark py-12">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div
              className="h-px mb-10 rounded-full"
              style={{ background: `linear-gradient(to right,transparent,${post.accent},transparent)` }}
            />
            <div className="prose-like">
              {renderContent(post.content)}
            </div>
            <div
              className="h-px mt-10 mb-8 rounded-full"
              style={{ background: `linear-gradient(to right,transparent,${post.accent},transparent)` }}
            />
            {/* Author / CTA */}
            <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
              <div>
                <div className="text-sm font-semibold text-ca-text">Collective Audience Team</div>
                <div className="text-xs text-ca-muted">New York · Paris</div>
              </div>
              <Link href="/newsletter"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0a0c14] transition-all hover:brightness-110"
                style={{ background: post.accent }}>
                Subscribe to the digest <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-14">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-base font-bold text-ca-text mb-5">More from the blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`}
                  className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: `${r.accent}22`, background: `${r.accent}08` }}>
                  <div className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: r.accent }}>{r.category}</div>
                  <h3 className="text-sm font-bold text-ca-text mb-1 group-hover:text-white transition-colors leading-snug">{r.title}</h3>
                  <p className="text-xs text-ca-muted line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </main>
  );
}
