"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { GalleryDemo } from "@/content/gallery";

interface Props {
  demos: GalleryDemo[];
  accent: string;
  name: string;
}

function DemoCard({ demo, accent, index }: { demo: GalleryDemo; accent: string; index: number }) {
  const proxyUrl = `/api/demo-proxy?url=${encodeURIComponent(demo.url)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: `${accent}35`, boxShadow: "0 2px 16px rgba(0,0,40,0.08)" }}
    >
      <div style={{ height: 480, overflow: "hidden", background: "#fff" }}>
        <iframe
          src={proxyUrl}
          style={{ width: "100%", height: "100%", border: "none" }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={demo.label ?? `Démo ${index + 1}`}
          loading="lazy"
        />
      </div>

      <div
        className="flex items-center justify-between px-4 py-3 border-t"
        style={{ borderColor: `${accent}20`, background: "#f0f2fc" }}
      >
        <span className="text-sm font-semibold text-ca-text">{demo.label ?? `Démo ${index + 1}`}</span>
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: accent }}
        >
          Ouvrir <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

export function DemoPlayer({ demos, accent }: Props) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
    >
      {demos.map((demo, i) => (
        <DemoCard key={i} demo={demo} accent={accent} index={i} />
      ))}
    </div>
  );
}
