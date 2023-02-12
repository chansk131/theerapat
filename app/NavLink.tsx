"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type Props = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: Props) => {
  let pathname = usePathname()
  if (pathname?.includes("/blog/")) {
    pathname = "/blog"
  }

  return (
    <Link
      className={clsx("p-3 hover:text-black", [
        pathname === href ? "text-gray-900" : "text-gray-500",
      ])}
      href={href}
    >
      {children}
    </Link>
  )
}

export default NavLink
