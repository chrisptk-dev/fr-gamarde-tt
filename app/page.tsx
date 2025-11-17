import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import NewsSection from "./components/NewsSection";
import InfosPratiquesSection from "./components/InfosPratiquesSection";
import InscriptionSection from "./components/InscriptionSection";
import ContactSection from "./components/ContactSection";
import SponsorsSection from "./components/SponsorsSection";
import { getAllNews } from "@/lib/news";



export default function Home() {
  const allNews = getAllNews();
  const latestNews = allNews.slice(0, 3); // On garde les 3 premières
  return (
    <main>
      <Hero />
      <ServicesSection />
      {/* 🔽 On passe les actus en props ici */}
      <NewsSection news={latestNews} />
      <InfosPratiquesSection />
      <InscriptionSection />
      <ContactSection />
      <SponsorsSection />
    </main>
  );
}
