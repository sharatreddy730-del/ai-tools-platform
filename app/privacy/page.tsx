import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — HubToolsAI',
  description: 'Privacy Policy for HubToolsAI (HubToolsAI). Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="section" style={{ maxWidth: 850, margin: "0 auto", paddingTop: 80, paddingBottom: 80 }}>
        <div className="editorial-content">
          <span className="badge">🔒 Legal</span>
          
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: -1.5, marginBottom: 16, color: "var(--text-primary)" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: 40, fontStyle: "italic" }}>
            Last Updated: April 12, 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to HubToolsAI (the &quot;AI Tools Platform&quot;). We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy outlines the types of information we may collect from you or that you may provide when you visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            When you visit HubToolsAI, access our free SEO tools, or interact with links to our SaaS products, we may collect certain information automatically. This includes your IP address, browser type, operating system, and general aggregated usage data.
          </p>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our platform and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services seamlessly.
          </p>

          <h2>4. Analytics Usage</h2>
          <p>
            We utilize analytics tools to help us understand how visitors engage with our platform, allowing us to improve user experience and deliver more relevant content. The analytics data collected is aggregated and anonymized, helping us determine popular pages, navigation paths, and platform performance without identifying individual users.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            Our platform relies on a carefully selected group of third-party service providers to function efficiently and securely. These underlying services might collect, store, or process your data in accordance with their respective privacy policies:
          </p>
          <ul>
            <li><strong>Vercel Analytics:</strong> Used to monitor our platform&apos;s performance, speed, and real-time site metrics.</li>
            <li><strong>Supabase:</strong> Our backend and database provider used to securely store platform data and manage potential authentication pipelines.</li>
            <li><strong>OpenAI:</strong> Used to power and generate dynamic AI tool content and results. Any text or queries submitted to our generative tools may be processed by OpenAI APIs.</li>
            <li><strong>Google AdSense:</strong> Used to serve relevant advertisements. Google AdSense uses cookies and tracking mechanisms to serve ads based on your prior visits to our website or other websites on the Internet.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            The security of your data is important to us. We strive to use commercially acceptable means to protect your information, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
          </p>

          <h2>7. User Rights (GDPR & CCPA)</h2>
          <p>
            If you are a resident of the European Union or California, you have certain rights regarding your personal data:
          </p>
          <ul>
            <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You can request that we correct inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure:</strong> You can request deletion of your personal data (subject to legal obligations).</li>
            <li><strong>Right to Restrict Processing:</strong> You can request that we limit how we use your data.</li>
            <li><strong>Right to Data Portability:</strong> You can request your data in a portable, machine-readable format.</li>
            <li><strong>Right to Object:</strong> You can object to personalized advertising and promotional communications.</li>
            <li><strong>Right to Opt-Out of Personalization:</strong> You can disable interest-based advertising through the cookie consent banner or your browser settings.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us with specific details of your request.
          </p>

          <h2>8. Do Not Track (DNT)</h2>
          <p>
            Some browsers include a "Do Not Track" (DNT) feature. Our site currently does not respond to DNT signals, but we respect user preferences set through our cookie consent banner. If you have DNT enabled in your browser, you can still manage your preferences via our cookie banner.
          </p>

          <h2>9. Google AdSense Cookie Usage</h2>
          <p>
            Google AdSense serves ads tailored to your interests based on cookies and tracking technologies. When you visit our site:
          </p>
          <ul>
            <li>Google plants cookies on your browser to recognize you and collect information about your interests.</li>
            <li>This data may be shared with Google and its partners for ad serving and market research.</li>
            <li>You can view and manage your Google ad preferences at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">www.google.com/settings/ads</a>.</li>
            <li>You can also opt out of personalized advertising through <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
          </ul>
          <p>
            We encourage you to review <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">"How Google uses data when you use our partners' sites or apps"</a> for full details.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, our data practices, or to exercise your rights under GDPR or CCPA, please contact us at:
          </p>
          <blockquote>
            <strong>Email:</strong> <a href="mailto:admin@hubtoolsai.com">admin@hubtoolsai.com</a><br />
            <strong>Response Time:</strong> We aim to respond to all inquiries within 30 days.
          </blockquote>

        </div>
      </div>
    </main>
  );
}
