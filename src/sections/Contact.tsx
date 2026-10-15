import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
ArrowUpRight,
BriefcaseBusiness,
CheckCircle2,
Code2,
Mail,
MapPin,
Phone,
Send,
ShieldCheck,
} from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Contact.css';

function Contact() {
const [submitted, setSubmitted] = useState(false);

function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

const form = event.currentTarget;
const formData = new FormData(form);

const name = String(formData.get('name') ?? '');
const email = String(formData.get('email') ?? '');
const subject = String(formData.get('subject') ?? '');
const message = String(formData.get('message') ?? '');

const emailSubject = encodeURIComponent(
  subject || `Portfolio enquiry from ${name}`,
);

const emailBody = encodeURIComponent(
  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
);

const mailtoLink =
  `mailto:${portfolio.links.email}` +
  `?subject=${emailSubject}&body=${emailBody}`;

setSubmitted(true);
window.location.href = mailtoLink;

}

return (
<section className="section contact-section" id="contact">
<div className="container">
<motion.div
className="contact-heading"
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6 }}
>
<span className="eyebrow">GET IN TOUCH</span>

      <h2 className="section-title">
        Let's start a{' '}
        <span className="gradient-text">conversation.</span>
      </h2>

      <p className="section-description">
        Have a project idea, a technical question, or an opportunity
        to collaborate? Send me a message.
      </p>
    </motion.div>

    <div className="contact-layout">
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-info-card card">
          <div className="contact-info-icon">
            <Mail size={24} />
          </div>

          <span className="eyebrow">LET'S CONNECT</span>
          <h3>Ready to connect?</h3>

          <p>
            I'm interested in cybersecurity, technology, practical
            projects, and opportunities to learn and collaborate.
          </p>

          <div className="contact-action-links">
            <a
              className="contact-email-link"
              href={`mailto:${portfolio.links.email}`}
            >
              <Mail size={17} />
              Email Me
              <ArrowUpRight size={16} />
            </a>

            <a
              className="contact-email-link call-me-link"
              href="tel:9520416636"
            >
              <Phone size={17} />
              Call Me
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-divider" />

          <div className="contact-detail">
            <MapPin size={17} />
            <span>{portfolio.location}</span>
          </div>

          <div className="contact-detail">
            <ShieldCheck size={17} />
            <span>Cybersecurity &amp; technology</span>
          </div>

          <div className="contact-socials">
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              title="GitHub"
            >
              <Code2 size={19} />
            </a>

            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              title="LinkedIn"
            >
              <BriefcaseBusiness size={19} />
            </a>

            <a
              href={`mailto:${portfolio.links.email}`}
              aria-label="Send email"
              title="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="contact-form-card card"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-form-heading">
          <span className="contact-form-label">
            <Send size={14} />
            SEND A MESSAGE
          </span>

          <h3>Tell me what's on your mind.</h3>
          <p>Fill in the details below to prepare your email.</p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          onChange={() => setSubmitted(false)}
        >
          <div className="contact-form-row">
            <label>
              Your name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                maxLength={100}
                required
              />
            </label>

            <label>
              Your email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>
          </div>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="What would you like to discuss?"
              maxLength={150}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={5}
              maxLength={5000}
              required
            />
          </label>

          <button
            className="button button-primary contact-submit"
            type="submit"
          >
            Prepare email
            <Send size={16} />
          </button>

          {submitted && (
            <p className="contact-form-feedback" role="status">
              <CheckCircle2 size={16} />
              Your email app may open with the message prepared.
              Review it and press Send to deliver it.
            </p>
          )}

          <p className="contact-form-note">
            This form uses your device's email application. It does
            not send or store messages directly on this website.
          </p>
        </form>
      </motion.div>
    </div>
  </div>
</section>

);
}

export default Contact;
