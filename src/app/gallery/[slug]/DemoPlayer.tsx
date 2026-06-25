"use client";

import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { GalleryDemo } from "@/content/gallery";

interface Props {
  demos: GalleryDemo[];
  accent: string;
  name: string;
}

export function DemoPlayer({ demos, accent, name }: Props) {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
    >
      {demos.map((demo, i) => (
        <motion.a
          key={i}
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.35 }}
          className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          style={{
            borderColor: `${accent}35`,
            boxShadow: "0 2px 16px rgba(0,0,40,0.08)",
          }}
        >
          {/* Phone mockup preview area */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              height: 320,
              background: `linear-gradient(145deg, ${accent}12 0%, #eef0fb 100%)`,
            }}
          >
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, ${accent}30 1px, transparent 1px), linear-gradient(to bottom, ${accent}30 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Phone frame */}
            <div
              className="relative rounded-[28px] border-[3px] overflow-hidden flex flex-col"
              style={{
                width: 120,
                height: 220,
                borderColor: `${accent}60`,
                background: "white",
                boxShadow: `0 8px 32px ${accent}25, 0 2px 8px rgba(0,0,40,0.12)`,
              }}
            >
              {/* Phone notch */}
              <div className="flex justify-center pt-2 pb-1 flex-shrink-0">
                <div className="w-10 h-1.5 rounded-full" style={{ background: `${accent}40` }} />
              </div>

              {/* Screen content simulation */}
              <div className="flex-1 px-2 pb-2 space-y-1.5 overflow-hidden">
                <div className="h-2 rounded-full w-full" style={{ background: `${accent}20` }} />
                <div className="h-1.5 rounded-full w-4/5" style={{ background: `${accent}15` }} />
                <div className="h-1.5 rounded-full w-3/4" style={{ background: `${accent}15` }} />
                <div
                  className="rounded-lg mt-2 flex items-center justify-center"
                  style={{ height: 56, background: `linear-gradient(135deg, ${accent}25, ${accent}10)`, border: `1px solid ${accent}30` }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: accent }}>
                    <Play className="w-3 h-3 text-white fill-white" />
                  </div>
                </div>
                <div className="h-1.5 rounded-full w-full mt-2" style={{ background: `${accent}12` }} />
                <div className="h-1.5 rounded-full w-2/3" style={{ background: `${accent}12` }} />
                <div className="flex gap-1 mt-1.5">
                  <div className="h-5 flex-1 rounded" style={{ background: accent, opacity: 0.9 }} />
                  <div className="h-5 flex-1 rounded border" style={{ borderColor: `${accent}40`, background: `${accent}08` }} />
                </div>
              </div>

              {/* Home bar */}
              <div className="flex justify-center pb-2">
                <div className="w-8 h-1 rounded-full" style={{ background: `${accent}50` }} />
              </div>
            </div>

            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: `${accent}18`, backdropFilter: "blur(4px)" }}
            >
              <div
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg"
                style={{ background: accent, color: "#0e1025" }}
              >
                Ouvrir <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Label bar */}
          <div
            className="flex items-center justify-between px-4 py-3 border-t"
            style={{ borderColor: `${accent}20`, background: "#f0f2fc" }}
          >
            <span className="text-sm font-semibold text-ca-text">
              {demo.label ?? `Démo ${i + 1}`}
            </span>
            <ExternalLink
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: accent }}
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
