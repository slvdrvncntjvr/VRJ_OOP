import type { Metadata, Viewport } from "next"
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import { LoadingScreen } from "@/components/loading-screen"
import { TapeDeckNav } from "@/components/tape-deck-nav"
import { NowPlaying } from "@/components/now-playing"
import { SiteAudioProvider } from "@/components/site-audio"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Vincent Javier — COMP 009 E-Portfolio",
  description:
    "A cassette-inspired e-portfolio for COMP 009 Object-Oriented Programming by Salvador Vincent Javier (Vincent).",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1e1a17",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${jetbrains.variable} bg-casing`}
    >
      <body className="font-sans antialiased bg-casing text-cream body-grain min-h-screen">
        <SiteAudioProvider>
          <LoadingScreen />
          <Suspense fallback={null}>
            <TapeDeckNav />
          </Suspense>
          <main className="relative z-[2]">{children}</main>
          <Suspense fallback={null}>
            <NowPlaying />
          </Suspense>
        </SiteAudioProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
