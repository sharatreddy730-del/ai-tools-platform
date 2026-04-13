"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const savedConsent = localStorage.getItem("hubtools-cookie-consent")
    if (!savedConsent) {
      setShowBanner(true)
    } else {
      const saved = JSON.parse(savedConsent)
      setPreferences(saved)
    }
  }, [])

  const handleAcceptAll = () => {
    const newPrefs = { analytics: true, advertising: true }
    localStorage.setItem("hubtools-cookie-consent", JSON.stringify(newPrefs))
    setPreferences(newPrefs)
    setShowBanner(false)
    // Optionally, enable GA4 and ad personalization here
    enableAnalytics()
  }

  const handleRejectAll = () => {
    const newPrefs = { analytics: false, advertising: false }
    localStorage.setItem("hubtools-cookie-consent", JSON.stringify(newPrefs))
    setPreferences(newPrefs)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("hubtools-cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
  }

  const enableAnalytics = () => {
    // This signal can be used to enable GA4, Vercel Analytics, etc.
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ "gtag.config": { allow_google_signals: true } })
    }
  }

  if (!showBanner) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        padding: "20px",
        zIndex: 9999,
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "var(--font-inter, sans-serif)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: 600 }}>
            Cookie & Tracking Preferences
          </h3>
          <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "var(--text-secondary)" }}>
            We use cookies and similar technologies to enhance your experience, analyze usage, and serve personalized ads. By clicking &quot;Accept All,&quot; you consent to our use of cookies as described in our{" "}
            <Link href="/privacy" style={{ color: "var(--accent-color)", textDecoration: "underline" }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) =>
                setPreferences({ ...preferences, analytics: e.target.checked })
              }
              style={{ cursor: "pointer" }}
            />
            <span>
              <strong>Analytics Cookies</strong> — Help us understand how you use our site (via Vercel & GA4)
            </span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={preferences.advertising}
              onChange={(e) =>
                setPreferences({ ...preferences, advertising: e.target.checked })
              }
              style={{ cursor: "pointer" }}
            />
            <span>
              <strong>Advertising Cookies</strong> — Allow personalized ads (Google AdSense) based on your interests
            </span>
          </label>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={handleAcceptAll}
            style={{
              padding: "10px 20px",
              backgroundColor: "var(--accent-color)",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Accept All
          </button>
          <button
            onClick={handleSavePreferences}
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Save Preferences
          </button>
          <button
            onClick={handleRejectAll}
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              textDecoration: "underline",
            }}
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  )
}
