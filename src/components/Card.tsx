import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function FadeCard({ children, className }: CardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300 ${className}`}
    >
      <AnimatePresence>
        <motion.div
          key="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          className={`
            w-full max-w-md p-6 rounded-2xl
            bg-white/20 dark:bg-white/10
            border border-white/30 dark:border-white/20
            shadow-lg backdrop-blur-md
            hover:scale-[1.02] hover:shadow-2xl
            transition-transform duration-300 ease-in-out
          `}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
