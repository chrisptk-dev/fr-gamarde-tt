// app/components/HeaderTopBar.tsx

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M7.5 3.75 6 5.25c-.75.75-1.05 1.8-.78 2.79a17 17 0 0 0 10.74 10.74c.99.27 2.04-.03 2.79-.78l1.5-1.5a1.25 1.25 0 0 0 0-1.77l-2.13-2.13a1.25 1.25 0 0 0-1.77 0l-.66.66a.9.9 0 0 1-.9.22 9.5 9.5 0 0 1-4.4-4.4.9.9 0 0 1 .22-.9l.66-.66a1.25 1.25 0 0 0 0-1.77L9.27 3.75a1.25 1.25 0 0 0-1.77 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="3.25"
        y="5.25"
        width="17.5"
        height="13.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 7.5 11.09 11a1.8 1.8 0 0 0 1.82 0L19 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M13.5 21v-6.75h2.25L16 10.5h-2.5V9.25c0-.72.24-1.25 1.25-1.25H16V6.1c-.22-.03-.96-.1-1.83-.1-1.8 0-3.17 1.1-3.17 3.12V10.5H9v3.75h2v6.75h2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function HeaderTopBar() {
  return (
    <div className="w-full bg-club-ink backdrop-blur-sm border-b border-white/10 text-[11px] md:text-xs lg:text-sm text-white/80">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-1.5 md:py-2 flex flex-wrap items-center justify-between gap-2 md:gap-4">
        {/* Bloc gauche : téléphone + mail */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <a
            href="tel:+33600000000"
            className="flex items-center gap-1.5 hover:text-club-accent transition"
          >
            <PhoneIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="font-medium tracking-wide">
              &#48;&#54;&nbsp;&#52;&#54;&nbsp;&#49;&#52;&nbsp;&#56;&#50;&nbsp;&#48;&#50;
            </span>
          </a>

          <span className="hidden md:inline text-white/30">•</span>

          <a
            href="mailto:contact@frgamardett.fr"
            className="flex items-center gap-1.5 hover:text-club-accent transition"
          >
            <MailIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>contact&#64;frgamardett.fr</span>
          </a>
        </div>

        {/* Bloc droit : réseaux sociaux */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden md:inline text-white/45 text-[10px] md:text-[11px]">
            Suivre le club
          </span>

          <a
            href="https://www.facebook.com/p/Foyer-Rural-Gamarde-Tennis-de-Table-61554014467366/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook du FR Gamarde"
            className="inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 w-6 h-6 md:w-7 md:h-7 transition"
          >
            <FacebookIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>

          <a
            href="https://www.instagram.com/fr_gamarde_tennis_de_table/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram du FR Gamarde"
            className="inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 w-6 h-6 md:w-7 md:h-7 transition"
          >
            <InstagramIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
