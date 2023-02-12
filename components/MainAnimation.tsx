"use client"
import { motion } from "framer-motion"
import React from "react"
import clsx from "clsx"

type Props = {
  className?: string
  children?: React.ReactNode
}

const MainAnimation = ({ children, className }: Props) => {
  return (
    <motion.main
      className={clsx("p-5 max-w-6xl mx-auto", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  )
}

export default MainAnimation
