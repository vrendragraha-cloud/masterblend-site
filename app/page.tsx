"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";
import Image from "next/image";



export default function HomePage() {
  const { lang } = useLang();

  const stats = [
    { label: pick(lang, t.home.stat1.label), value: pick(lang, t.home.stat1.value) },
    { label: pick(lang, t.home.stat2.label), value: pick(lang, t.home.stat2.value) },
    { label: pick(lang, t.home.stat3.label), value: pick(lang, t.home.stat3.value) },
  ];

  const services = [
    {
      title: pick(lang, { en: "Flavour Profiling & Formulation", id: "Flavour Profiling & Formulasi" }),
      desc: pick(lang, {
        en: "Develop signature profiles and document formulas for production handover.",
        id: "Bangun profil signature dan dokumentasikan formula untuk handover produksi.",
      }),
    },
    {
      title: pick(lang, { en: "Tobacco Blend Optimization", id: "Optimasi Blend Tembakau" }),
      desc: pick(lang, {
        en: "Improve consistency via process targets and mixing control.",
        id: "Tingkatkan konsistensi lewat target proses dan kontrol mixing.",
      }),
    },
    {
      title: pick(lang, { en: "QC & Sensory System", id: "Sistem QC & Sensori" }),
      desc: pick(lang, {
        en: "Set up scoring rubric, references, and batch acceptance flow.",
        id: "Buat rubrik penilaian, sampel referensi, dan alur batch acceptance.",
      }),
    },
    {
      title: pick(lang, { en: "SOP & Production Handover", id: "SOP & Serah-terima Produksi" }),
      desc: pick(lang, {
        en: "Deliver SOP/BOM/checkpoints so teams can execute consistently.",
        id: "Hasilkan SOP/BOM/checkpoints agar tim bisa eksekusi konsisten.",
      }),
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5">
        <section className="py-14">
          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-10 shadow-sm">
            <section className="py-14">
  <div className="inline-flex items-center rounded-2xl bg-zinc-900 px-6 py-4">

    {/* LOGO di HOME */}
    <div className="inline-flex items-center rounded-2xl bg-zinc-900 px-6 py-4">
      <Image
        src="/brand/masterblend_wordmark_dark.svg"
        alt="MasterBlend"
        width={700}
        height={200}
        priority
        className="h-16 w-auto md:h-20"
      />
    </div>

 
  </div>
</section>

            <p className="text-sm uppercase tracking-wider text-orange-600">
              {pick(lang, t.home.heroKicker)}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              {pick(lang, t.home.heroTitle)}
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600">
              {pick(lang, t.home.heroDesc)}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-6 py-3 text-center font-medium text-white shadow-sm hover:opacity-95"
              >
                {pick(lang, t.home.primaryCta)}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-center font-medium text-neutral-900 hover:bg-neutral-50"
              >
                {pick(lang, t.home.secondaryCta)}
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">{s.label}</p>
                  <p className="mt-2 text-lg font-semibold text-neutral-900">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">{pick(lang, t.home.sectionWhatWeDo)}</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            {pick(lang, { en: "Practical consulting with documentation-first outputs.", id: "Konsultasi praktis dengan output dokumentasi yang bisa langsung dieksekusi." })}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold">{pick(lang, t.home.sectionCtaTitle)}</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">{pick(lang, t.home.sectionCtaDesc)}</p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-orange-500 px-6 py-3 font-medium text-white shadow-sm hover:opacity-95"
              >
                {pick(lang, t.home.sectionCtaBtn)}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
