"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "./LanguageProvider";
import { pick } from "./i18n";

export default function SiteHeader() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/", label: pick(lang, { en: "Home", id: "Beranda" }) },
    { href: "/about", label: pick(lang, { en: "About Us", id: "Tentang" }) },
    { href: "/services", label: pick(lang, { en: "Services", id: "Layanan" }) },
    { href: "/contact", label: pick(lang, { en: "Contact", id: "Kontak" }) },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/brand/masterblend_wordmark_dark.svg"
            alt="MasterBlend"
            className="h-20 md:h-25 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex text-base font-medium text-white/90 tracking-wide">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-orange-300 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
          >
            {pick(lang, { en: "Get in touch", id: "Hubungi" })}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-3 py-2 text-sm text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-900">
          <div className="mx-auto max-w-6xl px-5 py-4">
            <div className="flex flex-col gap-3 text-base font-medium text-white/90">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 hover:bg-zinc-800 hover:text-orange-300 transition"
                >
                  {n.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
              >
                {pick(lang, { en: "Get in touch", id: "Hubungi" })}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
