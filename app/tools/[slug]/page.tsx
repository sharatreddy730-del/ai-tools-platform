import { supabase } from "@/lib/supabase"
import Link from "next/link"
import AIToolUI from "@/components/ai-tool-ui"
import AdUnit from "@/components/AdUnit"

// Map platforms to their relevant SaaS product
function getCtaForPlatform(platform: string) {
    const p = (platform || "").toLowerCase()
    if (["amazon", "ebay", "shopify", "etsy", "ecommerce", "walmart"].includes(p)) {
        return { label: "Try WriteSwift.ai", url: "https://www.writeswift.ai", color: "var(--accent-purple)" }
    }
    if (["goals", "growth", "analytics", "productivity"].includes(p)) {
        return { label: "Try PrimePro.co", url: "https://www.primepro.co", color: "var(--accent-blue)" }
    }
    if (["subscriptions", "finance", "savings"].includes(p)) {
        return { label: "Try SubSave.ai", url: "https://www.subsave.ai", color: "var(--accent-cyan)" }
    }
    return { label: "Try WriteSwift.ai", url: "https://www.writeswift.ai", color: "var(--accent-purple)" }
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const { data } = await supabase
        .from("seo_pages")
        .select("*")
        .eq("slug", slug)
        .single()

    if (slug.includes("-vs-")) {
        const [a, b] = slug.split("-vs-")

        return {
            title: `${a} vs ${b} (2026) – Best AI Tool Comparison`,
            description: `Compare ${a} vs ${b}. Features, pricing, pros & cons.`,
        }
    }
    const isThinContent = !data?.content || data.content.length < 500;

    return {
        title: data ? `${data.name} — Free AI Tool | HubToolsAI` : "Free AI Tool",
        description: data?.description ?? "Discover powerful free AI tools for ecommerce sellers and creators.",
        robots: isThinContent ? { index: false, follow: false } : { index: true, follow: true },
    }
}


export async function generateStaticParams() {
    const { data } = await supabase
        .from("seo_pages")
        .select("slug")

    return (data ?? []).map((page) => ({
        slug: page.slug
    }))
}


