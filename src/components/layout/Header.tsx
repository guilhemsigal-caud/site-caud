"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";

const NAV = [
  {
    label: "Publishers",
    href: "/publishers",
    accent: "#5b8cff",
    children: [
      { label: "Monetization & Yield", href: "/publishers/monetization", desc: "eCPM, backfill & header bidding" },
      { label: "Data & Insights", href: "/publishers/data", desc: "CRM/DMP, cookieless audience data" },
      { label: "Editorial Tool", href: "/publishers/editorial", desc: "Conversational inline formats" },
      { label: "Media Partners", href: "/publishers/partners", desc: "200+ publisher network" },
    ],
  },
  {
    label: "Advertisers",
    href: "/advertisers",
    accent: "#7df0c8",
    children: [
      { label: "Formats & Experiences", href: "/advertisers/formats", desc: "High-attention ad formats" },
      { label: "Targeting & Measurement", href: "/advertisers/targeting", desc: "Cookieless, contextual, semantic" },
      { label: "Audience Services", href: "/advertisers/services", desc: "Marketing-as-a-Service" },
      { label: "Results & Case Studies", href: "/advertisers/results", desc: "KPIs, brand lift, ROI" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    accent: "#7b3fff",
    children: [
      { label: "AudienceDesk", href: "/platform/desk", desc: "Trading desk & omnichannel" },
      { label: "AudienceAds", href: "/platform/ads", desc: "Conversational ad formats" },
      { label: "AudienceConnect", href: "/platform/connect", desc: "Omnichannel distribution" },
      { label: "AudienceMatching", href: "/platform/matching", desc: "Cookieless identity matching" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Resources",
    href: "/resources/studies",
    children: [
      { label: "Studies & White Papers", href: "/resources/studies", desc: "S.T.A.M.P & research reports" },
      { label: "Blog & Insights", href: "/blog", desc: "Industry news & product updates" },
      { label: "Newsletter", href: "/newsletter", desc: "Weekly open web digest" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about", desc: "Open web heritage & vision" },
      { label: "Team & Advisors", href: "/about/team", desc: "Meet the people behind the platform" },
      { label: "Careers", href: "/careers", desc: "Join us in NY or Paris" },
    ],
  },
];

function Dropdown({ item, onClose }: { item: (typeof NAV)[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-ca-border bg-ca-surface shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden z-50"
      style={{ backdropFilter: "blur(16px)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent, ${item.accent ?? "#5b8cff"}, transparent)`,
        }}
      />
      <div className="p-2">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="group flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors duration-150"
          >
            <span className="text-sm font-semibold text-ca-text group-hover:text-white transition-colors">
              {child.label}
            </span>
            {"desc" in child && (
              <span className="text-xs text-ca-muted">{child.desc}</span>
            )}
          </Link>
        ))}
        <div className="border-t border-ca-border mt-2 pt-2">
          <Link
            href={item.href}
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors hover:bg-white/5"
            style={{ color: item.accent ?? "#5b8cff" }}
          >
            View all {item.label}
            <ChevronDown className="w-3 h-3 -rotate-90" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,12,20,0.92)"
            : "rgba(10,12,20,0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(30,34,54,0.8)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Collective Audience"
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-ca-muted hover:text-ca-text transition-colors duration-150"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      style={{ transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0)" }}
                    />
                    <AnimatePresence>
                      {openMenu === item.label && (
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                          style={{ background: item.accent ?? "#5b8cff" }}
                        />
                      )}
                    </AnimatePresence>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium text-ca-muted hover:text-ca-text transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72"
                  >
                    <AnimatePresence>
                      {openMenu === item.label && (
                        <Dropdown item={item} onClose={() => setOpenMenu(null)} />
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://dashboard.collectiveaudience.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-ca-muted hover:text-ca-text transition-colors"
            >
              Sign in
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-ca-blue text-white text-sm font-semibold hover:brightness-110 transition-all duration-200 hover:shadow-[0_0_20px_rgba(91,140,255,0.4)]"
            >
              Contact sales
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-ca-muted hover:text-ca-text hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-ca-border overflow-hidden"
            style={{ background: "rgba(10,12,20,0.97)", backdropFilter: "blur(16px)" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {NAV.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-ca-text hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-0.5 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-2 rounded-lg text-ca-muted hover:text-ca-text hover:bg-white/5 transition-colors"
                        >
                          <span className="text-sm">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-ca-border flex flex-col gap-2">
                <a
                  href="https://dashboard.collectiveaudience.co"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-ca-muted"
                >
                  Sign in <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-ca-blue text-white text-sm font-semibold"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
