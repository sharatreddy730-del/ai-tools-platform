import { supabase } from '@/lib/supabase'
const BASE_URL = "https://hubtoolsai.com"
export default async function sitemap() {


    const { data } = await supabase
        .from("seo_pages")
        .select("slug")

    const dynamicPages = (data || []).map(page => ({
        url: `${BASE_URL}/tools/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    // Add static pages too
    const staticPages = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/tools`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        }
    ]

    return [...staticPages, ...dynamicPages]
}