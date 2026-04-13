import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const openaiApiKey = process.env.OPENAI_API_KEY

if (!supabaseUrl) throw new Error('NEXT_PUBLIC_SUPABASE_URL is missing')
if (!supabaseServiceKey) throw new Error('SUPABASE_SERVICE_ROLE_KEY is missing')
if (!openaiApiKey) throw new Error('OPENAI_API_KEY is missing')

const supabase = createClient(supabaseUrl, supabaseServiceKey)
const openai = new OpenAI({ apiKey: openaiApiKey })

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Tool-specific content templates
const toolGuides = {
  'amazon-title-generator': {
    name: 'Amazon Title Generator',
    keywords: 'amazon product title, SEO, seller tools, ecommerce',
    context: 'ecommerce sellers optimizing Amazon listings',
  },
  'shopify-product-description': {
    name: 'Shopify Product Description',
    keywords: 'shopify product descriptions, ecommerce content, conversion optimization',
    context: 'Shopify store owners creating compelling product copy',
  },
  'ebay-listing-generator': {
    name: 'eBay Listing Generator',
    keywords: 'eBay product listings, auction descriptions, online selling',
    context: 'eBay sellers creating high-converting product listings',
  },
  'ai-roadmap-generator': {
    name: 'AI Roadmap Generator',
    keywords: 'project planning, business roadmap, goal setting',
    context: 'entrepreneurs and project managers planning strategic initiatives',
  },
  'ai-content-generator': {
    name: 'AI Content Generator',
    keywords: 'content creation, copywriting, marketing automation',
    context: 'content creators and marketers producing high-volume material',
  },
  'ai-social-media-post-generator': {
    name: 'AI Social Media Post Generator',
    keywords: 'social media, content scheduling, engagement, marketing',
    context: 'social media managers and marketing teams scaling content production',
  },
  'ai-blog-post-writer': {
    name: 'AI Blog Post Writer',
    keywords: 'blog writing, SEO content, long-form articles',
    context: 'bloggers and content marketers creating SEO-optimized articles',
  },
  'seo-blog-generator-ai': {
    name: 'SEO Blog Generator AI',
    keywords: 'SEO optimization, blog content, search rankings',
    context: 'marketers and website owners improving search visibility',
  },
  'ai-paragraph-writer': {
    name: 'AI Paragraph Writer',
    keywords: 'paragraph generation, copywriting, content drafting',
    context: 'writers and content teams generating quick content sections',
  },
  'ai-instagram-caption-generator': {
    name: 'AI Instagram Caption Generator',
    keywords: 'Instagram content, social captions, engagement, hashtags',
    context: 'influencers and brands optimizing Instagram presence',
  },
  'ai-facebook-post-generator': {
    name: 'AI Facebook Post Generator',
    keywords: 'Facebook marketing, social content, community engagement',
    context: 'Facebook marketers and business owners building audience',
  },
  'ai-goal-tracker': {
    name: 'AI Goal Tracker',
    keywords: 'goal tracking, productivity, habit formation, progress monitoring',
    context: 'individuals and teams tracking progress toward objectives',
  },
  'product-roadmap-generator-ai': {
    name: 'Product Roadmap Generator AI',
    keywords: 'product roadmap, development planning, feature prioritization',
    context: 'product managers planning development timelines',
  },
  'business-plan-roadmap-ai': {
    name: 'Business Plan Roadmap AI',
    keywords: 'business planning, startup roadmap, strategic planning',
    context: 'entrepreneurs and business leaders charting growth paths',
  },
  'ai-monthly-planner': {
    name: 'AI Monthly Planner',
    keywords: 'monthly planning, calendar management, task organization',
    context: 'professionals managing monthly projects and deadlines',
  },
  'smart-goal-generator-ai': {
    name: 'Smart Goal Generator AI',
    keywords: 'SMART goals, goal setting, objective planning',
    context: 'teams and individuals establishing measurable goals',
  },
  'personalized-roadmap-generator': {
    name: 'Personalized Roadmap Generator',
    keywords: 'personalized planning, life planning, career roadmap',
    context: 'individuals creating customized success plans',
  },
  'ai-writing-assistant': {
    name: 'AI Writing Assistant',
    keywords: 'writing assistance, grammar, style, editing',
    context: 'writers and professionals improving written communication',
  },
  'ai-headline-generator': {
    name: 'AI Headline Generator',
    keywords: 'headlines, catchy titles, marketing headlines, copywriting',
    context: 'marketers and content creators crafting attention-grabbing titles',
  },
  'ai-article-writer-free': {
    name: 'AI Article Writer Free',
    keywords: 'free article writing, content generation, long-form writing',
    context: 'bloggers and publishers producing quality articles without cost',
  },
}

