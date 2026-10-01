import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Code2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div className="logo-badge" style={{ width: '28px', height: '28px', fontSize: '13px' }}>
                HK
              </div>
              <h2 className="footer-logo-title">Harsh Kumar</h2>
            </div>
            <p className="footer-logo-sub">Full Stack Developer • Noida, Uttar Pradesh, India</p>
          </div>

          {/* Quick Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile (Editable placeholder)"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile (Editable placeholder)"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="mailto:harshsingh7543810314@gmail.com"
              className="social-icon-btn"
              title="Email Harsh Kumar"
              aria-label="Email Harsh Kumar"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Harsh Kumar. All Rights Reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              Built with React.js & Vanilla CSS
            </span>
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
