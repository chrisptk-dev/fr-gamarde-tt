// app/politique-de-confidentialite/page.tsx
import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-club-ink min-h-screen pt-16 pb-20">
      <section className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <header className="mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-medium tracking-[.2em] text-club-accent/80 uppercase">
            Protection des données
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-sport text-white">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
            Cette politique explique comment le FR Gamarde Tennis de Table
            recueille, utilise et protège vos données personnelles lors de votre
            navigation sur le site{" "}
            <Link
              href="https://frgamardett.fr"
              className="text-club-accent hover:underline"
            >
              frgamardett.fr
            </Link>
            .
          </p>
        </header>

        {/* Bloc glass */}
        <div
          className="
            bg-white/2
            border border-white/10
            rounded-3xl
            shadow-2xl
            backdrop-blur-md
            px-6 py-8
            md:px-10 md:py-10
            space-y-8
            text-sm md:text-base
            text-white/80
            leading-relaxed
          "
        >
          {/* Définitions */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              Définitions
            </h2>
            <p className="mb-2">
              <strong>L’Éditeur</strong> : l’association Foyer Rural – Jeunesse
              Gamardaise, section Tennis de Table, qui édite le site et les
              services de communication au public en ligne.
            </p>
            <p className="mb-2">
              <strong>Le Site</strong> : l’ensemble des pages et services en
              ligne proposés à l’adresse{" "}
              <span className="text-club-accent">https://frgamardett.fr</span>.
            </p>
            <p>
              <strong>L’Utilisateur</strong> : toute personne visitant le Site
              ou utilisant les services proposés (consultation des pages,
              formulaire de contact, etc.).
            </p>
          </section>

          {/* 1 – Nature des données collectées */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              1. Nature des données collectées
            </h2>
            <p className="mb-2">
              Dans le cadre de l’utilisation du Site, l’Éditeur est susceptible
              de collecter les catégories de données suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Données d’identité</strong> (si vous nous les
                communiquez volontairement) : nom, prénom, adresse e-mail,
                téléphone.
              </li>
              <li>
                <strong>Données de connexion techniques</strong> : adresse IP,
                type de navigateur, pages consultées, date et heure de
                consultation, éventuellement journaux d’événements.
              </li>
            </ul>
          </section>

          {/* 2 – Communication des données à des tiers */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              2. Communication des données personnelles à des tiers
            </h2>
            <p className="mb-3">
              Vos données ne font l’objet d’aucune communication à des tiers à
              des fins commerciales.
            </p>
            <p>
              Elles peuvent toutefois être communiquées si la loi l’exige ou sur
              demande d’une autorité administrative ou judiciaire compétente.
            </p>
          </section>

          {/* 3 – Agrégation / statistiques */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              3. Agrégation des données et statistiques
            </h2>
            <p className="mb-3">
              L’Éditeur peut utiliser des données techniques et de navigation (
              pages consultées, durée de visite, etc.) à des fins de
              <strong> statistiques anonymes</strong> afin d’améliorer le
              fonctionnement du Site et l’information proposée.
            </p>
            <p>
              Ces informations sont agrégées de manière à ne pas permettre
              l’identification d’un Utilisateur individuel.
            </p>
          </section>

          {/* 4 – Collecte des données d’identité */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              4. Collecte des données d’identité
            </h2>
            <p className="mb-3">
              La consultation du Site est libre et ne nécessite pas
              d’inscription ni de création de compte.
            </p>
            <p>
              Des données d’identité (nom, prénom, e-mail, téléphone) ne sont
              collectées que si vous choisissez de nous les transmettre, par
              exemple via un formulaire de contact ou d’inscription au club.
            </p>
          </section>

          {/* 5 – Collecte des données techniques du terminal */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              5. Collecte des données techniques du terminal
            </h2>
            <p className="mb-3">
              Certaines données techniques de votre appareil peuvent être
              collectées automatiquement lors de votre navigation sur le Site,
              telles que :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>adresse IP ;</li>
              <li>type de navigateur ;</li>
              <li>système d’exploitation ;</li>
              <li>pages consultées, date et heure de consultation.</li>
            </ul>
            <p className="mt-3">
              Ces données sont utilisées uniquement à des fins de{" "}
              <strong>bon fonctionnement du Site</strong> et, le cas échéant, de{" "}
              <strong>mesure d’audience anonyme</strong>. Aucune donnée
              nominative n’est extraite à partir de ces informations techniques
              dans le but de vous identifier personnellement.
            </p>
          </section>

          {/* 6 – Cookies */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              6. Cookies
            </h2>
            <p className="mb-3">
              Le Site peut utiliser des cookies afin de faciliter votre
              navigation et de réaliser des statistiques de visites.
            </p>
            <p className="mb-3">
              Conformément aux recommandations de la CNIL, les cookies sont
              conservés pour une durée maximale de 13&nbsp;mois à compter de
              leur dépôt sur votre terminal.
            </p>
            <p className="mb-3">
              Vous pouvez, à tout moment, configurer votre navigateur pour
              accepter ou refuser les cookies. Le refus de certains cookies peut
              toutefois dégrader le fonctionnement de certaines fonctionnalités
              du Site.
            </p>
          </section>

          {/* 7 – Durée de conservation des données */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              7. Durée de conservation des données
            </h2>
            <p className="mb-3">
              Les données personnelles que vous nous communiquez sont conservées
              uniquement pendant la durée nécessaire au traitement de votre
              demande ou à la gestion de la relation avec vous (par exemple,
              dans le cadre d’une inscription au club).
            </p>
            <p>
              Au-delà de cette durée, elles peuvent être archivées de manière
              sécurisée ou anonymisées à des fins exclusivement statistiques.
            </p>
          </section>

          {/* 8 – Sécurité des données */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              8. Sécurité des données
            </h2>
            <p className="mb-3">
              L’Éditeur met en œuvre des mesures techniques et
              organisationnelles adaptées pour protéger vos données contre la
              perte, l’accès, l’utilisation, la modification ou la divulgation
              non autorisés.
            </p>
            <p>
              En cas d’incident de sécurité majeur concernant vos données
              personnelles, l’Éditeur s’engage à vous en informer dans les
              meilleurs délais et à prendre les mesures nécessaires pour en
              limiter les conséquences.
            </p>
          </section>

          {/* 9 – Transfert des données */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              9. Transfert des données personnelles
            </h2>
            <p>
              Les données personnelles collectées via le Site sont hébergées en
              France ou au sein de l’Union européenne. L’Éditeur ne procède à
              aucun transfert de données personnelles en dehors de l’Union
              européenne.
            </p>
          </section>

          {/* 10 – Vos droits (RGPD) */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              10. Vos droits (RGPD)
            </h2>
            <p className="mb-3">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants sur vos données :
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>droit d’accès ;</li>
              <li>droit de rectification ;</li>
              <li>droit d’effacement ;</li>
              <li>droit d’opposition ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>
                droit à la portabilité des données, lorsque cela est applicable.
              </li>
            </ul>
            <p>
              Pour exercer vos droits, vous pouvez contacter le club à l’adresse
              suivante :{" "}
              <span className="text-club-accent">
                contact&#64;frgamardett.fr
              </span>
              .
            </p>
          </section>

          {/* 11 – Modification de la politique */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              11. Modification de la présente politique de confidentialité
            </h2>
            <p>
              L’Éditeur se réserve le droit de modifier la présente politique de
              confidentialité afin de l’adapter aux évolutions du Site ou de la
              réglementation en vigueur. En cas de modification substantielle,
              l’Utilisateur sera informé par un affichage sur le Site.
            </p>
          </section>

          {/* 12 – Droit applicable et recours */}
          <section>
            <h2 className="text-lg md:text-xl font-sport text-white mb-3">
              12. Droit applicable et voies de recours
            </h2>
            <p className="mb-3">
              La présente politique de confidentialité est soumise au droit
              français. En cas de litige et à défaut de résolution amiable, les
              tribunaux français seront seuls compétents.
            </p>
            <p>
              Vous disposez également du droit d’introduire une réclamation
              auprès de l’autorité de contrôle compétente, telle que la CNIL
              (Commission Nationale de l’Informatique et des Libertés).
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
