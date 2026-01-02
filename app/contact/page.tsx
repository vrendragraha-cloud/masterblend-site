"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { lang } = useLang();

  const email = "vrendragraha@gmail.com";
  const wa = "628125413211";
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi MasterBlend, Saya ingin berkonsultasi mengenai produk rokok atau tembakau."
  )}`;

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">
          {pick(lang, t.contact.title)}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
          {pick(lang, t.contact.desc)}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">
              {pick(lang, t.contact.direct)}
            </h2>

            <div className="mt-5 space-y-4 text-sm text-neutral-700">
              <div>
                <p className="text-neutral-500">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="inline-block text-base font-medium text-neutral-900 underline decoration-orange-400 underline-offset-4 hover:opacity-90"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-neutral-500">WhatsApp</p>
                <Link
                  href={waLink}
                  target="_blank"
                  className="inline-block text-base font-medium text-neutral-900 underline decoration-orange-400 underline-offset-4 hover:opacity-90"
                >
                  +{wa}
                </Link>
              </div>

              <p className="pt-2 text-xs text-neutral-500">
                {pick(lang, t.contact.nda)}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">
              {pick(lang, { en: "What to include", id: "Info yang sebaiknya dikirim" })}
            </h2>

            <div className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
              <p className="flex gap-2">
                <span className="text-orange-600">•</span>
                <span>
                  {pick(lang, {
                    en: "Product type (tobacco, flavour, casing, etc.)",
                    id: "Jenis produk (tembakau, flavour, casing, dll.)",
                  })}
                </span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600">•</span>
                <span>
                  {pick(lang, {
                    en: "Target profile & market positioning",
                    id: "Target profil rasa & positioning market",
                  })}
                </span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600">•</span>
                <span>
                  {pick(lang, {
                    en: "Current issues (inconsistency, harshness, aftertaste, etc.)",
                    id: "Masalah saat ini (tidak konsisten, harsh, aftertaste, dll.)",
                  })}
                </span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600">•</span>
                <span>
                  {pick(lang, {
                    en: "Timeline & expected output (SOP/QC/Formula)",
                    id: "Timeline & output yang diharapkan (SOP/QC/Formula)",
                  })}
                </span>
              </p>
            </div>

            <div className="mt-7">
              <Link
                href={waLink}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-orange-500"
              >
                {pick(lang, { en: "Chat on WhatsApp", id: "Chat via WhatsApp" })}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
