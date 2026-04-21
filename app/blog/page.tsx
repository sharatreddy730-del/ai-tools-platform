import type { Metadata } from "next"
import Link from "next/link"
import { getBlogPosts, type BlogPost } from "@/lib/supabase"

export const metadata: Metadata = {
  title: "Blog — HubToolsAI | Tips, Guides & Insights for Sellers",
  description:
    "Expert guides on AI content generation, ecommerce SEO, goal tracking, and subscription management. Practical tips for Amazon, Shopify, and eBay sellers.",
  keywords:
    "AI tools blog, ecommerce tips, Amazon seller guide, AI content writing, Shopify SEO, product listing optimization",
}

// Legacy POSTS array as fallback data
const FALLBACK_POSTS: BlogPost[] = [
  {
    slug: "how-ai-is-changing-ecommerce-listings",
    category: "AI & Ecommerce",
    date: "March 28, 2026",
    read_time: "6 min read",
    title: "How AI Is Transforming Ecommerce Product Listings in 2026",
    excerpt:
      "AI-generated product listings are no longer a novelty — they're becoming a competitive necessity. We explore how sellers on Amazon, Shopify, and eBay are using AI to write better copy faster, and what it means for those who haven't adopted it yet.",
    body: `
The landscape of ecommerce content has shifted dramatically over the past two years. What used to take a skilled copywriter hours — crafting keyword-rich product titles, compelling bullet points, and SEO-optimized descriptions — can now be accomplished in seconds with the right AI tools.

**Why Traditional Listing Writing No Longer Scales**

Independent sellers listing hundreds of SKUs face an impossible task if they rely on manual writing alone. Each platform has its own character limits, keyword priorities, and buyer psychology. Amazon's A9 algorithm rewards backend keyword density and engagement signals. Shopify SEO depends on structured metadata and natural-language copy. eBay penalizes thin descriptions. Writing for all three simultaneously, at scale, is a full-time job.

**How AI Tools Like WriteSwift Close the Gap**

AI tools purpose-built for ecommerce understand platform-specific rules. They don't just generate readable text — they produce:
- Amazon titles within character limits with primary keywords front-loaded
- Bullet points that address buyer objections in order of importance
- Backend keyword suggestions based on real search volume data
- Shopify meta descriptions optimized for click-through rates

**The Results Are Real**

Sellers who adopt AI-assisted listing workflows report significant time savings — tasks that took 45 minutes per SKU now take under 5. More importantly, optimized listings tend to rank better and convert at higher rates, directly impacting revenue.

The sellers who will fall behind in 2026 are not those who lack products or inventory — they're those who underestimate how much copy quality influences discoverability and buyer trust.
    `,
  },
  {
    slug: "amazon-seo-tips-2026",
    category: "Amazon SEO",
    date: "March 20, 2026",
    read_time: "8 min read",
    title: "Amazon SEO in 2026: What Actually Works (And What Doesn't)",
    excerpt:
      "Amazon's A9/A10 algorithm has evolved. Keyword stuffing is dead, and engagement signals matter more than ever. Here's what top sellers are doing differently right now.",
    body: `
Amazon SEO is one of the most misunderstood disciplines in ecommerce. Many sellers still rely on advice from 2021 — keyword stuffing, exact-match repetition, and backend keyword spam — that no longer works and may actively hurt rankings.

**What the A10 Algorithm Prioritizes**

Amazon's current algorithm weighs several factors above raw keyword presence:
1. **Click-Through Rate (CTR)** — Does your listing get clicked when it appears in search results?
2. **Conversion Rate (CVR)** — What percentage of visitors actually buy?
3. **Sales Velocity** — Are you generating consistent, growing sales?
4. **Review Quality & Recency** — Fresh, positive reviews signal ongoing buyer satisfaction

**Title Optimization That Actually Works**

The title remains the highest-weight field, but structure matters. The winning formula is:
*Brand + Primary Keyword + Key Feature + Secondary Keyword + Size/Quantity/Color (if applicable)*

This structure satisfies both human readability and algorithmic parsing. Titles that read naturally tend to earn higher CTR, which feeds the algorithm positively.

**Bullet Points: Address Objections, Not Just Features**

Top-converting bullet points follow a Problem → Solution → Benefit structure. Instead of "Made of stainless steel," write "Built to last with marine-grade stainless steel — no rust, no stains, dishwasher safe." You're solving a concern (durability/cleaning) before it becomes a reason not to buy.

**Backend Keywords: Quality Over Quantity**

The backend keyword field allows 250 bytes. Don't repeat words already in your title or bullets. Use Spanish translations of important keywords if you sell to bilingual markets. Include common misspellings of your product name.

The sellers consistently outranking competitors in 2026 are those who treat listings as conversion-rate optimization exercises, not just keyword exercises.
    `,
  },
  {
    slug: "subscription-management-for-small-businesses",
    category: "Business Finance",
    date: "March 12, 2026",
    read_time: "5 min read",
    title: "The Hidden Subscription Problem Costing Small Businesses Hundreds Per Year",
    excerpt:
      "The average small business pays for 12–18 SaaS subscriptions. Research shows 30% of those go unused. Here's how to conduct a subscription audit and reclaim that budget for growth.",
    body: `
SaaS subscription creep is one of the most common — and most overlooked — financial drains on small businesses and solo entrepreneurs. It happens gradually: you sign up for a free trial, forget to cancel, start another tool to solve a new problem, and months later you're paying for four tools that overlap in functionality.

**The Numbers Are Sobering**

Studies consistently show the average professional wastes $348+ per year on forgotten or underutilized subscriptions. For small businesses with teams, that number multiplies per employee. A five-person team could easily be bleeding $1,500–$2,000 annually in redundant SaaS spend.

**How Subscription Creep Happens**

1. **Free trials that auto-convert** — You forget the 14-day window ends
2. **Annual plans forgotten after the first month** — Paid upfront, used for a week, then abandoned
3. **Tool duplication** — You're paying for Zapier, Make, and a custom automation tool simultaneously
4. **Role changes** — Tools purchased for a project that ended, still renewing

**The Audit Process**

An effective subscription audit starts with your credit card and bank statements. Filter for recurring charges over the past 3 months. Categorize each by:
- **Active & Essential** — Used weekly, core to operations
- **Active & Optional** — Used occasionally, worth evaluating alternatives
- **Inactive** — Cancel immediately

Most people discover at least 2–3 cancellable subscriptions they had completely forgotten about.

**Making This a Habit, Not a One-Time Fix**

The best time to cancel a subscription you don't need is before you're charged. Setting renewal alerts — 7 days before each billing date — gives you time to evaluate whether you still need the tool. AI tools like SubSave automate this, monitoring your subscriptions and alerting you before renewals so you're always making active, not passive, financial decisions.
    `,
  },
  {
    slug: "goal-tracking-habits-that-stick",
    category: "Productivity",
    date: "March 5, 2026",
    read_time: "7 min read",
    title: "Why Most Goal Trackers Fail You — And What Science Says Actually Works",
    excerpt:
      "Apps that just log your progress don't change your behavior. The science of habit formation points to a different approach: one that uses pattern recognition and timely feedback to build streaks that last.",
    body: `
The goal-tracking app market is massive and growing. Yet research on habit formation suggests most apps fundamentally misunderstand what makes habits stick. They focus on logging — recording what you did — rather than intervening at the moments when you're most likely to fail.

**The Logging Trap**

Most habit apps are passive. You open them, tap that you completed a workout, and the app celebrates with a checkmark. This feels productive but creates a false sense of progress. You're tracking your behavior without actually improving it.

The problem is: when you miss a day, the app just... stops your streak. It doesn't ask why. It doesn't look for patterns. It doesn't suggest an adjustment. It just waits for you to come back.

**What Behavioral Science Actually Shows**

Research consistently highlights three factors that determine whether habits stick:
1. **Cue consistency** — Habits anchored to existing routines (after coffee, before bed) survive disruptions better
2. **Friction reduction** — The easier a behavior is to start, the more likely it continues
3. **Timely feedback loops** — Feedback closest in time to the behavior is most influential

Generic apps address none of these. They're essentially digital journals.

**The AI Difference**

AI-powered goal tracking can analyze your behavioral data to find *your* patterns — when you're most likely to complete tasks, which habits tend to cluster together, and where your routines break down. That kind of personalized insight is what separates tools that change behavior from tools that just record it.

For example: if your data shows you consistently skip workouts on Tuesdays after late Monday evenings, an intelligent tracker can flag that pattern and suggest scheduling a shorter session or shifting the habit to Wednesday. That specific, contextual nudge is more valuable than any generic "You missed a day!" notification.

Building habits that last requires tools that learn your life, not just log it.
    `,
  },
  {
    slug: "shopify-product-description-guide",
    category: "Shopify",
    date: "February 26, 2026",
    read_time: "6 min read",
    title: "Writing Shopify Product Descriptions That Rank on Google and Convert Visitors",
    excerpt:
      "Shopify product pages are both a sales pitch and an SEO asset. Most store owners optimize for one and ignore the other. Here's how to write descriptions that do both — with AI.",
    body: `
Shopify gives you a clean product page canvas. What you put on it determines whether you get found on Google and whether visitors who arrive actually buy. Most store owners treat these as separate problems. They're not.

**Why Shopify Product SEO Is Underutilized**

Unlike Amazon, where discoverability is largely internal, Shopify stores rely heavily on Google for organic traffic. A well-optimized product page can rank for high-intent keywords like "waterproof hiking boots wide width" and capture buyers who are already ready to purchase.

The elements Google evaluates for product pages:
- **Page title and meta description** (click-through rate signal)
- **H1 heading** (should include primary keyword naturally)
- **Product description length and quality** (thin content ranks poorly)
- **URL structure** (clean/readable slugs perform better)
- **Page load speed and Core Web Vitals**

**The Description Formula That Converts**

High-converting Shopify descriptions follow a structure:
1. **Opening hook** — Address the buyer's primary desire or pain point in one sentence
2. **Feature-benefit pairs** — For each feature, state the user benefit explicitly
3. **Trust signals** — Returns policy, material certifications, warranty
4. **Closing CTA** — Reinforce the key reason to buy now

Avoid bullet-point-only descriptions. Google prefers paragraph text that reads naturally, and buyers respond better to copy that tells a story about how the product improves their life.

**Where AI Accelerates This**

Writing a single high-quality Shopify description following this structure takes 20–30 minutes for a skilled copywriter. AI tools built for ecommerce can produce a solid first draft in seconds, covering the SEO structure and benefit-driven language automatically. The seller's job becomes editing for brand voice — a 5-minute task rather than a 30-minute one.

At scale across a catalog of 100+ products, this compounds into hundreds of hours saved and a dramatically more competitive store.
    `,
  },
]

