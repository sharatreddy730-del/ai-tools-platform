import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import 'dotenv/config';

// 1. Setup Clients
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) throw new Error("Missing Supabase env vars");
const supabase = createClient(supabaseUrl, supabaseServiceKey);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function addInternalLinks() {
    console.log("Fetching 20 authority pages...");
    const specificSlugs = ['amazon-title-generator', 'shopify-product-description', 'ebay-listing-generator', 'ai-roadmap-generator'];

    // fetch all tools
    const { data: q1 } = await supabase.from('seo_pages').select('*').in('slug', specificSlugs);
    const { data: q2 } = await supabase.from('seo_pages')
        .select('*')
        .neq('slug', 'amazon-title-generator')
        .neq('slug', 'shopify-product-description')
        .neq('slug', 'ebay-listing-generator')
        .neq('slug', 'ai-roadmap-generator')
        .limit(16);

    const tools = [...(q1 || []), ...(q2 || [])];

    // Fetch pool of tools for context
    const { data: allTools } = await supabase.from('seo_pages').select('slug, name, platform, category').limit(500);
    const pool = allTools || [];

    for (let i = 0; i < tools.length; i++) {
        const tool = tools[i];
        if (!tool.content) continue;
        if (tool.content.includes("Related Tools")) {
            console.log(`[${i+1}/${tools.length}] Skipping ${tool.slug} (Already has related tools)`);
            continue;
        }

        console.log(`[${i+1}/${tools.length}] Finding internal links for: ${tool.slug}...`);

        // Filter the pool down to ~60 related ones to save context window and improve relevance
        const relevantPool = pool.filter(t => t.slug !== tool.slug && (t.platform === tool.platform || t.category === tool.category));
        
        const availableToolsContext = relevantPool
            .slice(0, 60)
            .map(r => `- Name: ${r.name} (URL: /tools/${r.slug})`)
            .join('\n');

        const systemPrompt = `You are an SEO internal linking expert.
Given this tool page, suggest 8 highly relevant related tools to link internally.

Tool: ${tool.name}
Platform: ${tool.platform || 'General'}
Category: ${tool.category || 'General'}

AVAILABLE RESOURCES FOR LINKING (DO NOT MAKE UP URLS, USE ONLY THESE):
${availableToolsContext}

Requirements:
- only suggest closely related tools
- organize by relevance
- short anchor-text style names (e.g. "Amazon Title Optimization", not the exact full Name if it's too long)
- output in clean HTML as an unordered list (<ul>) with anchor tags (<a>)
- Do NOT output \`\`\`html markdown tags. Just output the raw HTML. It must start with <h2>Related AI Tools</h2>.`;

        let success = false;
        let attempts = 0;

        while (!success && attempts < 3) {
            attempts++;
            try {
                const completion = await openai.chat.completions.create({
                    model: "gpt-4o",
                    messages: [{ role: "system", content: systemPrompt }],
                    temperature: 0.2,
                });

                let linksHtml = completion.choices[0].message.content || '';
                linksHtml = linksHtml.replace(/^```[a-z]*\n?/, '').replace(/```$/, '');

                const newContent = `${tool.content}\n\n${linksHtml}`;

                const { error: updateError } = await supabase
                    .from('seo_pages')
                    .update({ content: newContent })
                    .eq('id', tool.id);

                if (updateError) {
                    console.error(`Error saving ${tool.slug}:`, updateError);
                } else {
                    console.log(`Linked tools for: ${tool.slug}`);
                    success = true;
                }
            } catch (e) {
                console.error(`Error for ${tool.slug} on attempt ${attempts}:`, (e as Error).message);
                await new Promise(r => setTimeout(r, 2000));
            }
        }
    }
    
    console.log("Done adding internal links.");
}

addInternalLinks();
