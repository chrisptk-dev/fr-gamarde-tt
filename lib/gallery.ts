// lib/gallery.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 🔹 Image par défaut si aucune image n'est fournie
const PLACEHOLDER_IMAGE = "/placeholder.webp";

// --- TYPES -------------------------------------------------------------

export type GalleryItem = {
  slug: string;
  title: string;
  description?: string;
  images: string[]; // liste des URLs d'images
  [key: string]: unknown;
};

// --- 1) FALLBACK : GALERIE EN DUR (OPTIONNEL) --------------------------
// Si tu as déjà une galerie en dur quelque part (tableau dans un composant),
// tu pourras la recopier ici plus tard.

const HARDCODED_GALLERY: GalleryItem[] = [
  {
    slug: "entrainement-jeunes",
    title: "Entraînement des jeunes",
    description: "Stage de printemps",
    images: ["/galerie/entrainement-jeunes-fr-gamarde.webp"],
  },
  {
    slug: "match-equipe-1",
    title: "Rencontre par équipes",
    description: "Victoire à domicile",
    images: ["/galerie/match-equipe-1.webp"],
  },
  {
    slug: "fete-du-ping",
    title: "La fête du Ping-pong à Gamarde",
    description: "Ambiance conviviale",
    images: ["/galerie/fetes-du-ping-fr-gamarde.webp"],
  },
  {
    slug: "stage-vacances",
    title: "Stage vacances",
    description: "Progrès et bonne humeur",
    images: ["/galerie/stage-vacances.webp"],
  },
  {
    slug: "jeunes-competition",
    title: "Jeunes en compétition",
    description: "Compétition départementale",
    images: ["/galerie/les-jeunes-en-competition-fr-gamarde.webp"],
  },
  {
    slug: "echauffement-seniors",
    title: "Échauffement",
    description: "On transpire",
    images: ["/galerie/echauffement-stage-senior-fr-gamarde.webp"],
  },
];

// --- 2) LECTURE DES FICHIERS MARKDOWN DECAP ----------------------------

const galleryDirectory = path.join(process.cwd(), "content", "galerie");

function getGalleryFromFiles(): GalleryItem[] {
  if (!fs.existsSync(galleryDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(galleryDirectory)
    .filter((file) => file.endsWith(".md"));

  if (files.length === 0) {
    return [];
  }

  const items: GalleryItem[] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(galleryDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    // On récupère la liste d'images depuis le frontmatter
    let images: string[] = [];

    if (Array.isArray(data.images)) {
      images = data.images.filter(
        (img: unknown) => typeof img === "string" && img.trim() !== ""
      );
    }

    // Si aucune image → on met le placeholder
    if (images.length === 0) {
      images = [PLACEHOLDER_IMAGE];
    }

    return {
      slug,
      title: data.title ?? "Sans titre",
      description: data.description ?? content ?? "",
      images,
      ...(data as Record<string, unknown>),
    } as GalleryItem;
  });

  // Ici pas vraiment besoin de tri, mais si tu veux :
  return items.sort((a, b) => a.title.localeCompare(b.title));
}

// --- 3) GET ALL GALLERY -------------------------------------------------

export function getAllGallery(): GalleryItem[] {
  try {
    const fromFiles = getGalleryFromFiles();

    // On merge : Decap d'abord, puis fallback en dur si slug non présent
    const merged: GalleryItem[] = [...fromFiles];
    const fileSlugs = new Set(fromFiles.map((item) => item.slug));

    HARDCODED_GALLERY.forEach((item) => {
      if (!fileSlugs.has(item.slug)) {
        merged.push(item);
      }
    });

    return merged;
  } catch (error) {
    console.error("[getAllGallery] Erreur Decap, fallback JSON :", error);
    return HARDCODED_GALLERY;
  }
}

// --- 4) GET ONE GALLERY ITEM -------------------------------------------

export function getGalleryBySlug(slug: string): GalleryItem | undefined {
  return getAllGallery().find((item) => item.slug === slug);
}
