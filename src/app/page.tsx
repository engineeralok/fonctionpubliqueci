import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import CommuniquesSection from "@/components/CommuniquesSection";
import ActualitesSection from "@/components/ActualitesSection";
import PhotothequeSection from "@/components/PhotothequeSection";

const featuredArticles = [
  {
    title: "Les résultats des concours administratifs au titre de l'année 2025 sont disponibles.",
    detail: "Communiqué urgent - 21 novembre 2025",
    href: "https://www.transformation.gouv.fr/ministre/actualite/un-plan-de-resilience-des-services-publics-pour-faire-face-aux-crises",
    image: "/images/1124C366-2918-4459-8E89-ED6C464925FD.png",
    width: 1343,
    height: 768,
    credit: "Ministère de la Fonction publique",
    isUrgent: true,
  },
  {
    title: "Relance des activités de visite médicale et réception des dossiers.",
    detail: "Communiqué urgent - 15 novembre 2025",
    href: "https://www.transformation.gouv.fr/ministre/actualite/les-services-publics-proches-de-vous-proches-de-chez-vous-decouvrez-la-campagne",
    image: "/images/1124C366-2918-4459-8E89-ED6C464925FD.png",
    width: 1343,
    height: 768,
    isUrgent: true,
  },
  {
    title: "Dépôt des dossiers de recrutement exceptionnel ouvert aux ivoiriens de la diaspora.",
    detail: "Communiqué urgent - 14 octobre 2025",
    href: "https://www.transformation.gouv.fr/ministre/actualite/le-service-public-ces-metiers-qui-nous-font-tous-avancer-0",
    image: "/images/1124C366-2918-4459-8E89-ED6C464925FD.png",
    width: 1343,
    height: 768,
    isUrgent: true,
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
              <a href="#footer" className="fr-link">
                Aller au pied de page
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main role="main">
        <a id="contenu" tabIndex={-1}></a>
        <div className="fr-container">
          <div className="fr-grid-row">
            <div className="fr-col-12">
              <article className="node node--type-accueil node--promoted node--view-mode-full fr-mt-8w">
                <div className="node__content">
                  <h1>La fonction publique, cette administration publique à votre écoute</h1>
                  <div className="node__content">
                    <div className="fr-mt-3w fr-mb-6w">
                      <Image
                        src="/images/herosection.jpg"
                        alt="La fonction publique, cette administration publique a votre écoute"
                        width={1200}
                        height={470}
                        priority
                      />
                    </div>

                    <CommuniquesSection articles={featuredArticles} />

                    <ActualitesSection />

                    <PhotothequeSection />

                    {/* <section className="paragraph paragraph--type--ds-cartes paragraph--view-mode--default fr-grid-row fr-grid-row--gutters">
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
                    </section> */}

                    {/* <section className="paragraph paragraph--type--ds-cartes paragraph--view-mode--default fr-grid-row fr-grid-row--gutters">
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
                    </section> */}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* <div className="fr-grid-row ds-row--space-between fr-container fr-mt-4w">
          <ShareButtons />
          <div className="fr-mt-2w">
            <a className="ds-back-to-top fr-link fr-icon-arrow-up-fill fr-link--icon-left" href="#haut-de-page">
              Haut de page
            </a>
          </div>
        </div> */}

        {/* <div className="fr-follow">
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
        </div> */}
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
