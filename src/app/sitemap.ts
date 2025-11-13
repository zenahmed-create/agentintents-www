import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agentintents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/upgrade",
    "/success",
    "/cancel",
    "/docs/quickstart",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

