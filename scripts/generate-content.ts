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
Write a detailed 800-1000 word SEO-optimized article in HTML for this page:

Title: ${page.name}
Target keywords: ${page.keywords ?? ""}

Requirements:
- Use clean HTML only
- Include <h2>Introduction</h2>
- Include <h2>How It Works</h2>
- Include <h2>Benefits</h2>
- Include <h2>Best Practices</h2>
- Include <h2>Use Cases</h2>
- Include <h2>FAQ</h2>
- Use paragraphs, bullet lists, and short readable sections
- Make it useful and specific
- Avoid robotic language
`

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
    })

    return response.choices[0].message.content ?? ""
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
    const { data: pages, error } = await supabase
        .from("seo_pages")
        .select("id, name, slug, keywords")
        .is("content", null)
        .limit(5)

    if (error) {
        console.error("Supabase select error:", error)
        return
    }

    if (!pages || pages.length === 0) {
        console.log("No rows found with empty content.")
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