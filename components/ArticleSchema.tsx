interface ArticleSchemaProps {
  title: string
  excerpt: string
  date: string
  category: string
}

export default function ArticleSchema({ title, excerpt, date, category }: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    datePublished: new Date(date).toISOString(),
    author: {
      "@type": "Organization",
      name: "HubToolsAI",
      url: "https://hubtoolsai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "HubToolsAI",
      logo: {
        "@type": "ImageObject",
        url: "https://hubtoolsai.com/logo.png",
      },
    },
    articleSection: category,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}
