// lib/news.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import jsonData from "@/data/news.json";

// 🔹 Image par défaut si aucune image n'est fournie
const PLACEHOLDER_IMAGE = "/placeholder.webp";

function buildExcerpt(
  rawExcerpt: unknown,
  rawContent: unknown,
  maxLength = 160
): string {
  // 1) Si un excerpt est déjà renseigné → on le garde
  const explicit = typeof rawExcerpt === "string" ? rawExcerpt.trim() : "";
  if (explicit) return explicit;

  // 2) Sinon, on le fabrique à partir du contenu
  const base =
    typeof rawContent === "string"
      ? rawContent.replace(/\s+/g, " ").trim()
      : "";

  if (!base) return "";

  if (base.length <= maxLength) return base;

  const shortened = base.slice(0, maxLength);
  const lastSpace = shortened.lastIndexOf(" ");

  const finalText = lastSpace > 40 ? shortened.slice(0, lastSpace) : shortened;

  return finalText + "…";
}

// --- TYPES -------------------------------------------------------------

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // format "YYYY-MM-DD"
  excerpt?: string;
  image?: string;
  thumbnail?: string | null;
  content: string;
  category: string;
  [key: string]: unknown;
};

// --- 1) FALLBACK : ACTUS EN DUR VIA JSON -------------------------------

const HARDCODED_NEWS: NewsItem[] = (jsonData as unknown[]).map((item) => {
  const obj = item as { [key: string]: unknown };

  const rawImage =
    typeof obj.image === "string" && obj.image.trim() !== "" ? obj.image : null;

  const finalImage = rawImage || PLACEHOLDER_IMAGE;

  const excerpt = buildExcerpt(obj.excerpt, obj.content);

  return {
    ...(obj as Record<string, unknown>),
    image: finalImage,
    thumbnail: finalImage,
    excerpt,
  } as NewsItem;
});

// --- 2) ACTUS DECAP DANS content/actualites ----------------------------

const newsDirectory = path.join(process.cwd(), "content", "actualites");

function getNewsFromFiles(): NewsItem[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(newsDirectory)
    .filter((file) => file.endsWith(".md"));

  if (files.length === 0) {
    return [];
  }

  const items: NewsItem[] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const cleanedThumbnail =
      typeof data.thumbnail === "string" && data.thumbnail.trim() !== ""
        ? data.thumbnail
        : null;

    const cleanedImage =
      typeof data.image === "string" && data.image.trim() !== ""
        ? data.image
        : null;

    const finalImage = cleanedThumbnail || cleanedImage || PLACEHOLDER_IMAGE;

    const excerpt = buildExcerpt(data.excerpt, content);

    return {
      slug,
      title: data.title ?? "Sans titre",
      date: data.date ?? "",
      category: data.category ?? "divers",
      content: content ?? "",
      ...(data as Record<string, unknown>),
      excerpt,
      image: finalImage,
      thumbnail: finalImage,
    } as NewsItem;
  });

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// --- 3) GET ALL NEWS ----------------------------------------------------

export function getAllNews(): NewsItem[] {
  try {
    const fromFiles = getNewsFromFiles();

    const merged: NewsItem[] = [...fromFiles];
    const fileSlugs = new Set(fromFiles.map((item) => item.slug));

    HARDCODED_NEWS.forEach((item) => {
      if (!fileSlugs.has(item.slug)) {
        merged.push(item);
      }
    });

    return merged.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("[getAllNews] Erreur Decap, fallback JSON :", error);

    return HARDCODED_NEWS.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}

// --- 4) GET SINGLE NEWS -------------------------------------------------

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getAllNews().find((item) => item.slug === slug);
}
