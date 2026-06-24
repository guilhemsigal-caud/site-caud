import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/content/gallery";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateStaticParams() {
  return GALLERY_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: `${item.name} — Gallery — Collective Audience`, description: item.description };
}

export default async function GalleryItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  const related = GALLERY_ITEMS.filter((i) => i.slug !== slug && (i.category === item.category)).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-ca-dark overflow-hidden py-20">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full" style={{ background: `radial-gradient(circle,${item.accent}18 0%,transparent 70%)`, animation: "blob 12s ease-in-out infinite" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm text-ca-muted hover:text-ca-text transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Gallery
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-semibold tracking-widest uppercase mb-4" style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}0a` }}>
            {item.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {item.name}
          </h1>
          <p className="text-ca-muted text-lg max-w-2xl mb-8">{item.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {item.tags.map(t => <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-ca-muted border border-ca-border">{t}</span>)}
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {item.kpis.map(kpi => (
              <div key={kpi.label} className="rounded-2xl border p-5 text-center" style={{ borderColor: `${item.accent}25`, background: `${item.accent}0a` }}>
                <div className="text-3xl font-bold mb-1" style={{ color: item.accent }}>{kpi.value}</div>
                <div className="text-xs text-ca-muted">{kpi.label}</div>
              </div>
            ))}
          </div>

          {/* Demo placeholder */}
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: `${item.accent}20`, background: `linear-gradient(145deg,${item.accent}08 0%,#111420 60%)` }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-ca-border">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/40" /><div className="w-3 h-3 rounded-full bg-yellow-500/40" /><div className="w-3 h-3 rounded-full bg-green-500/40" /></div>
              <span className="text-xs text-ca-muted ml-2">Live demo — {item.name}</span>
            </div>
            <div className="flex items-center justify-center py-20 px-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}>
                  <span className="text-2xl" style={{ color: item.accent }}>▶</span>
                </div>
                <p className="text-ca-muted text-sm mb-4">Interactive demo for {item.name}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0a0c14] transition-all duration-200" style={{ background: item.accent }}>
                  Request a live demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related formats */}
      {related.length > 0 && (
        <section className="bg-ca-surface border-t border-ca-border py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-xl font-bold text-ca-text mb-6">Related formats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(r => (
                <Link key={r.slug} href={`/gallery/${r.slug}`}
                  className="group rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: `${r.accent}22`, background: `${r.accent}08` }}
                >
                  <div className="text-xs font-semibold mb-2" style={{ color: r.accent }}>{r.category}</div>
                  <div className="text-sm font-bold text-ca-text mb-1 group-hover:text-white transition-colors">{r.name}</div>
                  <div className="text-xs text-ca-muted">{r.kpis[0].value} {r.kpis[0].label}</div>
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
