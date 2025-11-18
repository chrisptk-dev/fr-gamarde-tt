

export default function ServicesSection() {
  return (
    <>
      {/* SERVICES / PROMESSES DU CLUB */}
      <section
        id="services"
        className="relative z-20 pt-10 -mt-16 md:-mt-20 pb-10 md:pb-14"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Bloc “cartes” qui flotte au-dessus du Hero */}
          <div className="bg-white/1 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-8 md:px-10 md:py-10">
            {/* Titre de section */}
            <div className="text-center mb-8 md:mb-10">
              <p className="text-lg font-medium tracking-[.2em] text-club-accent/80 uppercase">
                Le club en 3 points
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-sport text-white">
                Pourquoi rejoindre le FR Gamarde ?
              </h2>
            </div>

            {/* Cartes */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {/* Carte 1 */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-sm backdrop-blur-sm">
                <h3 className="text-xl  md:text-xl font-sport text-club-accent/80 mb-2">
                  Jouez pour le plaisir ou la compétition.
                </h3>
                <p className="text-base md:text-base text-white/80 leading-relaxed">
                  Rejoignez nos équipes engagées en championnat ou participez à
                  des rencontres amicales. Quel que soit votre objectif, le club
                  vous accompagne pour vous épanouir au tennis de table.
                </p>
              </article>

              {/* Carte 2 */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-sm backdrop-blur-sm">
                <h3 className="text-xl md:text-xl font-sport text-club-accent/80 mb-2">
                  Une ambiance conviviale.
                </h3>
                <p className="text-base md:text-base text-white/80 leading-relaxed">
                  Venez partager votre passion dans une atmosphère chaleureuse,
                  avec un vrai esprit d’équipe. Stages, événements et moments de
                  partage rythment la vie du club toute l’année.
                </p>
              </article>

              {/* Carte 3 */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-sm backdrop-blur-sm">
                <h3 className="text-xl md:text-xl font-sport text-club-accent/80 mb-2">
                  Progressez à votre rythme.
                </h3>
                <p className="text-base md:text-base text-white/80 leading-relaxed">
                  Débutant, loisir ou compétiteur confirmé, nos entraîneurs vous
                  aident à progresser étape par étape, avec des séances adaptées
                  à votre niveau et vos objectifs.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


