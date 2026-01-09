import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "King Nana Prempeh - Serial Entrepreneur & Podcast Host",
  description:
    "King Nana Prempeh is a seasoned serial entrepreneur with over 10 years of experience in Fintech, AgriTech, and Asset Financing across Africa.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
