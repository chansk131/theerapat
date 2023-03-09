import "./globals.css"
import NavLink from "./NavLink"

import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
})

export const metadata: Metadata = {
  title: {
    default: "Chan Theerapat Muangpoon",
    template: "%s | Chan Theerapat Muangpoon",
  },
  description: "Developer.",
  openGraph: {
    title: "Chan Theerapat Muangpoon",
    description: "Developer.",
    url: "https://theerapat.me",
    siteName: "Chan Theerapat Muangpoon",
    images: [
      {
        url: "https://theerapat.me/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chan Theerapat Muangpoon",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <nav
          className="sticky top-0 z-10 border-b
          border-gray-200 bg-gray-100 bg-opacity-80 backdrop-blur-md"
        >
          <div className="h-18 m-auto flex max-w-6xl flex-row justify-end py-2 px-5 font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Me</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
