import "./globals.css"
import NavLink from "./NavLink"

import { Inter } from "@next/font/google"

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav
          className="sticky h-18 top-0 border-b border-gray-200 py-2 px-5 flex
         flex-row justify-end bg-gray-100 bg-opacity-80 backdrop-blur-md font-medium z-10"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Me</NavLink>
        </nav>
        {children}
      </body>
    </html>
  )
}
