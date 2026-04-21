import Link from "next/link"
import AdUnit from "@/components/AdUnit"

const FAQ = [
  {
    q: "What is HubToolsAI?",
    a: "HubToolsAI is a resource hub and software platform focused on practical AI tools for ecommerce sellers, creators, and small businesses. Alongside free tools, we publish in-depth guides on product listings, SEO, productivity, and subscription management.",
  },
  {
    q: "Who is HubToolsAI for?",
    a: "HubToolsAI is built for Amazon sellers, Shopify store owners, eBay and Etsy sellers, content creators, and operators who want practical ways to use AI to save time and improve results.",
  },
  {
    q: "Are the tools free?",
    a: "Many of the tools on HubToolsAI are free to use. Some advanced workflows and dedicated products may include premium features, but the core educational content and free tool library are available without a paid account.",
  },
  {
    q: "What makes HubToolsAI different from a generic AI directory?",
    a: "HubToolsAI focuses on real-world use cases. Instead of listing tools without context, we explain when to use them, who they are for, and how they help with ecommerce, productivity, and business operations.",
  },
  {
    q: "Do you publish original content?",
    a: "Yes. Our blog covers original guides, comparisons, tutorials, and use-case articles focused on AI workflows for sellers, creators, and small teams.",
  },
  {
    q: "How should I get started?",
    a: "Start with the free tool library if you need a quick win, or explore the blog if you want strategy, tutorials, and comparisons before choosing a tool.",
  },
]

const USE_CASES = [
  {
    icon: "🛒",
    title: "Amazon Sellers",
    desc: "Write stronger titles, bullets, and product copy while following marketplace rules and buyer intent.",
  },
  {
    icon: "🛍️",
    title: "Shopify Stores",
    desc: "Create product descriptions and collection copy that support SEO and improve conversions.",
  },
  {
    icon: "📦",
    title: "eBay & Etsy Sellers",
    desc: "Improve listing clarity, keyword targeting, and positioning in crowded marketplaces.",
  },
  {
    icon: "✍️",
    title: "Content Creators",
    desc: "Use AI to speed up drafts, repurpose content, and structure articles without sacrificing quality.",
  },
  {
    icon: "📈",
    title: "Founders & Professionals",
    desc: "Track goals, simplify workflows, and build more consistent systems for execution.",
  },
  {
    icon: "💸",
    title: "Small Teams",
    desc: "Find wasted software spend, reduce tool sprawl, and make better decisions about subscriptions.",
  },
]

const FEATURED_ARTICLES = [
  {
    title: "How AI Is Transforming Ecommerce Product Listings in 2026",
    href: "/blog/how-ai-is-changing-ecommerce-listings",
    desc: "A practical look at how sellers are using AI to improve listing quality, speed, and marketplace performance.",
  },
  {
    title: "Amazon SEO in 2026: What Actually Works",
    href: "/blog/amazon-seo-tips-2026",
    desc: "What matters now for Amazon ranking, conversion, and product page optimization.",
  },
  {
    title: "Writing Shopify Product Descriptions That Rank and Convert",
    href: "/blog/shopify-product-description-guide",
    desc: "A guide to balancing SEO, readability, and conversion on Shopify product pages.",
  },
]

