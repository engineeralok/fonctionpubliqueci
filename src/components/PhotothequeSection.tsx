'use client';

import Image from "next/image";

export default function PhotothequeSection() {
  return (
    <section className="phototheque-section fr-mt-6w">
      <div className="fr-grid-row fr-grid-row--gutters phototheque-container">
        <div className="fr-col-12 phototheque-image-col">
          <div className="phototheque-image-placeholder">
            <Image
              src="/images/photo.jpeg"
              alt="Les images des actions du ministère enregistrées"
              width={1200}
              height={750}
              className="phototheque-image"
            />
          </div>
        </div>
        <div className="fr-col-12 phototheque-content-col">
          <div className="phototheque-content">
            <h2 className="phototheque-title">
              <span className="underline">Photothèque</span>
            </h2>
            <p className="phototheque-description">
              Les images des actions du ministère enregistrées.
            </p>
            <div className="phototheque-footer">
              <a href="#" className="phototheque-cta">
                VOIR PLUS/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

