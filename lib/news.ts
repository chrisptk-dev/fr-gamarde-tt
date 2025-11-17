// lib/news.ts
import data from "@/data/news.json";

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // "2025-11-05"
  excerpt: string;
  image?: string;
  content: string;
  category: string;
};

export function getAllNews(): NewsItem[] {
  const items = data as NewsItem[];

  // Tri du plus récent au plus ancien
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getAllNews().find((item) => item.slug === slug);
}
