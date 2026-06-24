export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  accent: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { slug: "cookieless-future-publisher-strategy", title: "The Cookieless Future: A Publisher's Survival Guide", excerpt: "With third-party cookies finally gone, publishers need a first-party data strategy. Here's how to build one that lasts.", category: "Publishers", date: "2025-06-10", readTime: "8 min read", accent: "#5b8cff" },
  { slug: "attention-metrics-brand-lift", title: "Why Attention Metrics Outperform CTR for Brand Campaigns", excerpt: "Click-through rate was never a proxy for brand impact. Attention time, dwell, and interaction tell a much better story.", category: "Advertisers", date: "2025-05-28", readTime: "6 min read", accent: "#7df0c8" },
  { slug: "audiencecloud-open-platform", title: "Introducing AudienceCloud: The Open Web Platform", excerpt: "Today we're officially launching AudienceCloud — the unified OS connecting 200+ publishers and 150+ brands.", category: "Product", date: "2025-05-15", readTime: "5 min read", accent: "#7b3fff" },
  { slug: "beop-nyiax-merger-collective-audience", title: "From BeOp & NYIAX to Collective Audience", excerpt: "The story of how two pioneering companies merged to build the open web platform the industry has been waiting for.", category: "Company", date: "2025-04-20", readTime: "7 min read", accent: "#5b8cff" },
  { slug: "conversational-formats-study", title: "Study: Conversational Ad Formats Deliver 3× Brand Attribution", excerpt: "New independent research confirms that conversational formats consistently outperform standard display on every brand metric.", category: "Research", date: "2025-04-05", readTime: "10 min read", accent: "#7df0c8" },
  { slug: "gdpr-first-party-data-compliance", title: "GDPR + First-Party Data: How to Stay Compliant at Scale", excerpt: "A practical guide to consent management, data governance, and compliant audience building for European publishers.", category: "Legal & Compliance", date: "2025-03-18", readTime: "9 min read", accent: "#7b3fff" },
];
