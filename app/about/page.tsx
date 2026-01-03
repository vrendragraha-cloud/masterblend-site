"use client";

import Image from "next/image";
import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  const cards = [
    {
      title: pick(lang, t.about.card1.title),
      body: pick(lang, t.about.card1.body),
    },
    {
      title: pick(lang, t.about.card2.title),
      body: pick(lang, t.about.card2.body),
    },
    {
      title: pick(lang, t.about.card3.title),
      body: pick(lang, t.about.card3.body),
    },
  ];

  return (
    <main className="bg-neutral-100">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT – Vertical Images */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              {["/about/about-1.jpeg", "/about/about-2.jpg", "/about/about-3.jpg"].map(
                (src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200"
                  >
                    <Image
                      src={src}
                      alt={`MasterBlend activity ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT – Content */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
                {pick(lang, t.about.title)}
              </h1>

              <p className="mt-6 text-neutral-700 leading-relaxed text-[15px] sm:text-base">
                {pick(lang, t.about.desc)}
              </p>

              {/* Value cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <h3 className="text-base font-semibold text-neutral-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                      {card.body}
                    </p>
                  </div>
                ))}