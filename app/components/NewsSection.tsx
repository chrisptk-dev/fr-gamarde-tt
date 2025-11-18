import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/lib/news";

type NewsSectionProps = {
  news: NewsItem[];
};

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <>
      {/* ACTUALITÉS / À LA UNE */}

      <section
        id="actus"
        className="relative z-10 pt-10 md:pt-14 pb-10 md:pb-14"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloc flottant */}
          <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-8 md:px-10 md:py-10">
            {/* Titre */}
            <div className="flex items-baseline justify-between gap-4 mb-10">
              <div>
                <p className="text-lg font-medium tracking-[.2em] text-club-accent/80 uppercase">
                  À la une du club
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-sport text-white">
                  Les dernières actualités
                </h2>
              </div>

              <Link
                href="/actualites"
                className="hidden md:inline-flex text-sm font-medium text-white/80 hover:text-club-accent transition"
              >
                Voir toutes les actualités →
              </Link>
            </div>

            {/* 🔥 GRILLE DES ACTUS (données dynamiques venant du JSON) */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
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
                      /* IMPORTANT pour la perf responsive */
                      sizes="(min-width: 768px) 33vw, 100vw"
                      priority={index === 0}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-col gap-2 p-5 md:p-6 flex-1">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-white/60">
                      <span>
                        {new Date(post.date).toLocaleDateString("fr-FR")}
                      </span>
                    </div>

                    <h3 className="font-sport text-white leading-snug text-xl md:text-xl">
                      {post.title}
                    </h3>

                    <p className="text-base md:text-base text-white/75 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="mt-auto pt-2 text-sm font-medium text-club-accent group-hover:translate-x-1 transition-transform">
                      Lire l’article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Lien mobile */}
            <div className="mt-10 text-center md:hidden">
              <Link
                href="/actualites"
                className="inline-flex text-sm font-medium text-white/80 hover:text-club-accent transition"
              >
                Voir toutes les actualités →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

