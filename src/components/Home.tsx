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
                        Complete digital solutions from websites to mobile apps
                    </p>
                    <button className="cta-button" onClick={() => window.location.href = 'tel:+1234567890'}>
                        Call Us Now
                    </button>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Enhanced Services Section */}
            <section className="services">
                <h2>Our Comprehensive Services</h2>
                <div className="service-grid">
                    {/* Development Services */}
                    <div className="service-card">
                        <div className="service-icon">🖥️</div>
                        <h3><a href="/services">Website Development</a></h3>
                        <p>Custom, responsive websites that drive results</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📱</div>
                        <h3><a href="/services">App Development</a></h3>
                        <p>iOS & Android apps that engage users</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🛒</div>
                        <h3><a href="/services">E-commerce Solutions</a></h3>
                        <p>Turn visitors into customers</p>
                    </div>

                    {/* Marketing Services */}
                    <div className="service-card">
                        <div className="service-icon">🔍</div>
                        <h3><a href="/services#seo">SEO Optimization</a></h3>
                        <p>Dominate search engine rankings</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📢</div>
                        <h3><a href="/services#digital-ad">Digital Advertising</a></h3>
                        <p>Targeted campaigns that convert</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📩</div> {/* Changed icon */}
                        <h3><a href="/services#social-email-market">Social Media & Email Marketing</a></h3>
                        <p>Boost your brand's online presence</p>
                    </div>

                    {/* Design Services */}
                    <div className="service-card">
                        <div className="service-icon">🎨</div>
                        <h3><a href="/services#graphic-design">UI/UX Design</a></h3>
                        <p>Intuitive interfaces that delight users</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">✏️</div>
                        <h3><a href="/services#ui-ux">Graphic Design</a></h3>
                        <p>Stunning visuals for your brand</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial">
                <blockquote>
                    "Xerow Digital built our app and website, resulting in 300% more customer engagement!"
                    <cite>- Satisfied Client</cite>
                </blockquote>
            </section>
        </div>
    );
}