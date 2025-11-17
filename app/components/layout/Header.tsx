"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/actualites", label: "Actualités" },
  { href: "/#infos-pratiques", label: "Infos pratiques" },
  { href: "/#inscription", label: "Inscription" },
  { href: "/galerie", label: "Galerie" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-transparent">
      {/* ➜ relative pour positionner le menu mobile en absolute dedans */}
      <div className="mx-auto max-w-6xl px-4 pt-4 relative ">
        <div
          className="
          flex items-center justify-between gap-4
          rounded-full bg-club-ink/10 border border-white/10
          backdrop-blur-md shadow-lg shadow-black/40
          px-4 py-2 md:px-6 md:py-3
        "
        >
          {/* Logo / titre club */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-club-accent/90 shadow-md" />
            <div className="flex flex-col leading-tight">
              <span className="font-sport text-sm md:text-base text-white">
                FR Gamarde TT
              </span>
              <span className="text-[11px] text-white/60 hidden sm:inline">
                Tennis de table – Landes
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative transition-colors hover:text-club-accent"
              >
                {link.label}

                {/* Soulignement animé */}
                <span
                  className="
          absolute left-0 -bottom-0.5
          h-0.5 w-0
          bg-club-accent
          transition-all duration-300
          group-hover:w-full
        "
                />
              </Link>
            ))}
          </nav>

          {/* Bouton contact / CTA desktop */}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block"
          >
            <motion.span
              className="
      inline-flex items-center justify-center 
      rounded-full border border-club-accent/60 
      bg-club-accent/10 px-4 py-1.5
      text-sm font-medium text-club-accent
      hover:bg-club-accent hover:text-club-ink
      transition-colors duration-200
    "
              animate={{ scale: [1, 1.05, 1] }} // BATTEMENT + visible
              transition={{
                duration: 2, // + rapide mais propre
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              whileHover={{ scale: 1.1 }} // hover clair et moderne
            >
              Nous contacter
            </motion.span>
          </Link>

          {/* Burger mobile */}
          <button
            className="md:hidden relative h-8 w-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {/* Texte caché mais lisible par les lecteurs d’écran */}
            <span className="sr-only">
              {open ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            </span>

            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu mobile en overlay */}
        {open && (
          <div
            id="mobile-menu"
            className="
              absolute inset-x-0 top-full mt-2
              md:hidden
            "
          >
            <div
              className="
                rounded-3xl border border-white/10
                bg-club-ink-light/95 backdrop-blur-md
                shadow-lg shadow-black/40
                px-4 py-4
              "
            >
              <nav className="flex flex-col gap-3 text-sm text-white/90">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-1 hover:text-club-accent transition"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="
    mt-2 inline-flex items-center justify-center 
    rounded-full border border-club-accent/60 
    bg-club-accent/10 px-4 py-1.5 text-sm font-medium 
    text-club-accent 
    hover:bg-club-accent hover:text-club-ink 
    transition-transform duration-200 
    hover:scale-105 
    heartbeat
  "
                >
                  Nous contacter
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
