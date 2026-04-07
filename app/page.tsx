import Link from "next/link"
import AdUnit from "@/components/AdUnit"

const FAQ = [
  {
    q: "What is HubToolsAI?",
    a: "HubToolsAI is a suite of AI-powered products designed for ecommerce sellers, content creators, and professionals. We offer WriteSwift (AI content generator), PrimePro (goal & productivity tracker), SubSave (subscription manager), and 50+ free SEO tools.",
  },
  {
    q: "Who are these tools for?",
    a: "Our tools are built for Amazon and Shopify sellers who need fast, optimized product listings; content creators who want to scale output; entrepreneurs tracking business goals; and anyone who wants to stop wasting money on unused subscriptions.",
  },
  {
    q: "Are the free SEO tools really free?",
    a: "Yes — completely free, no account required. Our free tools include keyword analyzers, meta tag generators, readability checkers, and more. No credit card, no sign-up for the basics.",
  },
  {
    q: "How does WriteSwift compare to Jasper or Copy.ai?",
    a: "WriteSwift is purpose-built for ecommerce. Unlike general AI writers, it understands marketplace-specific rules (Amazon character limits, eBay formatting, Shopify SEO), producing listings that actually convert — not just sound good.",
  },
  {
    q: "How does PrimePro help with productivity?",
    a: "PrimePro combines habit tracking with AI analysis. It doesn't just log your progress — it identifies patterns in your data and gives actionable recommendations on when to work, which goals to prioritize, and how to build streaks that stick.",
  },
  {
    q: "Is my data safe?",
    a: "Your data is encrypted in transit and at rest. We never sell or share your personal information with third parties. Each product has its own privacy controls so you stay in full control.",
  },
]

const USE_CASES = [
  { icon: "🛒", title: "Amazon Sellers", desc: "Generate keyword-rich titles, bullet points, and backend keywords that rank and convert. Optimized for A9 algorithm.", link: "/tools" },
  { icon: "🛍️", title: "Shopify Stores", desc: "Write compelling product descriptions and collection pages at scale. Drive traffic with SEO-optimized copy.", link: "/tools" },
  { icon: "📦", title: "eBay & Etsy", desc: "Stand out in crowded marketplaces with AI-crafted listings tailored to each platform's unique buyer psychology.", link: "/tools" },
  { icon: "✍️", title: "Content Creators", desc: "Repurpose, expand, and optimize your content. Go from idea to full article in minutes, not hours.", link: "/tools" },
  { icon: "📈", title: "Goal-Driven Professionals", desc: "Stop starting over. Track your habits, measure your wins, and use AI insights to build routines that compound.", link: "https://www.primepro.co" },
  { icon: "💸", title: "Budget-Conscious Teams", desc: "Audit every subscription your team is paying for. Cancel the waste. Redirect that budget to growth.", link: "https://www.subsave.ai" },
]

