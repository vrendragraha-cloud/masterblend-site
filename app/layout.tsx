import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://masterblend.xyz"),
  title: {
    default: "MasterBlend — Tobacco & Flavour Consulting",
    template: "%s | MasterBlend",
  },
  description:
    "Kami membantu perusahaan Rokok untuk mengembangkan dan memproduksi produk tembakau dan flavour dengan kualitas terbaik menggunakan formulasi legendaris dari sang Maestro Rokok Indonesia: Alm. M. Warsianto.",
  openGraph: {
    title: "MasterBlend — Tobacco & Flavour Consulting",
    description:
      "Kami membantu perusahaan Rokok untuk mengembangkan dan memproduksi produk tembakau dan flavour dengan kualitas terbaik menggunakan formulasi legendaris dari sang Maestro Rokok Indonesia: Alm. M. Warsianto.",
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
      "Kami membantu perusahaan Rokok untuk mengembangkan dan memproduksi produk tembakau dan flavour dengan kualitas terbaik menggunakan formulasi legendaris dari sang Maestro Rokok Indonesia: Alm. M. Warsianto-.",
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
      <body>
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
            gtag('config', 'G-3CYLHFFY1C');
          `}
        </Script>

        {/* ✅ LANGUAGE PROVIDER */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}