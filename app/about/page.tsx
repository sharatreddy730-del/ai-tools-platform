import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us — HubToolsAI",
  description:
    "HubToolsAI builds practical AI-powered tools for ecommerce sellers, content creators, and professionals. Learn about our mission, products, and team.",
}

export default function AboutPage() {
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
          <span className="badge">👋 About Us</span>
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
            Building AI Tools That{" "}
            <span className="gradient-text">Make a Real Difference</span>
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 18,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            We&apos;re a team of builders, sellers, and technologists who got frustrated watching
            powerful AI technology stay out of reach for everyday entrepreneurs. So we built the
            tools we wish had existed.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            <div>
              <div className="feature-icon">🎯</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Our Mission</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15 }}>
                To make professional-grade AI tools accessible to every independent seller and creator — not just
                enterprises with large budgets. We believe the right tools can fundamentally change what&apos;s possible
                for a one-person business.
              </p>
            </div>
            <div>
              <div className="feature-icon">🔬</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Our Approach</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15 }}>
                We don&apos;t build for demos — we build for daily use. Every feature starts with a real problem that
                real sellers and creators face. We obsess over output quality, user experience, and measurable results.
              </p>
            </div>
            <div>
              <div className="feature-icon">🤝</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Our Community</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15 }}>
                Over 10,000 sellers, creators, and professionals use our platform every day. Their feedback drives
                every update we ship. We build with our users, not just for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section>
        <div className="section" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">🚀 Our Products</span>
            <h2>
              Three Products. <span className="gradient-text">One Platform.</span>
            </h2>
            <p>
              Each product was built to solve a specific, costly problem for independent businesses.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                icon: "✍️",
                name: "WriteSwift.ai",
                tagline: "AI Content Generator for Ecommerce",
                color: "var(--accent-purple)",
                url: "https://www.writeswift.ai",
                desc: "WriteSwift is purpose-built for marketplace sellers. It generates Amazon listings, Shopify product pages, eBay titles, and SEO blog content in seconds — all optimised for the specific ranking signals of each platform. Unlike generic AI writers, WriteSwift understands character limits, keyword placement, and conversion-focused copywriting structure.",
              },
              {
                icon: "📈",
                name: "PrimePro.co",
                tagline: "AI-Powered Goal & Growth Tracker",
                color: "var(--accent-blue)",
                url: "https://www.primepro.co",
                desc: "PrimePro goes beyond simple habit logging. Its AI analyses your behavioural patterns to identify when you're most productive, which habits are compounding, and where your routines break down — then provides specific, personalised coaching to help you build streaks that last. Used by founders, athletes, and high performers who take their growth seriously.",
              },
              {
                icon: "💰",
                name: "SubSave.ai",
                tagline: "AI Subscription Cost Cutter",
                color: "var(--accent-cyan)",
                url: "https://www.subsave.ai",
                desc: "The average professional wastes $348/year on forgotten subscriptions. SubSave automatically detects every recurring charge, alerts you before renewal dates, and provides one-click cancellation guides for the tools you no longer need. It turns passive, unconscious spending into active, informed financial decisions — with zero ongoing effort.",
              },
            ].map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{ padding: 32, textDecoration: "none", color: "inherit", display: "flex", gap: 24, alignItems: "flex-start" }}
              >
                <div style={{ fontSize: 40, flexShrink: 0 }}>{product.icon}</div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{product.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 600, color: product.color, marginBottom: 12 }}>
                    {product.tagline}
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75 }}>
                    {product.desc}
                  </p>
                  <span style={{ display: "inline-block", marginTop: 14, fontSize: 14, fontWeight: 700, color: product.color }}>
                    Visit site →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">💡 What We Believe</span>
            <h2>
              The Principles That <span className="gradient-text">Guide Everything We Build</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚡", title: "Speed is a feature", desc: "If a tool makes you wait, it breaks your flow. Every second saved compounds across thousands of uses." },
              { icon: "🎯", title: "Output quality is non-negotiable", desc: "AI that produces mediocre content isn't useful. We train and tune every output to be genuinely production-ready." },
              { icon: "🔓", title: "Accessibility first", desc: "The best AI tools should be available to solo sellers, not just companies with enterprise budgets." },
              { icon: "📊", title: "Data-driven improvements", desc: "We measure everything. Every update we ship is backed by user data and real-world outcome tracking." },
            ].map((v) => (
              <div key={v.title} className="glass-card" style={{ padding: 28 }}>
                <div className="feature-icon">{v.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="section" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>
            Ready to Work <span className="gradient-text">Smarter?</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 17, maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Try our tools free — no credit card required. Join 10,000+ sellers and creators already
            using HubToolsAI every day.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Started Free →
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
