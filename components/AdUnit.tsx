"use client"

import { useEffect } from "react"

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export default function AdUnit() {
    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (e) {
            console.error("AdSense error", e)
        }
    }, [])

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block", margin: "24px 0" }}
            data-ad-client="ca-pub-XXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    )
}