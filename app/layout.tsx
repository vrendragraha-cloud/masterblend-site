import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import Script from "next/script";




/* ======================
   Font setup
====================== */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

/* ======================
   Metadata
====================== */
export const metadata = {
  metadataBase: new URL("https://masterblend.xyz"),
  title: {
    default: "MasterBlend — Tobacco & Flavour Consultant",
    template: "%s | MasterBlend",
  },
  description:
    "Independent tobacco & flavour consultancy focused on consistency, SOP, and production-ready execution.",
  openGraph: {
    type: "website",
    url: "https://masterblend.xyz",
    siteName: "MasterBlend",
  },
};

/* ======================
   Root Layout
====================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-white text-neutral-700 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
