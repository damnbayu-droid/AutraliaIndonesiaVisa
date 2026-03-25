import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://australiaindonesiavisa.online";
  
  const locations = [
    "indonesia", "bali", "jakarta", "lombok", "surabaya", "jogja"
  ];

  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/visa-${loc}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...locationRoutes,
  ];
}
