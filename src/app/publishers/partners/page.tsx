import type { Metadata } from "next";
import { PillarHero } from "@/components/sections/PillarHero";
import { CTABanner } from "@/components/sections/CTABanner";
export const metadata: Metadata = { title: "Media Partners — Publishers — Collective Audience" };

const MEDIA = ["Le Monde","Les Échos","L'Obs","Courrier International","Télérama","HuffPost France","Forbes France","Libération","L'Express","Le Figaro","Mediapart","20 Minutes","Le Point","L'Humanité","Challenges","Capital","Le JDD","L'Equipe","Slate","Numerama","01net","Tom's Guide","BFM TV","BFMTV","RTL","Europe 1","France Info","CNews","LCI","Konbini","Brut","Loopsider","Madame Figaro","Vogue France","ELLE","Marie Claire","Closer","Gala","Paris Match"];

export default function Page() {
  return (
    <main>
      <PillarHero eyebrow="Publishers · Partners" headline="200+ premium media partners." subtitle="From national dailies to digital-native media, our publisher network covers every major audience segment in France and beyond." accent="#5b8cff" stats={[{ value: "200+", label: "publishers" }, { value: "2B+", label: "monthly impressions" }, { value: "FR · EU · US", label: "coverage" }]} />
      <section className="bg-ca-dark py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-ca-muted mb-10">Publisher network (selection)</p>
          <div className="flex flex-wrap justify-center gap-3">
            {MEDIA.map((m) => (
              <div key={m} className="px-5 py-2.5 rounded-xl border border-ca-border bg-ca-surface text-sm font-medium text-ca-muted hover:text-ca-text hover:border-ca-blue/30 transition-all duration-200">
                {m}
              </div>
            ))}
            <div className="px-5 py-2.5 rounded-xl border border-ca-blue/30 bg-ca-blue/8 text-sm font-semibold text-ca-blue">
              +160 more
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
