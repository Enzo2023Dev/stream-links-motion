import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <motion.div
        className="text-3xl font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          delay: 0.2,
        }}
      >
        Cargando...
      </motion.div>
    </motion.div>
  )
}
