"use client"

import { useEffect, useRef } from "react"

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export default function AdUnit() {
    const adRef = useRef<HTMLModElement>(null)

    useEffect(() => {
        const el = adRef.current
        // Guard against double-initialization (React 18 Strict Mode runs effects twice).
        // AdSense sets data-adsbygoogle-status on the element after it is initialized,
        // so we only push if that attribute is not yet present.
        if (el && el.getAttribute("data-adsbygoogle-status") === null) {
            try {
                if (typeof window !== "undefined") {
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                }
            } catch (e) {
                console.error("AdSense error", e)
            }
        }
    }, [])

    return (
        <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", minHeight: 0, margin: "16px 0" }}
            data-ad-client="ca-pub-2779508005725169"
            // IMPORTANT: Replace this placeholder 1234567890 with your actual ad slot ID
            // from your Google AdSense dashboard before verifying full functionality.
            data-ad-slot="2779508005725169"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    )
}