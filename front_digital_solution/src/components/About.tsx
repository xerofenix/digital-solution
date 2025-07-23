import './About.css';
export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="-about-hero-overlay"></div>
                <div className="hero-content">
                    <h1>About Xerow Digital</h1>
                    <p>Driving digital transformation since 2018</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="about-container">
                {/* Our Story */}
                <section className="about-section">
                    <div className="section-content">
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2018, Xerow Digital began as a small team of passionate developers and designers
                            with a vision to help businesses thrive in the digital world. Today, we've grown into a full-service
                            digital agency serving clients across multiple industries.
                        </p>
                        <p>
                            Our journey has been marked by continuous learning, innovation, and an unwavering commitment
                            to delivering exceptional results for our clients. From local startups to international brands,
                            we've had the privilege of working with amazing businesses at every stage of their growth.
                        </p>
                    </div>
                    <div className="section-image">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Our team working together"
                        />
                    </div>
                </section>

                {/* Our Mission */}
                <section className="about-section reverse">
                    <div className="section-content">
                        <h2>Our Mission</h2>
                        <p>
                            At Xerow Digital, we exist to empower businesses through innovative digital solutions.
                            We believe that every company deserves access to cutting-edge technology and strategic
                            digital marketing, regardless of their size or budget.
                        </p>
                        <p>
                            Our mission is to bridge the gap between businesses and their digital potential by
                            providing customized, results-driven solutions that drive growth and create meaningful
                            connections with customers.
                        </p>
                    </div>
                    <div className="section-image">
                        <img
                            src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Mission illustration"
                        />
                    </div>
                </section>
                {/* 
                Our Team
                <section className="team-section">
                    <h2>Meet Our Team</h2>
                    <p className="team-subtitle">
                        A diverse group of passionate professionals dedicated to your success
                    </p>

                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image">
                                <img src={saimImage} alt="Alex Johnson" />
                            </div>
                            <h3>Saim Shakeel</h3>
                            <p className="position">CEO & Founder</p>
                            <p className="bio">
                                10+ years in digital strategy. Passionate about helping businesses scale through technology.
                            </p>
                        </div>

                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Sarah Chen" />
                            </div>
                            <h3>Sarah Chen</h3>
                            <p className="position">Creative Director</p>
                            <p className="bio">
                                UX/UI specialist with a focus on creating intuitive, beautiful digital experiences.
                            </p>
                        </div>

                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Michael Rodriguez" />
                            </div>
                            <h3>Michael Rodriguez</h3>
                            <p className="position">Lead Developer</p>
                            <p className="bio">
                                Full-stack developer with expertise in modern web technologies and frameworks.
                            </p>
                        </div>

                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://imgs.search.brave.com/10cIHZyDpU6B0JdNvnTLCEPYdn30rFVLwijFCSdnn7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzc5LzQ0LzY0/LzM2MF9GXzEyNzk0/NDY0NTdfcVNSdzJP/Ymlka21Mbkp5SE1q/RTZWVmJnMWF0SHBQ/czYuanBn" alt="Michael Rodriguez" />
                            </div>
                            <h3>Michael Rodriguez</h3>
                            <p className="position">Lead Developer</p>
                            <p className="bio">
                                Full-stack developer with expertise in modern web technologies and frameworks.
                            </p>
                        </div>
                    </div>
                </section>
 */}
                {/* Values */}
                <section className="values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>We constantly explore new technologies and approaches to stay ahead of the curve.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Integrity</h3>
                            <p>Honest communication and ethical practices guide every decision we make.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Results</h3>
                            <p>We measure our success by the tangible impact we create for our clients.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Passion</h3>
                            <p>We love what we do, and it shows in the quality of our work.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}