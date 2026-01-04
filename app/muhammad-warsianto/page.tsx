"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { pick } from "@/components/i18n";
import { useLang } from "@/components/LanguageProvider";
import Image from "next/image";

export default function MuhammadWarsiantoPage() {
  const { lang } = useLang();

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="py-14">
          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-10 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              
              {/* TEXT */}
              <div>
                <p className="text-sm uppercase tracking-wider text-orange-600">
                  {pick(lang, { id: "Legacy Profile", en: "Legacy Profile" })}
                </p>

                <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                  Muhammad Warsianto
                </h1>

                <p className="mt-4 max-w-xl text-neutral-600">
                  {pick(lang, {
                    id: "Maestro Rokok Mild Indonesia",
                    en: "Maestro of Indonesia’s Mild Cigarette Craft",
                  })}
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <Image
                    src="/direktur-warsianto.png"
                    alt="Muhammad Warsianto"
                    width={600}
                    height={315}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PORTRAIT & PHILOSOPHY */}
        <section className="py-10">
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold">
              {pick(lang, { id: "Portrait & Philosophy", en: "Portrait & Philosophy" })}
            </h2>

            <div className="mt-4 space-y-3 text-neutral-600">
              <p>
                {pick(lang, {
                  id: "Bagi Muhammad Warsianto, tembakau bukan sekadar bahan baku, melainkan hasil dari waktu, kesabaran, dan pemahaman yang mendalam. Setiap daun memiliki karakter, dan setiap karakter layak diperlakukan dengan hormat.",
                  en: "For Muhammad Warsianto, tobacco is not merely a raw material, but the result of time, patience, and deep understanding. Every leaf carries its own character, and every character deserves to be treated with respect.",
                })}
              </p>
              <p>
                {pick(lang, {
                  id: "Ia percaya bahwa kualitas sejati lahir dari proses yang jujur—bukan dari kecepatan, bukan dari volume, melainkan dari ketelitian serta rasa tanggung jawab terhadap setiap hasil yang dihadirkan.",
                  en: "He believes that true quality is born from an honest process—not from speed, not from volume, but from precision and responsibility for every result created.",
                })}
              </p>
            </div>
          </div>
        </section>

        {/* HIS JOURNEY */}
        <section className="py-10">
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold">
              {pick(lang, { id: "His Journey", en: "His Journey" })}
            </h2>

            <div className="mt-4 space-y-3 text-neutral-600">
              <p>
                {pick(lang, {
                  id: "Perjalanan Muhammad Warsianto dimulai dari pengenalan langsung terhadap tembakau lokal, belajar melalui pengalaman lapangan, pengamatan, dan praktik yang berulang.",
                  en: "Muhammad Warsianto’s journey began with direct exposure to local tobacco—learning through field experience, careful observation, and repeated practice.",
                })}
              </p>
              <p>
                {pick(lang, {
                  id: "Tanpa jalan pintas, proses ini membentuk pendekatan yang matang dan konsisten—mengutamakan keseimbangan rasa, stabilitas, dan karakter alami dalam setiap racikan.",
                  en: "Without shortcuts, this process shaped a mature and consistent approach—prioritizing balance, stability, and the natural character of each blend.",
                })}
              </p>
              <p>
                {pick(lang, {
                  id: "Melalui perjalanan panjang tersebut, produk-produk unggulan seperti A Mild, Clas Mild, Star Mild, dan Diplomat EVO lahir dari tangan dan pengalaman beliau.",
                  en: "Through this long journey, distinguished products such as A Mild, Clas Mild, Star Mild, and Diplomat EVO emerged from his hands and experience.",
                })}
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-10">
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold">
              {pick(lang, { id: "Why It Matters", en: "Why It Matters" })}
            </h2>

            <div className="mt-4 space-y-3 text-neutral-600">
              <p>
                {pick(lang, {
                  id: "Pendekatan inilah yang membuat setiap produk memiliki identitas yang jelas dan mudah dikenali.",
                  en: "This approach is what gives each product a clear and recognizable identity.",
                })}
              </p>
              <p>
                {pick(lang, {
                  id: "Di tangan Muhammad Warsianto, setiap blend bukan sekadar hasil racikan, tetapi refleksi dari pengalaman, disiplin, dan penghargaan terhadap tembakau sebagai sebuah craft.",
                  en: "In the hands of Muhammad Warsianto, every blend becomes more than a composition—it reflects experience, discipline, and respect for tobacco as a craft.",
                })}
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
