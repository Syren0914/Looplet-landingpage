import { defaultStaticData } from "@/lib/static-data";

export default async function sitemap() {
  const baseUrl = "https://localhost:3000";
  
  // Use static data instead of Basehub query
  const pages = defaultStaticData.pages.items;
  
  const sitemap = pages.map((page) => ({
    url: `${baseUrl}${page.pathname}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return sitemap;
}
