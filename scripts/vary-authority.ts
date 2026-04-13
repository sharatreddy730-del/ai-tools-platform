import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import 'dotenv/config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) throw new Error("Missing Supabase env vars");
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function varyAuthorityContent() {
    const specificSlugs = [
        'amazon-title-generator',
        'shopify-product-description',
        'ebay-listing-generator',
        'ai-roadmap-generator'
    ];

    const { data: q1 } = await supabase.from('seo_pages').select('*').in('slug', specificSlugs);
    const { data: q2 } = await supabase.from('seo_pages')
        .select('*')
        .not('slug', 'in', `(${specificSlugs.join(',')})`)
        .limit(16);

    const tools = [...(q1 || []), ...(q2 || [])];
    
    console.log(`Rewriting ${tools.length} authority tools to add natural variation.`);
    
    for (let i = 0; i < tools.length; i++) {
        const tool = tools[i];
        if (!tool.content || tool.content.length < 500) {
            console.log(`Skipping ${tool.slug} because content is too short or empty.`);
            continue;
        }

        console.log(`[${i+1}/${tools.length}] Varying content for: ${tool.slug}...`);
        
        const systemPrompt = `You are an elite SEO copywriter and e-commerce expert.
Rewrite this tool page content so it feels materially different from similar pages.

Requirements:
- keep the same topic
- change sentence structure
- change examples
- change FAQ wording
- change use cases
- make it feel unique and human
- keep SEO quality high
- output in clean HTML without markdown formatting tags

Content:
${tool.content}`;

        let success = false;
        let attempts = 0;

        while (!success && attempts < 3) {
            attempts++;
            try {
                const completion = await openai.chat.completions.create({
                    model: "gpt-4o",
                    messages: [{ role: "system", content: systemPrompt }],
                    temperature: 0.7,
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
                    console.log(`Saved variation: ${tool.slug}`);
                    success = true;
                }
            } catch (e) {
                console.error(`Variation error for ${tool.slug} on attempt ${attempts}:`, e.message);
                await new Promise(r => setTimeout(r, 2000));
            }
        }
    }
    
    console.log("Done varying authority pages.");
}

varyAuthorityContent();
