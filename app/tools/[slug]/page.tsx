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

    return {
        title: data ? `${data.name} — Free AI Tool | AI Tools Platform` : "Free AI Tool",
        description: data?.description ?? "Discover powerful free AI tools for ecommerce sellers and creators.",
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

    const { data } = await supabase
        .from("seo_pages")
        .select("*")
        .eq("slug", slug)
        .single()

    if (!data) {
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

    const cta = getCtaForPlatform(data.platform)

    // Fetch related tools from same platform
    const { data: relatedTools } = await supabase
        .from("seo_pages")
        .select("id, name, slug, platform")
        .eq("platform", data.platform)
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