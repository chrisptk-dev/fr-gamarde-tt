import Image from "next/image";
import type { Metadata } from "next";
// app/labels/page.tsx

export const metadata: Metadata = {
  title: "Labels et reconnaissances du club",
  description:
    "Découvrez les labels, distinctions et reconnaissances obtenus par le FR Gamarde Tennis de Table à Gamarde-les-Bains (Landes 40) pour son engagement sportif et associatif.",
};


export default function LabelsPage() {
  return (
    <main className="bg-club-ink min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        {/* Titre de page */}
        <header className="mb-10 md:mb-12">
          <p className="text-sm font-medium tracking-[.2em] text-club-accent/80 uppercase">
            Le club en confiance
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-sport text-white">
            Labels & diplômes
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
            Le FR Gamarde TT bénéficie de plusieurs labels officiels décernés
            par la Fédération Française de Tennis de Table, ainsi que de
            diplômes d&apos;encadrement. Ces reconnaissances garantissent un
            encadrement sérieux, une pratique encadrée et un engagement du club
            dans la vie locale.
          </p>
        </header>

        {/* Cartes des labels */}
        <div className="bg-white/2 space-y-8 md:space-y-10">
          {/* Label 1 */}
          <article className="bg-club-ink-light/90 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-5 py-6 md:px-8 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-1/2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-club-accent/90 uppercase tracking-[.18em]">
                <span className="h-1 w-6 rounded-full bg-club-accent" />
                <span>Label FFTT</span>
              </div>
              <h2 className="text-xl md:text-xl font-sport text-white">
                🎖 Label Club Avenir – Niveau 1
              </h2>
              <p className="text-base md:text-base text-white/80 leading-relaxed">
                Ce label valorise les clubs qui s&apos;engagent dans la
                formation des jeunes et le développement d&apos;un projet
                sportif structuré. Il garantit un accueil de qualité pour les
                nouveaux joueurs et un cadre favorable à la progression.
              </p>
              <p className="text-xs text-white/55">
                Délivré par la Fédération Française de Tennis de Table pour la
                période 2024–2027.
              </p>
              <a
                href="/documents/labels/diplome-club-avenir-n1.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-xs md:text-sm font-semibold text-club-accent hover:underline mt-1"
              >
                Voir le diplôme officiel →
              </a>
            </div>

            <div className="md:w-1/2">
              {/* Quand tu auras mis l'image au bon endroit dans /public/documents/ */}
              <Image
                src="/documents/labels/diplome-club-avenir-n1.jpg"
                alt="Diplôme FFTT Label Club Avenir"
                width={1200} // Tu mets 1200 x 850, peu importe, c’est juste le ratio
                height={850}
                className="w-full h-auto rounded-2xl border border-white/10 shadow-lg bg-black/20 object-contain"
              />
            </div>
          </article>

          {/* Label 2 */}
          <article className="bg-club-ink-light/90 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-5 py-6 md:px-8 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-1/2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-club-accent/90 uppercase tracking-[.18em]">
                <span className="h-1 w-6 rounded-full bg-club-accent" />
                <span>Label FFTT</span>
              </div>
              <h2 className="text-xl md:text-xl font-sport text-white">
                🎖 Label Club Responsable – Niveau 1
              </h2>
              <p className="text-base md:text-base text-white/80 leading-relaxed">
                Ce label récompense l&apos;implication du club dans la
                prévention, le respect, la sécurité et la qualité de
                l&apos;encadrement. Il souligne l&apos;attention portée aux
                valeurs éducatives et à l&apos;accueil de tous les publics.
              </p>
              <p className="text-xs text-white/55">
                Délivré par la Fédération Française de Tennis de Table pour la
                période 2024–2027.
              </p>
              <a
                href="/documents/labels/diplome-club-responsable-n1.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-xs md:text-sm font-semibold text-club-accent hover:underline mt-1"
              >
                Voir le diplôme officiel →
              </a>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/documents/labels/diplome-club-responsable-n1.jpg"
                alt="Diplôme FFTT Label Club Responsable"
                width={1200} // Tu mets 1200 x 850, peu importe, c’est juste le ratio
                height={850}
                className="w-full h-auto rounded-2xl border border-white/10 shadow-lg bg-black/20 object-contain"
              />
            </div>
          </article>

          {/* Label 3 */}
          <article className="bg-club-ink-light/90 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-5 py-6 md:px-8 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="md:w-1/2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-club-accent/90 uppercase tracking-[.18em]">
                <span className="h-1 w-6 rounded-full bg-club-accent" />
                <span>Label FFTT</span>
              </div>
              <h2 className="text-xl md:text-xl font-sport text-white">
                🎖 Label Club Citoyen – Niveau 2
              </h2>
              <p className="text-base md:text-base text-white/80 leading-relaxed">
                Ce label met en avant l&apos;ancrage du club dans la vie locale
                : actions auprès des jeunes, partenariats, ouverture vers les
                écoles, les associations et la commune. Il reconnaît un club
                engagé et actif sur son territoire.
              </p>
              <p className="text-xs text-white/55">
                Délivré par la Fédération Française de Tennis de Table pour la
                période 2024–2027.
              </p>
              <a
                href="/documents/labels/diplome-club-citoyen-n2.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-xs md:text-sm font-semibold text-club-accent hover:underline mt-1"
              >
                Voir le diplôme officiel →
              </a>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/documents/labels/diplome-club-citoyen-n2.jpg"
                alt="Diplôme FFTT Label Club Citoyen"
                width={1200} // Tu mets 1200 x 850, peu importe, c’est juste le ratio
                height={850}
                className="w-full h-auto rounded-2xl border border-white/10 shadow-lg bg-black/20 object-contain"
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

