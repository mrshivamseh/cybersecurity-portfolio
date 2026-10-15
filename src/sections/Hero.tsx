
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ShieldCheck,
  Terminal,
  FileText,
  Download,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-status">
            <span className="hero-status-dot" />
            Open to learning and collaboration
          </div>

          <p className="hero-greeting">HELLO, WORLD. I'M</p>

          <h1 className="hero-title">
            {portfolio.name}
            <br />
            <span className="gradient-text">Cyber Guardian.</span>
          </h1>

          <p className="hero-role">{portfolio.role}</p>

          <p className="hero-description">{portfolio.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore projects <ArrowRight size={17} />
            </a>

            <a className="button button-secondary" href="#contact">
              Contact me <ArrowUpRight size={17} />
            </a>

            <a
              className="button button-secondary"
              href={portfolio.resume.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={17} />
              View Resume
            </a>

            <a
              className="button button-primary"
              href={portfolio.resume.file}
              download={portfolio.resume.fileName}
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          <div className="hero-social-row">
            <span className="hero-social-label">FIND ME ON</span>

            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Code2 size={19} />
            </a>

            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <BriefcaseBusiness size={19} />
            </a>

            <a
              href={`mailto:${portfolio.links.email}`}
              aria-label="Send email"
            >
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <motion.div
            className="hero-shield"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="hero-shield-inner">
              <ShieldCheck size={100} strokeWidth={1.1} />
            </div>
          </motion.div>

          <div className="hero-float-card hero-card-top">
            <span className="hero-mini-icon">
              <Terminal size={17} />
            </span>
            <div>
              <strong>Security mindset</strong>
              <span>Learn · Build · Protect</span>
            </div>
          </div>

          <div className="hero-float-card hero-card-bottom">
            <span className="hero-live-dot" />
            <div>
              <strong>Always learning</strong>
              <span>Growing every day</span>
            </div>
          </div>

          <div className="hero-visual-caption">
            <span>01 /</span> CYBER GUARDIAN
          </div>
        </motion.div>
      </div>

      <a className="hero-scroll" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

export default Hero;
