// src/components/Footer.tsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="/services/website-development">Website Development</a></li>
              <li><a href="/services/app-development">App Development</a></li>
              <li><a href="/services/seo">SEO Optimization</a></li>
              <li><a href="/services/social-media">Social Media Marketing</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="/pp">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/cookie-policy">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="footer-contact">
              <p>Email: info@xerowdigital.com</p>
              <p>Phone: +1 (234) 567-8900</p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><span>📘</span></a>
                <a href="#" aria-label="Twitter"><span>🐦</span></a>
                <a href="#" aria-label="LinkedIn"><span>🔗</span></a>
                <a href="#" aria-label="Instagram"><span>📸</span></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Xerow Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}