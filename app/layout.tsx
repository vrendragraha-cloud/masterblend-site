import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://masterblend.xyz"),
  title: {
    default: "Masterblend",
    template: "%s | Masterblend",
  },
  description: "Masterblend official website",
  alternates: { canonical: "https://masterblend.xyz" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://masterblend.xyz",
    siteName: "Masterblend",
    title: "Masterblend",
    description: "Masterblend official website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-3CYLHFFY1C" />
      </body>
    </html>
  );
}