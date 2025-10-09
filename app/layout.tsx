import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "Rajesh Verma | Health & Wellness Consultant, Business Mentor",
  description:
    "Rajesh Verma — Health & Wellness Consultant, Business Mentor, and STC Leader at MI Lifestyle. Book a session, order MI Lifestyle medicines, or get business mentoring.",
  keywords: [
    "Rajesh Verma MI",
    "Rajesh Verma",
    "kaustubh sen",
    "pradeep pandey",
    "Health Consultant",
    "Wellness Consultant",
    "Business Mentor",
    "MI Lifestyle",
    "STC Leader",
    "Wellness Consultation",
    "Health Checkup",
    "Business Consultation",
    "Medicine Orders"
  ],
  openGraph: {
    title: "Rajesh Verma | Health & Wellness Consultant",
    description:
      "Book sessions, order medicines, or get personalized business mentoring from Rajesh Verma — STC Leader at MI Lifestyle.",
    url: "https://rajesh-verma-portfolio.vercel.app/",
    siteName: "Rajesh Verma MI",
    images: [
      {
        url: "/rajesh_verma.jpg",
        width: 800,
        height: 600,
        alt: "Rajesh Verma MI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Verma MI | Health & Wellness Consultant",
    description:
      "Book sessions, order medicines, or get business mentoring from Rajesh Verma — STC Leader at MI Lifestyle.",
    images: ["/rajesh_verma.jpg"],
    site: "https://www.linkedin.com/in/rajesh-verma-5a3b99314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // Add Google Verification here
  other: {
    "google-site-verification": "google-site-verification=Hei6qKOu1Xj4Q9z-0WKOmusNAnU-q-oPhSc70MpdGWk",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajesh Verma",
    url: "https://rajesh-verma-portfolio.vercel.app/",
    jobTitle: "Health & Wellness Consultant",
    sameAs: [
      "https://www.linkedin.com/in/rajeshverma/",
      "https://instagram.com/rajeshverma",
    ],
  };
  return (
    <html lang="en">
      <body className={`antialiased font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
