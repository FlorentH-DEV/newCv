import './ProjectsSection.css';
import imgSystRobotiserAutonome from '../../image/image_systeme_robotiser_autonome.png'
import imgSuspervisionMultiSystem from '../../image/image_supervision_multi_systèmes.png'
import imgErpMetier from '../../image/erpMetier.png'

const projects = [
  {
    id: 1,
    title: 'Systèmes Robotisés Autonomes',
    description: 'Conception et développement complets d\'une infrastructure matérielle et logicielle pour robots de paillage et d\'alimentation autonomes.',
    technologies: ['Siemens', 'Python', 'Embedded C', 'IoT'],
    highlights: [
      'Architecture flux de données',
      'Intégration composants matériels',
      'Développement logiciel embarqué',
    ],
    image: imgSystRobotiserAutonome,
  },
  {
    id: 2,
    title: 'Supervision Multi-Systèmes',
    description: 'Application de supervision centralisée pour la coordination de plusieurs robots avec prévention des collisions et gestion des priorités.',
    technologies: ['ReactJS', 'NestJS', 'Real-time Data', 'WebSockets'],
    highlights: [
      'Interface de supervision temps réel',
      'Gestion des priorités',
      'Prévention des collisions',
    ],
    image: imgSuspervisionMultiSystem,
  },
  {
    id: 3,
    title: 'ERP Métier Personnalisé',
    description: 'Conception et développement d\'un système ERP complet pour la gestion des stocks, commandes et suivi opérationnel.',
    technologies: ['JavaScript', 'Flask', 'PostgreSQL', 'REST API'],
    highlights: [
      'Gestion des stocks',
      'Alertes automatiques',
      'Suivi d\'affaires',
    ],
    image: imgErpMetier,
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header flex-col">
          <h2>Projets Clés</h2>
          <p className="section-subtitle">
            Sélection de projets R&D majeurs démontrant expertise technique et capacité d'innovation
          </p>
        </div>

        <div className="projects-grid flex-wrap">
          {projects.map((project, idx) => (
            <div key={project.id} className="project-card card" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Project Image */}
              <div className="project-image flex-center">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Project Content */}
              <div className="project-content flex-col">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-tech flex-wrap">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="project-highlights flex-col">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="highlight-item flex-row">
                      <span className="highlight-check">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="btn btn-secondary w-full">
                  En Savoir Plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
