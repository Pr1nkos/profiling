import Button from "../components/Button"
import React from "react"
import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.div
      className='contact '
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className='contact-sub-title'>Свяжитесь с нами</h2>
      <p className='contact-text'>
        Если у вас есть какие-либо вопросы или предложения, не стесняйтесь
        связаться с нами. Наши специалисты всегда готовы помочь вам.
      </p>
      <div className='contact-cta'>
        <Button
          link='mailto:POLLIprofiling@gmail.com'
          text='Меня интересует обучение профайлингу на платформе POLL-I'
        />
      </div>
    </motion.div>
  )
}

export default Contact
