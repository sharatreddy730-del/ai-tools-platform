import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import 'dotenv/config';

// 1. Setup Clients
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) throw new Error("Missing Supabase env vars");
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateAuthorityContent() {
    const specificSlugs = [
        'amazon-title-generator',
        'shopify-product-description',
        'ebay-listing-generator',
        'ai-roadmap-generator'
    ];

    console.log("Fetching tools from database...");
    
    const { data: q1, error: e1 } = await supabase
        .from('seo_pages')
        .select('*')
        .in('slug', specificSlugs);
        
    if (e1) {
        console.error("Error fetching specific tools", e1);
        return;
    }

    const { data: q2, error: e2 } = await supabase
        .from('seo_pages')
        .select('*')
        .not('slug', 'in', `(${specificSlugs.join(',')})`)
        .limit(16);

    if (e2) {
        console.error("Error fetching other tools", e2);
        return;
    }

    const tools = [...(q1 || []), ...(q2 || [])];
    
    console.log(`Successfully selected ${tools.length} authority tools to generate.`);
    
    for (let i = 0; i < tools.length; i++) {
        const tool = tools[i];
        console.log(`[${i+1}/${tools.length}] Generating: ${tool.slug}... (attempt 1/3)`);
        
        const platform = tool.platform || 'Ecommerce & Digital Marketing';
        const category = tool.category || 'SEO and Content Strategy';
        const keywords = `${tool.slug.replace(/-/g, ' ')}, best ${tool.slug.replace(/-/g, ' ')}, free ${tool.slug.replace(/-/g, ' ')}`;

        const systemPrompt = `You are an elite SEO copywriter and e-commerce expert.
Write a high-quality SEO page for this tool:

Tool name: ${tool.name}
Platform: ${platform}
Category: ${category}
Keywords: ${keywords}

Requirements:
- around 900 to 1200 words
- written for real users, not robotic
- highly original and useful
- include these sections exactly to build high value content:
  1. Introduction
  2. Example Input and Example Output
  3. How This Tool Works
  4. Why This Matters for ${platform}
  5. Benefits
  6. Best Practices
  7. Use Cases
  8. FAQ with 5 questions
- avoid generic filler
- make the content specific to the platform and use case
- output in clean HTML with <h2>, <h3>, <p>, <ul>, <li> tags. DO NOT wrap with \`\`\`html.

For the "Example Input and Example Output" section:
- Generate 3 realistic example input/output pairs for this tool.
- Each example should feel real and useful for ecommerce or SEO users.
- Include the "Input" and "Generated Output" clearly.

For the "FAQ" section:
- Write 5 strong FAQ questions and answers for this tool.
- Answers should be practical and specific, avoid generic answers.
- Use <h3> for the question and <p> for the answer.`;

        let success = false;
        let attempts = 0;

        while (!success && attempts < 3) {
            attempts++;
            try {
                const completion = await openai.chat.completions.create({
                    model: "gpt-4o",
                    messages: [{ role: "system", content: systemPrompt }],
                    temperature: 0.6,
                });

                let content = completion.choices[0].message.content || '';
                content = content.replace(/^```html\n?/, '').replace(/```$/, '');

                const { error: updateError } = await supabase
                    .from('seo_pages')
                    .update({ content: content })
                    .eq('id', tool.id);

                if (updateError) {
                    console.error(`Error saving ${tool.slug}:`, updateError);
                } else {
                    console.log(`Saved: ${tool.slug}`);
                    success = true;
                }
            } catch (e) {
                console.error(`Generation error for ${tool.slug} on attempt ${attempts}:`, e.message);
                await new Promise(r => setTimeout(r, 2000));
            }
        }
        
        if (!success) {
            console.error(`Failed to generate content for ${tool.slug} after 3 attempts.`);
        }
    }
    
    console.log("Done generating authority pages.");
}

generateAuthorityContent();
