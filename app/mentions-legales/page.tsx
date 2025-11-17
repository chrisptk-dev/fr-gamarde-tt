// app/mentions-legales/page.tsx
import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main className="bg-club-ink min-h-screen pt-16 pb-20">
      <section className="max-w-5xl mx-auto px-4">
        {/* En-tête de page */}
        <header className="mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-medium tracking-[.2em] text-club-accent/80 uppercase">
            Informations légales
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-sport text-white">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
            Conformément à la législation française, vous trouverez ci-dessous
            les informations relatives à l’éditeur, à l’hébergement et à la
            propriété intellectuelle du site du FR Gamarde Tennis de Table.
          </p>
        </header>

        {/* Contenu */}
        <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-8 md:px-10 md:py-10 space-y-8 text-sm md:text-base text-white/80 leading-relaxed">
          {/* Édition du site */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              1. Édition du site internet
            </h2>
            <p className="mb-3">
              Le site <strong>FR Gamarde TT</strong> (ci-après « le Site »),
              accessible à l’adresse&nbsp;
              <Link
                href="https://frgamardett.fr"
                className="text-club-accent hover:underline"
              >
                https://frgamardett.fr
              </Link>
              , est édité par l’association{" "}
              <strong>
                FOYER RURAL DES JEUNES ET D’ÉDUCATION POPULAIRE – JEUNESSE
                GAMARDAISE, section Tennis de table
              </strong>{" "}
              (ci-après « l’Editeur »), association d’éducation populaire régie
              par la loi du 1er juillet 1901.
            </p>
            <p className="mb-2">
              Siège social : 925, route de Taillade – 40380 Gamarde-les-Bains,
              France.
            </p>
            <p className="mb-2">
              Téléphone :{" "}
              <span className="text-club-accent underline decoration-white/20 cursor-default">
                06 86 88 11 16
              </span>
            </p>
            <p className="mb-2">
              E-mail :{" "}
              <a
                href="mailto:contact@frgamardett.fr"
                className="text-club-accent hover:underline"
              >
                contact&#64;frgamardett.fr
              </a>
            </p>
            <p className="mb-2">
              SIRET : 902&nbsp;880&nbsp;517&nbsp;00013
              <br />
              Code APE : 93.29Z – Autres activités récréatives et de loisirs.
            </p>
            <p>
              Organisme affilié à la Fédération Française de Tennis de Table
              sous le numéro : 10400018.
            </p>
          </section>

          {/* Rédaction */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              2. Rédaction du site internet
            </h2>
            <p className="mb-2">
              Directeur de la publication : <strong>Pascal Robillard</strong>
            </p>
            <p>
              Contact :{" "}
              <span className="text-club-accent underline decoration-white/20 cursor-default">
                06 86 88 11 16
              </span>{" "}
              –{" "}
              <a
                href="mailto:contact@frgamardett.fr"
                className="text-club-accent hover:underline"
              >
                contact&#64;frgamardett.fr
              </a>
            </p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              3. Hébergeur du site internet
            </h2>
            <p className="mb-2">
              Le Site est hébergé par la société <strong>o2switch</strong>, EURL
              au capital de 100&nbsp;000&nbsp;€, dont le siège social est situé
              :
            </p>
            <p className="mb-2">
              224 Boulevard Gustave Flaubert
              <br />
              63000 Clermont-Ferrand
              <br />
              France
            </p>
            <p>
              Téléphone :{" "}
              <span className="text-club-accent underline decoration-white/20 cursor-default">
                04 44 44 60 40
              </span>
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              4. Propriété intellectuelle
            </h2>
            <p className="mb-3">
              Toutes les marques, photographies, textes, commentaires,
              illustrations, images animées ou non, séquences vidéo, sons, ainsi
              que toutes les applications informatiques qui pourraient être
              utilisées pour faire fonctionner le Site, et plus généralement
              tous les éléments reproduits ou utilisés sur le Site, sont
              protégés par les lois en vigueur au titre de la propriété
              intellectuelle.
            </p>
            <p className="mb-3">
              Ils sont la propriété pleine et entière de l’Editeur ou de ses
              partenaires, sauf mentions particulières. Toute reproduction,
              représentation, utilisation ou adaptation, sous quelque forme que
              ce soit, de tout ou partie de ces éléments, y compris les
              applications informatiques, sans l’accord préalable et écrit de
              l’Editeur, est strictement interdite.
            </p>
            <p className="mb-3">
              Le fait pour l’Editeur de ne pas engager de procédure dès la prise
              de connaissance d’une utilisation non autorisée ne vaut pas
              acceptation de ladite utilisation ni renonciation aux poursuites.
            </p>
            <p className="mb-3">
              Seule l’utilisation pour un usage privé dans un cercle de famille
              est autorisée. Toute autre utilisation est constitutive de
              contrefaçon et/ou d’atteinte aux droits voisins, sanctionnée par
              le Code de la propriété intellectuelle.
            </p>
            <p>
              La reprise de tout ou partie du contenu du Site nécessite
              l’autorisation préalable de l’Editeur ou du titulaire des droits
              sur ce contenu.
            </p>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              5. Liens hypertextes
            </h2>
            <p>
              Le Site peut contenir des liens hypertextes donnant accès à
              d’autres sites web édités et gérés par des tiers et non par
              l’Editeur. L’Editeur ne pourra être tenu responsable, directement
              ou indirectement, dans le cas où lesdits sites tiers ne
              respecteraient pas les dispositions légales et réglementaires en
              vigueur ou causeraient un préjudice à l’utilisateur.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
