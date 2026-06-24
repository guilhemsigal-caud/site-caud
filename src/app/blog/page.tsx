import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Blog & Insights — Collective Audience",
  description: "Industry research, product updates, and open web insights from the Collective Audience team.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-ca-dark py-20 border-b border-ca-border">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">
            Blog & Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            The Open Web Digest
          </h1>
          <p className="text-ca-muted text-lg max-w-xl">
            Research, product news, and adtech thinking from the Collective Audience team.
          </p>
        </div>
      </section>

      <section className="bg-ca-dark py-14 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          {/* Featured article */}
          <Link href={`/blog/${featured.slug}`}
            className="group relative flex flex-col md:flex-row gap-8 rounded-2xl border overflow-hidden p-8 mb-10 transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderColor: `${featured.accent}30`, background: `linear-gradient(135deg,${featured.accent}0d 0%,#111420 55%)` }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(to right,transparent,${featured.accent},transparent)` }} />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: featured.accent, borderColor: `${featured.accent}30`, background: `${featured.accent}0a` }}>
                  {featured.category}
                </span>
                <span className="text-[10px] text-ca-muted">Featured</span>
                <span className="text-[10px] text-ca-muted">· {featured.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ca-text mb-3 group-hover:text-white transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-ca-muted leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: featured.accent }}>
                Read article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="md:w-48 flex-shrink-0 flex flex-col justify-between">
              <div className="rounded-xl border p-4" style={{ borderColor: `${featured.accent}20`, background: `${featured.accent}08` }}>
                <div className="text-3xl font-bold gradient-text-blue-mint mb-1">+40%</div>
                <div className="text-xs text-ca-muted">Brand lift with attention formats</div>
              </div>
              <div className="text-xs text-ca-muted mt-4">
                {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
            </div>
          </Link>

          {/* Grid of other articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group relative flex flex-col rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${post.accent}22`, background: `linear-gradient(145deg,${post.accent}08 0%,#111420 55%)` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(to right,transparent 5%,${post.accent} 40%,${post.accent} 60%,transparent 95%)` }} />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                    style={{ color: post.accent, borderColor: `${post.accent}30`, background: `${post.accent}0a` }}>
                    {post.category}
                  </span>
                  <span className="text-[10px] text-ca-muted">{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-ca-text mb-2 leading-snug group-hover:text-white transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-xs text-ca-muted leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: `${post.accent}18` }}>
                  <span className="text-[10px] text-ca-muted">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: post.accent }}>
                    Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
