import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const services = [
        'Website Development',
        'App Development',
        'E-Commerce Solutions',
        'SEO Optimization',
        'Digital Advertising',
        'Social Media & Email Marketing',
        'UI/UX Design',
        'Graphic Design',
        'Other'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic will be added later with FastAPI
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                {/* Contact Header */}
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                    <p>Have questions or want to discuss a project? Feel Free to reach out to us!</p>
                </div>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Service Interested In*</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Other Ways to Reach Us</h2>
                    <div className="info-item">
                        <span>📧</span>
                        <p>info@xerowdigital.com</p>
                    </div>
                    <div className="info-item">
                        <span>📞</span>
                        <p>+1 (234) 567-8900</p>
                    </div>
                    <div className="info-item">
                        <span>🏢</span>
                        <p>123 Digital Lane, Tech City, TX 75001</p>
                    </div>
                </div>
            </div>
        </div>
    );
}