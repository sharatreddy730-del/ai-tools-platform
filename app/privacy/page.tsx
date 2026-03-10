import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Tools Platform',
  description: 'Privacy Policy for AI Tools Platform',
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', minHeight: '60vh' }}>
      <h1 className="gradient-text" style={{ fontSize: '36px', marginBottom: '24px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last Updated: March 10, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>1. Introduction</h2>
          <p>Welcome to our website. Your privacy is important to us. This Privacy Policy explains how we handle information when you use our web application.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>2. Information We Collect</h2>
          <p>Our web application does not require user registration and we do not intentionally collect personal information from users.</p>
          <p>However, some limited technical information may be automatically collected by our hosting provider or third-party services, such as:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '8px' }}>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Basic usage data</li>
          </ul>
          <p style={{ marginTop: '8px' }}>This information is used only for maintaining and improving the service.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>3. Use of Third-Party Services</h2>
          <p>Our website may use third-party services such as:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '8px' }}>
            <li>hosting providers</li>
            <li>analytics tools</li>
            <li>content delivery networks (CDNs)</li>
          </ul>
          <p style={{ marginTop: '8px' }}>These services may collect limited technical information according to their own privacy policies.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>4. Cookies</h2>
          <p>Our website may use minimal cookies or similar technologies for basic functionality or analytics. We do not use cookies to track personal identity.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>5. Data Storage</h2>
          <p>We do not create user accounts and we do not store personal user data in our systems.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>6. External Links</h2>
          <p>Our application provides links to third-party AI tools. We are not responsible for the privacy practices or content of those external websites.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>7. Children&apos;s Privacy</h2>
          <p>Our service is not specifically directed to children under the age of 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>9. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p style={{ fontWeight: '500', marginTop: '8px' }}>sharat@medaisystem.com</p>
        </section>
      </div>
    </div>
  );
}
