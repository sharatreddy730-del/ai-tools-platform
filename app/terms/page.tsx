import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - HubToolsAI',
  description: 'Terms of Service for HubToolsAI',
};

export default function TermsOfService() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 20px', minHeight: '60vh', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Last Updated: September 2, 2025 — HubToolsAI.com</p>
      <p style={{ marginBottom: '24px' }}>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of HubToolsAI (&quot;Service&quot;). By using the Service, you agree to these Terms.
      </p>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>1. Acceptance of Terms</h2>
        <p>If you do not agree to these Terms, do not use the Service. We may modify these Terms at any time; continued use constitutes acceptance.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>2. Description of Service</h2>
        <p>We provide a curated directory and information about AI tools, including rankings, comparisons, and editorial content.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>3. No Account Requirement</h2>
        <p>You may use most of the Service without creating an account. If you submit a form (e.g., for demos/featured listings), we will process that information per our Privacy Policy.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>4. User-Generated Content (If Applicable)</h2>
        <p>If we enable user submissions (reviews, comments, etc.), you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display that content. You must have the rights to submit it and must not violate laws or third-party rights.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>5. Intellectual Property</h2>
        <p>Except for third-party materials (e.g., logos/trademarks of listed tools used for identification), the Service content is owned by us or our licensors. You may not copy, scrape, or re-use content without permission, except as permitted by law.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>6. Third-Party Resources</h2>
        <p>We link to third-party AI tools and resources. We do not own or control them. Review their terms and privacy policies before use.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>7. Disclaimers</h2>
        <p>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee the accuracy, completeness, or availability of information or tools. Any rankings, ratings, or comparisons reflect our editorial judgment and may be influenced by compensation from partners.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>9. Indemnification</h2>
        <p>You agree to defend, indemnify, and hold us harmless from any claims, liabilities, damages, losses, and expenses arising from your use of the Service or violation of these Terms.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>10. Acceptable Use</h2>
        <p>Do not misuse the Service, including but not limited to:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Automated scraping or bulk downloading without permission.</li>
          <li>Interfering with the proper working of the site (e.g., bots, spammy submissions).</li>
          <li>Reverse engineering, circumventing security, or probing vulnerabilities.</li>
          <li>Illegal activities or infringement of third-party rights.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>11. Sponsored Listings and Affiliate Links</h2>
        <p>
          We may display sponsored placements and use affiliate links. When you click these links or ads and make a purchase or complete a lead form,
          we may receive compensation. This does not influence our rankings except where clearly labeled as &quot;Sponsored&quot; or &quot;Featured&quot;.
          See our Privacy Policy for details on ad/affiliate tracking.
        </p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>12. Termination</h2>
        <p>We may suspend or terminate your access to the Service at any time, with or without notice, for any reason, including violation of these Terms.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>13. Governing Law; Dispute Resolution</h2>
        <p>
          Governing Law: The laws of [Your Jurisdiction, e.g., India/USA/UK] without regard to conflict of law principles.
          Venue: Exclusive jurisdiction and venue for any dispute shall be the courts located in [City, State/Country].
          Alternatively, you may agree to binding arbitration administered by [Arbitration Provider, e.g., JAMS/AAA] under its rules.
          Class-Action Waiver: You agree to resolve disputes individually and waive participation in class, collective, or representative actions, to the extent permitted by law.
        </p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>14. Severability</h2>
        <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>15. Changes to the Service and Terms</h2>
        <p>We may modify or discontinue any part of the Service or these Terms at any time without notice. Continued use means you accept the updated Terms.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>16. Contact</h2>
        <p>Questions about these Terms: legal@hubtoolsai.com</p>
      </section>
    </div>
  );
}
