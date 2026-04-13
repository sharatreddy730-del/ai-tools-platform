export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HubToolsAI",
    url: "https://hubtoolsai.com",
    logo: "https://hubtoolsai.com/logo.png",
    description: "Smart AI-powered tools for content creators, ecommerce sellers, and professionals.",
    sameAs: [
      "https://www.writeswift.ai",
      "https://www.primepro.co",
      "https://www.subsave.ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "admin@hubtoolsai.com",
      availableLanguage: ["en"],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is HubToolsAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HubToolsAI is a suite of AI-powered products designed for ecommerce sellers, content creators, and professionals. We offer WriteSwift for content generation, PrimePro for goal tracking, SubSave for subscription management, and 50+ free SEO tools.",
        },
      },
      {
        "@type": "Question",
        name: "Are the free tools really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our 50+ free SEO and AI tools are completely free with no account required. No credit card, no sign-up, just use the tools directly.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your data is encrypted in transit and at rest. We never sell or share your personal information with third parties. Each product has its own privacy controls.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
