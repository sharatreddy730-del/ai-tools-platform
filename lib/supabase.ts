import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface BlogPost {
  id?: string
  slug: string
  category: string
  date: string
  read_time: string
  title: string
  excerpt: string
  body: string
  featured?: boolean
  created_at?: string
  updated_at?: string
}

export interface Article {
  id?: string
  slug: string
  title: string
  excerpt: string
  content: string
  category?: string
  tags?: string[]
  published?: boolean
  created_at?: string
  updated_at?: string
}

/**
 * Fetch all blog posts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data || []
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error(`Error fetching blog post ${slug}:`, error)
    return null
  }

  return data
}

/**
 * Create a new blog post
 */
export async function createBlogPost(post: BlogPost): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()
    .single()

  if (error) {
    console.error('Error creating blog post:', error)
    return null
  }

  return data
}

/**
 * Update a blog post
 */
export async function updateBlogPost(
  id: string,
  updates: Partial<BlogPost>
): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating blog post:', error)
    return null
  }

  return data
}

/**
 * Delete a blog post
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting blog post:', error)
    return false
  }

  return true
}

/**
 * Fetch all articles
 */
export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching articles:', error)
    return []
  }

  return data || []
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error(`Error fetching article ${slug}:`, error)
    return null
  }

  return data
}

/**
 * Create a new article
 */
export async function createArticle(article: Article): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .insert([article])
    .select()
    .single()

  if (error) {
    console.error('Error creating article:', error)
    return null
  }

  return data
}

/**
 * Update an article
 */
export async function updateArticle(
  id: string,
  updates: Partial<Article>
): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating article:', error)
    return null
  }

  return data
}

/**
 * Delete an article
 */
export async function deleteArticle(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting article:', error)
    return false
  }

  return true
}
