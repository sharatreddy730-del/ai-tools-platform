import { supabase } from '@/lib/supabase'

export default async function sitemap() {

    const { data } = await supabase
        .from("seo_pages")
        .select("slug")

    const dynamicPages = (data || []).map(page => ({
        url: `http://localhost:3000/tools/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    // Add static pages too
    const staticPages = [
        {
            url: 'http://localhost:3000',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ]

    return [...staticPages, ...dynamicPages]
}