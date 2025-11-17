// app/robots.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "./config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/", // on autorise tout le site à être exploré
      // disallow: [] // tu peux ajouter des dossiers plus tard si besoin
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
