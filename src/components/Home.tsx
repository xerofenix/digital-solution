// src/components/Home.tsx
import './Home.css';

export default function Home() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Digital Presence</h1>
          <p className="subtitle">
            Expert website development and digital marketing solutions tailored to your business
          </p>
          <button className="cta-button" onClick={() => window.location.href = 'tel:+1234567890'}>
            Call Us Now
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">🖥️</div>
            <h3>Website Development</h3>
            <p>Custom, responsive websites that drive results</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Social Media Marketing</h3>
            <p>Boost your brand's online presence</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>E-commerce Solutions</h3>
            <p>Turn visitors into customers</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <blockquote>
          "Xerow Digital transformed our online presence. Our website traffic increased by 300% in just 3 months!"
          <cite>- Satisfied Client</cite>
        </blockquote>
      </section>
    </div>
  );
}