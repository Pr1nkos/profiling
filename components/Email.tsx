import React from "react"
import { motion } from "framer-motion"
function Email() {
  return (
    <motion.div
      className='email'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        delay: 1.45,
      }}
    >
      <a
        href='mailto:pnafonin@etu.ru'
        className='email-link text-black hover:text-blue-900'
      >
        pnafonin@etu.ru
      </a>
    </motion.div>
  )
}

export default Email
