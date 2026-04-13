import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Contact Us — HubToolsAI",
  description:
    "Get in touch with the HubToolsAI team. We're here to help with product questions, support, partnerships, and feedback.",
}

export default function ContactPage() {
  return (
    <main>
      <div className="section" style={{ maxWidth: 850, margin: "0 auto", paddingTop: 80, paddingBottom: 80 }}>
        <div className="editorial-content">
          <span className="badge">💬 Get in Touch</span>
          
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: -1.5, marginBottom: 40, color: "var(--text-primary)" }}>
            Contact HubToolsAI
          </h1>

          <h2>We Are Here to Help</h2>
          <p>
            At HubToolsAI, your success is our priority. Whether you are using our suite of professional apps like WriteSwift.ai, PrimePro.co, and SubSave.ai, or leveraging our extensive library of free AI tools, we are committed to providing you with reliable and trustworthy support.
          </p>
          <p>
            We understand that encountering a roadblock can disrupt your workflow. Our team takes your goals seriously and is ready to assist you. If you have any product questions, run into a technical support issue, or wish to discuss business inquiries and partnerships, please do not hesitate to reach out. We read every single message.
          </p>

          <h2>How to Reach Us</h2>
          <p>
            The most direct way to get in touch with our team is via email. Please send your inquiries to:
          </p>
          <blockquote>
            <strong>Email:</strong> <a href="mailto:admin@hubtoolsai.com">admin@hubtoolsai.com</a>
          </blockquote>
          <p>
            Our dedicated support team operates Monday through Friday. We strive to provide thoughtful and comprehensive replies to all inquiries, and you can generally expect a response time of <strong>24 to 48 hours</strong>.
          </p>

          <h2>Frequently Asked Questions</h2>
          
          <h3>What should I include in my support request?</h3>
          <p>
            To help us resolve your issue as quickly as possible, please include any relevant details such as the specific tool you are using, the URL of the page where the issue occurred, and a brief description of the problem. If applicable, attaching a screenshot is incredibly helpful.
          </p>

          <h3>Do you accept feature requests or tool suggestions?</h3>
          <p>
            Absolutely. Much of HubToolsAI&apos;s roadmap is driven directly by community feedback. If there is a specific workflow you want to automate or a feature you feel is missing, send us an email. We evaluate all suggestions and prioritize the ones that benefit our users the most.
          </p>

          <h3>How do I inquire about business partnerships or advertising?</h3>
          <p>
            We are always open to exploring mutually beneficial partnerships, sponsorships, or backlink opportunities. Please email our support address with the subject line &quot;Partnership Inquiry,&quot; and your message will be routed to the appropriate department.
          </p>

          <h3>Do you offer live chat or phone support?</h3>
          <p>
            Currently, in order to keep our tools free and highly accessible to independent sellers and creators, we handle all support exclusively via email. This allows us to keep overhead costs low and ensure that every user receives a detailed, well-researched written response from our technical team.
          </p>

        </div>
      </div>
    </main>
  )
}