export default async function BlogPage() {
  // Fetch blog posts from Supabase
  let posts = await getBlogPosts()
  
  // If no posts in database, use fallback data
  if (posts.length === 0) {
    posts = FALLBACK_POSTS
  }

  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="orb orb-purple animate-float" style={{ width: 400, height: 400, top: -150, right: -100 }} />
        <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -100, left: -50 }} />

        <div className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 60 }}>
          <span className="badge">📝 Insights & Guides</span>
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
            The <span className="gradient-text">AI Tools</span> Blog
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 18,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Practical guides, expert tips, and data-backed strategies for ecommerce sellers,
            content creators, and growth-focused professionals.
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section>
        <div className="section" style={{ paddingTop: 20, paddingBottom: 100 }}>

          {/* Featured Post */}
          <div
            className="glass-card"
            style={{
              padding: 40,
              marginBottom: 40,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 24,
            }}
          >
            <div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
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
              ⭐ Featured
            </span>
            <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>
              {posts[0]?.category}
            </span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {posts[0]?.date} · {posts[0]?.read_time}
            </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: 16,
                  letterSpacing: -0.5,
                }}
              >
                {posts[0]?.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
                {posts[0]?.excerpt}
              </p>
              <Link
                href={`/blog/${posts[0]?.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--accent-purple)",
                  textDecoration: "none",
                }}
              >
                Read Article →
              </Link>
            </div>
          </div>

          {/* Remaining Posts Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="glass-card"
                style={{ padding: 28, display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: "rgba(59, 130, 246, 0.1)",
                      color: "var(--accent-blue)",
                      border: "1px solid rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {post.date} · {post.read_time}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: 12,
                    letterSpacing: -0.3,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 20,
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--accent-purple)",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-secondary)" }}>
        <div className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 60 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>
            Put These Tips into Practice with{" "}
            <span className="gradient-text">AI Tools</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Don&apos;t just read about AI — use it. Start generating better listings, tracking your goals, and cutting
            subscription waste today.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Try WriteSwift Free →
            </a>
            <Link href="/tools" className="btn-secondary">
              Browse Free Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}