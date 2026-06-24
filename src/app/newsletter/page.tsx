import type { Metadata } from "next";
import { Mail } from "lucide-react";
export const metadata: Metadata = { title: "Newsletter — Collective Audience" };
export default function NewsletterPage() {
  return (
    <main className="bg-ca-dark min-h-screen py-24 flex items-center">
      <div className="max-w-xl mx-auto px-6 md:px-8 w-full">
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-5" style={{ background: "rgba(91,140,255,0.15)", border: "1px solid rgba(91,140,255,0.3)" }}>
            <Mail className="w-6 h-6 text-ca-blue" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ca-blue/30 bg-ca-blue/8 text-xs font-semibold tracking-widest uppercase text-ca-blue mb-5">Newsletter</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ background: "linear-gradient(135deg,#f0f2ff 40%,rgba(240,242,255,0.5) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stay ahead of the open web.</h1>
          <p className="text-ca-muted leading-relaxed">Industry insights, product updates, and adtech trends — curated weekly by the Collective Audience team. No spam. Unsubscribe anytime.</p>
        </div>
        <div className="rounded-2xl border border-ca-border bg-ca-surface p-8">
          <form className="space-y-4">
            <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">Email *</label><input type="email" required placeholder="your@company.com" className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-text text-sm placeholder:text-ca-muted focus:outline-none focus:border-ca-blue/50 focus:ring-1 focus:ring-ca-blue/30 transition-colors" /></div>
            <div><label className="block text-xs font-semibold text-ca-muted mb-1.5">I am a...</label>
              <select className="w-full px-4 py-3 rounded-xl border border-ca-border bg-ca-dark text-ca-muted text-sm focus:outline-none focus:border-ca-blue/50 transition-colors">
                <option>Publisher</option><option>Advertiser / Agency</option><option>Adtech professional</option><option>Other</option>
              </select>
            </div>
            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden />
            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent" required className="mt-0.5" />
              <label htmlFor="consent" className="text-xs text-ca-muted">I agree to receive the newsletter and accept the <a href="/legal/privacy" className="text-ca-blue hover:underline">Privacy Policy</a>.</label>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl bg-ca-blue text-white font-semibold text-sm hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_24px_rgba(91,140,255,0.4)]">Subscribe</button>
          </form>
          <p className="text-[10px] text-ca-muted text-center mt-4">Powered by Brevo. GDPR compliant. Unsubscribe in one click.</p>
        </div>
      </div>
    </main>
  );
}
