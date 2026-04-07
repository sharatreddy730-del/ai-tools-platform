import type { Metadata } from "next"
import Link from "next/link"
import AIToolUI from "@/components/ai-tool-ui"
import AdUnit from "@/components/AdUnit"

export const metadata: Metadata = {
  title: "Free Ecommerce Content Generator — HubToolsAI",
  description:
    "Generate high-quality product titles, descriptions, and SEO copy for Amazon, Shopify, eBay, and Etsy in seconds. Free AI-powered ecommerce content generator.",
  keywords:
    "ecommerce content generator, product description generator, AI listing writer, Amazon copy AI, Shopify description generator",
}

export default function EcommerceContentGenerator() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple animate-float" style={{ width: 400, height: 400, top: -150, right: -100 }} />
        <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -100, left: -50 }} />

        <div className="section" style={{ paddingTop: 48, paddingBottom: 48, maxWidth: 860, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Tools</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>Ecommerce Content Generator</span>
          </nav>

          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 600,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(139, 92, 246, 0.1)",
              color: "var(--accent-purple)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              marginBottom: 20,
            }}
          >
            Ecommerce
          </span>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Free Ecommerce{" "}
            <span className="gradient-text">Content Generator</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: 32,
              maxWidth: 680,
            }}
          >
            Generate optimised product titles, bullet points, and SEO descriptions for Amazon,
            Shopify, eBay, and Etsy — instantly. No account required.
          </p>

          <AdUnit />
          <AIToolUI toolName="Ecommerce Content Generator" />
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 800,
              marginBottom: 12,
              letterSpacing: -0.5,
              textAlign: "center",
            }}
          >
            Why Use This <span className="gradient-text">Content Generator?</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: 40, fontSize: 15 }}>
            Built specifically for marketplace sellers — not generic content creation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              {
                icon: "⚡",
                title: "Instant Output",
                desc: "Get complete product listings in seconds. What used to take 30 minutes now takes under a minute.",
              },
              {
                icon: "🎯",
                title: "Platform-Optimised",
                desc: "Output is tailored to each marketplace's ranking signals, character limits, and buyer psychology.",
              },
              {
                icon: "🔍",
                title: "SEO-First Writing",
                desc: "Keywords are placed in the right positions — title, bullets, and description — to maximise discoverability.",
              },
              {
                icon: "💰",
                title: "Completely Free",
                desc: "No credit card, no account, no daily limits. Use it as many times as you need.",
              },
            ].map((f) => (
              <div key={f.title} className="glass-card" style={{ padding: 24 }}>
                <div className="feature-icon">{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* HOW TO USE */}
      <section>
        <div className="section" style={{ paddingTop: 60, paddingBottom: 60, maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 32, letterSpacing: -0.5 }}>
            How to Use the Ecommerce Content Generator
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                step: "1",
                title: "Enter Your Product Name or Keyword",
                desc: "Type the name of your product, a core keyword, or a short description. The more specific you are, the better the output. For example: '12-piece silicone baking mat set' gives far better results than just 'baking mat'.",
              },
              {
                step: "2",
                title: "Click Generate",
                desc: "The AI will process your input and generate a complete content block — including a primary title, key bullet points, and a product description — formatted for ecommerce use.",
              },
              {
                step: "3",
                title: "Review and Refine",
                desc: "Read through the output and make any adjustments for your brand voice or product-specific details. AI output is a strong first draft, not a final document — your review adds the finishing touch.",
              },
              {
                step: "4",
                title: "Copy to Your Listing",
                desc: "Paste the title, bullets, and description directly into your Amazon Seller Central, Shopify admin, eBay listing form, or wherever you manage your product pages.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass-card"
                style={{ padding: 24, display: "flex", gap: 20, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.15)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "var(--accent-purple)",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* PLATFORMS SECTION */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ paddingTop: 60, paddingBottom: 60, maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, letterSpacing: -0.5 }}>
            Supported Platforms
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: 32, fontSize: 15 }}>
            Our AI understands the specific requirements and best practices for each marketplace.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { platform: "Amazon", desc: "A9-optimised titles, character-limit-aware bullets, backend keyword suggestions." },
              { platform: "Shopify", desc: "SEO meta descriptions, natural-language product copy, Google-friendly structure." },
              { platform: "eBay", desc: "Keyword-rich titles, condition-aware descriptions, category-specific formatting." },
              { platform: "Etsy", desc: "Handmade tone, long-tail keyword integration, buyer-focused storytelling." },
              { platform: "Walmart", desc: "Structured attribute formatting, compliance-aware copy, conversion-focused bullets." },
            ].map((p) => (
              <div key={p.platform} className="glass-card" style={{ padding: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--accent-purple)" }}>
                  {p.platform}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple" style={{ width: 300, height: 300, top: -100, left: -50 }} />
        <div className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>
            Need Unlimited AI Content?
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            This free tool is a great starting point. For bulk listing generation, advanced SEO
            features, and multi-platform support, try WriteSwift.ai — built specifically for
            ecommerce sellers.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.writeswift.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 16, padding: "14px 36px" }}
            >
              Try WriteSwift Free →
            </a>
            <Link href="/tools" className="btn-secondary" style={{ fontSize: 16, padding: "14px 36px" }}>
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}