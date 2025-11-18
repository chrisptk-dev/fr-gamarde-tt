import Image from "next/image";
import type { Metadata } from "next";
import { getAllGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Galerie photos",
  description:
    "Découvrez la galerie photos du FR Gamarde Tennis de Table à Gamarde-les-Bains (Landes 40) : compétitions, entraînements, événements et moments forts du club.",
};

export default function GaleriePage() {
  const albums = getAllGallery();

  return (
    <main className="bg-club-ink min-h-screen pt-16 pb-20">
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Carte globale glassmorphism */}
          <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-8 md:px-10 md:py-10 mt-4">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-club-accent/90">
                  Galerie photos
                </p>
                <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Les moments forts du{" "}
                  <span className="text-club-accent whitespace-nowrap">
                    FR Gamarde TT
                  </span>
                </h1>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
                  Entraînements, compétitions, stages, vie du club… une
                  sélection de photos pour découvrir l’ambiance au quotidien.
                  Cette galerie pourra être alimentée via le tableau de bord.
                </p>
              </div>

              <div className="mt-2 md:mt-0 md:text-right text-sm text-white/60">
                <p>Galerie mise à jour ponctuellement</p>
                <p className="text-xs mt-1">
                  De nouvelles photos seront ajoutées au fil des événements du
                  club.
                </p>
              </div>
            </div>

            {/* Grille d’images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {albums.map((item) => (
                <figure
                  key={item.slug}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-club-ink/60 shadow-lg backdrop-blur-md"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Dégradé bas */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-club-ink/90 via-club-ink/40 to-transparent" />
                  </div>

                  {/* Légende */}
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-1">
                    <p className="text-sm font-semibold text-white drop-shadow">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-xs text-white/80 drop-shadow-sm">
                        {item.description}
                      </p>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Petit encart d’info */}
            <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-4 md:px-6 md:py-5 text-sm text-white/70">
              <p className="font-medium text-white">Des photos à venir</p>
              <p className="mt-1">
                Cette galerie sera enrichie au fur et à mesure des compétitions,
                entraînements et événements du club.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
