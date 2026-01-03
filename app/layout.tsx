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
    "MasterBlend adalah konsultan independen tembakau & flavour Indonesia dengan fokus pada rasa klasik, formulasi, dan kesiapan produksi.",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}