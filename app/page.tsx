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
            <a href="https://www.writeswift.ai" target="_blank" rel="sponsored noopener noreferrer" className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
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
            <a href="https://www.writeswift.ai" target="_blank" rel="sponsored noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit", position: "relative", overflow: "hidden" }}>
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
            <a href="https://www.primepro.co" target="_blank" rel="sponsored noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
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
            <a href="https://www.subsave.ai" target="_blank" rel="sponsored noopener noreferrer" className="glass-card" style={{ padding: 36, textDecoration: "none", color: "inherit" }}>
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
        <div className="section editorial-content" style={{ maxWidth: 860, margin: "0 auto", paddingTop: 40, paddingBottom: 40 }}>
          <h2>Why You Need an AI Tools Platform in 2026</h2>
          <p>
            Artificial Intelligence has rapidly evolved from a complex, enterprise-only novelty into a fundamental business utility that solopreneurs and teams rely on daily. At its core, an AI tools platform is a centralized, intelligent ecosystem designed to automate repetitive, high-friction tasks so you can focus entirely on high-leverage growth. Rather than jumping between fragmented applications, maintaining endless browser tabs, and paying for scattered subscriptions, consolidating your workflows into a single, unified platform ensures that you deploy AI where it actually generates a measurable return on investment. 
          </p>
          
          <h3>Who Does HubToolsAI Help?</h3>
          <p>We built this platform for the ambitious fast-movers who recognize that speed to market and conversion optimization are everything in modern digital business. Specifically, our AI tools are engineered for:</p>
          <ul>
            <li><strong>Ecommerce Sellers:</strong> Whether you manage a massive catalog on Amazon, operate an independent boutique on Shopify, or flip items on eBay, our AI listing generators understand marketplace algorithms deeply. They craft titles, compelling bullet points, and A+ content that dominate search rankings while rigidly adhering to platform-specific character constraints and keyword densities.</li>
            <li><strong>Content Creators:</strong> Writers, social media marketers, and video producers use our specialized generators to completely break through creative blocks. Transform a single seed idea into an entire content calendar, optimize your YouTube titles for maximum click-through rates, and generate engaging, human-sounding Instagram captions in seconds.</li>
            <li><strong>Digital Professionals:</strong> For agency owners, freelance consultants, and proactive employees—our internal tracking and auditing layers (like PrimePro and SubSave) bring enterprise-level habit formation and financial auditing down to the individual level, ensuring you hit KPIs and stay under budget.</li>
          </ul>

          <h3>The Core Benefits of Using AI Workflows</h3>
          <p>Integrating our purpose-built tools doesn&apos;t just make you look technologically advanced; it fundamentally reorganizes your personal capacity and your business&apos;s financial efficiency.</p>
          
          <h4>1. Reclaiming Hundreds of Hours</h4>
          <p>
            Time is the single asset you cannot replenish. Activities that historically required hiring a dedicated virtual assistant, engaging an expensive freelancer, or spending hours of manual labor—like competitive keyword research, writing fifty variations of a product description, or painstakingly mapping out a quarterly productivity roadmap—are now executed instantly. By reclaiming this time, you shift from working in the weeds of your business to working strategically on the growth of your business.
          </p>

          <h4>2. Incrementally Increasing Conversions</h4>
          <p>
            Good copy tells; optimized copy sells. Our AI isn&apos;t just trained to generate grammatically correct text; it is deeply trained on top-converting sales principles and search engine ranking factors. By rapidly testing generated variations of your landing pages, ad copy, and product highlights, you can systematically improve your conversion rates and dramatically lower your customer acquisition costs. Every extra percentage point in your conversion rate funnels directly to your bottom line.
          </p>

          <h4>3. Eliminating Wasted Spending</h4>
          <p>
            Countless digital businesses bleed cash through forgotten SaaS subscriptions, overlapping plans, and redundant point-solution tools. By utilizing our integrated auditing products and completely replacing multiple expensive micro-tools with our centralized library of free SEO and AI generators, our users consistently reduce their operational overhead. Cutting software waste instantly improves your profit margins without requiring a single new sale.
          </p>

          <h3>Explore Our Top Authority Tools</h3>
          <p>We continually expand our suite of over 50 free, highly-specialized AI generators. You can start optimizing your digital footprint immediately by exploring some of our most impactful tools directly below:</p>
          <ul>
            <li><Link href="/tools/amazon-title-generator"><strong>Amazon Title Generator</strong></Link> — Maximize your A9 search discoverability and click-to-cart ratios.</li>
            <li><Link href="/tools/shopify-product-description"><strong>Shopify Product Description Generator</strong></Link> — Write compelling, SEO-friendly storefront copy that converts casual browsers into buyers.</li>
            <li><Link href="/tools/ebay-listing-generator"><strong>eBay Listing Optimizer</strong></Link> — Structure marketplace listings that build immediate buyer trust.</li>
            <li><Link href="/tools/ai-roadmap-generator"><strong>Strategic AI Roadmap Builder</strong></Link> — Outline your complex business and project milestones effortlessly.</li>
            <li><Link href="/tools/etsy-tags-generator"><strong>Etsy Tags Generator</strong></Link> — Find the exact long-tail keywords that handmade buyers are actively searching for.</li>
          </ul>
          
          <p>
            Stop paying for overlapping subscriptions and relying on outdated, manual workflows. Start utilizing HubToolsAI today to automate the mundane tasks, organically convert more web traffic, and aggressively accelerate your multi-channel growth trajectory.
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