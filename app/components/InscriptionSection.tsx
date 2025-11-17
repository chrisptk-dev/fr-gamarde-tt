// app/components/InscriptionSection.tsx

export default function InscriptionSection() {
  return (
    <>
      {/* INSCRIPTION / VENIR FAIRE UN ESSAI */}
      <section
        id="inscription"
        className="relative z-10 pt-10 md:pt-10 pb-10 md:pb-14"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloc global */}
          <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-10 md:px-10 md:py-14">
            {/* Titre */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm font-medium tracking-[.2em] text-club-accent/80 uppercase">
                Inscription
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-sport text-white">
                Comment s’inscrire au FR Gamarde ?
              </h2>
            </div>

            {/* Steps */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {/* Étape 1 */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-md backdrop-blur-sm flex flex-col">
                <div className="text-sm font-semibold text-club-accent mb-2">
                  Étape 1
                </div>
                <h3 className="text-lg md:text-xl font-sport text-white mb-4">
                  Venez faire un essai
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  Il n’y a rien de mieux que de venir découvrir le club et son
                  ambiance. Les séances d’essai sont ouvertes{" "}
                  <span className="font-semibold text-white">
                    tous les vendredis de 17h30 à 19h30
                  </span>{" "}
                  (hors vacances scolaires).
                </p>
                <p className="text-xs text-white/60">
                  Pensez à venir avec une paire de chaussures propres et, si
                  possible, une raquette. Sinon on peut vous en prêter une !
                </p>
              </article>

              {/* Étape 2 */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-md backdrop-blur-sm flex flex-col">
                <div className="text-sm font-semibold text-club-accent mb-2">
                  Étape 2
                </div>
                <h3 className="text-lg md:text-xl font-sport text-white mb-4">
                  Téléchargez le dossier d’inscription
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  Si l’essai vous a plu, il vous suffit de télécharger le
                  dossier d’inscription, de le compléter et de le rapporter au
                  club avec les pièces demandées.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/documents/dossier-inscription.zip"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-club-accent text-club-ink hover:brightness-110 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow"
                  >
                    Télécharger le dossier
                  </a>
                  {/* Optionnel : lien vers certificat médical si besoin */}
                  {/* <a ...>Modèle de certificat médical</a> */}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
