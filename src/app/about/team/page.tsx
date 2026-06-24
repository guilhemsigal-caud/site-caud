import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
export const metadata: Metadata = { title: "Team & Advisors — About — Collective Audience" };
const TEAM = [
  { name: "Leadership", members: ["CEO & Co-Founder", "CTO & Co-Founder", "Chief Revenue Officer", "VP Product", "VP Engineering", "VP Sales EMEA"] },
  { name: "Advisors", members: ["Former SVP at Nasdaq", "Ex-Head of Programmatic, Publicis", "Co-founder, IAB France", "Former CMO, Le Monde Groupe"] },
];
export default function TeamPage() {
  return (
    <main>
      <section className="bg-ca-dark py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-6">Team & Advisors</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>The people behind the platform.</h1>
            <p className="text-ca-muted text-lg max-w-xl mx-auto">Adtech veterans, engineers, and open-web advocates from New York and Paris.</p>
          </div>
          {TEAM.map((group) => (
            <div key={group.name} className="mb-12">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-ca-muted mb-5">{group.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {group.members.map((m) => (
                  <div key={m} className="rounded-2xl border border-ca-border bg-ca-surface p-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ca-blue to-ca-mint mb-3 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#0a0c14]">{m.split(" ").map(w => w[0]).slice(0,2).join("")}</span>
                    </div>
                    <div className="text-sm font-semibold text-ca-text mb-0.5">{m}</div>
                    <div className="text-xs text-ca-muted">Collective Audience</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
