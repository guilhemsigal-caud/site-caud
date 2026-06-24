import type { Metadata } from "next";
import { SubPageTemplate } from "@/components/sections/SubPageTemplate";

export const metadata: Metadata = { title: "Publishers — Collective Audience", description: "Monetize smarter, collect first-party data, and engage your audience with Collective Audience." };

const ICON = (d: string) => <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;

export default function PublishersPage() {
  return (
    <SubPageTemplate
      hero={{
        eyebrow: "For Publishers",
        headline: "Sell. Collect. Engage.",
        subtitle: "Maximize yield across all your inventory, collect first-party audience data, and deploy conversational editorial formats that captivate readers — all from one open platform.",
        accent: "#5b8cff",
        ctaPrimary: { label: "Get started", href: "/contact" },
        ctaSecondary: { label: "View media partners", href: "/publishers/partners" },
        stats: [{ value: "200+", label: "publisher partners" }, { value: "+28%", label: "avg. eCPM uplift" }, { value: "94%", label: "fill rate" }],
      }}
      featuresTitle="Everything publishers need"
      features={[
        { icon: ICON("M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"), title: "Yield Optimization", description: "Header bidding, dynamic allocation, and backfill strategies to maximize eCPM across all demand sources.", href: "/publishers/monetization", accent: "#5b8cff" },
        { icon: ICON("M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"), title: "First-Party Data", description: "Build your CRM and DMP with cookieless audience data collection, GDPR-compliant and fully owned by you.", href: "/publishers/data", accent: "#7df0c8" },
        { icon: ICON("M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"), title: "Editorial Tool", description: "Deploy conversational and interactive formats inline within your editorial content — no disruption, more engagement.", href: "/publishers/editorial", accent: "#7b3fff" },
        { icon: ICON("M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"), title: "Publisher Network", description: "Join 200+ premium publishers and benefit from collective intelligence, shared demand, and network effects.", href: "/publishers/partners", accent: "#5b8cff" },
        { icon: ICON("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"), title: "Brand Safety", description: "99% brand-safe placements with real-time content classification and advertiser controls.", accent: "#7df0c8" },
        { icon: ICON("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"), title: "Real-Time Analytics", description: "Live dashboard tracking impressions, viewability, attention metrics, and revenue in real time.", accent: "#7b3fff" },
      ]}
    />
  );
}
