/**
 * Admin utilities for managing blog posts and articles
 * These can be used in server actions or API routes
 */

import { supabase, type BlogPost, type Article } from './supabase'

/**
 * Bulk operations for blog posts
 */
export const blogAdmin = {
  /**
   * Get all blog posts including unpublished drafts
   */
  async getAllPosts(includeUnpublished = true) {
    let query = supabase.from('blog_posts').select('*')
    query = query.order('date', { ascending: false })
    const { data, error } = await query
    if (error) throw error
    return data || []
  },

  /**
   * Get featured posts
   */
  async getFeaturedPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('featured', true)
      .order('date', { ascending: false })
    if (error) throw error
    return data || []
  },

  /**
   * Get posts by category
   */
  async getPostsByCategory(category: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('category', category)
      .order('date', { ascending: false })
    if (error) throw error
    return data || []
  },

  /**
   * Bulk create posts
   */
  async bulkCreate(posts: BlogPost[]) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(posts)
      .select()
    if (error) throw error
    return data || []
  },

  /**
   * Bulk update posts
   */
  async bulkUpdate(
    ids: string[],
    updates: Partial<BlogPost>
  ) {
    const promises = ids.map((id) =>
      supabase
        .from('blog_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
    )
    const results = await Promise.all(promises)
    const errors = results.filter((r) => r.error)
    if (errors.length > 0) {
      throw new Error(`Bulk update failed for ${errors.length} posts`)
    }
    return results.map((r) => r.data)
  },

  /**
   * Bulk delete posts
   */
  async bulkDelete(ids: string[]) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .in('id', ids)
    if (error) throw error
    return true
  },

  /**
   * Get post statistics
   */
  async getStats() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category', { count: 'exact' })
    
    if (error) throw error

    const categories: Record<string, number> = {}
    data?.forEach((post: any) => {
      categories[post.category] = (categories[post.category] || 0) + 1
    })

    return {
      totalPosts: data?.length || 0,
      categories,
    }
  },
}

/**
 * Admin utilities for articles
 */
export const articleAdmin = {
  /**
   * Get all articles including unpublished
   */
  async getAllArticles() {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    return data || []
  },

  /**
   * Get articles by category
   */
  async getArticlesByCategory(category: string) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data || []
  },

  /**
   * Get articles by tag
   */
  async getArticlesByTag(tag: string) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .contains('tags', [tag])
      .order('created_at', { ascending: false })
    if (error) throw error
    return data || []
  },

  /**
   * Publish article
   */
  async publish(id: string) {
    const { data, error } = await supabase
      .from('articles')
      .update({ published: true })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  /**
   * Unpublish article
   */
  async unpublish(id: string) {
    const { data, error } = await supabase
      .from('articles')
      .update({ published: false })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  /**
   * Bulk publish articles
   */
  async bulkPublish(ids: string[]) {
    const { error } = await supabase
      .from('articles')
      .update({ published: true })
      .in('id', ids)
    if (error) throw error
    return true
  },

  /**
   * Get article statistics
   */
  async getStats() {
    const { data: allArticles, error: allError } = await supabase
      .from('articles')
      .select('*')

    const { data: published, error: pubError } = await supabase
      .from('articles')
      .select('*', { count: 'exact' })
      .eq('published', true)

    if (allError || pubError) throw new Error('Failed to get stats')

    return {
      total: allArticles?.length || 0,
      published: published?.length || 0,
      draft: (allArticles?.length || 0) - (published?.length || 0),
    }
  },
}

/**
 * Export-related utilities
 */
export const contentExport = {
  /**
   * Export all blog posts as JSON
   */
  async exportBlogPostsAsJSON() {
    const posts = await blogAdmin.getAllPosts()
    return JSON.stringify(posts, null, 2)
  },

  /**
   * Export all articles as JSON
   */
  async exportArticlesAsJSON() {
    const articles = await articleAdmin.getAllArticles()
    return JSON.stringify(articles, null, 2)
  },

  /**
   * Export all content as CSV
   */
  async exportAsCSV() {
    const posts = await blogAdmin.getAllPosts()
    const articles = await articleAdmin.getAllArticles()

    const postRows = posts.map((p: any) => ({
      type: 'blog_post',
      title: p.title,
      slug: p.slug,
      category: p.category,
      date: p.date,
      created_at: p.created_at,
    }))

    const articleRows = articles.map((a: any) => ({
      type: 'article',
      title: a.title,
      slug: a.slug,
      category: a.category,
      published: a.published,
      created_at: a.created_at,
    }))

    const allRows = [...postRows, ...articleRows]

    // Convert to CSV
    const headers = Object.keys(allRows[0] || {})
    const csv = [
      headers.join(','),
      ...allRows.map((row: any) =>
        headers.map((h) => `"${row[h] || ''}"`.replace(/"/g, '""')).join(',')
      ),
    ].join('\n')

    return csv
  },
}
