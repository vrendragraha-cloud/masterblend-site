import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Warsianto — Maestro Rokok Mild Indonesia | MasterBlend",
  description:
    "Profil Muhammad Warsianto, sosok di balik lahirnya konsep Low Tar Low Nicotine (LTLN) di Indonesia dan pengembangan merek-merek rokok mild ternama.",
  alternates: { canonical: "/muhammad-warsianto" },
  openGraph: {
    title: "Muhammad Warsianto — Maestro Rokok Mild Indonesia",
    description:
      "Sosok di balik lahirnya konsep Low Tar Low Nicotine (LTLN) dan legacy penting dalam dunia rokok mild Indonesia.",
    url: "/muhammad-warsianto",
    siteName: "MasterBlend",
    locale: "id_ID",
    type: "profile",
    images: [
      {
        url: "/og-image-muhammad-warsianto.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Warsianto — MasterBlend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Warsianto — MasterBlend",
    description:
      "Profil legacy: Muhammad Warsianto, Maestro Rokok Mild Indonesia.",
    images: ["/og-image-muhammad-warsianto.jpg"],
  },
  robots: { index: true, follow: true },
};
