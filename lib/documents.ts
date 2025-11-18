import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type DocumentItem = {
  slug: string;
  title: string;
  description?: string;
  file: string;
  type?: string; // ← IMPORTANT : pour distinguer planning / dossier
  [key: string]: unknown;
};

const documentsDirectory = path.join(process.cwd(), "content", "documents");

export function getAllDocuments(): DocumentItem[] {
  if (!fs.existsSync(documentsDirectory)) return [];

  const files = fs
    .readdirSync(documentsDirectory)
    .filter((file) => file.endsWith(".md"));

  return files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(documentsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "Sans titre",
      description: data.description ?? "",
      file: data.file ?? "",
      type: data.type ?? "", // ← récupère "dossier" ou "planning"
      ...(data as Record<string, unknown>),
    } as DocumentItem;
  });
}

export function getDocumentBySlug(slug: string): DocumentItem | undefined {
  return getAllDocuments().find((doc) => doc.slug === slug);
}
