import { motion } from "framer-motion"
import { cn } from "@/lib/utils" // Asegurate de tener esta función utilitaria

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
      className={cn(
        "w-full max-w-md p-6 rounded-2xl",
        "bg-white/20 dark:bg-white/10 backdrop-blur-md",
        "border border-white/30 dark:border-white/20",
        "shadow-lg hover:shadow-2xl transition-all",
        "hover:scale-[1.02] duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
