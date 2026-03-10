import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - AI Tools Platform',
  description: 'Terms of Service for AI Tools Platform',
};

export default function TermsOfService() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', minHeight: '60vh' }}>
      <h1 className="gradient-text" style={{ fontSize: '36px', marginBottom: '24px' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last Updated: March 10, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.6' }}>
        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
          <p>By accessing or using this website, you agree to be bound by these Terms of Service.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>2. Description of Service</h2>
          <p>This website provides a curated list of artificial intelligence tools and related information. The service is provided for informational purposes only.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>3. No Account Requirement</h2>
          <p>Users are not required to register or create an account to use this website.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>4. Third-Party Services</h2>
          <p>Our website links to external AI tools and websites. We do not own or control those services and are not responsible for their content, policies, or practices.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>5. Disclaimer</h2>
          <p>The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '8px' }}>
            <li>accuracy of information</li>
            <li>availability of listed tools</li>
            <li>performance of third-party services</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>6. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, we shall not be liable for any damages arising from the use of this website or reliance on any information provided.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>7. Acceptable Use</h2>
          <p>Users agree not to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '8px' }}>
            <li>misuse the website</li>
            <li>attempt to disrupt or damage the service</li>
            <li>use the site for unlawful purposes</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>8. Changes to the Service</h2>
          <p>We reserve the right to modify or discontinue any part of the service at any time without notice.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>9. Changes to Terms</h2>
          <p>We may update these Terms of Service at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>10. Contact</h2>
          <p>For questions regarding these Terms, contact:</p>
          <p style={{ fontWeight: '500', marginTop: '8px' }}>sharat@medaisystem.com</p>
        </section>
      </div>
    </div>
  );
}
