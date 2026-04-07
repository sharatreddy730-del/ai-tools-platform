import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us — HubToolsAI",
  description:
    "Get in touch with the HubToolsAI team. We're here to help with product questions, support, partnerships, and feedback.",
}

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple animate-float" style={{ width: 400, height: 400, top: -150, right: -100 }} />
        <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -100, left: -50 }} />

        <div
          className="section"
          style={{ textAlign: "center", paddingTop: 60, paddingBottom: 60 }}
        >
          <span className="badge">💬 Get in Touch</span>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1.1,
              marginTop: 16,
              marginBottom: 20,
            }}
          >
            We&apos;d Love to <span className="gradient-text">Hear From You</span>
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 18,
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Have a question about our tools, a feature request, or a partnership enquiry? We
            respond to every email — usually within one business day.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section>
        <div className="section" style={{ paddingTop: 20, paddingBottom: 80, maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 60 }}>
            {[
              {
                icon: "📧",
                title: "General Enquiries",
                desc: "Questions about our platform, products, or anything else? We're happy to help.",
                contact: "admin@hubtoolsai.com",
                href: "mailto:admin@hubtoolsai.com",
                label: "Send Email",
              },
              {
                icon: "🛠️",
                title: "Product Support",
                desc: "Need help with WriteSwift, PrimePro, or SubSave? Reach out and we'll get you sorted.",
                contact: "admin@hubtoolsai.com",
                href: "mailto:admin@hubtoolsai.com",
                label: "Get Support",
              },
              {
                icon: "🤝",
                title: "Partnerships",
                desc: "Interested in partnering with us, listing your tool, or co-marketing opportunities?",
                contact: "admin@hubtoolsai.com",
                href: "mailto:admin@hubtoolsai.com",
                label: "Start a Conversation",
              },
            ].map((card) => (
              <div key={card.title} className="glass-card" style={{ padding: 28 }}>
                <div className="feature-icon">{card.icon}</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{card.title}</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--accent-purple)",
                    textDecoration: "none",
                    marginBottom: 6,
                    wordBreak: "break-all",
                  }}
                >
                  {card.contact}
                </a>
                <a href={card.href} className="btn-secondary" style={{ fontSize: 14, padding: "10px 20px", marginTop: 12, display: "inline-flex" }}>
                  {card.label} →
                </a>
              </div>
            ))}
          </div>

          {/* FAQ-style common questions */}
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 32, textAlign: "center", letterSpacing: -0.5 }}>
              Common Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  q: "How quickly do you respond to emails?",
                  a: "We aim to respond to all enquiries within one business day (Monday–Friday). For urgent support issues, please mark your subject line as URGENT.",
                },
                {
                  q: "Where are you based?",
                  a: "The HubToolsAI team is fully remote, with members across the US, UK, and Asia. All support is handled in English.",
                },
                {
                  q: "I found a bug or error on the site. How do I report it?",
                  a: "Please email admin@hubtoolsai.com with the page URL, a description of the issue, and your browser/device. We take quality reports seriously and will investigate promptly.",
                },
                {
                  q: "Can I request a new AI tool or feature?",
                  a: "Absolutely — we build based on community feedback. Email us your idea and include as much detail as possible about the problem you're trying to solve. The most-requested features move to the top of our roadmap.",
                },
                {
                  q: "How do I report a privacy concern?",
                  a: "For privacy-related enquiries, including data access or deletion requests, email admin@hubtoolsai.com with the subject line 'Privacy Request'. We will respond within 30 days as required by applicable law.",
                },
              ].map((item) => (
                <div key={item.q} className="glass-card" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{item.q}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL LINKS */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ textAlign: "center", paddingTop: 48, paddingBottom: 48 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 16 }}>
            Looking for our legal documents?
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/privacy" style={{ color: "var(--accent-purple)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: "var(--accent-purple)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Terms of Service
            </Link>
            <Link href="/about" style={{ color: "var(--accent-purple)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
