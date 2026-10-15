
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './About.css';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Security First',
    description:
      'Learning defensive security practices and how to protect digital systems.',
  },
  {
    icon: Code2,
    title: 'Building Projects',
    description:
      'Turning concepts into practical projects through coding and experimentation.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Developing my knowledge of cybersecurity, networking, Linux, and programming.',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description:
      'Breaking down technical challenges and working toward practical solutions.',
  },
];

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">GET TO KNOW ME</span>
          <h2 className="section-title">
            About <span className="gradient-text">me.</span>
          </h2>
          <p className="section-description">
            Curious mind. Security-focused thinking. A continuous journey
            of learning and building.
          </p>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-story card"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="about-story-icon">
              <ShieldCheck size={27} />
            </div>

            <span className="about-card-label">MY JOURNEY</span>

            <h3>
              Exploring technology,
              <br />
              one step at a time.
            </h3>

            <p>
              I'm {portfolio.name}, a {portfolio.role.toLowerCase()} based
              in {portfolio.location}. I'm interested in understanding how
              digital systems work and how they can be made more secure.
            </p>

            <p>
              Through hands-on projects and consistent practice, I'm
              developing my skills in security fundamentals, networking,
              Linux, and software development.
            </p>

            <p>
              My goal is to keep learning, build useful tools, and grow
              into a responsible cybersecurity professional.
            </p>

            <a className="about-inline-link" href="#projects">
              Explore my projects <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-highlight card"
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <div className="about-highlight-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span className="about-highlight-number">
                    0{index + 1}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
