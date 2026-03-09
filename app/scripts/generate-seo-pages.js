import { createClient } from '@supabase/supabase-js'
import slugify from 'slugify'
import OpenAI from 'openai'
import fs from 'fs'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY
)

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const keywords = fs.readFileSync('keywords.txt', 'utf8').split('\n')

async function generatePages() {

    for (const keyword of keywords) {

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: `Write a short SEO description for: ${keyword}`
            }]
        })

        const description = completion.choices[0].message.content

        const slug = slugify(keyword, { lower: true })

        const { error } = await supabase
            .from("seo_pages")
            .insert({
                name: keyword,
                slug: slug,
                platform: "Ecommerce",
                category: "AI Tools",
                description: description
            })

        if (error) {
            console.error("Error inserting:", keyword, error.message)
        } else {
            console.log("Inserted:", keyword)
        }

    }

}

generatePages()