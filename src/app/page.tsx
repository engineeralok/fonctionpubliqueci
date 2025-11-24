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
    title: "Le Ministre",
    links: [
      { label: "Ressources", href: "#" },
      { label: "Rubrique ressources", href: "#" },
    ],
  },
  {
    title: "Nos services",
    links: [],
  },
];

const institutionalLinks = [
  "presidence.gouv.ci",
  "tresor.gouv.ci",
  "impots.gouv.ci",
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

      <footer className="fr-footer custom-footer" role="contentinfo" id="footer">
        <div className="fr-container">
          <div className="footer-top-section">
            <div className="footer-brand-section">
              <Link href="/" title="Ministère de la Fonction publique et de la Réforme de l'État - Retour à l'accueil du site">
                <Image
                  src="/images/mobilelogo1.png"
                  alt="Ministère de la Fonction publique et de la Réforme de l'État"
                  width={222}
                  height={81}
                  className="footer-logo"
                />
              </Link>
              <div className="footer-ministry-info">
                <p className="footer-ministry-title">MINISTÈRE D'ÉTAT</p>
                <p className="footer-ministry-title">MINISTÈRE DE LA FONCTION PUBLIQUE</p>
                <p className="footer-ministry-title">ET DE LA MODERNISATION DE L'ADMINISTRATION</p>
                <p className="footer-ministry-motto">Union<br/>Discipline<br/>Travail</p>
              </div>
            </div>
            
            <nav className="footer-columns">
              {footerColumns.map((column) => (
                <div className="footer-column" key={column.title}>
                  <h3 className="footer-column-title">{column.title}</h3>
                  {column.links.length > 0 && (
                    <ul className="footer-column-list">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="footer-links-section">
            <ul className="footer-institutional-links">
              {institutionalLinks.map((link) => (
                <li key={link}>
                  <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-copyright">
            <p>Copyright - Confidentiel Etat Ivoirien</p>
          </div>
        </div>
      </footer>
    </>
  );
}
