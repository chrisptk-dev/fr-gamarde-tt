// app/components/SponsorsSection.tsx
import Image from "next/image";

const sponsors = [
  { name: "Famiglia", logo: "/logos-sponsors/logo-famiglia.png" },
  { name: "LouLandes", logo: "/logos-sponsors/logo-loulandes.png" },
  { name: "Alban Formation", logo: "/logos-sponsors/logo-alban-formation.jpg" },
  {
    name: "Garage Lannevère",
    logo: "/logos-sponsors/logo-garage-lannevere.png",
  },
  { name: "Ma Petite Sponso", logo: "/logos-sponsors/logo-mapetitesponso.jpg" },
  {
    name: "Ligue Nouvelle-Aquitaine TT",
    logo: "/logos-sponsors/logo-ligue-nouvelle-aquitaine-tennis-tt.jpg",
  },
  { name: "FFTT", logo: "/logos-sponsors/logo-fftt.png" },
  { name: "Back2Web", logo: "/logos-sponsors/logo-back2web.jpg" },
];

const loopSponsors = [...sponsors, ...sponsors];

export default function SponsorsSection() {
  return (
    <section className="relative z-10 py-8 md:py-10 bg-club-ink border-t border-white/10">
      {/* Ligne titre */}
      <div className="max-w-6xl mx-auto px-4 mb-3 md:mb-4 flex items-center justify-between gap-4 text-[11px] md:text-xs text-white/55">
        <span>Ils soutiennent le FR Gamarde</span>
        <span className="text-right hidden sm:inline">
          Merci à nos partenaires pour leur soutien.
        </span>
      </div>

      {/* Bande full width */}
      <div className="relative marquee-container">
        {/* Track qui défile */}
        <div className="marquee-track py-3 md:py-4 px-6 flex gap-8 md:gap-12">
          {loopSponsors.map((sponsor, index) => (
            <div key={`${sponsor.name}-${index}`} className="flex items-center">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/15 px-4 md:px-5 py-2 md:py-2.5 shadow-sm">
                {/* Logo */}
                <div className="relative h-8 md:h-10 w-24 md:w-32">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Nom (optionnel, discret) */}
                <span className="hidden sm:inline text-xs md:text-sm font-medium text-white/80">
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fades gauche/droite */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-club-ink via-club-ink/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-club-ink via-club-ink/80 to-transparent" />
      </div>
    </section>
  );
}
