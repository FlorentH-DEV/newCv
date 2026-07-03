import './ContactSection.css';

export default function ContactSection() {
  const handleDownloadCV = () => {
    // Placeholder for CV download
    alert('Téléchargement du CV en préparation');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper flex-col">
          {/* Header */}
          <div className="contact-header flex-col">
            <h2>Entrer en Contact</h2>
            <p className="contact-subtitle">
              Intéressé par une collaboration ou une discussion sur vos projets R&D ?
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="contact-info-grid flex-wrap">
            {/* Email */}
            <div className="contact-info-card flex-col">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:hortala.florent@hotmail.fr" className="contact-link">
                hortala.florent@hotmail.fr
              </a>
            </div>

            {/* Phone */}
            <div className="contact-info-card flex-col">
              <div className="contact-icon">📱</div>
              <h3>Téléphone</h3>
              <a href="tel:+33603002558" className="contact-link">
                +33 6 03 00 25 58
              </a>
            </div>

            {/* Location */}
            <div className="contact-info-card flex-col">
              <div className="contact-icon">📍</div>
              <h3>Localisation</h3>
              <p className="contact-text">Laissac, 12310 - France</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="contact-ctas flex-row">
            <button className="btn btn-primary" onClick={handleDownloadCV}>
              Télécharger CV Complet
            </button>
            <a href="mailto:hortala.florent@hotmail.fr" className="btn btn-secondary">
              M'Envoyer un Email
            </a>
          </div>

          {/* Interests */}
          <div className="interests-section flex-col">
            <h3>Centres d'Intérêt</h3>
            <div className="interests-list flex-wrap">
              <span className="interest-tag">Pêche</span>
              <span className="interest-tag">Domotique</span>
              <span className="interest-tag">Conception 3D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container flex-between">
          <p className="footer-text">© 2024 Florent HORTALA. Tous droits réservés.</p>
          <p className="footer-text">Responsable R&D en Informatique Industrielle</p>
        </div>
      </footer>
    </section>
  );
}
