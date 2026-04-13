import "dotenv/config"
import { createClient } from "@supabase/supabase-js"
import OpenAI from "openai"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const openaiApiKey = process.env.OPENAI_API_KEY

if (!supabaseUrl) throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing")
if (!supabaseServiceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing")
if (!openaiApiKey) throw new Error("OPENAI_API_KEY is missing")

const supabase = createClient(supabaseUrl, supabaseServiceKey)
const openai = new OpenAI({ apiKey: openaiApiKey })

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function generateContent(page: {
    id: string
    name: string
    slug: string
    keywords?: string | null
}) {
    const prompt = `
You are an expert SaaS and AI tool reviewer writing for an authoritative platform.
Write a comprehensive, engaging, and highly informative deep-dive review (800-1200 words) for the AI tool: "${page.name}".
Target keywords to naturally integrate: ${page.keywords ?? "AI tool, productivity, automation"}

REQUIREMENTS AND TONE:
- Write in clean, semantic HTML only. Do NOT wrap the output in markdown code blocks (\`\`\`html) - just output the raw HTML directly.
- DO NOT use generic, repetitive headings like "Introduction", "How It Works", "Benefits", "Use Cases", or "FAQ". 
- INSTEAD, use creative, context-specific headings tailored to what the tool actually does (e.g., "Revolutionizing Your Workflow with ${page.name}", "Where ${page.name} Falls Short", "Who Should Use This?").
- Act as an authoritative reviewer. Include genuine-sounding insights, specific pros and cons, and target demographic analysis.
- Use a mix of elements: <p>, <ul>, <ol>, <blockquote> for key takeaways, and a structured <table> for a "Pros and Cons" or "Feature Breakdown".
- Make it scannable with bold text (<strong>) where appropriate.
- Avoid robotic language like "In conclusion" or "In today's fast-paced digital world".

Ensure the formatting uses standard HTML tags that look great with basic CSS styling.
`

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
    })

    let content = response.choices[0].message.content ?? ""
    // Remove markdown formatting if present
    content = content.replace(/^```html\s*/i, '').replace(/\s*```$/i, '').trim()
    
    return content
}

async function generateWithRetry(
    page: { id: string; name: string; slug: string; keywords?: string | null },
    maxAttempts = 3
) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Generating: ${page.slug} (attempt ${attempt}/${maxAttempts})`)
            const content = await generateContent(page)
            return content
        } catch (error) {
            console.error(`Failed for ${page.slug} on attempt ${attempt}:`, error)

            if (attempt < maxAttempts) {
                await sleep(3000 * attempt)
            } else {
                throw error
            }
        }
    }

    throw new Error(`Unexpected retry failure for ${page.slug}`)
}

async function run() {
    const args = process.argv.slice(2)
    const overwrite = args.includes("--overwrite")
    const limitArg = args.find(a => a.startsWith("--limit="))
    const limit = limitArg ? parseInt(limitArg.split("=")[1]) : 30

    let query = supabase.from("seo_pages").select("id, name, slug, keywords")

    if (!overwrite) {
        query = query.is("content", null)
    } else {
        query = query.order("id", { ascending: true })
    }

    const { data: pages, error } = await query.limit(limit)

    if (error) {
        console.error("Supabase select error:", error)
        return
    }

    if (!pages || pages.length === 0) {
        console.log("No rows found matching criteria.")
        return
    }

    for (const page of pages) {
        try {
            const content = await generateWithRetry(page)

            const { error: updateError } = await supabase
                .from("seo_pages")
                .update({ content })
                .eq("id", page.id)

            if (updateError) {
                console.error(`Failed to update ${page.slug}:`, updateError)
                continue
            }

            console.log(`Saved: ${page.slug}`)
            await sleep(1500)
        } catch (error) {
            console.error(`Skipped ${page.slug} after retries:`, error)
            continue
        }
    }

    console.log("Done batch")
}

run().catch((error) => {
    console.error("Fatal script error:", error)
})