import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            At Xerow Digital ("we", "us", or "our"), we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website <a href="https://xerowdigital.com">xerowdigital.com</a>.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email, phone number when you contact us</li>
            {/* <li><strong>Usage Data:</strong> Pages visited, time spent, referring website</li>
            <li><strong>Cookies:</strong> To enhance your browsing experience</li>
            <li><strong>Analytics Data:</strong> Google Analytics to understand user behavior</li> */}
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul>
            <li>Providing and maintaining our services</li>
            <li>Improving user experience</li>
            <li>Communicating with you about services</li>
            {/* <li>Analyzing website usage patterns</li> */}
            <li>Preventing fraudulent activities</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul>
            <li>Service providers (hosting, analytics)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners (only with your consent)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Your Data Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data we hold</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data: We will not retain any of your data after deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies to:
          </p>
          <ul>
            <li>Remember user preferences</li>
            <li>Analyze site traffic</li>
            <li>Improve website functionality</li>
          </ul>
          <p>
            You can disable cookies in your browser settings, but some features may not work properly.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Data Security</h2>
          <p>
            We implement security measures including:
          </p>
          <ul>
            <li>SSL/TLS encryption</li>
            <li>Regular security audits</li>
            <li>Limited access to personal data</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of changes by posting
            the new policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at:
          </p>
          <address>
            Email: <a href="mailto:privacy@xerowdigital.com">privacy@xerowdigital.com</a><br />
            Phone: +1 (234) 567-8900<br />
            Address: 123 Digital Lane, Tech City, TX 75001
          </address>
        </section>
      </div>
    </div>
  );
}