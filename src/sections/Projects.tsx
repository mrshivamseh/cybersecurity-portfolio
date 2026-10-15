
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Projects.css';

const projectIcons = [ShieldCheck, Code2, Terminal];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">WHAT I'M BUILDING</span>

          <h2 className="section-title">
            Featured <span className="gradient-text">projects.</span>
          </h2>

          <p className="section-description">
            Practical work, learning experiments, and projects that
            turn technical concepts into real applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {portfolio.projects.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length];

            return (
              <motion.article
                className="project-card card"
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className={`project-art project-art-${index % 3}`}>
                  <div className="project-art-grid" />

                  <span className="project-art-label">
                    PROJECT / {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="project-art-icon">
                    <Icon size={55} strokeWidth={1.2} />
                  </div>

                  <span className="project-art-orbit" />
                </div>

                <div className="project-card-content">
                  <div className="project-meta">
                    <span className="project-category">
                      <FolderGit2 size={13} />
                      {project.category}
                    </span>

                    <span className="project-status">
                      <span />
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span className="project-footer-label">
                      LEARNING IN PUBLIC
                    </span>

                    <a
                      href="#contact"
                      aria-label={`Ask about ${project.title}`}
                    >
                      Discuss project <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="projects-bottom-note">
          <span className="projects-bottom-icon">
            <ExternalLink size={18} />
          </span>

          <p>
            More projects will be added as they're built and documented.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

