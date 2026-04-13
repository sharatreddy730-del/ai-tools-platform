import Script from "next/script"

export default function GoogleAnalyticsScript() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID

  if (!ga4Id) {
    console.warn("GA4 measurement ID not configured. Set NEXT_PUBLIC_GA4_ID in environment variables.")
    return null
  }

  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${ga4Id}', {
              page_path: window.location.pathname,
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
            });
          `,
        }}
      />
    </>
  )
}
