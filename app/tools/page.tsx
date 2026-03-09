import Link from 'next/link'
import { supabase } from '@/lib/supabase'

interface Tool {
    id: string
    slug: string
    name: string
    description: string
    category: string
    platform: string
}

export const metadata = {
    title: "Free AI Tools for Ecommerce | SEO Content Generators",
    description: "Browse 50+ free AI-powered tools for Amazon, Shopify, eBay sellers. Generate product titles, descriptions, and SEO content instantly.",
}

export default async function ToolsPage() {
    const { data: tools, error } = await supabase
        .from('seo_pages')
        .select('*')
        .order('name', { ascending: true })

    if (error) {
        console.error('Error fetching tools:', error)
    }

    const toolsList = (tools ?? []) as Tool[]

    // Get unique platforms for filter display
    const platforms = [...new Set(toolsList.map(t => t.platform).filter(Boolean))]

    return (
        <main>
            {/* HERO */}
            <section style={{ position: "relative", overflow: "hidden" }}>
                <div className="orb orb-purple animate-float" style={{ width: 400, height: 400, top: -150, right: -100 }} />
                <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: -100, left: -50 }} />

                <div className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 40 }}>
                    <span className="badge">🔧 Free AI Tools</span>
                    <h1 style={{
                        fontSize: "clamp(32px, 5vw, 56px)",
                        fontWeight: 800,
                        letterSpacing: -1.5,
                        lineHeight: 1.1,
                        marginTop: 16,
                    }}>
                        AI-Powered Tools for{" "}
                        <span className="gradient-text">Ecommerce Sellers</span>
                    </h1>
                    <p style={{
                        color: "var(--text-secondary)",
                        fontSize: 18,
                        maxWidth: 600,
                        margin: "20px auto 0",
                        lineHeight: 1.7,
                    }}>
                        {toolsList.length}+ free tools to generate product titles, descriptions,
                        SEO content and more for Amazon, Shopify, eBay, and other platforms.
                    </p>
                </div>
            </section>

            {/* PLATFORMS BAR */}
            {platforms.length > 0 && (
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 40px" }}>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                        <span style={{
                            padding: "8px 20px", borderRadius: 100, fontSize: 14, fontWeight: 600,
                            background: "rgba(139, 92, 246, 0.15)", color: "var(--accent-purple)",
                            border: "1px solid rgba(139, 92, 246, 0.3)",
                        }}>
                            All Tools ({toolsList.length})
                        </span>
                        {platforms.map(platform => {
                            const count = toolsList.filter(t => t.platform === platform).length
                            return (
                                <span key={platform} style={{
                                    padding: "8px 20px", borderRadius: 100, fontSize: 14, fontWeight: 500,
                                    background: "rgba(255,255,255,0.03)", color: "var(--text-secondary)",
                                    border: "1px solid var(--border-subtle)",
                                }}>
                                    {platform} ({count})
                                </span>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* TOOLS GRID */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 100px" }}>
                {toolsList.length === 0 ? (
                    <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 16 }}>
                        No tools found. Check back soon!
                    </p>
                ) : (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 20,
                    }}>
                        {toolsList.map((tool) => (
                            <Link
                                key={tool.id}
                                href={`/tools/${tool.slug}`}
                                className="glass-card"
                                style={{ padding: 28, textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
                            >
                                {tool.platform && (
                                    <span style={{
                                        alignSelf: "flex-start",
                                        fontSize: 11,
                                        fontWeight: 600,
                                        padding: "4px 12px",
                                        borderRadius: 100,
                                        background: "rgba(139, 92, 246, 0.1)",
                                        color: "var(--accent-purple)",
                                        border: "1px solid rgba(139, 92, 246, 0.2)",
                                        marginBottom: 14,
                                    }}>
                                        {tool.platform}
                                    </span>
                                )}
                                <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
                                    {tool.name}
                                </h2>
                                {tool.description && (
                                    <p style={{
                                        color: "var(--text-secondary)",
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        marginBottom: 16,
                                        flex: 1,
                                    }}>
                                        {tool.description}
                                    </p>
                                )}
                                <span style={{
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "var(--accent-purple)",
                                    marginTop: "auto",
                                }}>
                                    Use this tool →
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA */}
            <section style={{ background: "var(--bg-secondary)" }}>
                <div className="section" style={{ textAlign: "center", paddingTop: 60, paddingBottom: 60 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.5, marginBottom: 12 }}>
                        Need More Power? Try <span className="gradient-text">WriteSwift.ai</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
                        Get unlimited AI content generation, advanced SEO tools, and bulk listing creation for your ecommerce business.
                    </p>
                    <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24 }}>
                        Try WriteSwift Free →
                    </a>
                </div>
            </section>
        </main>
    )
}
