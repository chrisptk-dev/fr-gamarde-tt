import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-club-ink">
      {/* Image de fond + dégradé, comme la hero */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('/fond-hero-tennis-table-gamarde.webp')] bg-cover bg-[center_top] md:bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-club-ink/95 via-club-ink/85 to-club-ink/95 md:bg-gradient-to-r md:from-club-ink/95 md:via-club-ink/70 md:to-club-ink/95" />
      </div>

      {/* Contenu */}
      <div className="relative flex items-start justify-center px-4 pt-28 pb-16 md:pt-36">
        <div
          className="
            bg-white/5 
            border border-white/10 
            backdrop-blur-xl 
            rounded-3xl 
            max-w-lg 
            w-full 
            text-center 
            px-8 
            py-10 
            shadow-2xl
          "
        >
          {/* Petit badge fun */}
          <p className="inline-flex items-center gap-2 rounded-full bg-black/40 text-white/80 text-xs font-medium px-4 py-1 mb-6">
            <span className="text-base">🏓</span>
            <span>Balle perdue… mais le match continue.</span>
          </p>

          {/* Code d'erreur */}
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-3 tracking-tight">
            404
          </h1>

          {/* Sous-titre */}
          <h2 className="text-xl md:text-2xl font-semibold text-club-accent mb-4">
            Oups… page introuvable !
          </h2>

          {/* Petit texte */}
          <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed">
            Il semble que vous soyez tombé dans un effet <br />
            « filet coupé ».
            <br />
            Pas de panique, on vous ramène à la table.
          </p>

          {/* Bouton retour */}
          <Link
            href="/"
            className="
              inline-block
              bg-club-accent 
              text-club-ink 
              font-semibold 
              px-6 
              py-3 
              rounded-xl 
              hover:translate-y-[1px] 
              transition 
              shadow-lg
            "
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
