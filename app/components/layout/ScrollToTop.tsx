"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Remonter en haut de la page"
      className={`
        fixed bottom-6 right-6 z-50
        transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }

        rounded-full p-3 md:p-3.5
        bg-white/10 border border-white/30 backdrop-blur-xl
        shadow-[0_18px_45px_rgba(0,0,0,0.55)]

        hover:bg-club-accent hover:border-club-accent hover:text-club-ink
        hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.75)]
        active:translate-y-0 active:shadow-[0_12px_30px_rgba(0,0,0,0.6)]

        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-club-accent
        focus-visible:ring-offset-2 focus-visible:ring-offset-club-ink
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        {/* double chevron vers le haut = plus “sportif” */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 17l7-7 7 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7" />
      </svg>
    </button>
  );
}
