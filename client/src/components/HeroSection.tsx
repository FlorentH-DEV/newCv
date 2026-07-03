import './HeroSection.css';
import imgHero from '../../image/imageHero.webp'

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-content flex-row">
          {/* Left: Text Content */}
          <div className="hero-text flex-col">
            <div className="hero-badge">Responsable R&D</div>
            <h1 className="hero-title">
              Transformer la Complexité Industrielle en Solutions Innovantes
            </h1>
            <p className="hero-subtitle">
              Ingénieur R&D spécialisé en robotique autonome, automatisation industrielle et systèmes embarqués. 
              Conception et développement de solutions technologiques complexes pour l'industrie 4.0.
            </p>
            <div className="hero-ctas flex-row">
              <button className="btn btn-primary">
                Découvrir les Projets
              </button>
              <button className="btn btn-outline">
                Télécharger CV
              </button>
            </div>
            <div className="hero-stats flex-row">
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Ans d'Expérience R&D</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projets Réalisés</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Technologies Maîtrisées</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-image flex-center">
            <img 
              src={imgHero}
              alt="Laboratoire R&D avec robotique industrielle" 
              className="hero-img"
            />
          </div>
        </div>
      </div>

      {/* Decorative Accent Line */}
      <div className="hero-accent"></div>
    </section>
  );
}
