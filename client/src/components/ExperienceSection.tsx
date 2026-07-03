import './ExperienceSection.css';

const experiences = [
  {
    id: 1,
    title: 'Responsable R&D En Informatique Industrielle',
    company: 'EHB',
    location: 'Laissac, 12310',
    period: 'Novembre 2022 - Aujourd\'hui',
    highlights: [
      'Maintenance et amélioration des programmes Siemens',
      'Conception et développement de systèmes robotisés autonomes',
      'Définition de l\'architecture des flux de données',
      'Supervision multi-systèmes robotisés',
      'Développement d\'un ERP sur mesure',
    ],
  },
  {
    id: 2,
    title: 'Ingénieur Informatique',
    company: 'INFORSUD TECHNOLOGIES',
    location: 'Bozouls, 12340',
    period: 'Octobre 2021 - Novembre 2022',
    highlights: [
      'Conception d\'applicatifs pour le secteur bancaire et assurance',
      'Développement d\'application de gestion de stock pour l\'alimentaire',
    ],
  },
  {
    id: 3,
    title: 'Formation Ingénieur Roboticien en Alternance',
    company: 'SPIE',
    location: 'Bavilliers, 90800',
    period: 'Septembre 2017 - Septembre 2020',
    highlights: [
      'Gestion de projet informatique et programmation C++',
      'Automatisation de 4 presses d\'emboutissage',
      'Programmation de robot industriel FANUC',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header flex-col">
          <h2>Expérience Professionnelle</h2>
          <p className="section-subtitle">
            Parcours d'ingénieur R&D avec expertise en robotique, automatisation et systèmes embarqués
          </p>
        </div>

        <div className="experience-timeline flex-col">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-card card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="experience-header flex-between">
                <div className="experience-title-group flex-col">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-period">
                  <span className="period-badge">{exp.period}</span>
                </div>
              </div>

              <p className="experience-location">📍 {exp.location}</p>

              <div className="experience-highlights flex-col">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item flex-row">
                    <span className="highlight-dot"></span>
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
