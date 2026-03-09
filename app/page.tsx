import Link from "next/link"

export default function Home() {
  return (
    <main>

      {/* ===== HERO SECTION ===== */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        {/* Decorative Orbs */}
        <div className="orb orb-purple animate-float" style={{ width: 500, height: 500, top: -100, right: -150 }} />
        <div className="orb orb-blue animate-float-delayed" style={{ width: 400, height: 400, bottom: -100, left: -100 }} />
        <div className="orb orb-pink" style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

        <div className="section" style={{ textAlign: "center", width: "100%", paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="animate-fade-in-up">
            <span className="badge">
              ✨ AI-Powered Productivity Suite
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1" style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: 800,
            margin: "0 auto",
          }}>
            Smart AI Tools for{" "}
            <span className="gradient-text">Creators & Sellers</span>
          </h1>

          <p className="animate-fade-in-up-delay-2" style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: 620,
            margin: "24px auto 0",
            lineHeight: 1.7,
          }}>
            Generate product listings with AI, track your goals consistently,
            and save money by managing subscriptions — all in one platform.
          </p>

          <div className="animate-fade-in-up-delay-3" style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#products" className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
              Explore Tools →
            </Link>
            <Link href="/tools" className="btn-secondary" style={{ fontSize: 17, padding: "16px 36px" }}>
              Free SEO Tools
            </Link>
          </div>

          {/* Trusted By */}
          <div className="animate-fade-in-up-delay-3" style={{ marginTop: 60, color: "var(--text-muted)", fontSize: 13, fontWeight: 500, letterSpacing: 1 }}>
            TRUSTED BY SELLERS ON
            <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 16, alignItems: "center", opacity: 0.5 }}>
              <span style={{ fontSize: 22, fontWeight: 700 }}>Amazon</span>
              <span style={{ fontSize: 22, fontWeight: 700 }}>Shopify</span>
              <span style={{ fontSize: 22, fontWeight: 700 }}>eBay</span>
              <span style={{ fontSize: 22, fontWeight: 700 }}>Etsy</span>
            </div>
          </div>
        </div>
      </section>


      {/* ===== PRODUCTS SECTION ===== */}
      <section id="products" style={{ position: "relative" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">🚀 Our Products</span>
            <h2>Three Tools. <span className="gradient-text">Unlimited Potential.</span></h2>
            <p>Each product is designed to solve a real problem — whether you&apos;re creating content, chasing goals, or cutting costs.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>

            {/* WriteSwift */}
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✍️</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700 }}>WriteSwift.ai</h3>
                <span style={{ fontSize: 11, background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-purple)", padding: "3px 10px", borderRadius: 100, fontWeight: 600 }}>Popular</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-purple)", marginBottom: 12 }}>AI Content Generator</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
                Generate high-converting product listings, titles, descriptions, and SEO content for Amazon, Shopify, eBay and more. Used by ecommerce sellers and content creators worldwide.
              </p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Amazon", "Shopify", "eBay", "Etsy", "SEO"].map(tag => (
                  <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 100, border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24, fontSize: 14, fontWeight: 600, color: "var(--accent-purple)" }}>
                Try WriteSwift →
              </span>
            </a>

            {/* PrimePro */}
            <a href="https://www.primepro.co" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📈</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>PrimePro.co</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-blue)", marginBottom: 12 }}>AI Growth & Goal Tracker</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
                Stay consistent with your goals. Track daily habits, measure progress, and get AI-powered insights to keep you on track. Perfect for ambitious professionals and entrepreneurs.
              </p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Goals", "Habits", "Analytics", "AI Insights"].map(tag => (
                  <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 100, border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24, fontSize: 14, fontWeight: 600, color: "var(--accent-blue)" }}>
                Try PrimePro →
              </span>
            </a>

            {/* SubSave */}
            <a href="https://www.subsave.ai" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>💰</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>SubSave.ai</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-cyan)", marginBottom: 12 }}>AI Subscription Tracker</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
                Stop wasting money on unused subscriptions. SubSave tracks all your subscriptions, alerts you before renewals, and helps you cancel what you don&apos;t need. Save hundreds per year.
              </p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Save Money", "Track Spend", "Renewal Alerts", "AI Analysis"].map(tag => (
                  <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 100, border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24, fontSize: 14, fontWeight: 600, color: "var(--accent-cyan)" }}>
                Try SubSave →
              </span>
            </a>

          </div>
        </div>
      </section>


      {/* ===== FEATURES SECTION ===== */}
      <section id="features" style={{ position: "relative", background: "var(--bg-secondary)" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">⚡ Why Choose Us</span>
            <h2>Built for People Who <span className="gradient-text">Get Things Done</span></h2>
            <p>Our tools are designed to save time, boost productivity, and help you focus on what matters.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { icon: "🚀", title: "Lightning Fast", desc: "Generate content, track goals, or check subscriptions in seconds — not hours." },
              { icon: "🎯", title: "Multi-Platform", desc: "Works across Amazon, Shopify, eBay, Etsy and more. One tool, every marketplace." },
              { icon: "🔍", title: "SEO Optimized", desc: "Every piece of content is optimized for search engines to maximize visibility." },
              { icon: "🤖", title: "AI-Powered", desc: "Powered by the latest AI models to deliver accurate, high-quality results every time." },
              { icon: "💡", title: "Smart Insights", desc: "Get actionable recommendations based on your data, goals, and spending patterns." },
              { icon: "🔒", title: "Secure & Private", desc: "Your data stays private. Enterprise-grade security with no third-party sharing." },
            ].map((feature) => (
              <div key={feature.title} className="glass-card" style={{ padding: 28 }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{feature.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== STATS SECTION ===== */}
      <section style={{ position: "relative" }}>
        <div className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40 }}>
            {[
              { number: "10K+", label: "Active Users" },
              { number: "500K+", label: "Listings Generated" },
              { number: "50+", label: "AI Tools Available" },
              { number: "99.9%", label: "Uptime Guaranteed" },
            ].map(stat => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== PRICING SECTION ===== */}
      {/*<section id="pricing" style={{ position: "relative", background: "var(--bg-secondary)" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">💎 Simple Pricing</span>
            <h2>One Price. <span className="gradient-text">Everything Included.</span></h2>
            <p>No hidden fees. No per-feature charges. Get all tools for one low price.</p>
          </div>

          <div className="pricing-card">
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-purple)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Pro Plan
            </p>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4 }}>
              <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: -3 }}>$6</span>
              <span style={{ color: "var(--text-muted)", fontSize: 16 }}>/month</span>
            </div>

            <ul className="pricing-features">
              {[
                "✅ AI Content Generator (WriteSwift)",
                "✅ Goal & Growth Tracker (PrimePro)",
                "✅ Subscription Tracker (SubSave)",
                "✅ 50+ Free SEO Tools",
                "✅ Unlimited AI Generations",
                "✅ Priority Support",
                "✅ New Features Monthly",
              ].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", padding: "16px 32px", fontSize: 16 }}>
              Start for $6/month →
            </a>
            <p style={{ marginTop: 16, fontSize: 13, color: "var(--text-muted)" }}>
              Cancel anytime. No lock-in contract.
            </p>
          </div>
        </div>
      </section> */}


      {/* ===== FINAL CTA ===== */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple" style={{ width: 400, height: 400, top: -200, right: -100 }} />
        <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -150, left: -50 }} />

        <div className="section" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: -1, marginBottom: 16 }}>
            Ready to <span className="gradient-text">Supercharge</span> Your Workflow?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 18, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Join thousands of creators, sellers, and professionals using our AI tools to work smarter.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "16px 40px", fontSize: 17 }}>
              Get Started Free →
            </a>
            <Link href="/tools" className="btn-secondary" style={{ padding: "16px 40px", fontSize: 17 }}>
              Browse Free Tools
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}