"use client";

import { useLang } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "id" : "en")}
      className="rounded-full border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100"
    >
      {lang === "en" ? "ID" : "EN"}
    </button>
  );
}
