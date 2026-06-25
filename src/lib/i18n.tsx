"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "fr";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("ca_lang") as Lang | null;
    if (saved === "en" || saved === "fr") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ca_lang", l);
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
