// app/components/InfosPratiquesSection.tsx


import { getDocumentBySlug } from "@/lib/documents";

export default function InfosPratiquesSection() {
  // On récupère UNIQUEMENT le planning
  const planningDoc = getDocumentBySlug("planning");

  // 👉 Fallback : si pas de doc Decap, on garde ton ancien PDF
  const planningHref =
    planningDoc && planningDoc.file
      ? String(planningDoc.file)
      : "/documents/calendrier-2025.pdf";

  return (
    <>
      {/* INFOS PRATIQUES */}
      <section
        id="infos-pratiques"
        className="relative z-10 pt-10 md:pt-10 pb-10 md:pb-14"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloc global flottant */}
          <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-10 md:px-10 md:py-14">
            {/* Titre */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm font-medium tracking-[.2em] text-club-accent/80 uppercase">
                Infos pratiques
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-sport text-white">
                Tout ce qu’il faut pour venir jouer
              </h2>
            </div>

            {/* --- BLOC PRINCIPAL : Horaires / Tarifs / Lieu --- */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-3 mb-10 md:mb-12">
              {/* Horaires */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-sport text-white mb-3">
                  🕒 Horaires d’entraînement
                </h3>
                <ul className="text-white/80 text-sm md:text-base leading-relaxed space-y-1.5">
                  <li>Mardi / Mercredi / Vendredi</li>
                  <li>17h30 – 19h30</li>
                </ul>
              </article>

              {/* Tarifs */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-sport text-white mb-3">
                  💶 Tarifs
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Loisirs :{" "}
                  <span className="font-semibold text-white">40 € / an</span>
                  <br />
                  Compétition (enfants / adultes) :
                  <span className="font-semibold text-white">
                    {" "}
                    70 à 100 € / an
                  </span>
                </p>
              </article>

              {/* Lieu */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-sport text-white mb-3">
                  📍 Lieu
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Hall des sports
                  <br />
                  <span className="text-white/60">40380 Gamarde-les-Bains</span>
                </p>
              </article>
            </div>

            {/* --- SOUS-TITRE RESSOURCES --- */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-[.25em] text-white/60 uppercase">
                Ressources & liens utiles
              </p>
            </div>

            {/* --- BLOC SECONDAIRE : Calendrier / Misterping / Réseaux --- */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {/* Calendrier */}
              <article className="bg-white/4 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-sport text-white mb-2">
                  📅 Calendrier 2025
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  Planifiez votre saison et ne manquez aucune compétition.
                </p>

                <a
                  href={planningHref}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-club-accent text-club-ink hover:brightness-110 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow"
                  download
                >
                  Télécharger le planning
                </a>
              </article>

              {/* Misterping */}
              <article className="bg-white/4 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-sport text-white mb-2">
                  🏓 S’équiper avec Misterping
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  Découvrez notre partenaire équipementier pour raquettes, bois
                  et accessoires.
                </p>
                <a
                  href="https://www.misterping.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow"
                >
                  Découvrir Misterping
                </a>
              </article>

              {/* Vie du club */}
              <article className="bg-white/4 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-sport text-white mb-2">
                  👥 La vie du club
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                  Suivez les résultats, photos et moments forts du FR Gamarde.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a
                    href="https://www.facebook.com/p/Foyer-Rural-Gamarde-Tennis-de-Table-61554014467366/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center 
                      w-full
                      rounded-xl px-4 py-2 
                      text-sm font-semibold 
                      bg-white/10 text-white 
                      hover:bg-white/20 
                      transition-transform duration-200 
                      hover:-translate-y-0.5 hover:shadow
                    "
                  >
                    Facebook
                  </a>

                  <a
                    href="https://www.instagram.com/fr_gamarde_tennis_de_table/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center justify-center 
                      w-full
                      rounded-xl px-4 py-2 
                      text-sm font-semibold 
                      bg-white/10 text-white 
                      hover:bg-white/20 
                      transition-transform duration-200 
                      hover:-translate-y-0.5 hover:shadow
                    "
                  >
                    Instagram
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
