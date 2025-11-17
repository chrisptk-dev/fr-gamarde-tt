// app/components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-club-ink border-t border-white/10 pt-12 pb-8 text-white/80">
      <div className="max-w-6xl mx-auto px-4">
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3 mb-8">
          {/* COL 1 */}
          <div>
            <h3 className="text-lg font-sport text-white mb-2">
              FR Gamarde Tennis de Table
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Club convivial, familial et compétitif à Gamarde-les-Bains (Landes
              40). Stages, entraînements jeunes, loisirs et compétiteurs.
            </p>
          </div>

          {/* COL 2 */}
          <div className="md:pl-30">
            <h4 className="text-sm font-semibold text-white mb-2">
              Liens utiles
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  href="/#infos-pratiques"
                  className="hover:text-club-accent"
                >
                  Infos pratiques
                </Link>
              </li>
              <li>
                <Link href="/#inscription" className="hover:text-club-accent">
                  S’inscrire
                </Link>
              </li>
              <li>
                <Link href="/#actus" className="hover:text-club-accent">
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">
              Labels & diplômes
            </h4>

            <ul className="space-y-1.5 text-sm text-white/70">
              <li>🏅 Entraîneur diplômé FFTT</li>
              <li>🏅 Animateur / Éducateur fédéral</li>
              <li>🏅 Club affilié Fédération Française de Tennis de Table</li>
            </ul>

            <a
              href="/labels"
              className="mt-3 inline-block text-club-accent text-sm hover:underline"
            >
              Voir les labels officiels →
            </a>
          </div>
        </div>

        {/* BAS FOOTER */}
        <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
          <div className="flex gap-3">
            <Link href="/mentions-legales" className="hover:text-club-accent">
              Mentions légales
            </Link>
            <span>•</span>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-club-accent"
            >
              Politique de confidentialité
            </Link>
          </div>

          <div className="text-[11px]">
            Site réalisé avec ❤️ par{" "}
            <a
              href="https://back2web.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-club-accent font-semibold hover:underline"
            >
              back2beb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
