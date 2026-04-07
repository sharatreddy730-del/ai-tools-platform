import "dotenv/config"
import { createClient } from "@supabase/supabase-js"
import OpenAI from "openai"


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

async function generateContent(page: any) {
    const prompt = `
Write a detailed 800-1000 word SEO-optimized article for:

"${page.name}"

Include:
- Introduction
- How it works
- Benefits
- Best practices
- Use cases
- FAQ section

Make it human-readable, not robotic.
Target keywords: ${page.keywords}
`

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
    })

    return response.choices[0].message.content
}

async function run() {
    const { data: pages } = await supabase
        .from("seo_pages")
        .select("*")
        .is("content", null)
        .limit(50) // process in batches

    for (const page of pages || []) {
        console.log("Generating:", page.slug)

        const content = await generateContent(page)

        await supabase
            .from("seo_pages")
            .update({ content })
            .eq("id", page.id)
    }

    console.log("Done batch")
}

run()