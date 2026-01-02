"use client";

import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">
          {pick(lang, t.about.title)}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
          {pick(lang, t.about.desc)}
        </p>

        {/* ABOUT IMAGES (3) */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
  {[
    { src: "/about/about-1.jpeg", alt: "Heritage & formulation" },
    { src: "/about/about-2.jpg", alt: "Documentation & SOP" },
    { src: "/about/about-3.jpg", alt: "QC & sensory system" },
  ].map((img) => (
    <div
      key={img.src}
      className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm
                 aspect-[3/4]"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
    </div>
  ))}
</div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Card
            title={pick(lang, t.about.card1.title)}
            body={pick(lang, t.about.card1.body)}
          />
          <Card
            title={pick(lang, t.about.card2.title)}
            body={pick(lang, t.about.card2.body)}
          />
          <Card
            title={pick(lang, t.about.card3.title)}
            body={pick(lang, t.about.card3.body)}
          />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
    </div>
  );
}
