"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, switchLang } = useLanguage();

  return (
    <div style={{ textAlign: "right", padding: "1rem" }}>
      <button
        onClick={() => switchLang("en")}
        disabled={lang === "en"}
        style={{
          marginRight: 8,
          backgroundColor: lang === "en" ? "#ccc" : "#eee",
          cursor: "pointer"
        }}
      >
        English
      </button>
      <button
        onClick={() => switchLang("hi")}
        disabled={lang === "hi"}
        style={{
          backgroundColor: lang === "hi" ? "#ccc" : "#eee",
          cursor: "pointer"
        }}
      >
        हिन्दी
      </button>
    </div>
  );
}
