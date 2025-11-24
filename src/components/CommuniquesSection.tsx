'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Article = {
  title: string;
  detail: string;
  href: string;
  image: string;
  width: number;
  height: number;
  credit?: string;
};

const segments = [
  { id: "urgent", label: "Urgent" },
  { id: "communiques", label: "Communiqués" },
  { id: "offres", label: "Offres d'emplois" },
  { id: "annonces", label: "Annonces" },
];

export default function CommuniquesSection({ articles }: { articles: Article[] }) {
  const [activeSegment, setActiveSegment] = useState("urgent");

  return (
    <section className="paragraph paragraph--type--ds-vue-bloc paragraph--view-mode--default view--actualites view-display--a_la_une fr-grid-row fr-grid-row--center fr-grid-row--gutters">
      <div className="fr-col-12">
        <div className="fr-grid-row fr-grid-row--middle ds-rangee-de--entete link-and-title">
          <h2>Surlignés Les communiqués</h2>
          <a
            className="border border-white/70 text-white px-4 py-2 rounded-md uppercase text-xs font-semibold"
            href="https://www.transformation.gouv.fr/ministre/actualite"
          >
            Voir tout
          </a>
        </div>

        <div className="bg-white border border-black rounded-md overflow-hidden">
          <div className="flex divide-x divide-black">
            {segments.map((segment) => (
              <button
                key={segment.id}
                className={`segment-button flex-1 px-4 py-3 text-sm font-semibold uppercase transition-colors ${
                  activeSegment === segment.id
                    ? "bg-[#FF914D] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveSegment(segment.id)}
              >
                {segment.label}
              </button>
            ))}
          </div>

          <div className="p-4 bg-white">
            {activeSegment === "urgent" ? (
              <div className="fr-grid-row fr-grid-row--gutters ds-rangee-de--contenu">
                {articles.map((article) => (
                  <div className="fr-col-12 fr-col-md-4 views-row" key={article.href}>
                    <article className="node node--type-actualite node--promoted node--view-mode-ds-carte-verticale-complet fr-card fr-enlarge-link fr-mb-8v fr-card--grey">
                      <div className="fr-card__body">
                        <div className="fr-card__content">
                          <h3 className="fr-card__title">
                            <a href={article.href} className="fr-card__link">
                              {article.title}
                            </a>
                          </h3>
                          <div className="fr-card__start">
                            <p className="fr-card__detail">{article.detail}</p>
                          </div>
                        </div>
                      </div>
                      <div className="fr-card__header">
                        <div className="fr-card__img">
                          <Image src={article.image} alt={article.credit ?? ""} width={article.width} height={article.height} />
                        </div>
                      </div>
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
      </div>
    </section>
  );
}

