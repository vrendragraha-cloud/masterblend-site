import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://masterblend.xyz";

  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/muhammad-warsianto",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