export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const isVsPage = slug.includes("-vs-")

    let toolA = ""
    let toolB = ""

    if (isVsPage) {
        const parts = slug.split("-vs-")
        toolA = parts[0]?.replace(/-/g, " ")
        toolB = parts[1]?.replace(/-/g, " ")
    }

    const { data } = await supabase
        .from("seo_pages")
        .select("*")
        .eq("slug", slug)
        .single()

    if (!data && !isVsPage) {
        return (
            <main>
                <div className="section" style={{ textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Tool Not Found</h1>
                    <p style={{ color: "var(--text-secondary)", marginBottom: 32 }}>
                        The tool you&apos;re looking for doesn&apos;t exist or has been removed.
                    </p>
                    <Link href="/tools" className="btn-primary">Browse All Tools →</Link>
                </div>
            </main>
        )
    }

    // ✅ VS PAGE RENDER — return early before accessing data.platform
    // (data may be null for VS pages that aren't in the DB)

    if (isVsPage) {
        return (
            <main>

                {/* HERO */}
                <section className="section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 60 }}>
                    <nav style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
                        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
                        <span style={{ margin: "0 8px" }}>/</span>
                        <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Tools</Link>
                        <span style={{ margin: "0 8px" }}>/</span>
                        <span style={{ color: "var(--text-secondary)" }}>{toolA} vs {toolB}</span>
                    </nav>

                    <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginBottom: 20 }}>
                        {toolA} vs {toolB}: Which AI Tool Is Better in 2026?
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: 18, lineHeight: 1.8 }}>
                        Choosing between <strong>{toolA}</strong> and <strong>{toolB}</strong> depends
                        heavily on your specific workflow. In this comprehensive comparison, we evaluate both
                        platforms on output quality, ease of use, pricing, and best use cases to help you
                        decide which AI tool belongs in your tech stack.
                    </p>
                </section>

                <AdUnit />

                {/* COMPARISON TABLE */}
                <section className="section" style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: -0.5 }}>Head-to-Head Comparison</h2>

                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", marginBottom: 40 }}>
                            <thead>
                                <tr style={{ borderBottom: "2px solid var(--border-subtle)" }}>
                                    <th style={{ padding: "16px 12px", color: "var(--text-primary)", fontWeight: 700 }}>Feature Category</th>
                                    <th style={{ padding: "16px 12px", color: "var(--text-primary)", fontWeight: 700 }}>{toolA}</th>
                                    <th style={{ padding: "16px 12px", color: "var(--text-primary)", fontWeight: 700 }}>{toolB}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                                    <td style={{ padding: "16px 12px", color: "var(--text-secondary)" }}>Best For</td>
                                    <td style={{ padding: "16px 12px" }}>Ecommerce & Listings</td>
                                    <td style={{ padding: "16px 12px" }}>General Purpose AI</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                                    <td style={{ padding: "16px 12px", color: "var(--text-secondary)" }}>Ease of Use</td>
                                    <td style={{ padding: "16px 12px" }}>⭐⭐⭐⭐⭐</td>
                                    <td style={{ padding: "16px 12px" }}>⭐⭐⭐⭐</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                                    <td style={{ padding: "16px 12px", color: "var(--text-secondary)" }}>SEO Features</td>
                                    <td style={{ padding: "16px 12px" }}>Built-in (A9, Shopify)</td>
                                    <td style={{ padding: "16px 12px" }}>Requires prompt engineering</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                                    <td style={{ padding: "16px 12px", color: "var(--text-secondary)" }}>Pricing</td>
                                    <td style={{ padding: "16px 12px" }}>Accessible / High Value</td>
                                    <td style={{ padding: "16px 12px" }}>Standard Enterprise</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <AdUnit />

                {/* PROS & CONS */}
                <section className="section" style={{ maxWidth: 900, margin: "0 auto", background: "var(--bg-secondary)", borderRadius: 16, padding: "40px" }}>
                    <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 32, letterSpacing: -0.5 }}>Pros & Cons</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
                        <div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--text-primary)" }}>{toolA}</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{ marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                    <span style={{ position: "absolute", left: 0, color: "#10b981" }}>✓</span>
                                    Produces platform-specific formats automatically
                                </li>
                                <li style={{ marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                    <span style={{ position: "absolute", left: 0, color: "#10b981" }}>✓</span>
                                    Highly optimized for search engine visibility
                                </li>
                                <li style={{ marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                    <span style={{ position: "absolute", left: 0, color: "#ef4444" }}>✗</span>
                                    Narrower focus compared to general AI
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--text-primary)" }}>{toolB}</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li style={{ marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                    <span style={{ position: "absolute", left: 0, color: "#10b981" }}>✓</span>
                                    Extremely flexible for varied tasks
                                </li>
                                <li style={{ marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                    <span style={{ position: "absolute", left: 0, color: "#10b981" }}>✓</span>
                                    Massive library of integrations
                                </li>
                                <li style={{ marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                    <span style={{ position: "absolute", left: 0, color: "#ef4444" }}>✗</span>
                                    Requires complex prompting for ecommerce
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <AdUnit />

                {/* VERDICT */}
                <section className="section" style={{ maxWidth: 900, margin: "0 auto", paddingBottom: 80 }}>
                    <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16, letterSpacing: -0.5 }}>Final Verdict</h2>

                    <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                        When comparing {toolA} vs {toolB}, the winner depends entirely on your use case.
                        If you are an ecommerce seller, marketer, or agency needing ready-to-publish product
                        descriptions that actually rank, <strong>{toolA}</strong> is the clear choice. It removes
                        the friction of prompt engineering and delivers structured, SEO-friendly output.
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                        However, if you are looking for a general-purpose AI assistant to draft emails, write
                        code, or summarize documents, <strong>{toolB}</strong> offers the broader versatility
                        required for those tasks.
                    </p>

                    {/* CTA */}
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <a
                            href="https://www.writeswift.ai"
                            className="btn-primary"
                            style={{ fontSize: 16, padding: "14px 32px" }}
                        >
                            Try {toolA} Free →
                        </a>
                        <Link
                            href="/tools"
                            className="btn-secondary"
                            style={{ fontSize: 16, padding: "14px 32px" }}
                        >
                            Browse More Tools
                        </Link>
                    </div>
                </section>

            </main>
        )
    }

    // data is guaranteed non-null here: isVsPage is false and the 404 guard above handled !data
    const cta = getCtaForPlatform(data!.platform)

    // Fetch related tools from same platform
    const { data: relatedTools } = await supabase
        .from("seo_pages")
        .select("id, name, slug, platform")
        .eq("platform", data!.platform)
        .neq("slug", slug)
        .limit(6)

    return (
        <main>
            {/* HERO */}
            <section style={{ position: "relative", overflow: "hidden" }}>
                <div className="orb orb-purple animate-float" style={{ width: 400, height: 400, top: -150, right: -100 }} />
                <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -100, left: -50 }} />

                <div className="section" style={{ paddingTop: 40, paddingBottom: 60 }}>

                    {/* Breadcrumb */}
                    <nav style={{ marginBottom: 32, fontSize: 14, color: "var(--text-muted)" }}>
                        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
                        <span style={{ margin: "0 10px" }}>/</span>
                        <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Tools</Link>
                        <span style={{ margin: "0 10px" }}>/</span>
                        <span style={{ color: "var(--text-secondary)" }}>{data.name}</span>
                    </nav>

                    <div style={{ maxWidth: 720 }}>
                        {data.platform && (
                            <span style={{
                                display: "inline-block",
                                fontSize: 12,
                                fontWeight: 600,
                                padding: "5px 14px",
                                borderRadius: 100,
                                background: "rgba(139, 92, 246, 0.1)",
                                color: "var(--accent-purple)",
                                border: "1px solid rgba(139, 92, 246, 0.2)",
                                marginBottom: 20,
                            }}>
                                {data.platform}
                            </span>
                        )}

                        <h1 style={{
                            fontSize: "clamp(32px, 5vw, 52px)",
                            fontWeight: 800,
                            letterSpacing: -1.5,
                            lineHeight: 1.1,
                            marginBottom: 20,
                        }}>
                            {data.name}
                        </h1>

                        <p style={{
                            fontSize: 18,
                            color: "var(--text-secondary)",
                            lineHeight: 1.8,
                            marginBottom: 32,
                        }}>
                            {data.description}
                        </p>
                        <AdUnit />
                        <AIToolUI toolName={data.name} />
                    </div>
                </div>
            </section>


            {/* WHAT THIS TOOL DOES */}
            <section style={{ background: "var(--bg-secondary)" }}>
                <div className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
                        {[
                            { icon: "⚡", title: "Instant Results", desc: `Get ${data.name.toLowerCase()} output in seconds using advanced AI models.` },
                            { icon: "🎯", title: "Optimized for SEO", desc: "Every output is tailored for search engine visibility and conversion." },
                            { icon: "💰", title: "100% Free", desc: "No credit card required. Start using this tool right away." },
                        ].map(item => (
                            <div key={item.title} className="glass-card" style={{ padding: 28 }}>
                                <div className="feature-icon">{item.icon}</div>
                                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="section" style={{ paddingTop: 60, paddingBottom: 60, maxWidth: 850 }}>
                    <AdUnit />
                    
                    {data.content ? (
                        <div 
                            className="editorial-content" 
                            dangerouslySetInnerHTML={{ __html: data.content }} 
                        />
                    ) : (
                        <>
                            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
                                How to Use {data.name}
                            </h2>

                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                                {data.name} helps ecommerce sellers generate optimized content quickly.
                                Simply enter your product name or keyword, and the AI will generate
                                high-quality results tailored for platforms like {data.platform}.
                            </p>

                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                                This tool is designed to improve search visibility, increase click-through
                                rates, and help your listings stand out in competitive marketplaces.
                            </p>
                        </>
                    )}

                </div>
            </section>
            <AdUnit />
            {/* RELATED TOOLS */}
            {relatedTools && relatedTools.length > 0 && (
                <section style={{ background: "var(--bg-secondary)" }}>
                    <div className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
                        <div className="section-header" style={{ marginBottom: 40 }}>
                            <h2 style={{ fontSize: 28 }}>Related <span className="gradient-text">{data.platform}</span> Tools</h2>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                            {relatedTools.map((tool) => (
                                <Link
                                    key={tool.id}
                                    href={`/tools/${tool.slug}`}
                                    className="glass-card"
                                    style={{ padding: 24, textDecoration: "none", color: "inherit" }}
                                >
                                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                                        {tool.name}
                                    </h3>
                                    <span style={{ fontSize: 13, color: "var(--accent-purple)", fontWeight: 600 }}>
                                        Open tool →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <AdUnit />
            {/* RELATED GUIDES */}
            <section style={{ background: "var(--bg-primary)" }}>
                <div className="section" style={{ paddingTop: 60, paddingBottom: 60, borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="section-header" style={{ marginBottom: 40, textAlign: "center" }}>
                        <h2 style={{ fontSize: 28 }}>Free <span className="gradient-text">Guides & Resources</span></h2>
                        <p style={{ color: "var(--text-secondary)" }}>Learn how to maximize your results with expert strategies.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
                        <Link href="/blog/how-ai-is-changing-ecommerce-listings" className="glass-card" style={{ padding: 24, textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: 12, color: "var(--accent-purple)", fontWeight: 700, marginBottom: 8 }}>AI & Ecommerce</span>
                            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>How AI Is Transforming Product Listings in 2026</h3>
                            <span style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: "auto", fontWeight: 600 }}>Read guide →</span>
                        </Link>
                        <Link href="/blog/amazon-seo-tips-2026" className="glass-card" style={{ padding: 24, textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: 12, color: "var(--accent-blue)", fontWeight: 700, marginBottom: 8 }}>Marketplace SEO</span>
                            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>Amazon SEO in 2026: What Actually Works</h3>
                            <span style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: "auto", fontWeight: 600 }}>Read guide →</span>
                        </Link>
                        <Link href="/blog/shopify-product-description-guide" className="glass-card" style={{ padding: 24, textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: 12, color: "var(--accent-cyan)", fontWeight: 700, marginBottom: 8 }}>Store Optimization</span>
                            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>Writing Shopify Descriptions That Convert</h3>
                            <span style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: "auto", fontWeight: 600 }}>Read guide →</span>
                        </Link>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 32 }}>
                        <Link href="/blog" style={{ fontSize: 15, fontWeight: 600, color: "var(--accent-purple)", textDecoration: "none" }}>
                            View all guides →
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* CTA BANNER */}
            <section style={{ position: "relative", overflow: "hidden" }}>
                <div className="orb orb-purple" style={{ width: 300, height: 300, top: -100, left: -50 }} />
                <div className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>
                        Ready to <span className="gradient-text">Get Started</span>?
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                        Unlock the full power of AI for your business. Generate, track, and save — all in one platform.
                    </p>
                    <a href={cta.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24, fontSize: 16, padding: "14px 36px" }}>
                        {cta.label} →
                    </a>
                </div>
            </section>
        </main>
    )
}