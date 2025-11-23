"use client";

import { useState } from "react";

const shareLinks = [
  {
    label: "Partager sur Facebook - nouvelle fenêtre",
    className: "fr-btn fr-btn--facebook",
    href: "https://www.facebook.com/sharer.php?u=www.transformation.gouv.fr%2F",
  },
  {
    label: "Partager sur X - nouvelle fenêtre",
    className: "fr-btn fr-btn--twitter-x",
    href: "https://twitter.com/intent/tweet?url=www.transformation.gouv.fr%2F&text=Accueil%20%7C%20transformation.gouv.fr",
  },
  {
    label: "Partager sur Linked In - nouvelle fenêtre",
    className: "fr-btn fr-btn--linkedin",
    href: "https://www.linkedin.com/shareArticle?url=www.transformation.gouv.fr%2F&title=Accueil%20%7C%20transformation.gouv.fr",
  },
  {
    label: "Partager par email - nouvelle fenêtre",
    className: "fr-btn fr-btn--mail",
    href: "mailto:?subject=Accueil%20%7C%20transformation.gouv.fr&body=Accueil%20%7C%20www.transformation.gouv.fr%2F",
  },
];

export default function ShareButtons() {
  const [copyLabel, setCopyLabel] = useState("Copier le lien dans le presse-papier");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://www.transformation.gouv.fr/");
      setCopyLabel("Lien copié !");
      setTimeout(() => setCopyLabel("Copier le lien dans le presse-papier"), 2000);
    } catch {
      setCopyLabel("Copie indisponible");
    }
  };

  return (
    <div id="block-mtfp-2024-ds-partagerlapage" className="block block-block-content block-block-content2e592cfb-3d87-4c4e-9766-b72438e9eab9 fr-share">
      <ul className="fr-btns-group">
        {shareLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={link.className}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button className="fr-btn fr-btn--copy" type="button" onClick={handleCopy}>
            {copyLabel}
          </button>
        </li>
      </ul>
    </div>
  );
}

