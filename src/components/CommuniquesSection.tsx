'use client';

import { useState } from "react";
import Image from "next/image";

type Article = {
  title: string;
  detail: string;
  href: string;
  image: string;
  width: number;
  height: number;
  credit?: string;
  isUrgent?: boolean;
};

const segments = [
  { id: "urgent", label: "Urgent" },
  { id: "communiques", label: "Communiqués" },
  { id: "offres", label: "Offres d'emplois" },
  { id: "annonces", label: "Annonces" },
];

export default function CommuniquesSection({ articles }: { articles: Article[] }) {
  const [activeSegment, setActiveSegment] = useState("urgent");
  const currentIndex = segments.findIndex((segment) => segment.id === activeSegment);

  const handlePrevSegment = () => {
    const prevIndex = (currentIndex - 1 + segments.length) % segments.length;
    setActiveSegment(segments[prevIndex].id);
  };

  const handleNextSegment = () => {
    const nextIndex = (currentIndex + 1) % segments.length;
    setActiveSegment(segments[nextIndex].id);
  };

  return (
    <section className="communicates-section">
      <div className="communicates-header">
        <h2>
          <span className="underline">Les communiqués</span>
        </h2>
        <a className="communicates-cta" href="https://www.transformation.gouv.fr/ministre/actualite">
          Voir tout
        </a>
      </div>

      <div className="communicates-box">
        <div className="communicates-tabs">
            {segments.map((segment) => (
              <button
                key={segment.id}
                className={`segment-button flex-1 px-4 py-3 text-sm font-semibold uppercase transition-colors ${
                activeSegment === segment.id ? "bg-[#FF914D] text-white" : "bg-white text-black"
                }`}
                onClick={() => setActiveSegment(segment.id)}
              >
                {segment.label}
              </button>
            ))}
        </div>

        <div className="communicates-tabs-mobile" aria-label="Navigation des catégories">
          <button
            type="button"
            className="communicates-tabs-mobile__btn"
            onClick={handlePrevSegment}
            aria-label="Catégorie précédente"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div className="communicates-tabs-mobile__label" aria-live="polite">
            {segments[currentIndex]?.label}
          </div>
          <button
            type="button"
            className="communicates-tabs-mobile__btn"
            onClick={handleNextSegment}
            aria-label="Catégorie suivante"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="communicates-content">
          {activeSegment === "urgent" ? (
            <div className="fr-grid-row fr-grid-row--gutters ds-rangee-de--contenu">
              {articles.map((article) => (
                <div className="fr-col-12 fr-col-md-4 views-row" key={article.href}>
                  <article className={`node node--type-actualite node--promoted node--view-mode-ds-carte-verticale-complet fr-card fr-enlarge-link fr-mb-8v fr-card--grey ${article.isUrgent ? "urgent-card-container" : ""}`}>
                    <div className="fr-card__body">
                      <div className="fr-card__content">
                        <h3 className="fr-card__title">
                          <a
                            href={article.href}
                            className={`fr-card__link ${article.isUrgent ? "urgent-card__link" : ""}`}
                          >
                            {article.title}
                          </a>
                        </h3>
                        <div className="fr-card__start">
                          <p className={`fr-card__detail ${article.isUrgent ? "urgent-card__detail" : ""}`}>{article.detail}</p>
                        </div>
                      </div>
                    </div>
                    <div className="fr-card__header">
                      <div className="fr-card__img">
                        <Image src={article.image} alt={article.credit ?? ""} width={article.width} height={article.height} />
                      </div>
                    </div>
                    {article.isUrgent && (
                      <span className="urgent-card__arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </span>
                    )}
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-700">
              Les {segments.find((s) => s.id === activeSegment)?.label.toLowerCase()} seront bientôt disponibles.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

