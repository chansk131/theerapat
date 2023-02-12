"use client"
import { motion } from "framer-motion"
import React from "react"

type Props = {
  children: React.ReactNode
}

const BlogCardContainer = ({ children }: Props) => {
  return (
    <motion.div
      className="max-w-[300px] w-full mx-auto lg:mx-0 lg:col-span-2 rounded-lg pb-4 shadow-xl"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  )
}

export default BlogCardContainer