async function generateToolContent(toolKey, toolInfo) {
  const prompt = `
You are an expert SaaS and AI tool reviewer writing for HubToolsAI, a leading platform for AI tool reviews.

Write a comprehensive, authoritative, and highly unique deep-dive review (1000-1500 words) for: "${toolInfo.name}"

Context: This tool is used by ${toolInfo.context}.
Target keywords to naturally integrate: ${toolInfo.keywords}

CRITICAL REQUIREMENTS FOR HIGH-VALUE CONTENT (to pass Google AdSense):
1. Write authentic, detailed product analysis with specific features, pricing models, and real use cases
2. Use ONLY semantic HTML tags (<p>, <h3>, <h4>, <ul>, <ol>, <blockquote>, <strong>, <em>, <table>)
3. DO NOT include markdown code blocks - output raw HTML only
4. Create unique, context-specific sections (NOT generic templates)
5. Include a detailed pros/cons analysis with specific examples
6. Add actionable insights and who should/shouldn't use this tool
7. Include pricing comparison context where relevant
8. Add performance metrics or ROI indicators
9. Make content scannable with strategic use of headers and bold text
10. Ensure 1000+ words of unique, valuable information

SPECIFIC CONTENT STRUCTURE:
- Open with an engaging hook specific to the tool's value proposition
- Explain what the tool does and why it matters for the target audience
- Deep dive into 4-5 key features with real-world applications
- Detailed pros and cons table with specific examples
- Pricing and value assessment
- Best for X use case analysis
- Real alternatives comparison
- Implementation tips and best practices
- Common mistakes to avoid
- Final recommendation with specific scenarios

Write in a professional but conversational tone. Be opinionated but fair.
Avoid: "In conclusion", "In today's world", "Utilizing", generic filler phrases
Use: Specific examples, real numbers, concrete scenarios, actionable advice
`

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 2000,
  })

  let content = response.choices[0].message.content ?? ''
  // Remove markdown if present
  content = content.replace(/^```html\s*/i, '').replace(/\s*```$/i, '').trim()

  return content
}

async function generateWithRetry(toolKey, toolInfo, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`\n[${attempt}/${maxAttempts}] Generating: ${toolKey}`)
      const content = await generateToolContent(toolKey, toolInfo)

      if (content.length < 800) {
        throw new Error(`Content too short (${content.length} chars). Retrying...`)
      }

      return content
    } catch (error) {
      console.error(`  ❌ Attempt ${attempt} failed:`, error.message)
      if (attempt < maxAttempts) {
        const waitTime = 3000 * attempt
        console.log(`  ⏳ Waiting ${waitTime}ms before retry...`)
        await sleep(waitTime)
      }
    }
  }

  throw new Error(`Failed to generate content for ${toolKey} after ${maxAttempts} attempts`)
}

async function run() {
  console.log('🚀 Starting targeted tool content generation for AdSense compliance\n')
  console.log(`📝 Will generate content for ${Object.keys(toolGuides).length} tools\n`)

  let successCount = 0
  let failureCount = 0

  for (const [toolKey, toolInfo] of Object.entries(toolGuides)) {
    try {
      // First check if page exists in DB
      const { data: existingPage } = await supabase.from('seo_pages').select('id, content').eq('slug', toolKey).single()

      if (!existingPage) {
        console.log(`⚠️  ${toolKey}: Not found in database. Skipping.`)
        continue
      }

      // Generate new unique content
      const content = await generateWithRetry(toolKey, toolInfo)

      // Update in Supabase
      const { error: updateError } = await supabase
        .from('seo_pages')
        .update({ content })
        .eq('slug', toolKey)

      if (updateError) {
        console.error(`  ❌ Database update failed: ${updateError.message}`)
        failureCount++
        continue
      }

      console.log(`  ✅ Saved (${content.length} chars)`)
      successCount++

      // Rate limiting - wait between requests
      await sleep(2000)
    } catch (error) {
      console.error(`\n❌ ${toolKey}: ${error.message}\n`)
      failureCount++
      await sleep(2000)
    }
  }

  console.log(`\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`📊 RESULTS:`)
  console.log(`  ✅ Successfully generated: ${successCount}`)
  console.log(`  ❌ Failed: ${failureCount}`)
  console.log(`  📝 Total tools targeted: ${Object.keys(toolGuides).length}`)
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`)

  if (failureCount === 0) {
    console.log('🎉 All tools have been updated with unique, high-quality content!\n')
    console.log('⏳ Next steps:')
    console.log('  1. Deploy your updated site')
    console.log('  2. Allow 24-48 hours for Google to recrawl')
    console.log('  3. Request review in Google AdSense console\n')
  }
}

run().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
