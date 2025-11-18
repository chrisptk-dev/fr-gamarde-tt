import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-club-ink min-h-[80vh] md:min-h-[70vh]">
      {/* IMAGE DE FOND OPTIMISÉE */}
      <div className="absolute inset-0">
        <Image
          src="/fond-hero-tennis-table-gamarde.webp"
          alt="Table de tennis de table du FR Gamarde"
          fill
          priority
          sizes="100vw"
          className="
    object-cover
    object-[center_top]
    md:object-center
  "
        />

        {/* Dégradé au-dessus */}
        <div className="absolute inset-0 bg-gradient-to-b from-club-ink/90 via-club-ink/70 to-club-ink/95 md:bg-gradient-to-r md:from-club-ink/95 md:via-club-ink/60 md:to-club-ink/95" />
      </div>

      {/* CONTENU */}
      <div
        className="
          relative max-w-6xl mx-auto px-4
          flex flex-col items-start justify-center
          pt-32 pb-28 md:pt-30 md:pb-32 
        "
      >
        <FadeIn className="relative w-full max-w-3xl mx-auto text-center">
          {/* CARTE GLASS */}
          <div
            className="
              absolute inset-0
              rounded-[2.5rem]
              bg-white/5
              border border-white/12
              backdrop-blur-xl
              shadow-[0_24px_60px_rgba(0,0,0,0.55)]
              pointer-events-none
            "
          />

          {/* CONTENU TEXTE */}
          <div className="relative px-6 py-10 md:px-12 md:py-12">
            <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.25em] text-white/55">
              Club de tennis de table · Landes
            </p>

            <h1 className="font-sport font-bold leading-tight text-white text-5xl md:text-7xl lg:text-8xl tracking-tight">
              FR Gamarde
            </h1>

            <h2 className="mt-1 font-sport text-club-accent text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Tennis de Table
            </h2>

            <p className="mt-6 max-w-xl mx-auto text-white/85 text-lg md:text-lg">
              Jouez pour le plaisir ou la compétition, dans une ambiance
              conviviale.
            </p>

            {/* BOUTONS */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#inscription"
                className="
    px-10 py-4 rounded-xl text-base font-semibold
    bg-club-accent text-black
    transition-transform transition-shadow duration-200
    hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
    active:scale-95
  "
              >
                Rejoignez-nous
              </a>

              <a
                href="#infos-pratiques"
                className="
    px-10 py-4 rounded-xl text-base font-medium
    bg-white/10 text-white backdrop-blur-sm
    hover:bg-white/20
    transition-transform transition-shadow duration-200
    hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
    active:scale-95
  "
              >
                Infos pratiques
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
