import type { Metadata } from "next";
import "./globals.css";
import { Inter, Barlow_Condensed } from "next/font/google";

import Header from "./components/layout/Header";
import HeaderTopBar from "./components/layout/HeaderTopBar";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";

import { siteConfig } from "./config/site";

// 1. Polices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
});

// 2. Metadata SEO globales
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

// Couleur principale (utilisée pour theme-color, éventuellement UI)
  export const viewport = {themeColor: "#0f172a",}


// 3. Layout global
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // On prépare les URLs de réseaux sociaux pour le JSON-LD
  const sameAs: string[] = [];
  if (siteConfig.socials?.facebook) sameAs.push(siteConfig.socials.facebook);
  if (siteConfig.socials?.instagram) sameAs.push(siteConfig.socials.instagram);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gamarde-les-Bains",
      addressRegion: "Landes",
      postalCode: "40380",
      addressCountry: "FR",
    },
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };

  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${barlow.variable}`}
    >
      <body className="bg-club-ink">
        {/* JSON-LD pour aider Google à comprendre que tu es un club local */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <HeaderTopBar />
        <Header />
        <main className="min-h-screen bg-club-ink">{children}</main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
