'use client';

import Image from "next/image";

export default function PhotothequeSection() {
  return (
    <section className="phototheque-section fr-mt-6w">
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <div className="phototheque-image-placeholder">
            {/* Placeholder for image - can be replaced with actual image later */}
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <div className="phototheque-content">
            <h2 className="phototheque-title">Photothèque</h2>
            <p className="phototheque-description">
              Les images des actions du ministère enregistrées.
            </p>
            <div className="phototheque-footer">
              <a href="#" className="phototheque-link">
                VOIR PLUS/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

