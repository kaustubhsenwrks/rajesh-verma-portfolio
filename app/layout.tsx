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
    "Official portfolio of Rajesh Verma — Health & Wellness Consultant, Business Mentor, and STC Leader at MI Lifestyle. Book a session, order MI Lifestyle medicines, or get business mentoring.",
  keywords: [
    "Rajesh Verma",
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
    url: "https://your-domain.com",
    siteName: "Rajesh Verma Portfolio",
    images: [
      {
        url: "/rajesh_verma.jpg",
        width: 800,
        height: 600,
        alt: "Rajesh Verma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Verma | Health & Wellness Consultant",
    description:
      "Book sessions, order medicines, or get business mentoring from Rajesh Verma — STC Leader at MI Lifestyle.",
    images: ["/rajesh_verma.jpg"],
    site: "@YourTwitterHandle", // optional
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
