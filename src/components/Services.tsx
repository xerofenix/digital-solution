import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Services.css';

export default function Services() {
    const services = [
        {
            id: 'web-dev',
            title: "Website Development",
            description: "We create custom, responsive websites tailored to your business needs. Our development process focuses on performance, security, and user experience to ensure your website not only looks great but also drives conversions and engagement.",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
        },
        {
            id: 'app-dev',
            title: "App Development",
            description: "From concept to launch, we build native and cross-platform mobile applications for iOS and Android. Our apps are designed for optimal performance, intuitive navigation, and seamless integration with your existing systems.",
            image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            id: 'e-com-solution',
            title: "E-Commerce Solutions",
            description: "Transform your online store with our powerful e-commerce solutions. We specialize in platforms like Shopify, WooCommerce, and custom solutions that provide secure payment gateways, inventory management, and exceptional shopping experiences.",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 'seo',
            title: "SEO Optimization",
            description: "Increase your visibility in search engines with our comprehensive SEO strategies. We optimize your website's content, structure, and technical aspects to help you rank higher and attract more organic traffic.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 'digital-ad',
            title: "Digital Advertising",
            description: "Maximize your ROI with targeted digital advertising campaigns. We manage Google Ads, social media ads, and display networks to reach your ideal customers and drive measurable results.",
            image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
        },
        {
            id: 'social-email-market',
            title: "Social Media & Email Marketing",
            description: "Build brand awareness and customer loyalty through strategic social media management and email marketing campaigns. We create content that engages your audience and converts followers into customers.",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            id: 'ui-ux',
            title: "UI/UX Design",
            description: "Create exceptional digital experiences with our user-centered design approach. We craft intuitive interfaces that enhance usability, improve conversion rates, and leave a lasting impression on your customers.",
            image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 'graphic-design',
            title: "Graphic Design",
            description: "Elevate your brand identity with stunning visual designs. From logos and branding materials to marketing collateral, we create visuals that communicate your message effectively and memorably.",
            image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="services-page">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>Comprehensive digital solutions tailored to your business needs</p>
            </div>

            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} id={service.id} className="service-card">
                        <div
                            className="service-image"
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="image-overlay"></div>
                        </div>
                        <div className="service-content">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            {/* <button className="service-button">Learn More</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}