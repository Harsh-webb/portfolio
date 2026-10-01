import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy to detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
            <span className="logo-badge">HK</span>
            <span>HARSH KUMAR</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Download Resume & Mobile Toggle */}
          <div className="navbar-actions">
            <button
              onClick={onOpenResume}
              className="btn btn-primary btn-sm"
              title="View and Download Resume"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </button>

            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            <span>{link.name}</span>
            <ChevronRight size={16} />
          </a>
        ))}
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenResume();
          }}
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '12px' }}
        >
          <Download size={16} />
          <span>Download Resume</span>
        </button>
      </div>
    </>
  );
}
