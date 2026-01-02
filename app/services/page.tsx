"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { lang } = useLang();

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 md:px-5 md:py-16">
        <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">
          {pick(lang, t.services.title)}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
          {pick(lang, t.services.desc)}
        </p>

        <div className="mt-10 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-2">
          {t.services.items.map((it) => (
            <div
              key={pick(lang, it.title)}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:rounded-3xl md:p-7"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {pick(lang, it.title)}
              </h3>

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
                {it.points[lang].map((p) => (
                  <p key={p} className="flex gap-2">
                    <span className="text-orange-600">•</span>
                    <span>{p}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-7 shadow-sm">
            <h3 className="text-base font-semibold uppercase tracking-wide text-neutral-900">
              {pick(lang, { en: "Engagement Format", id: "Format Kerja Sama" })}
            </h3>
            <p className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
              {pick(lang, {
                en: "Project-based or retainer. We provide documentation (SOP/QC) so your team can execute consistently.",
                id: "Bisa project-based atau retainer. Kami siapkan dokumentasi (SOP/QC) agar tim Anda bisa eksekusi konsisten.",
              })}
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              {pick(lang, t.contact.nda)}
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
