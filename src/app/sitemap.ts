import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";

const BASE_URL = "https://quantumwellnesswarrior.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/forge-your-life`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/breath-circle`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/apply`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/the-forge`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/not-a-retreat`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/programs`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/programs/permaculture-residency`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/programs/work-trade`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/shop`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/community`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const blogSlugs = getAllPostSlugs();
  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
