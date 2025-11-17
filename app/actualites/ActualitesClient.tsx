"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { NewsItem } from "@/lib/news";

const CATEGORY_FILTERS = [
  { id: "toutes", label: "Toutes les catégories" },
  { id: "vie-du-club", label: "Vie du club" },
  { id: "resultats", label: "Résultats" },
  { id: "divers", label: "Divers" },
];

const CATEGORY_LABELS: Record<string, string> = {
  "vie-du-club": "Vie du club",
  resultats: "Résultats",
  divers: "Divers",
};

function getCategoryLabel(id: string) {
  return CATEGORY_LABELS[id] ?? "Autre";
}

export default function ActualitesClient({ allNews }: { allNews: NewsItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("toutes");

  const news: NewsItem[] =
    activeCategory === "toutes"
      ? allNews
      : allNews.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-club-ink min-h-screen pt-16 pb-20">
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloc flottant global */}
          <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-8 md:px-10 md:py-10 mt-4">
            {/* Header */}
            <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
              <div>
                <p className="text-sm font-medium tracking-[.2em] text-club-accent/80 uppercase">
                  Vie du club
                </p>
                <h1 className="mt-3 text-2xl md:text-3xl font-sport text-white">
                  Toutes les actualités
                </h1>
              </div>

              <Link
                href="/#actus"
                className="hidden md:inline-flex text-sm font-medium text-white/80 hover:text-club-accent transition"
              >
                ← Retour à la page d’accueil
              </Link>
            </div>

            {/* Filtres catégories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    inline-flex items-center justify-center
                    px-4 py-1.5 rounded-xl border text-sm font-medium
                    transition-colors transition-transform duration-150
                    ${
                      activeCategory === cat.id
                        ? "bg-club-accent text-club-ink border-club-accent"
                        : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grille des actus */}
            {news.length === 0 ? (
              <p className="text-sm text-white/70">
                Aucune actualité dans cette catégorie pour le moment.
              </p>
            ) : (
              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                {news.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/actualites/${post.slug}`}
                    className="
                      group bg-white/5 border border-white/10 rounded-2xl overflow-hidden 
                      shadow-md hover:shadow-xl transition-all duration-300 flex flex-col
                    "
                  >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden aspect-[16/9]">
                      <Image
                        src={post.image ?? "/placeholder.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={index === 0}
                      />
                    </div>

                    {/* Contenu */}
                    <div className="flex flex-col gap-2 p-5 md:p-6 flex-1">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-white/60">
                        <span>
                          {new Date(post.date).toLocaleDateString("fr-FR")}
                        </span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded-xl bg-club-accent/10 text-[11px] uppercase tracking-wide text-club-accent">
                          {getCategoryLabel(post.category)}
                        </span>
                      </div>

                      <h2 className="font-sport text-white leading-snug text-lg md:text-xl">
                        {post.title}
                      </h2>

                      <p className="text-sm md:text-base text-white/75 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <span className="mt-auto pt-2 text-sm font-medium text-club-accent group-hover:translate-x-1 transition-transform">
                        Lire l’article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Lien retour mobile */}
            <div className="mt-10 text-center md:hidden">
              <Link
                href="/#actus"
                className="inline-flex text-sm font-medium text-white/80 hover:text-club-accent transition"
              >
                ← Retour à la page d’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
