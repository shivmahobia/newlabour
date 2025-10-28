"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import en from "@/locales/en/common.json";
import hi from "@/locales/hi/common.json";

type Lang = "en" | "hi";
type Messages = typeof en;

interface LangContextType {
  lang: Lang;
  messages: Messages;
  switchLang: (newLang: Lang) => void;
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const [messages, setMessages] = useState<Messages>(en);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved !== lang) {
      setLang(saved);
      setMessages(saved === "hi" ? hi : en);
    }
  }, []);

  const switchLang = (newLang: Lang) => {
    setLang(newLang);
    setMessages(newLang === "hi" ? hi : en);
    localStorage.setItem("lang", newLang);
  };

  return <LanguageContext.Provider value={{ lang, messages, switchLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
