import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://masterblend.xyz"),
  title: {
    default: "MasterBlend — Tobacco & Flavour Consulting",
    template: "%s | MasterBlend",
  },
  description:
    "Kami membantu perusahaan rokok mengembangkan dan memproduksi produk tembakau dan flavour melalui pendekatan blending, formulasi, QC, dan dokumentasi proses berbasis legacy Maestro Rokok Indonesia, Alm. Muhammad Warsianto.",
  openGraph: {
    title: "MasterBlend — Tobacco & Flavour Consulting",
    description:
      "Konsultan tembakau dan flavour dengan pendekatan profesional dalam blending, QC, dan standardisasi produksi berbasis legacy.",
    url: "https://masterblend.xyz",
    siteName: "MasterBlend",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MasterBlend",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterBlend — Tobacco & Flavour Consulting",
    description:
      "Pendekatan profesional dalam blending dan formulasi tembakau berbasis legacy dan proses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3CYLHFFY1C"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3CYLHFFY1C', {
              anonymize_ip: true,
            });
          `}
        </Script>

        {/* Language Provider */}
        <LanguageProvider>{children}</LanguageProvider>

        {/* Vercel Analytics (Production Only) */}
        <Analytics />
      </body>
    </html>
  );
}
