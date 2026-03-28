import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI Tools Platform — Smart Tools for Creators, Sellers & Professionals",
  description:
    "Discover powerful AI tools for content creation, goal tracking, and subscription management. Built for ecommerce sellers, creators, and professionals.",
  keywords:
    "AI tools, AI content generator, ecommerce AI, Amazon listing generator, Shopify AI, eBay product description, goal tracker, subscription tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2779508005725169"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo gradient-text">
              AI Tools
            </Link>
            <ul className="navbar-links">
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/#features">Features</Link></li>
              {/* <li><Link href="/#pricing">Pricing</Link></li> */}
              <li><Link href="/tools">SEO Tools</Link></li>
              <li>
                <Link href="https://www.writeswift.ai" target="_blank" className="btn-primary" style={{ padding: "8px 20px", fontSize: "14px" }}>
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div style={{ paddingTop: "72px" }}>
          {children}
        </div>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-col">
              <h4 className="gradient-text" style={{ fontSize: "18px", textTransform: "none", letterSpacing: "-0.5px" }}>
                AI Tools Platform
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7, marginTop: "12px" }}>
                Smart AI-powered tools for content creators, ecommerce sellers, and professionals who want to work smarter.
              </p>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="https://www.writeswift.ai" target="_blank" rel="noopener noreferrer">WriteSwift.ai</a>
              <a href="https://www.primepro.co" target="_blank" rel="noopener noreferrer">PrimePro.co</a>
              <a href="https://www.subsave.ai" target="_blank" rel="noopener noreferrer">SubSave.ai</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <Link href="/tools">Free AI Tools</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 AI Tools Platform. All rights reserved.</p>
            <p>
              Built with ❤️ for creators &amp; sellers
            </p>
          </div>
        </footer>
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
