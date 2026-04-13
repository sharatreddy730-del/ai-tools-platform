import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "About Us — HubToolsAI",
  description:
    "HubToolsAI builds practical AI-powered tools for ecommerce sellers, content creators, and professionals. Learn about our mission, products, and team.",
}

export default function AboutPage() {
  return (
    <main>
      <div className="section" style={{ maxWidth: 850, margin: "0 auto", paddingTop: 80, paddingBottom: 80 }}>
        <div className="editorial-content">
          <span className="badge">👋 About Us</span>
          
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: -1.5, marginBottom: 40, color: "var(--text-primary)" }}>
            Welcome to HubToolsAI
          </h1>

          <h2>Who We Are</h2>
          <p>
            HubToolsAI is a platform dedicated to providing simple, trustworthy, and powerful tools that make a real difference in your daily workflow. We are a team of builders, sellers, and technologists who understand the daily grind of running an independent business or managing a demanding professional career.
          </p>
          <p>
            We recognized early on that while advanced AI technology is everywhere, practical applications often stay out of reach for everyday entrepreneurs. We saw a massive gap between complex enterprise software and straightforward, everyday solutions. That is why we built HubToolsAI.
          </p>
          <p>
            Our ultimate goal is simple: we want to help our users <strong>save time</strong>, <strong>grow revenue</strong>, and <strong>reduce waste</strong>. By delivering professional-grade tools that are easy to use and highly accessible, we empower individuals to focus on what truly matters in their businesses and lives.
          </p>

          <h2>What We Offer</h2>
          <p>
            Our platform is built around a comprehensive suite of specialized products alongside a massive library of free resources. Each of our solutions is purpose-built to solve a specific, costly problem.
          </p>
          
          <ul>
            <li>
              <strong>WriteSwift.ai</strong> — Our premier AI content generator tailored for ecommerce. It takes the guesswork out of product listings by creating highly optimized titles, descriptions, and SEO blog content for platforms like Amazon, Shopify, and eBay.
            </li>
            <li>
              <strong>PrimePro.co</strong> — An intelligent goal and productivity tracking system. By analyzing your behavior and habits, it provides personalized productivity coaching to help you build streaks and stay on track with your highest-priority tasks.
            </li>
            <li>
              <strong>SubSave.ai</strong> — A dedicated AI subscription tracking tool that tackles the common issue of forgotten expenses. It actively monitors your recurring charges, helping you cut unnecessary costs and instantly reduce financial waste.
            </li>
          </ul>

          <p>
            To complement these core applications, HubToolsAI also provides an extensive, ever-growing directory of <strong>free SEO and AI tools</strong>. These utilities are completely free to use and are designed to help you generate targeted content, evaluate search performance, and handle repetitive professional tasks without any friction or technical barriers.
          </p>

          <h2>Who It Helps</h2>
          <p>
            HubToolsAI is specifically designed for <strong>ecommerce sellers</strong>, <strong>content creators</strong>, and <strong>dedicated professionals</strong>. We build with our users in mind, ensuring that our tools solve real-world problems with plain English and clear interfaces.
          </p>
          <p>
            If you are an <em>ecommerce seller</em> struggling to rank your products or write compelling descriptions, our tools provide the competitive edge you need without requiring a marketing background. If you are a <em>content creator</em> looking to scale your output while maintaining top-notch quality, our platform acts as your personal, tireless assistant. And if you are a <em>busy professional</em> trying to streamline your habits, track your goals, or cut down on wasted spending, our suite gives you the actionable insights required to succeed.
          </p>
          <p>
            No matter your industry or experience level, our mission is to empower you to achieve more with less. We are committed to building trustworthy software that fundamentally changes what is possible for a one-person business.
          </p>
        </div>
      </div>
    </main>
  )
}
