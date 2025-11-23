import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ShareButtons from "@/components/ShareButtons";

const featuredArticles = [
  {
    title: "Un plan de résilience des services publics pour faire face aux crises",
    detail: "14 octobre 2025 / Fonction publique / Article",
    href: "https://www.transformation.gouv.fr/ministre/actualite/un-plan-de-resilience-des-services-publics-pour-faire-face-aux-crises",
    image: "/transformation/images/article-1.jpg",
    width: 3800,
    height: 2138,
    credit: "©Gorodenkoff- stock.adobe.com",
  },
  {
    title:
      "« Les services publics proches de vous, proches de chez vous » : découvrez la campagne de communication nationale pour faire rayonner France services",
    detail: "05 novembre 2024 / France services / Article",
    href: "https://www.transformation.gouv.fr/ministre/actualite/les-services-publics-proches-de-vous-proches-de-chez-vous-decouvrez-la-campagne",
    image: "/transformation/images/article-2.png",
    width: 550,
    height: 320,
  },
  {
    title: "Le service public, ces métiers qui nous font tous avancer",
    detail: "30 décembre 2024 / Fonction publique / Article",
    href: "https://www.transformation.gouv.fr/ministre/actualite/le-service-public-ces-metiers-qui-nous-font-tous-avancer-0",
    image: "/transformation/images/article-3.png",
    width: 853,
    height: 400,
  },
];

const actionCards = [
  {
    title: "30 millions d’utilisateurs ont adopté FranceConnect !",
    href: "https://www.transformation.gouv.fr/ministre/actualite/30-millions-dutilisateurs-ont-adopte-franceconnect",
    image: "/transformation/images/action-1.png",
    width: 358,
    height: 200,
    alt: "30 millions d’utilisateurs France Connect",
  },
  {
    title: "Le Gouvernement soutient la transformation numérique des collectivités territoriales",
    href: "https://www.transformation.gouv.fr/ministre/actualite/le-gouvernement-soutient-la-transformation-numerique-des-collectivites",
    image: "/transformation/images/action-2.jpg",
    width: 358,
    height: 200,
    alt: "France Relance Fonds Transformation numérique des territoires 88 M€ jusqu’en 2022",
  },
];

const footerColumns = [
  {
    title: "Le ministre",
    links: [
      { label: "Actualité", href: "https://www.transformation.gouv.fr/ministre/actualite" },
      { label: "Agenda", href: "https://www.transformation.gouv.fr/ministre/agenda" },
      { label: "Biographie", href: "https://www.transformation.gouv.fr/ministre/biographie" },
      { label: "Cabinet", href: "https://www.transformation.gouv.fr/ministre/biographie" },
    ],
  },
  {
    title: "Le ministère",
    links: [
      { label: "Missions", href: "https://www.transformation.gouv.fr/" },
      { label: "Directions", href: "https://www.transformation.gouv.fr/" },
    ],
  },
  {
    title: "Espace presse",
    links: [{ label: "Espace Presse", href: "https://www.transformation.gouv.fr/espace-presse" }],
  },
  {
    title: "Notre action",
    links: [
      { label: "France Relance : découvrez les projets lauréats", href: "https://www.transformation.gouv.fr/decouvrez-les-projets-laureats" },
      { label: "France services", href: "https://www.transformation.gouv.fr/les-france-services" },
      {
        label: "Gouvernement Ouvert",
        href: "https://gouvernement-ouvert.transformation.gouv.fr",
        external: true,
      },
      {
        label: "Réforme de l’encadrement supérieur de l’État",
        href: "https://www.transformation.gouv.fr/reforme-de-l-encadrement-superieur-de-l-etat",
      },
      { label: "Talents du service public", href: "https://www.transformation.gouv.fr/cartographie-des-prepas-talents" },
    ],
  },
  {
    title: "Ressources",
    links: [{ label: "Rubrique ressources", href: "https://www.transformation.gouv.fr/rubrique-ressources" }],
  },
];

