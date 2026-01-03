"use client";

import { t, pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main className="bg-neutral-100">
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="text-3xl font-semibold text-neutral-900">
          {pick(lang, t.about.title)}
        </h1>

        <p className="mt-6 text-neutral-700 leading-relaxed">
          {pick(lang, t.about.desc)}
        </p>

        <div className="mt-10 space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="font-semibold text-neutral-900">
              {pick(lang, t.about.card1.title)}
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              {pick(lang, t.about.card1.body)}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="font-semibold text-neutral-900">
              {pick(lang, t.about.card2.title)}
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              {pick(lang, t.about.card2.body)}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="font-semibold text-neutral-900">
              {pick(lang, t.about.card3.title)}
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              {pick(lang, t.about.card3.body)}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}