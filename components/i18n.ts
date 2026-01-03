export const t = {
    home: {
        heroKicker: { en: "Tobacco & Flavour Consultant", id: "Konsultan Tembakau & Flavour" },
        heroTitle: {
            en: "Mastering consistency, heritage, and execution.",
            id: "Menguasai konsistensi, heritage, dan eksekusi.",
        },
        heroDesc: {
            en: "We help brands develop, document, and scale tobacco and flavour products with market-ready consistency.",
            id: "Kami membantu brand mengembangkan, mendokumentasikan, dan menskalakan produk tembakau dan flavour secara konsisten.",
        },
        primaryCta: { en: "Contact Us", id: "Hubungi Kami" },
        secondaryCta: { en: "Our Services", id: "Layanan Kami" },
        stat1: { label: { en: "Focus", id: "Fokus" }, value: { en: "Consistency & SOP", id: "Konsistensi & SOP" } },
        stat2: { label: { en: "Approach", id: "Pendekatan" }, value: { en: "Understanding the Problem", id: "Memahami Masalah" } },
        stat3: { label: { en: "Output", id: "Output" }, value: { en: "Production-ready", id: "Siap produksi" } },
        sectionWhatWeDo: { en: "What We Do", id: "Apa yang Kami Kerjakan" },
        sectionCtaTitle: { en: "Ready to standardise your product?", id: "Siap standarisasi produk Anda?" },
        sectionCtaDesc: {
            en: "Talk to us about flavour profiling, SOP, or production handover.",
            id: "Diskusikan dengan kami soal flavour profiling, SOP, atau serah-terima produksi.",
        },
        sectionCtaBtn: { en: "Start Consultation", id: "Mulai Konsultasi" },
    },

    about: {
        title: { en: "About MasterBlend", id: "Tentang MasterBlend" },
        desc: {
            en: "MasterBlend is an Indonesian independent tobacco & flavour consultant who focuses on the classic taste of Indonesian cigarettes.",
            id: "MasterBlend adalah konsultan independen tembakau & flavour asal Indonesia dengan fokus pada rasa klasik Rokok Indonesia.",
        },
        card1: {
            title: { en: "Heritage Mindset", id: "Resep Turun Menurun" },
            body: {
                en: "Respecting traditional profiles that has been used since 1980s.",
                id: "Menggunakan resep dan formulasi dari sang Maestro yang sudah digunakan sejak tahun 1980.",
            },
        },
        card2: {
            title: { en: "Practical Consulting", id: "Konsultasi Praktis" },
            body: {
                en: "Every recommendation is backed by documentation and SOP.",
                id: "Setiap rekomendasi didukung dokumentasi dan SOP.",
            },
        },
        card3: {
            title: { en: "Production-Oriented", id: "Berorientasi Produksi" },
            body: {
                en: "Designed for teams that need to execute, not just ideate.",
                id: "Dirancang untuk tim yang perlu eksekusi, bukan hanya ide.",
            },
        },
    },

   services: {
  title: { en: "Our Services", id: "Layanan Kami" },
  desc: {
    en: "Structured consulting services tailored to tobacco & cigarettes products.",
    id: "Layanan konsultasi terstruktur untuk produk rokok dan tembakau.",
  },
  items: [
    {
      title: { en: "Flavour Profiling", id: "Flavour Profiling" },
      points: {
        en: ["Signature profile development", "Benchmarking", "Documentation"],
        id: ["Pengembangan profil signature", "Benchmark", "Dokumentasi"],
      },
    },
    {
      title: { en: "Blend Optimization", id: "Optimasi Blend" },
      points: {
        en: ["Raw material balance", "Batch consistency", "Process control"],
        id: ["Keseimbangan bahan baku", "Konsistensi batch", "Kontrol proses"],
      },
    },
    {
      title: { en: "SOP & QC System", id: "SOP & Sistem QC" },
      points: {
        en: ["SOP writing", "Sensory scoring", "QC flow setup"],
        id: ["Penyusunan SOP", "Penilaian sensori", "Setup alur QC"],
      },
    },
    {
      title: { en: "Ready to Use Products", id: "Produk Siap Pakai" },
      points: {
        en: ["Ready to Blend Tobacco", "Ready to Use Flavour & Casing", "Ready to Roll 100g Tobacco"],
        id: ["Tembakau Siap Giling (TSG)", "Flavour dan Casing Siap Pakai", "Tembakau 100g Siap Giling"],
      },
    },
  ],
},


    contact: {
        title: { en: "Contact Us", id: "Hubungi Kami" },
        desc: {
            en: "Reach out to discuss your product or project.",
            id: "Hubungi kami untuk mendiskusikan produk atau proyek Anda.",
        },
        direct: { en: "Direct Contact", id: "Kontak Langsung" },
        quickBrief: { en: "Quick Brief", id: "Penjelasan Singkat" },
        nda: {
            en: "NDA available upon request.",
            id: "NDA tersedia jika dibutuhkan.",
        },
    },
};

export function pick<T>(lang: "en" | "id", v: { en: T; id: T }): T {
    return v[lang];
}