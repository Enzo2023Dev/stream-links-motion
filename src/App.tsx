
import { motion } from "motion/react"

import Button from "@/components/Button"
import AnimatedCard from "@/components/Card"
import Tooltip from "@/components/Tooltip"
import GlassCard from "@/components/GlassCard"

const pageContent = {
  title: "Titulo",
  subtitle: "Subtitulo",
  description: "Descripcion de la pagina, puedes poner lo que quieras, incluso emojis! 😄",
  footer: "Este proyecto es open source, hecho por Enzo2023Dev. Puedes ver el código y contribuir libremente. 🚀",
}

const buttonLinks = [
  {
    label: "Sigueme en Twitch",
    icon: (
      <motion.span
        initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" height="24" width="24">
          <path fillRule="evenodd" d="M3 1 1.5 5v15H7v3h3l3 -3h4l5.5 -5.5V1H3Zm2 2h15.5v10.5L17 17h-5l-2.5 2.5V17H5V3Zm5 9.5V7h2v5.5h-2ZM15 7v5.5h2V7h-2Z" clipRule="evenodd" strokeWidth="1"></path>
        </svg>
      </motion.span>
    ),
    link: ""
  },
  {
    label: "Unete a mi Discord",
    icon: (
      <motion.span
        initial={{ rotate: 15, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" height="24" width="24">
          <path d="M20.3175 4.3605a19.799999999999997 19.799999999999997 0 0 0 -4.8855 -1.5164999999999997 0.07500000000000001 0.07500000000000001 0 0 0 -0.078 0.037500000000000006c-0.21149999999999997 0.375 -0.4455 0.8654999999999999 -0.609 1.2494999999999998a18.299999999999997 18.299999999999997 0 0 0 -5.487 0 12 12 0 0 0 -0.618 -1.2494999999999998 0.07500000000000001 0.07500000000000001 0 0 0 -0.078 -0.037500000000000006c-1.6875 0.29100000000000004 -3.33 0.801 -4.8855 1.5164999999999997a0.06 0.06 0 0 0 -0.0315 0.026999999999999996C0.534 9.036 -0.3195 13.570500000000001 0.099 18.048000000000002q0.0045000000000000005 0.033 0.0315 0.055499999999999994a19.950000000000003 19.950000000000003 0 0 0 5.9925 3.0300000000000002 0.07500000000000001 0.07500000000000001 0 0 0 0.084 -0.028499999999999998q0.6945 -0.9450000000000001 1.2269999999999999 -1.9935a0.07500000000000001 0.07500000000000001 0 0 0 -0.015 -0.0885l-0.026999999999999996 -0.0165a13.5 13.5 0 0 1 -1.8719999999999999 -0.8925 0.07500000000000001 0.07500000000000001 0 0 1 -0.03 -0.099l0.0225 -0.028499999999999998q0.1905 -0.14250000000000002 0.372 -0.2925a0.07500000000000001 0.07500000000000001 0 0 1 0.0765 -0.0105c3.9285000000000005 1.794 8.181 1.794 12.0615 0a0.07500000000000001 0.07500000000000001 0 0 1 0.0795 0.0105q0.1815 0.15000000000000002 0.372 0.2925a0.07500000000000001 0.07500000000000001 0 0 1 -0.006 0.1275 12 12 0 0 1 -1.8735000000000002 0.891 0.07500000000000001 0.07500000000000001 0 0 0 -0.045 0.045 0.07500000000000001 0.07500000000000001 0 0 0 0.0045000000000000005 0.0615c0.36 0.6975 0.7725 1.3635000000000002 1.2254999999999998 1.9935a0.07500000000000001 0.07500000000000001 0 0 0 0.084 0.028499999999999998 19.799999999999997 19.799999999999997 0 0 0 6.0015 -3.0300000000000002 0.07500000000000001 0.07500000000000001 0 0 0 0.0315 -0.055499999999999994c0.501 -5.1765 -0.8385 -9.6735 -3.5490000000000004 -13.658999999999999a0.045 0.045 0 0 0 -0.03 -0.028499999999999998m-12.297 10.9605c-1.1835 0 -2.157 -1.0859999999999999 -2.157 -2.418s0.9555 -2.4195 2.157 -2.4195c1.2105000000000001 0 2.175 1.095 2.157 2.4195 0 1.332 -0.9555 2.418 -2.157 2.418m7.974 0c-1.182 0 -2.157 -1.0859999999999999 -2.157 -2.418s0.9555 -2.4195 2.157 -2.4195c1.2105000000000001 0 2.1765 1.095 2.157 2.4195 0 1.332 -0.9465 2.418 -2.157 2.418" strokeWidth="1.5"></path>
        </svg>
      </motion.span>
    ),
    link: ""
  },
]

const SocialNetworks = [
  {
    label: "Twitter",
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg>
    ,
    link: "",
    className: "bg-gray-950 hover:bg-gray-950 text-white",
  },
  {
    label: "Instagram",
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
      </svg>
    ,
    link: "",
    className: "bg-gradient-to-tl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white",
  },
  {
    label: "Threads",
    icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
      </svg>
    ,
    link: "",
    className: "bg-gray-300 text-black",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}


function App() {

  return (
     <motion.div
      className="min-h-screen flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatedCard className="bg-gradient-to-br from-emerald-400 via-violet-600 to-red-800 animate-gradient-x bg-[length:300%_300%] p-6 w-full">
        {/* Header */}
        <motion.div
          className="flex items-center mb-4"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {/*<motion.img
            src={Icon}
            alt="Icon"
            className="rounded-full w-16 h-16"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />*/}

          <motion.div
            className="rounded-full bg-white w-16 h-16"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          <motion.div className="pl-4" variants={item}>
            <h1 className="text-3xl font-semibold">{pageContent.title}</h1>
            <h2 className="text-md">{pageContent.subtitle}</h2>
          </motion.div>
        </motion.div>

        {/* Descripción */}
        <motion.p className="text-sm" variants={item}>
          {pageContent.description}
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-4 space-y-3"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {buttonLinks.map(({ label, link, icon }) => (
            <motion.div key={label} variants={item}>
              <Button
                href={link}
                size="full"
                variant="primary"
                className="gap-2 hover:scale-[1.03] active:scale-[0.97] transition-transform"
              >
                {icon}
                {label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          className="flex items-center justify-center mt-4 gap-2"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {SocialNetworks.map(({ icon, link, label, className }) => (
            <motion.div key={label} variants={item}>
              <Tooltip message={label}>
                <Button
                  href={link}
                  size="icon"
                  className={`${className} border-0 hover:scale-105 active:scale-95 transition-transform`}
                >
                  {icon}
                </Button>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedCard>
      <GlassCard className="fixed bottom-4 right-4 p-4 max-w-xs w-full sm:w-auto">
        <p className="text-xs text-center">{pageContent.footer}</p>
      </GlassCard>
    </motion.div>
  )
}

export default App
