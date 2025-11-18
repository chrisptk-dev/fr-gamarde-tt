// app/components/ContactSection.tsx

export default function ContactSection() {
  return (
    <>
      {/* CONTACT / CLOSING */}
      <section
        id="contact"
        className="relative z-10 pt-10 md:pt-14 pb-10 md:pb-24"
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Bloc global */}
          <div className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md px-6 py-10 md:px-10 md:py-12">
            {/* Titre */}
            <div className="text-center mb-8 md:mb-10">
              <p className="text-lg font-medium tracking-[.2em] text-club-accent/80 uppercase">
                Contact
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-sport text-white">
                Une question ? <br className="block md:hidden" />
                Besoin d’un renseignement ?
              </h2>
              <p className="mt-3 text-base md:text-base text-white/75">
                L’équipe du FR Gamarde est à votre écoute.
              </p>
            </div>

            {/* Deux colonnes : téléphone / email */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {/* Téléphone */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm text-center flex flex-col items-center">
                <div className="text-2xl md:text-3xl mb-3">📞</div>
                <h3 className="text-xl md:text-xl font-sport text-white mb-1">
                  Téléphone
                </h3>
                <p className="text-base md:text-base text-white/75 mb-4">
                  Mickaa (Président)
                  <br />
                  <span className="text-white font-semibold">
                    &#48;&#54;&nbsp;&#52;&#54;&nbsp;&#49;&#52;&nbsp;&#56;&#50;&nbsp;&#48;&#50;
                  </span>
                </p>
                <a
                  href="tel:+33600000000"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-club-accent text-club-ink hover:brightness-110 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow"
                >
                  Nous appeler
                </a>
              </article>

              {/* Email */}
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 shadow-md backdrop-blur-sm text-center flex flex-col items-center">
                <div className="text-2xl md:text-3xl mb-3">✉️</div>
                <h3 className="text-xl md:text-xl font-sport text-white mb-1">
                  Email
                </h3>
                <p className="text-base md:text-base text-white/75 mb-4 flex-grow">
                  <span className="text-white font-semibold">
                    contact&#64;frgamardett.fr
                  </span>
                </p>
                <a
                  href="mailto:contact@frgamardett.fr"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow"
                >
                  Nous écrire
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
