import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://masterblend.xyz", priority: 1 },
    { url: "https://masterblend.xyz/about" },
    { url: "https://masterblend.xyz/services" },
    { url: "https://masterblend.xyz/contact" },
  ];
}
