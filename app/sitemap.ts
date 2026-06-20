import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://itetechsolutions.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://itetechsolutions.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://itetechsolutions.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://itetechsolutions.com/contact",
      lastModified: new Date(),
    },
  ];
}