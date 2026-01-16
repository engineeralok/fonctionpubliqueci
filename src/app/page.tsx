import Image from "next/image";
import CommuniquesSection from "@/components/CommuniquesSection";
import ActualitesSection from "@/components/ActualitesSection";
import PhotothequeSection from "@/components/PhotothequeSection";
import FooterLogo from "@/components/FooterLogo";

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

const institutionalLinks = [
  "presidence.gouv.ci",
  "tresor.gouv.ci",
  "impots.gouv.ci",
];

// Unused variables (commented out in JSX)
// const actionCards = [
//   {
//     title: "30 millions d'utilisateurs ont adopté FranceConnect !",
//     href: "https://www.transformation.gouv.fr/ministre/actualite/30-millions-dutilisateurs-ont-adopte-franceconnect",
//     image: "/transformation/images/action-1.png",
//     width: 358,
//     height: 200,
//     alt: "30 millions d'utilisateurs France Connect",
//   },
//   {
//     title: "Le Gouvernement soutient la transformation numérique des collectivités territoriales",
//     href: "https://www.transformation.gouv.fr/ministre/actualite/le-gouvernement-soutient-la-transformation-numerique-des-collectivites",
//     image: "/transformation/images/action-2.jpg",
//     width: 358,
//     height: 200,
//     alt: "France Relance Fonds Transformation numérique des territoires 88 M€ jusqu'en 2022",
//   },
// ];

// const footerBottomLinks = [
//   { label: "Données personnelles et cookies", href: "https://www.transformation.gouv.fr/donnees-personnelles-et-cookies" },
//   { label: "Contact presse", href: "https://www.transformation.gouv.fr/espace-presse/contact-presse" },
//   { label: "Mentions légales", href: "https://www.transformation.gouv.fr/mentions-legales" },
//   { label: "Accessibilité : partiellement conforme", href: "https://www.transformation.gouv.fr/accessibilite" },
//   { label: "Plan du site", href: "https://www.transformation.gouv.fr/sitemap" },
// ];

// const followLinks = [
//   {
//     label: "Suivez-nous sur Facebook",
//     href: "https://fr-fr.facebook.com/StanGuerini",
//     className: "fr-btn fr-btn--facebook",
//   },
//   {
//     label: "Visiter la page Twitter",
//     href: "https://twitter.com/StanGuerini",
//     className: "fr-btn fr-btn--twitter-x",
//   },
// ];

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
        
        {/* Hero Image - Full Width */}
        <div className="w-full">
          <Image
            src="/images/FDF3D165-D02E-4A6B-9463-C761BD2C21D9.jpeg"
            alt="La fonction publique, cette administration a votre écoute"
            width={1920}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="fr-container">
          <div className="fr-grid-row">
            <div className="fr-col-12">
              <article className="node node--type-accueil node--promoted node--view-mode-full fr-mt-8w">
                <div className="node__content">
                  <h1>La fonction publique, une administration qui vous écoute à tout moment</h1>
                  <div className="node__content">

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
              <FooterLogo />
              <div className="footer-services">
                <h3 className="footer-services-title">Le Ministère</h3>
                <ul className="footer-column-list">
                  <li>
                    <a href="/le-ministre">Le Ministre</a>
                  </li>
                  <li>
                    <a href="#">Organisation du Ministère</a>
                  </li>
                  <li>
                    <a href="#">Direction Générale de la Fonction Publique</a>
                  </li>
                  <li>
                    <a href="#">Direction Générale de la Transformation de Service Publique</a>
                  </li>
                  <li>
                    <a href="#">Organigramme du MEMFPMA</a>
                  </li>
                  <li>
                    <a href="#">Demande d&apos;acte de non engagement</a>
                  </li>
                  <li>
                    <a href="#">Actes signés</a>
                  </li>
                  <li>
                    <a href="#">Retraite / Radiation</a>
                  </li>
                </ul>
            </div>
              <div className="footer-services">
                <h3 className="footer-services-title">Ressources</h3>
                <ul className="footer-column-list">
                  <li>
                    <a href="#">Rubrique ressources</a>
                  </li>
              </ul>
              </div>
            </div>
            
            <nav className="footer-columns">
              <div className="footer-social">
                <h3 className="footer-column-title">Suivez nous</h3>
                <div className="footer-social-icons">
                  <a href="#" className="footer-social-icon" aria-label="YouTube">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </a>
                  <a href="#" className="footer-social-icon" aria-label="Facebook">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </a>
                  <a href="#" className="footer-social-icon" aria-label="Instagram">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                  <a href="#" className="footer-social-icon" aria-label="X">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                </div>
              </div>
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
            <p>Copyright • Confidentialité</p>
          </div>
        </div>
      </footer>
    </>
  );
}
