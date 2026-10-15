
import { ArrowUpRight, Code2, BriefcaseBusiness, Mail, ShieldCheck } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a className="footer-brand" href="#home" aria-label="Back to home">
            <span className="footer-brand-icon">
              <ShieldCheck size={23} />
            </span>

            <span>
              <strong>{portfolio.name}</strong>
              <small>CYBERSECURITY PORTFOLIO</small>
            </span>
          </a>

          <p className="footer-message">
            Learning, building, and making the digital world safer.
          </p>

          <div className="footer-socials">
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>

            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>

            <a
              href={`mailto:${portfolio.links.email}`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {portfolio.name}. All rights reserved.</p>

          <a className="footer-back-top" href="#home">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
