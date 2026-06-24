import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/content/blog";
import { CTABanner } from "@/components/sections/CTABanner";
export const metadata: Metadata = { title: "Blog & Insights — Collective Audience" };
export default function BlogPage() {
  return (
    <main>
      <section className="relative bg-ca-dark overflow-hidden py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">Blog & Insights</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            The Open Web Digest
          </h1>
          <p className="text-ca-muted text-lg max-w-xl mx-auto">Industry news, product updates, and adtech research from the Collective Audience team.</p>
        </div>
      </section>
      <section className="bg-ca-dark py-12 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group relative flex flex-col rounded-2xl border overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${post.accent}22`, background: `linear-gradient(145deg,${post.accent}08 0%,#111420 55%)` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right,transparent 5%,${post.accent} 40%,${post.accent} 60%,transparent 95%)` }} />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border" style={{ color: post.accent, borderColor: `${post.accent}30`, background: `${post.accent}0a` }}>{post.category}</span>
                  <span className="text-[10px] text-ca-muted">{post.readTime}</span>
                </div>
                <h2 className="text-base font-bold text-ca-text mb-2 leading-snug group-hover:text-white transition-colors flex-1">{post.title}</h2>
                <p className="text-xs text-ca-muted leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: `${post.accent}18` }}>
                  <span className="text-[10px] text-ca-muted">{new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2" style={{ color: post.accent }}>Read <ArrowRight className="w-3.5 h-3.5" /></span>
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
