// app/actualites/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNewsBySlug } from "@/lib/news";

type ActualitePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// 🧠 SEO dynamique pour chaque actualité
export async function generateMetadata({
  params,
}: ActualitePageProps): Promise<Metadata> {
  // ❗ on garde ton pattern avec la Promise
  const { slug } = await params;

  const article = getNewsBySlug(slug);

  if (!article) {
    return {
      title: "Actualité introuvable | FR Gamarde TT",
      description: "Cette actualité n'existe plus ou a été déplacée.",
    };
  }

  const baseTitle = article.title || "Actualité du FR Gamarde TT";
  const title = `${baseTitle} | Actualité du FR Gamarde TT`;

  // Description à partir du contenu
  const descriptionSource =
    article.content?.split("\n").join(" ").replace(/\s+/g, " ").trim() ||
    "Actualité du FR Gamarde Tennis de Table.";

  const description =
    descriptionSource.length > 160
      ? descriptionSource.slice(0, 157) + "…"
      : descriptionSource;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        article.image
          ? {
              url: article.image,
              width: 1200,
              height: 630,
              alt: article.title,
            }
          : {
              url: "/fr_gamarde_og_final_1200x630.jpg",
              width: 1200,
              height: 630,
              alt: "FR Gamarde Tennis de Table",
            },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ActualitePage({ params }: ActualitePageProps) {
  // ✅ on "déplie" bien la Promise comme demandé par Next
  const { slug } = await params;

  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-club-ink min-h-screen pt-16 pb-20">
      <section className="relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white/2 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden">
            {article.image && (
              <div className="relative w-full overflow-hidden aspect-[16/9]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 768px, 100vw"
                  priority
                />
              </div>
            )}

            <div className="px-6 py-6 md:px-8 md:py-8">
              <div className="mb-4">
                <Link
                  href="/actualites"
                  className="text-sm text-white/70 hover:text-club-accent transition"
                >
                  ← Retour aux actualités
                </Link>
              </div>

              <p className="text-sm text-white/60 mb-2">
                {new Date(article.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <h1 className="text-2xl md:text-3xl font-sport text-white mb-4">
                {article.title}
              </h1>

              <div
                className="
  prose prose-invert prose-sm md:prose-base max-w-none
  text-white/80 prose-p:text-white/80 prose-li:text-white/80
  prose-strong:text-white prose-headings:text-white
"
              >
                {article.content
                  .split("\n")
                  .filter((p) => p.trim().length > 0)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
