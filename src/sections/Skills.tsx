
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Globe,
  Network,
  ShieldCheck,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Skills.css';

const categoryIcons: Record<string, LucideIcon> = {
  Security: ShieldCheck,
  Systems: Terminal,
  Programming: Code2,
  Infrastructure: Network,
  Tools: Wrench,
  Web: Globe,
};

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">MY TECH STACK</span>

          <h2 className="section-title">
            Skills & <span className="gradient-text">technologies.</span>
          </h2>

          <p className="section-description">
            The technologies and concepts I'm exploring as I build my
            technical foundation.
          </p>
        </motion.div>

        <div className="skills-grid">
          {portfolio.skills.map((skill, index) => {
            const Icon = categoryIcons[skill.category] ?? Cpu;

            return (
              <motion.article
                className="skill-card card"
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.08,
                }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="skill-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <span className="skill-category">{skill.category}</span>

                <h3>{skill.name}</h3>

                <p>{skill.description}</p>

                <div className="skill-card-line">
                  <span />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="skills-note">
          <span className="skills-note-icon">
            <Terminal size={18} />
          </span>

          <p>
            <strong>Always learning.</strong> This toolkit grows as I
            practice, build projects, and explore new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
