import { getAllNews } from "@/lib/news";
import ActualitesClient from "./ActualitesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités du FR Gamarde Tennis de Table",
  description:
    "Toutes les actualités du FR Gamarde Tennis de Table à Gamarde-les-Bains (Landes 40) : résultats, événements, vie du club et informations importantes.",
};


export default function ActualitesPage() {
  const allNews = getAllNews();

  return <ActualitesClient allNews={allNews} />;
}
