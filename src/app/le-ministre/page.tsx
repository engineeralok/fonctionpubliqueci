import Image from "next/image";
import FooterLogo from "@/components/FooterLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anne Désirée Ouloto | fonctionpublique.gouv.ci",
  description: "Découvrez la biographie et les informations sur Anne Désirée Ouloto, Ministre d'État de la Fonction publique et de la Modernisation de l'Administration",
};

interface Minister {
  name: string;
  title: string;
  period: string;
  image: string;
  biography: string[];
}

const minister: Minister = {
  name: "Anne Désirée Ouloto",
  title: "Ministre d'État de la Fonction publique et de la Modernisation de l'Administration",
  period: "En fonction",
  image: "/images/minister.jpeg",
  biography: [
    "Anne Désirée Ouloto, née le 20 avril 1966 à Abidjan, est une personnalité politique majeure de la Côte d'Ivoire et une figure influente du parti au pouvoir, le RHDP. Issue d'une famille disciplinée où son père était officier supérieur de l'armée et sa mère institutrice, elle grandit dans un environnement marqué par le respect, la rigueur et le sens du service public. Elle effectue sa scolarité primaire à l'institution Notre-Dame du Plateau puis poursuit ses études secondaires à Bouaké, où elle obtient un baccalauréat littéraire en 1985. Elle s'inscrit ensuite à la Faculté de droit de l'Université Félix-Houphouët-Boigny, qu'elle quittera en pleine crise universitaire des années 1990, avant de compléter sa formation par des études en management et en gestion.",
    "Avant de s'engager dans la haute administration et la politique, Anne Ouloto commence sa carrière comme enseignante aux « Institutions Notre Dame du Plateau », où elle exerce jusqu'en 1994. Elle rejoint par la suite l'Autorité Nationale de Régulation du Secteur de l'Électricité (ANARE) en 2000, d'abord comme assistante juridique puis comme assistante du conseil d'administration, fonction qu'elle occupe jusqu'en 2005. Son sérieux et ses compétences lui ouvrent les portes du ministère de l'Enseignement supérieur en 2006, où elle devient chargée d'études puis chef de cabinet, notamment sur les questions liées au genre et à la modernisation de l'environnement universitaire.",
    "Militante engagée du Rassemblement des Républicains (RDR), elle se fait connaître sur la scène politique nationale lors de la crise post-électorale de 2010-2011 en tant que porte-parole du candidat Alassane Ouattara. Sa loyauté, sa détermination et son sens de la communication lui valent une reconnaissance nationale. Dès juin 2011, elle est nommée ministre de la Salubrité urbaine, où elle lance plusieurs campagnes d'assainissement et de lutte contre l'insalubrité. En novembre 2012, elle devient ministre de la Solidarité, de la Famille, de la Femme et de l'Enfant, un portefeuille dans lequel elle se distingue par des actions en faveur des populations vulnérables.",
    "Le 6 avril 2021, Anne Désirée Ouloto est nommée ministre de la Fonction publique et de la Modernisation de l'Administration, puis élevée au rang de ministre d'État en octobre 2023 dans le gouvernement de Robert Beugré Mambé. Elle conduit des réformes majeures visant à digitaliser les services administratifs, à renforcer la discipline administrative et à améliorer les conditions de carrière des agents de l'État. Parallèlement à ses responsabilités gouvernementales, elle est présidente du Conseil régional du Cavally, région dont elle est originaire. À ce titre, elle mène plusieurs actions de développement, notamment dans la reconstruction post-crise, les infrastructures locales et la cohésion sociale.",
    "Femme de conviction et catholique engagée, Anne Ouloto demeure proche des communautés religieuses de sa région et attache une grande importance à la famille et à la cohésion sociale. Au fil de sa carrière, elle a reçu de nombreuses distinctions, dont celle de commandeur dans l'Ordre du Mérite de la Fonction Publique, ainsi que plusieurs honneurs traditionnels dans le Cavally. En politique, elle continue de jouer un rôle de premier plan, notamment lors des campagnes électorales où elle défend avec force la vision du président Alassane Ouattara et du RHDP. Sa trajectoire témoigne d'un engagement constant au service de l'État, du développement régional et de la modernisation de l'administration ivoirienne.",
  ],
};

function MinisterCard({ minister }: { minister: Minister }) {
  return (
    <div className="max-w-4xl mx-auto mb-16 last:mb-0">
      {/* Rectangle Frame - No top border */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-[400px] aspect-[3/4]">
          <div className="absolute inset-0 border-l-4 border-r-4 border-b-4 border-charcoal/20"></div>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={minister.image}
              alt={minister.name}
              fill
              className="object-cover transition-opacity duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Information in the middle after the frame */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-albertus-bold text-charcoal mb-4">
          {minister.name}
        </h2>
        <p className="text-xl text-charcoal mb-2">
          {minister.title}
        </p>
        <p className="text-lg text-slate-600">
          <span className="font-bold">{minister.period}</span>
        </p>
      </div>

      {/* Biography in the middle */}
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h2 className="text-2xl md:text-3xl font-albertus-bold text-charcoal mb-6 text-center">
          Biographie
        </h2>
        <div className="text-charcoal text-base leading-relaxed space-y-4">
          {minister.biography.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LeMinistrePage() {
  return (
    <div className="min-h-screen bg-white" id="top">
      <main className="py-16 px-4">
        {/* Custom Hero Section with Orange Background - Smaller size */}
        <section className="relative overflow-hidden rounded-3xl bg-[#FFA500] max-w-5xl mx-auto mb-12">
            <div className="relative z-10 px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
              {/* Title on the left */}
              <div className="mb-8">
                <h1 className="text-3xl font-albertus-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Le Ministre
                </h1>
              </div>

              {/* White line design near the end - doesn't reach borders */}
              <div className="mb-8 flex items-center justify-start">
                <div className="h-[1px] w-[85%] bg-white/40"></div>
              </div>

              <p className="text-lg text-white/90">
                DE LA FONCTION PUBLIQUE ET DE LA MODERNISATION DE L&apos;ADMINISTRATION
              </p>
            </div>
          </section>

        {/* Minister Content - White background */}
        <div className="max-w-5xl mx-auto">
          <MinisterCard minister={minister} />
        </div>
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
              <li>
                <a href="https://presidence.gouv.ci" target="_blank" rel="noopener noreferrer">
                  presidence.gouv.ci
                </a>
              </li>
              <li>
                <a href="https://tresor.gouv.ci" target="_blank" rel="noopener noreferrer">
                  tresor.gouv.ci
                </a>
              </li>
              <li>
                <a href="https://impots.gouv.ci" target="_blank" rel="noopener noreferrer">
                  impots.gouv.ci
                </a>
              </li>
            </ul>
            </div>
          <div className="footer-copyright">
            <p>Copyright • Confidentialité</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