export default function Home() {
  return (
    <main>

      {/* ===== HERO SECTION ===== */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div className="orb orb-purple animate-float" style={{ width: 500, height: 500, top: -100, right: -150 }} />
        <div className="orb orb-blue animate-float-delayed" style={{ width: 400, height: 400, bottom: -100, left: -100 }} />
        <div className="orb orb-pink" style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

        <div className="section" style={{ textAlign: "center", width: "100%", paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="animate-fade-in-up">
            <span className="badge">✨ Trusted by 10,000+ Creators & Sellers</span>
          </div>

          <h1 className="animate-fade-in-up-delay-1" style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: 820,
            margin: "20px auto 0",
          }}>
            The AI Toolkit That Actually{" "}
            <span className="gradient-text">Makes You Money</span>
          </h1>

          <p className="animate-fade-in-up-delay-2" style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: 640,
            margin: "24px auto 0",
            lineHeight: 1.75,
          }}>
            Write better product listings in seconds. Hit your goals every week.
            Stop paying for subscriptions you forgot about. One platform — real results.
          </p>

          <div className="animate-fade-in-up-delay-3" style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
              Start Free Today →
            </a>
            <Link href="/tools" className="btn-secondary" style={{ fontSize: 17, padding: "16px 36px" }}>
              Explore Free Tools
            </Link>
          </div>

          <div className="animate-fade-in-up-delay-3" style={{ marginTop: 56, display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: "10K+", label: "Active Users" },
              { value: "500K+", label: "Listings Written" },
              { value: "$2.1M+", label: "Saved on Subs" },
              { value: "4.9★", label: "Avg Rating" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800, background: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, color: "var(--text-muted)", fontSize: 12, fontWeight: 500, letterSpacing: 1 }}>
            USED BY SELLERS ON
            <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 14, alignItems: "center", opacity: 0.45 }}>
              <span style={{ fontSize: 20, fontWeight: 700 }}>Amazon</span>
              <span style={{ fontSize: 20, fontWeight: 700 }}>Shopify</span>
              <span style={{ fontSize: 20, fontWeight: 700 }}>eBay</span>
              <span style={{ fontSize: 20, fontWeight: 700 }}>Etsy</span>
              <span style={{ fontSize: 20, fontWeight: 700 }}>Walmart</span>
            </div>
          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== PRODUCTS SECTION ===== */}
      <section id="products" style={{ position: "relative" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">🚀 Our Products</span>
            <h2>Three Tools. <span className="gradient-text">One Unfair Advantage.</span></h2>
            <p>Each product solves a real, costly problem — and starts delivering ROI from day one.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>

            {/* WriteSwift */}
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 16, right: 16, fontSize: 11, background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-purple)", padding: "4px 12px", borderRadius: 100, fontWeight: 700 }}>🔥 Most Popular</div>
              <div style={{ fontSize: 44, marginBottom: 16 }}>✍️</div>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>WriteSwift.ai</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-purple)", margin: "8px 0 14px" }}>AI Content Generator for Ecommerce</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75 }}>
                Write Amazon listings, Shopify product pages, eBay titles, and SEO blog content in seconds. Optimized for conversions — not just word count.
              </p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Amazon", "Shopify", "eBay", "Etsy", "Blog SEO"].map(tag => (
                  <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 100, border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--accent-purple)" }}>Start Writing Free →</span>
              </div>
            </a>

            {/* PrimePro */}
            <a href="https://www.primepro.co" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>📈</div>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>PrimePro.co</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-blue)", margin: "8px 0 14px" }}>AI-Powered Goal & Growth Tracker</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75 }}>
                Track habits, set milestones, and get AI insights that tell you exactly why you're falling off — and how to build streaks that last. Used by founders, athletes, and high performers.
              </p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Habits", "Goals", "AI Insights", "Streaks", "Analytics"].map(tag => (
                  <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 100, border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--accent-blue)" }}>Track Your Goals →</span>
              </div>
            </a>

            {/* SubSave */}
            <a href="https://www.subsave.ai" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>💰</div>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>SubSave.ai</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-cyan)", margin: "8px 0 14px" }}>AI Subscription Cost Cutter</p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.75 }}>
                The average professional wastes $348/year on forgotten subscriptions. SubSave finds every one, alerts you before renewals, and helps you cancel what you don&apos;t need. Zero effort savings.
              </p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Save Money", "Renewal Alerts", "Cancel Waste", "AI Analysis"].map(tag => (
                  <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 100, border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--accent-cyan)" }}>Find Hidden Waste →</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== USE CASES SECTION ===== */}
      <section id="features" style={{ background: "var(--bg-secondary)" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">🎯 Who It&apos;s For</span>
            <h2>Built for <span className="gradient-text">Real Business Problems</span></h2>
            <p>Whether you sell products, create content, or run a team — there&apos;s a tool here for you.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {USE_CASES.map(uc => (
              <a key={uc.title} href={uc.link} className="glass-card" style={{ padding: 28, textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{uc.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{uc.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{uc.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== HOW IT WORKS ===== */}
      <section>
        <div className="section">
          <div className="section-header">
            <span className="badge">⚡ How It Works</span>
            <h2>Go from Zero to <span className="gradient-text">Results in Minutes</span></h2>
            <p>No learning curve. No setup headache. Just pick a tool and go.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, position: "relative" }}>
            {[
              { step: "01", icon: "🎯", title: "Choose Your Tool", desc: "Pick WriteSwift for content, PrimePro for goals, or SubSave for subscriptions — or use all three." },
              { step: "02", icon: "⚙️", title: "Tell It What You Need", desc: "Enter your product, goal, or spending data. Our AI understands context — no templates required." },
              { step: "03", icon: "✨", title: "Get Instant Results", desc: "Receive optimized listings, personalized insights, or a full subscription audit in seconds." },
              { step: "04", icon: "📊", title: "Track & Improve", desc: "Monitor performance over time. The AI learns your patterns and gets smarter with every use." },
            ].map(item => (
              <div key={item.step} className="glass-card" style={{ padding: 28, position: "relative" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "var(--accent-purple)", letterSpacing: 2, marginBottom: 12 }}>STEP {item.step}</div>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== COMPARISON SECTION ===== */}
      <section>
        <div className="section" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">⚔️ Compare AI Tools</span>
            <h2>How Does WriteSwift <span className="gradient-text">Stack Up?</span></h2>
            <p>See how WriteSwift compares to the most popular AI writing tools on the market.</p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            <Link href="/tools/writeswift-vs-jasper" className="glass-card" style={{ padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>WriteSwift vs Jasper AI</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 4 }}>Which AI generates better ecommerce content at a lower cost?</p>
              </div>
              <span style={{ color: "var(--accent-purple)", fontSize: 20, flexShrink: 0, marginLeft: 16 }}>→</span>
            </Link>

            <Link href="/tools/writeswift-vs-copy-ai" className="glass-card" style={{ padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>WriteSwift vs Copy.ai</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 4 }}>Product descriptions, SEO copy, and conversion rates compared head-to-head.</p>
              </div>
              <span style={{ color: "var(--accent-purple)", fontSize: 20, flexShrink: 0, marginLeft: 16 }}>→</span>
            </Link>

            <Link href="/tools/primepro-vs-habitica" className="glass-card" style={{ padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>PrimePro vs Habitica</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 4 }}>AI-powered goal tracking vs gamified habits. Which actually works?</p>
              </div>
              <span style={{ color: "var(--accent-purple)", fontSize: 20, flexShrink: 0, marginLeft: 16 }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== FAQ SECTION ===== */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">❓ FAQ</span>
            <h2>Got Questions? <span className="gradient-text">We Have Answers.</span></h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ.map(item => (
              <div key={item.q} className="glass-card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.q}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== SEO CONTENT BLOCK ===== */}
      <section>
        <div className="section" style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>
            The Best AI Tools for Ecommerce Sellers in 2026
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 16 }}>
            AI tools have fundamentally changed what&apos;s possible for independent sellers. Tasks that once took hours — writing product descriptions, A/B testing titles, running SEO audits — now take minutes. The result is a level playing field where small sellers can compete with enterprise brands.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 16 }}>
            <strong style={{ color: "var(--text-primary)" }}>WriteSwift</strong> is the leading AI content generator purpose-built for marketplace sellers. Unlike generic AI writers, it understands platform-specific rules: Amazon A9 ranking signals, Shopify SEO best practices, eBay listing formats, and Etsy buyer search behavior. The output isn&apos;t just readable — it&apos;s optimized to rank and convert.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 16 }}>
            <strong style={{ color: "var(--text-primary)" }}>PrimePro</strong> addresses the productivity gap. Most goal-tracking apps are passive — they log what you did but don&apos;t help you do better. PrimePro&apos;s AI analyzes your behavior patterns and gives specific, personalized coaching: when to schedule deep work, which habits are compounding, and where your routines are breaking down.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
            <strong style={{ color: "var(--text-primary)" }}>SubSave</strong> solves the subscription creep problem that&apos;s costing most businesses hundreds per year. With automatic detection, renewal alerts, and one-click cancellation guides, it turns passive spending into active savings with zero ongoing effort.
          </p>

          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/tools" className="btn-secondary" style={{ fontSize: 15, padding: "12px 28px" }}>
              Browse Free AI Tools →
            </Link>
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>
              Try WriteSwift Free →
            </a>
          </div>
        </div>
      </section>

      <AdUnit />

      {/* ===== FINAL CTA ===== */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple" style={{ width: 400, height: 400, top: -200, right: -100 }} />
        <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -150, left: -50 }} />

        <div className="section" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
          <span className="badge" style={{ marginBottom: 20, display: "inline-block" }}>🎉 No Credit Card Required</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: -1, marginBottom: 16 }}>
            Start Working Smarter <span className="gradient-text">Today</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 18, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            Join 10,000+ creators, sellers, and professionals who use our AI tools to work faster, earn more, and spend less.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "16px 44px", fontSize: 17 }}>
              Get Started Free →
            </a>
            <Link href="/tools" className="btn-secondary" style={{ padding: "16px 44px", fontSize: 17 }}>
              Browse Free Tools
            </Link>
          </div>
          <p style={{ marginTop: 20, color: "var(--text-muted)", fontSize: 13 }}>
            Free plan available • No setup required • Cancel anytime
          </p>
        </div>
      </section>

    </main>
  )
}