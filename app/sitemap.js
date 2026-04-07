import { supabase } from '@/lib/supabase'
const BASE_URL = "https://hubtoolsai.com"
export default async function sitemap() {

    const { data } = await supabase
        .from("seo_pages")
        .select("slug")

    const dynamicToolPages = (data || []).map(page => ({
        url: `${BASE_URL}/tools/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const staticPages = [
        { url: `${BASE_URL}`,          lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
        { url: `${BASE_URL}/tools`,    lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
        { url: `${BASE_URL}/blog`,     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
        { url: `${BASE_URL}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/contact`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/privacy`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${BASE_URL}/terms`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        // Blog posts
        { url: `${BASE_URL}/blog/how-ai-is-changing-ecommerce-listings`,         lastModified: new Date('2026-03-28'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/blog/amazon-seo-tips-2026`,                          lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/blog/subscription-management-for-small-businesses`,  lastModified: new Date('2026-03-12'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/blog/goal-tracking-habits-that-stick`,               lastModified: new Date('2026-03-05'), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/blog/shopify-product-description-guide`,             lastModified: new Date('2026-02-26'), changeFrequency: 'monthly', priority: 0.8 },
    ]

    return [...staticPages, ...dynamicToolPages]
}