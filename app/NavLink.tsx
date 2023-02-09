"use client"

import Link from "next/link"
import React from "react"
import clsx from "clsx"
import { usePathname, useRouter } from "next/navigation"

type Props = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname()

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
