import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

// ---- Blog post data -------------------------------------------------------
const POSTS: Record<
  string,
  {
    category: string
    date: string
    readTime: string
    title: string
    excerpt: string
    body: string
  }
> = {
  "how-ai-is-changing-ecommerce-listings": {
    category: "AI & Ecommerce",
    date: "March 28, 2026",
    readTime: "6 min read",
    title: "How AI Is Transforming Ecommerce Product Listings in 2026",
    excerpt:
      "AI-generated product listings are no longer a novelty — they're becoming a competitive necessity. We explore how sellers on Amazon, Shopify, and eBay are using AI to write better copy faster, and what it means for those who haven't adopted it yet.",
    body: `
The landscape of ecommerce content has shifted dramatically over the past two years. What used to take a skilled copywriter hours — crafting keyword-rich product titles, compelling bullet points, and SEO-optimised descriptions — can now be accomplished in seconds with the right AI tools.

Why Traditional Listing Writing No Longer Scales

Independent sellers listing hundreds of SKUs face an impossible task if they rely on manual writing alone. Each platform has its own character limits, keyword priorities, and buyer psychology. Amazon's A9 algorithm rewards backend keyword density and engagement signals. Shopify SEO depends on structured metadata and natural-language copy. eBay penalises thin descriptions. Writing for all three simultaneously, at scale, is a full-time job.

How AI Tools Like WriteSwift Close the Gap

AI tools purpose-built for ecommerce understand platform-specific rules. They don't just generate readable text — they produce Amazon titles within character limits with primary keywords front-loaded, bullet points that address buyer objections in order of importance, backend keyword suggestions based on real search volume data, and Shopify meta descriptions optimised for click-through rates.

The Results Are Real

Sellers who adopt AI-assisted listing workflows report significant time savings — tasks that took 45 minutes per SKU now take under 5. More importantly, optimised listings tend to rank better and convert at higher rates, directly impacting revenue.

The sellers who will fall behind in 2026 are not those who lack products or inventory — they're those who underestimate how much copy quality influences discoverability and buyer trust.
    `,
  },
  "amazon-seo-tips-2026": {
    category: "Amazon SEO",
    date: "March 20, 2026",
    readTime: "8 min read",
    title: "Amazon SEO in 2026: What Actually Works (And What Doesn't)",
    excerpt:
      "Amazon's A9/A10 algorithm has evolved. Keyword stuffing is dead, and engagement signals matter more than ever. Here's what top sellers are doing differently right now.",
    body: `
Amazon SEO is one of the most misunderstood disciplines in ecommerce. Many sellers still rely on advice from 2021 — keyword stuffing, exact-match repetition, and backend keyword spam — that no longer works and may actively hurt rankings.

What the A10 Algorithm Prioritises

Amazon's current algorithm weighs several factors above raw keyword presence: Click-Through Rate (CTR) — does your listing get clicked when it appears in search results? Conversion Rate (CVR) — what percentage of visitors actually buy? Sales Velocity — are you generating consistent, growing sales? And Review Quality and Recency — fresh, positive reviews signal ongoing buyer satisfaction.

Title Optimisation That Actually Works

The title remains the highest-weight field, but structure matters. The winning formula is: Brand + Primary Keyword + Key Feature + Secondary Keyword + Size/Quantity/Color (if applicable). This structure satisfies both human readability and algorithmic parsing. Titles that read naturally tend to earn higher CTR, which feeds the algorithm positively.

Bullet Points: Address Objections, Not Just Features

Top-converting bullet points follow a Problem → Solution → Benefit structure. Instead of "Made of stainless steel," write "Built to last with marine-grade stainless steel — no rust, no stains, dishwasher safe." You're solving a concern (durability and cleaning) before it becomes a reason not to buy.

Backend Keywords: Quality Over Quantity

The backend keyword field allows 250 bytes. Don't repeat words already in your title or bullets. Use Spanish translations of important keywords if you sell to bilingual markets. Include common misspellings of your product name.

The sellers consistently outranking competitors in 2026 are those who treat listings as conversion-rate optimisation exercises, not just keyword exercises.
    `,
  },
  "subscription-management-for-small-businesses": {
    category: "Business Finance",
    date: "March 12, 2026",
    readTime: "5 min read",
    title: "The Hidden Subscription Problem Costing Small Businesses Hundreds Per Year",
    excerpt:
      "The average small business pays for 12–18 SaaS subscriptions. Research shows 30% of those go unused. Here's how to conduct a subscription audit and reclaim that budget for growth.",
    body: `
SaaS subscription creep is one of the most common — and most overlooked — financial drains on small businesses and solo entrepreneurs. It happens gradually: you sign up for a free trial, forget to cancel, start another tool to solve a new problem, and months later you're paying for four tools that overlap in functionality.

The Numbers Are Sobering

Studies consistently show the average professional wastes $348 or more per year on forgotten or underutilised subscriptions. For small businesses with teams, that number multiplies per employee. A five-person team could easily be losing $1,500–$2,000 annually in redundant SaaS spend.

How Subscription Creep Happens

Free trials that auto-convert are the most common culprit — you forget the 14-day window ends. Annual plans are paid upfront, used for a week, then abandoned. Tool duplication is another major issue — you may be paying for Zapier, Make, and a custom automation tool simultaneously. Role changes also contribute, as tools purchased for a project that ended keep renewing.

The Audit Process

An effective subscription audit starts with your credit card and bank statements. Filter for recurring charges over the past 3 months. Categorise each subscription as Active and Essential (used weekly, core to operations), Active and Optional (used occasionally, worth evaluating alternatives), or Inactive (cancel immediately). Most people discover at least two or three cancellable subscriptions they had completely forgotten about.

Making This a Habit, Not a One-Time Fix

The best time to cancel a subscription you don't need is before you're charged. Setting renewal alerts seven days before each billing date gives you time to evaluate whether you still need the tool. AI tools like SubSave automate this process, monitoring your subscriptions and alerting you before renewals so you're always making active, not passive, financial decisions.
    `,
  },
  "goal-tracking-habits-that-stick": {
    category: "Productivity",
    date: "March 5, 2026",
    readTime: "7 min read",
    title: "Why Most Goal Trackers Fail You — And What Science Says Actually Works",
    excerpt:
      "Apps that just log your progress don't change your behavior. The science of habit formation points to a different approach: one that uses pattern recognition and timely feedback to build streaks that last.",
    body: `
The goal-tracking app market is massive and growing. Yet research on habit formation suggests most apps fundamentally misunderstand what makes habits stick. They focus on logging — recording what you did — rather than intervening at the moments when you're most likely to fail.

The Logging Trap

Most habit apps are passive. You open them, tap that you completed a workout, and the app celebrates with a checkmark. This feels productive but creates a false sense of progress. You're tracking your behaviour without actually improving it. When you miss a day, the app just stops your streak. It doesn't ask why. It doesn't look for patterns. It doesn't suggest an adjustment. It just waits for you to come back.

What Behavioural Science Actually Shows

Research consistently highlights three factors that determine whether habits stick. First, cue consistency — habits anchored to existing routines (after coffee, before bed) survive disruptions better. Second, friction reduction — the easier a behaviour is to start, the more likely it continues. Third, timely feedback loops — feedback closest in time to the behaviour is most influential. Generic apps address none of these. They're essentially digital journals.

The AI Difference

AI-powered goal tracking can analyse your behavioural data to find your patterns — when you're most likely to complete tasks, which habits tend to cluster together, and where your routines break down. That kind of personalised insight is what separates tools that change behaviour from tools that just record it.

For example: if your data shows you consistently skip workouts on Tuesdays after late Monday evenings, an intelligent tracker can flag that pattern and suggest scheduling a shorter session or shifting the habit to Wednesday. That specific, contextual nudge is more valuable than any generic notification. Building habits that last requires tools that learn your life, not just log it.
    `,
  },
  "shopify-product-description-guide": {
    category: "Shopify",
    date: "February 26, 2026",
    readTime: "6 min read",
    title: "Writing Shopify Product Descriptions That Rank on Google and Convert Visitors",
    excerpt:
      "Shopify product pages are both a sales pitch and an SEO asset. Most store owners optimize for one and ignore the other. Here's how to write descriptions that do both — with AI.",
    body: `
Shopify gives you a clean product page canvas. What you put on it determines whether you get found on Google and whether visitors who arrive actually buy. Most store owners treat these as separate problems. They're not.

Why Shopify Product SEO Is Underutilised

Unlike Amazon, where discoverability is largely internal, Shopify stores rely heavily on Google for organic traffic. A well-optimised product page can rank for high-intent keywords like "waterproof hiking boots wide width" and capture buyers who are already ready to purchase. The elements Google evaluates for product pages include the page title and meta description (click-through rate signal), the H1 heading (should include primary keyword naturally), product description length and quality (thin content ranks poorly), URL structure (clean and readable slugs perform better), and page load speed with Core Web Vitals.

The Description Formula That Converts

High-converting Shopify descriptions follow a clear structure. Start with an opening hook — address the buyer's primary desire or pain point in one sentence. Then use feature-benefit pairs — for each feature, state the user benefit explicitly. Include trust signals such as your returns policy, material certifications, and warranty. Close with a CTA that reinforces the key reason to buy now. Avoid bullet-point-only descriptions. Google prefers paragraph text that reads naturally, and buyers respond better to copy that tells a story about how the product improves their life.

Where AI Accelerates This

Writing a single high-quality Shopify description following this structure takes 20–30 minutes for a skilled copywriter. AI tools built for ecommerce can produce a solid first draft in seconds, covering the SEO structure and benefit-driven language automatically. The seller's job becomes editing for brand voice — a 5-minute task rather than a 30-minute one. At scale across a catalogue of 100 or more products, this compounds into hundreds of hours saved and a dramatically more competitive store.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | HubToolsAI Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = POSTS[slug]

  if (!post) notFound()

  const paragraphs = post.body
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple animate-float" style={{ width: 400, height: 400, top: -150, right: -100 }} />
        <div
          className="section"
          style={{ paddingTop: 48, paddingBottom: 48, maxWidth: 860, margin: "0 auto" }}
        >
          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              Blog
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>{post.title}</span>
          </nav>

          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: 100,
                background: "rgba(139, 92, 246, 0.15)",
                color: "var(--accent-purple)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {post.date} · {post.readTime}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1,
              marginBottom: 20,
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              borderLeft: "3px solid var(--accent-purple)",
              paddingLeft: 20,
              margin: "0 0 40px",
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section>
        <div
          className="section"
          style={{ paddingTop: 0, paddingBottom: 80, maxWidth: 860, margin: "0 auto" }}
        >
          <article>
            {paragraphs.map((para, i) => {
              // Treat short paragraphs (likely subheadings) as h2s
              const isHeading = para.length < 80 && !para.includes(".")
              return isHeading ? (
                <h2
                  key={i}
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginTop: 40,
                    marginBottom: 16,
                    letterSpacing: -0.3,
                  }}
                >
                  {para}
                </h2>
              ) : (
                <p
                  key={i}
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.85,
                    fontSize: 16,
                    marginBottom: 20,
                  }}
                >
                  {para}
                </p>
              )
            })}
          </article>

          {/* Back link */}
          <div
            style={{
              marginTop: 60,
              paddingTop: 32,
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <Link
              href="/blog"
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "var(--accent-purple)",
                textDecoration: "none",
              }}
            >
              ← Back to Blog
            </Link>
            <a
              href="https://www.writeswift.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 14, padding: "10px 24px" }}
            >
              Try WriteSwift Free →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
