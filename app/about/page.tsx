"use client";

import Image from "next/image";
import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
          {pick(lang, t.about.title)}
        </h1>
        <p className="mt-5 text-neutral-700 leading-7 max-w-prose">
          {pick(lang, t.about.desc)}
        </p>
      </header>

      {/* Two-column layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: Cards / points */}
        <div className="space-y-6">
          <AboutCard
            title={pick(lang, t.about.card1.title)}
            body={pick(lang, t.about.card1.body)}
          />
          <AboutCard
            title={pick(lang, t.about.card2.title)}
            body={pick(lang, t.about.card2.body)}
          />
          <AboutCard
            title={pick(lang, t.about.card3.title)}
            body={pick(lang, t.about.card3.body)}
          />

          {/* Optional small note block */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-600 leading-6">
              {lang === "id"
                ? "Jika dibutuhkan, kami bisa bekerja dengan NDA dan scope kerja yang jelas."
                : "If needed, we can work under NDA with a clear scope of work."}
            </p>
          </div>
        </div>

        {/* RIGHT: Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <Figure
            src="/about/1.jpeg"
            alt="MasterBlend activity 1"
            className="col-span-1"
            aspect="aspect-[3/4]"
          />
          <Figure
            src="/about/2.jpg"
            alt="MasterBlend activity 2"
            className="col-span-1"
            aspect="aspect-[3/4]"
          />
          <Figure
            src="/about/3.jpg"
            alt="MasterBlend activity 3"
            className="col-span-2"
            aspect="aspect-[16/10]"
          />
        </div>
      </section>
    </main>
  );
}

function AboutCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-3 text-neutral-700 leading-7">{body}</p>
    </div>
  );
}

function Figure({
  src,
  alt,
  className = "",
  aspect = "aspect-[3/4]",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}