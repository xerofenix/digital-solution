// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Xerow Digital
        </a>

        {isMobile && (
          <button 
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
          </button>
        )}

        <ul className={`navbar-menu ${isOpen ? 'active' : ''} ${!isMobile ? 'desktop' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link" onClick={() => setIsOpen(false)}>Services</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}