const PRODUCTS = [
  {
    name: "WriteSwift.ai",
    href: "https://www.writeswift.ai",
    icon: "✍️",
    label: "AI writing for ecommerce",
    desc: "Generate product listings, ecommerce copy, and content drafts tailored to marketplaces like Amazon, Shopify, and eBay.",
  },
  {
    name: "PrimePro.co",
    href: "https://www.primepro.co",
    icon: "📈",
    label: "AI-powered goal tracking",
    desc: "Track goals, habits, and progress with a more structured system for personal and professional execution.",
  },
  {
    name: "SubSave.ai",
    href: "https://www.subsave.ai",
    icon: "💸",
    label: "Subscription management",
    desc: "Identify recurring software costs, monitor renewals, and reduce unnecessary subscription spend.",
  },
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="orb orb-purple animate-float"
          style={{ width: 420, height: 420, top: -120, right: -140 }}
        />
        <div
          className="orb orb-blue animate-float-delayed"
          style={{ width: 320, height: 320, bottom: -120, left: -80 }}
        />

        <div
          className="section"
          style={{
            width: "100%",
            paddingTop: 64,
            paddingBottom: 64,
            textAlign: "center",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <span className="badge">AI tools, guides, and workflows for real business use</span>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.8px",
              maxWidth: 920,
              margin: "22px auto 0",
            }}
          >
            Practical AI Tools for Ecommerce Sellers, Creators, and Small Teams
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--text-secondary)",
              maxWidth: 760,
              margin: "24px auto 0",
              lineHeight: 1.8,
            }}
          >
            HubToolsAI helps you use AI more effectively across product listings,
            content workflows, productivity, and subscription management. Explore
            free tools, in-depth guides, and focused products built for practical,
            day-to-day business use.
          </p>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tools"
              className="btn-primary"
              style={{ fontSize: 16, padding: "15px 32px" }}
            >
              Explore Free Tools
            </Link>
            <Link
              href="/blog"
              className="btn-secondary"
              style={{ fontSize: 16, padding: "15px 32px" }}
            >
              Read the Blog
            </Link>
          </div>

          <div
            style={{
              marginTop: 42,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "Amazon listing workflows",
              "Shopify SEO content",
              "Goal tracking",
              "Subscription management",
              "Free SEO tools",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 999,
                  padding: "8px 14px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / AUTHORITY */}
      <section>
        <div
          className="section editorial-content"
          style={{ maxWidth: 920, margin: "0 auto", paddingTop: 20, paddingBottom: 10 }}
        >
          <h2>What HubToolsAI Helps You Do</h2>
          <p>
            AI tools are no longer useful only for large companies or technical
            teams. Today, ecommerce sellers, solo founders, creators, and small
            businesses use AI to improve writing, reduce repetitive admin work,
            analyze subscriptions, and make better day-to-day decisions. The
            challenge is not access. The challenge is knowing which tools are
            actually useful, which workflows save time, and which shortcuts create
            low-quality output.
          </p>
          <p>
            HubToolsAI exists to solve that problem. We combine a growing library
            of free tools with educational content and focused software products so
            users can move from experimentation to results. Instead of treating AI
            as a novelty, we focus on practical use cases: writing better product
            listings, improving store content, tracking goals more consistently,
            and cutting wasted spending from forgotten subscriptions.
          </p>
          <p>
            Whether you sell on Amazon, run a Shopify store, create content for an
            audience, or manage a small team, the goal is the same: use AI where
            it creates real leverage. That means better workflows, clearer content,
            less wasted effort, and more time spent on work that actually moves
            your business forward.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">Who we help</span>
            <h2>
              Built Around <span className="gradient-text">Specific Use Cases</span>
            </h2>
            <p>
              The best AI tools are not generic. They work because they fit a real
              workflow, audience, and business objective.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="glass-card" style={{ padding: 28 }}>
                <div style={{ fontSize: 34, marginBottom: 12 }}>{uc.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                  {uc.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdUnit />

      {/* FEATURED ARTICLES */}
      <section>
        <div className="section" style={{ maxWidth: 980, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">Featured guides</span>
            <h2>
              Start With the <span className="gradient-text">Most Useful Content</span>
            </h2>
            <p>
              These articles are a good place to begin if you want practical,
              high-intent guidance before choosing a tool.
            </p>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            {FEATURED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="glass-card"
                style={{
                  padding: 24,
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8 }}>
                  {article.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    marginBottom: 10,
                  }}
                >
                  {article.desc}
                </p>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--accent-purple)",
                  }}
                >
                  Read article →
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/blog" className="btn-secondary" style={{ padding: "14px 28px" }}>
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section">
          <div className="section-header">
            <span className="badge">Products</span>
            <h2>
              Focused Tools for <span className="gradient-text">Common Business Tasks</span>
            </h2>
            <p>
              In addition to free tools and guides, HubToolsAI includes dedicated
              products for writing, productivity, and cost control.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {PRODUCTS.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: 30,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 14 }}>{product.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700 }}>{product.name}</h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--accent-purple)",
                    margin: "8px 0 14px",
                  }}
                >
                  {product.label}
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  {product.desc}
                </p>
                <div style={{ marginTop: 18 }}>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--accent-purple)",
                    }}
                  >
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL CONTENT BLOCK */}
      <section>
        <div
          className="section editorial-content"
          style={{ maxWidth: 920, margin: "0 auto" }}
        >
          <h2>How to Use AI Without Creating Low-Quality Work</h2>
          <p>
            One of the biggest mistakes businesses make is using AI to produce more
            content without improving the underlying quality of their strategy.
            Faster writing is useful, but speed alone does not create better
            product pages, stronger SEO, or higher-converting content. The real
            advantage comes from using AI as an accelerator for structured
            workflows.
          </p>

          <h3>For ecommerce sellers</h3>
          <p>
            AI can help generate product titles, bullet points, descriptions, and
            SEO drafts more efficiently. But the strongest results come when those
            drafts are refined around buyer intent, marketplace rules, and clear
            positioning. A better listing is not simply longer. It is clearer, more
            relevant, and easier for the right buyer to understand quickly.
          </p>

          <h3>For creators and publishers</h3>
          <p>
            AI is most valuable when it helps with outlining, repurposing, editing,
            and workflow consistency. It should reduce friction, not replace
            judgment. The best content still depends on structure, subject clarity,
            and real editorial decisions.
          </p>

          <h3>For small teams and founders</h3>
          <p>
            AI also matters outside of writing. It can support planning,
            prioritization, subscription audits, and habit tracking. When used
            carefully, these systems save time, reduce waste, and create more
            reliable execution across a business.
          </p>

          <p>
            HubToolsAI is built around that philosophy. We focus on practical AI
            applications that improve the quality of work, not just the volume of
            output.
          </p>
        </div>
      </section>

      <AdUnit />

      {/* TOOL DISCOVERY */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ maxWidth: 980, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">Explore tools</span>
            <h2>
              Popular Starting Points in the <span className="gradient-text">Free Tool Library</span>
            </h2>
            <p>
              Use the library to test practical AI and SEO workflows before moving
              into more advanced products.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {[
              { title: "Amazon Title Generator", href: "/tools/amazon-title-generator" },
              { title: "Shopify Product Description Generator", href: "/tools/shopify-product-description" },
              { title: "eBay Listing Generator", href: "/tools/ebay-listing-generator" },
              { title: "Etsy Tags Generator", href: "/tools/etsy-tags-generator" },
              { title: "Meta Description Generator", href: "/tools" },
              { title: "Readability & SEO Tools", href: "/tools" },
            ].map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="glass-card"
                style={{
                  padding: 20,
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>{tool.title}</h3>
                <p
                  style={{
                    marginTop: 6,
                    color: "var(--text-secondary)",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Open tool →
                </p>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 22, textAlign: "center" }}>
            <Link href="/tools" className="btn-primary" style={{ padding: "14px 30px" }}>
              Browse the Full Tool Library
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="section" style={{ maxWidth: 820, margin: "0 auto" }}>
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>
              Common Questions About <span className="gradient-text">HubToolsAI</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ.map((item) => (
              <div key={item.q} className="glass-card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
                  {item.q}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 14,
                    lineHeight: 1.8,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--bg-secondary)" }}>
        <div className="orb orb-purple" style={{ width: 360, height: 360, top: -180, right: -80 }} />
        <div className="orb orb-blue" style={{ width: 260, height: 260, bottom: -120, left: -60 }} />

        <div
          className="section"
          style={{ textAlign: "center", paddingTop: 76, paddingBottom: 76 }}
        >
          <span className="badge" style={{ marginBottom: 18, display: "inline-block" }}>
            Start with content or tools
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 50px)",
              fontWeight: 800,
              letterSpacing: -1,
              marginBottom: 14,
            }}
          >
            Explore Practical AI Resources That Help You Work Better
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 18,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Browse the free tool library, read the latest guides, or explore one
            of our focused products for ecommerce, productivity, and subscription
            management.
          </p>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/tools" className="btn-primary" style={{ padding: "15px 36px", fontSize: 16 }}>
              Explore Free Tools
            </Link>
            <Link href="/blog" className="btn-secondary" style={{ padding: "15px 36px", fontSize: 16 }}>
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
