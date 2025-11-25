'use client';

type Article = {
  title: string;
  date: string;
  href: string;
};

const actualitesArticles: Article[] = [
  {
    title: "L'organisation mondiale de la propriété intellectuelle (OMPI) lance un avis de vacance pour les poste suivant",
    date: "Article - 16 octobre 2025",
    href: "#",
  },
  {
    title: "L'organisation mondiale de la propriété intellectuelle (OMPI) lance un avis de vacance pour les poste suivant",
    date: "Article - 16 octobre 2025",
    href: "#",
  },
  {
    title: "L'organisation mondiale de la propriété intellectuelle (OMPI) lance un avis de vacance pour les poste suivant",
    date: "Article - 16 octobre 2025",
    href: "#",
  },
  {
    title: "L'organisation mondiale de la propriété intellectuelle (OMPI) lance un avis de vacance pour les poste suivant",
    date: "Article - 16 octobre 2025",
    href: "#",
  },
  {
    title: "L'organisation mondiale de la propriété intellectuelle (OMPI) lance un avis de vacance pour les poste suivant",
    date: "Article - 16 octobre 2025",
    href: "#",
  },
];

export default function ActualitesSection() {
  return (
    <section className="actualites-section fr-mt-6w">
      <div className="actualites-header">
        <h2>
          <span className="underline">Actualités</span>
        </h2>
        <a className="actualites-cta" href="#">
          Voir tout
        </a>
      </div>

      <div className="actualites-content">
        {actualitesArticles.map((article, index) => (
          <a key={index} href={article.href} className="actualites-article">
            <h3 className="actualites-article__text">{article.title}</h3>
            <p className="actualites-article__date">{article.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

