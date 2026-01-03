"use client";

import Link from "next/link";
import Image from "next/image";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  const cards = [
    {
      title: pick(lang, t.about.card1.title),
      body: pick(lang, t.about.card1.body),
      img: "/about/about-1.jpeg",
    },
    {
      title: pick(lang, t.about.card2.title),
      body: pick(lang, t.about.card2.body),
      img: "/about/about-2.jpg",
    },
    {
      title: pick(lang, t.about.card3.title),
      body: pick(lang, t.about.card3.body),
      img: "/about/about-3.jpg",
    },
  ];
function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;

  // GA4 gtag safety check
  // @ts-ignore
  const gtagFn = window.gtag as undefined | ((...args: any[]) => void);
  if (!gtagFn) return;

  gtagFn("event", "contact_whatsapp_click", {
    location, // contoh: "contact_card" / "cta_button"
    page_path: window.location.pathname,
  });
}
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5">
        <section className="py-14">
          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-10 shadow-sm">
            <p className="text-sm uppercase tracking-wider text-orange-600">
              {pick(lang, { en: "About", id: "Tentang" })}
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              {pick(lang, t.about.title)}
            </h1>

            <p className="mt-4 max-w-3xl text-neutral-600 text-justify leading-relaxed">
              {pick(lang, t.about.desc)}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {/* Image 1 */}
  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
    <Image
      src="/about/about-1.jpeg"
      alt="MasterBlend Lab Process"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  </div>

  {/* Image 2 */}
  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
    <Image
      src="/about/about-2.jpg"
      alt="MasterBlend Raw Material"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  </div>

  {/* Image 3 */}
  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
    <Image
      src="/about/about-3.jpg"
      alt="MasterBlend Blending Process"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  </div>
</div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="rounded-full bg-orange-500 px-6 py-3 text-center font-medium text-white shadow-sm hover:opacity-95"
              >
                {pick(lang, { en: "See Services", id: "Lihat Layanan" })}
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-center font-medium text-neutral-900 hover:bg-neutral-50"
              >
                {pick(lang, { en: "Contact Us", id: "Hubungi Kami" })}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-neutral-600">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6">
              {cards.map((c) => (
                <div
                  key={c.img}
                  className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
                >
                  <div className="relative h-[320px] w-full md:h-[340px]">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-semibold">
              {pick(lang, { en: "Want to talk about your product?", id: "Mau diskusi soal produk Anda?" })}
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600">
              {pick(lang, { en: "We can help with profiling, SOP, and production handover.", id: "Kami bisa bantu profiling, SOP, dan serah-terima produksi." })}
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-orange-500 px-6 py-3 font-medium text-white shadow-sm hover:opacity-95"
              >
                {pick(lang, { en: "Start Consultation", id: "Mulai Konsultasi" })}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}