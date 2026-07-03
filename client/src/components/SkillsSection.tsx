import './SkillsSection.css';

const skillCategories = [
  {
    category: 'Langages de Programmation',
    skills: ['JavaScript', 'ReactJS', 'NestJS', 'Python', 'Flask', 'C++'],
  },
  {
    category: 'Automatisme Industriel',
    skills: ['Siemens', 'Kunbus', 'FANUC', 'Programmation Robots'],
  },
  {
    category: 'Conception & Ingénierie',
    skills: ['Architecture Matérielle', 'Étude Électrique', 'Conception 3D', 'Systèmes Embarqués'],
  },
  {
    category: 'Domaines d\'Expertise',
    skills: ['Robotique Autonome', 'Automatisation', 'Systèmes Temps Réel', 'IoT', 'ERP'],
  },
];

const languages = [
  { name: 'Français', level: 'Natif' },
  { name: 'Anglais', level: 'B2' },
];

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header flex-col">
          <h2>Compétences Techniques</h2>
          <p className="section-subtitle">
            Expertise multidisciplinaire en ingénierie R&D, robotique et développement logiciel
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid flex-wrap">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category card">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags flex-wrap">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="languages-section flex-col">
          <h3>Langues</h3>
          <div className="languages-grid flex-row">
            {languages.map((lang, idx) => (
              <div key={idx} className="language-item flex-col">
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Diplômes */}
        <div className="certifications-section flex-col">
          <h3>Diplômes</h3>
          <div className="certifications-list flex-col">
            <div className="certification-item flex-row">
              <span className="cert-icon">🎓</span>
              <div className="cert-content flex-col">
                <span className="cert-title">(BAC + 5) Manager de Systèmes Informatique et Robotique</span>
                <span className="cert-detail">École IMERIR, Perpignan | 2017 - 2020</span>
              </div>
            </div>
            <div className="certification-item flex-row">
              <span className="cert-icon">🎓</span>
              <div className="cert-content flex-col">
                <span className="cert-title">(BAC + 2) BTS CRSA (Conception et Réalisation de Systèmes Automatiques)</span>
                <span className="cert-detail">École Louis Rascol, Albi | 2016</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
