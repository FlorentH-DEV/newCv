import { useState } from 'react';
import './Header.css';
import imgLogo from '../../image/logo.webp'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container flex-between">
        {/* Logo */}
        <div className="logo-section flex-center">
          <img src={imgLogo} alt="Logo HORTALA" className="logo-image" />
          <span className="logo-text">HORTALA</span>
        </div>

        {/* Navigation Desktop */}
        <nav className="nav-desktop hide-mobile">
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            À Propos
          </button>
          <button className="nav-link" onClick={() => scrollToSection('experience')}>
            Expérience
          </button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>
            Compétences
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            Projets
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <a href="#contact" className="btn btn-secondary hide-mobile">
          Télécharger CV
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle hide-desktop"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile hide-desktop">
          <button className="nav-link-mobile" onClick={() => scrollToSection('about')}>
            À Propos
          </button>
          <button className="nav-link-mobile" onClick={() => scrollToSection('experience')}>
            Expérience
          </button>
          <button className="nav-link-mobile" onClick={() => scrollToSection('skills')}>
            Compétences
          </button>
          <button className="nav-link-mobile" onClick={() => scrollToSection('projects')}>
            Projets
          </button>
          <button className="nav-link-mobile" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
          <a href="#contact" className="btn btn-secondary w-full">
            Télécharger CV
          </a>
        </nav>
      )}
    </header>
  );
}