const institutionalLinks = [
  "https://www.fonction-publique.gouv.fr/",
  "https://www.numerique.gouv.fr/",
  "https://www.modernisation.gouv.fr/",
  "https://info.gouv.fr",
  "https://legifrance.gouv.fr",
  "https://www.service-public.gouv.fr",
  "https://data.gouv.fr",
];

const footerBottomLinks = [
  { label: "Données personnelles et cookies", href: "https://www.transformation.gouv.fr/donnees-personnelles-et-cookies" },
  { label: "Contact presse", href: "https://www.transformation.gouv.fr/espace-presse/contact-presse" },
  { label: "Mentions légales", href: "https://www.transformation.gouv.fr/mentions-legales" },
  { label: "Accessibilité : partiellement conforme", href: "https://www.transformation.gouv.fr/accessibilite" },
  { label: "Plan du site", href: "https://www.transformation.gouv.fr/sitemap" },
];

const followLinks = [
  {
    label: "Suivez-nous sur Facebook",
    href: "https://fr-fr.facebook.com/StanGuerini",
    className: "fr-btn fr-btn--facebook",
  },
  {
    label: "Visiter la page Twitter",
    href: "https://twitter.com/StanGuerini",
    className: "fr-btn fr-btn--twitter-x",
  },
];

export default function Home() {
  return (
    <>
      <div id="haut-de-page" className="fr-skiplinks">
        <nav className="fr-container" aria-label="Accès rapide">
          <ul className="fr-skiplinks__list">
            <li>
              <a href="#contenu" className="fr-link">
                Accéder au contenu
              </a>
            </li>
            <li>
              <a href="#header-navigation" className="fr-link">
                Aller au menu de navigation
              </a>
            </li>
            <li>
              <a href="#footer" className="fr-link">
                Aller au pied de page
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Header />

      <main role="main">
        <a id="contenu" tabIndex={-1}></a>
        <div className="fr-container">
          <div className="fr-grid-row">
            <div className="fr-col-12">
              <article className="node node--type-accueil node--promoted node--view-mode-full fr-mt-8w">
                <div className="node__content">
                  <h1>Le service public, ces métiers qui nous font tous avancer</h1>
                  <div className="node__content">
                    <a
                      className="fr-link fr-icon-arrow-right-line fr-link--icon-right fr-link--align-on-content"
                      href="https://www.transformation.gouv.fr/ministre/actualite/le-service-public-ces-metiers-qui-nous-font-tous-avancer"
                    >
                      Voir l’article
                    </a>
                    <div className="fr-mt-3w fr-mb-6w">
                      <Image
                        src="/transformation/images/hero.png"
                        alt="Ces métiers qui nous font avancer. # Choisir le service public"
                        width={1200}
                        height={470}
                        priority
                      />
                    </div>

                    <section className="paragraph paragraph--type--ds-vue-bloc paragraph--view-mode--default view--actualites view-display--a_la_une fr-grid-row fr-grid-row--center fr-grid-row--gutters">
                      <div className="fr-col-12">
                        <div className="fr-grid-row fr-grid-row--middle ds-rangee-de--entete link-and-title">
                          <h2>À la une</h2>
                          <a className="fr-link fr-icon-arrow-right-line fr-link--icon-left fr-link--align-on-content" href="https://www.transformation.gouv.fr/ministre/actualite">
                            Voir tout
                          </a>
                        </div>
                        <div className="fr-grid-row fr-grid-row--gutters ds-rangee-de--contenu">
                          {featuredArticles.map((article) => (
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
                      </div>
                    </section>

                    <section className="paragraph paragraph--type--ds-cartes paragraph--view-mode--default fr-grid-row fr-grid-row--gutters">
                      <div className="fr-col-12">
                        <div className="fr-grid-row fr-grid-row--middle ds-rangee-de--entete title-only">
                          <h2>Notre action</h2>
                        </div>
                        <div className="fr-grid-row fr-grid-row--gutters ds-rangee-de--contenu">
                          {actionCards.map((card) => (
                            <div className="fr-col-12 fr-col-md-6" key={card.href}>
                              <div className="fr-card fr-card--vertical fr-enlarge-link fr-card--default">
                                <div className="fr-card__body">
                                  <div className="fr-card__content">
                                    <h3 className="fr-card__title">
                                      <a href={card.href} className="fr-card__link">
                                        {card.title}
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                                <div className="fr-card__header">
                                  <div className="fr-card__img">
                                    <Image src={card.image} alt={card.alt} width={card.width} height={card.height} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section className="paragraph paragraph--type--ds-cartes paragraph--view-mode--default fr-grid-row fr-grid-row--gutters">
                      <div className="fr-col-12">
                        <div className="fr-card fr-card--vertical fr-card--default fr-enlarge-link ds-card--external-link-icon">
                          <div className="fr-card__body">
                            <div className="fr-card__content">
                              <h2 className="fr-card__title">
                                <a
                                  className="fr-card__link"
                                  href="https://www.plus.transformation.gouv.fr/"
                                  target="_blank"
                                  rel="noopener noreferrer external"
                                  title="Lien externe - Pour des services publics plus proches, plus simples et plus efficaces"
                                >
                                  Pour des services publics plus proches, plus simples et plus efficaces
                                </a>
                              </h2>
                            </div>
                          </div>
                          <div className="fr-card__header">
                            <div className="fr-card__img">
                              <Image
                                src="/transformation/images/services-publics-plus.png"
                                alt="Services Publics +"
                                width={568}
                                height={320}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="fr-grid-row ds-row--space-between fr-container fr-mt-4w">
          <ShareButtons />
          <div className="fr-mt-2w">
            <a className="ds-back-to-top fr-link fr-icon-arrow-up-fill fr-link--icon-left" href="#haut-de-page">
              Haut de page
            </a>
          </div>
        </div>

        <div className="fr-follow">
          <div className="fr-container">
            <div className="fr-grid-row">
              <div className="fr-col-12">
                <div className="fr-follow__social">
                  <ul className="fr-btns-group">
                    {followLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className={link.className} target="_blank" rel="noopener noreferrer external" title={`${link.label} - Dans un nouvel onglet`}>
                          <span className="label-hidden">{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fr-footer" role="contentinfo" id="footer">
        <div className="fr-footer__top">
          <div className="fr-container">
            <nav aria-labelledby="block-mtfp-2024-ds-mega-footer-menu" id="block-mtfp-2024-ds-mega-footer" className="block block-menu navigation menu--footer">
              <h2 className="visually-hidden" id="block-mtfp-2024-ds-mega-footer-menu">
                Mega menu Pied de page
              </h2>
              <div className="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
                {footerColumns.map((column) => (
                  <div className="fr-col-12 fr-col-sm-3 fr-col-md-2" key={column.title}>
                    <h3 className="fr-footer__top-cat">{column.title}</h3>
                    <ul className="fr-footer__top-list">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a
                            className="fr-footer__top-link"
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <div className="fr-container">
          <div className="fr-footer__body">
            <div className="fr-footer__brand fr-enlarge-link">
              <Link href="/" title="Ministère de la Fonction publique et de la Réforme de l’État - Retour à l’accueil du site">
                <p className="fr-logo">
                  Ministère
                  <br />
                  de la Fonction publique <br />
                  et de la Réforme de l’État
                </p>
              </Link>
            </div>
            <div className="fr-footer__content">
              <ul className="fr-footer__content-list">
                {institutionalLinks.map((href) => (
                  <li className="fr-footer__content-item" key={href}>
                    <a className="fr-footer__content-link" href={href} target="_blank" rel="noopener noreferrer external">
                      {href.replace("https://", "").replace("www.", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="fr-footer__bottom">
            <ul className="fr-footer__bottom-list">
              {footerBottomLinks.map((link) => (
                <li className="fr-footer__bottom-item" key={link.href}>
                  <a className="fr-footer__bottom-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="fr-footer__bottom-item">
                <button id="tarteaucitronManager" className="fr-footer__bottom-link" type="button">
                  Gestion des cookies
                </button>
              </li>
            </ul>
            <div className="fr-footer__bottom-copy">
              <p>
                Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous{" "}
                <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener noreferrer external">
                  licence etalab-2.0
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
