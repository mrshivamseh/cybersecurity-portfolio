
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Certificates.css';

function Certificates() {
  return (
    <section className="section certificates-section" id="certificates">
      <div className="container">
        <motion.div
          className="certificates-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">LEARNING & ACHIEVEMENTS</span>

          <h2 className="section-title">
            Certificates & <span className="gradient-text">credentials.</span>
          </h2>

          <p className="section-description">
            Professional learning, achievements, and cybersecurity
            credentials from my technical journey.
          </p>
        </motion.div>

        <div className="certificates-list">
          {portfolio.certificates.map((certificate, index) => (
            <motion.article
              className="certificate-card card"
              key={`${certificate.title}-${certificate.issuer}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="certificate-emblem">
                <div className="certificate-emblem-inner">
                  <Award size={31} strokeWidth={1.5} />
                </div>

                <span className="certificate-emblem-check">
                  <BadgeCheck size={18} />
                </span>
              </div>

              <div className="certificate-info">
                <span className="certificate-label">
                  <ShieldCheck size={13} />
                  CERTIFICATE
                </span>

                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  Issued by <strong>{certificate.issuer}</strong>
                </p>

                <div className="certificate-meta">
                  <span>
                    <CalendarDays size={14} />
                    {certificate.year}
                  </span>
                </div>
              </div>

              <div className="certificate-action">
                <span className="certificate-record-label">
                  CERTIFICATE RECORD
                </span>

                {certificate.file ? (
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certificate.title} certificate PDF`}
                  >
                    <FileText size={16} />
                    View Certificate
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <a href="#contact">
                    Details <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="certificates-note">
          <ExternalLink size={17} />
          <p>
            Explore my learning achievements. Each available certificate
            opens its original document in a new tab.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;

