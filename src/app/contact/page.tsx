import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Écrire au Ministre | Ministère de la Fonction publique",
  description: "Contactez le Ministère de la Fonction publique et de la Modernisation de l’Administration.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow text-white/70">Entrer en Contact</p>
          <h1 className="contact-hero__title text-white">Écrire au Président</h1>
          <p className="contact-hero__subtitle text-white/90">
            Rentrez en contact avec le cabinet du Président
          </p>
        </div>
      </section>

      <section className="fr-container contact-section">
        <div className="contact-card">
          <h2 className="contact-card__title">Écrire au Ministre</h2>
          <p className="contact-card__intro">Remplissez le formulaire ci-dessous pour adresser votre message à nos équipes.</p>

          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                Nom complet
              </label>
              <input id="name" name="name" type="text" className="form-input" />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Adresse e-mail
              </label>
              <input id="email" name="email" type="email" className="form-input" />
            </div>

            <div className="form-field">
              <label htmlFor="subject" className="form-label">
                Objet du message
              </label>
              <input id="subject" name="subject" type="text" className="form-input" />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" name="message" rows={6} className="form-textarea"></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
