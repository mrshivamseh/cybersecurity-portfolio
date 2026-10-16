
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, ShieldCheck, X } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    

    setMenuOpen(false);

    if (!target) {
      console.error(`Navigation target not found: ${targetId}`);
      return;
    }

    window.history.replaceState(null, '', href);

    setTimeout(() => {
    target.scrollIntoView({
    behavior: 'auto',
    block: 'start',
  });
}, 300);
  };

  return (
    <motion.header
      className="site-header"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
    >
      <nav className="navbar container" aria-label="Main navigation">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="navbar-brand-icon">
            <ShieldCheck size={22} />
          </span>
          <span>
            {portfolio.name.toLowerCase()}
            <span className="navbar-brand-dot">.</span>
          </span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="navbar-cta" href="#contact">
          Let's connect <ArrowUpRight size={16} />
        </a>

        <button
          className="navbar-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) =>
                  handleMobileNavigation(event, link.href)
                }
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;

