import Button from "../components/Button"
import React from "react"
import { motion } from "framer-motion"
import Footer from "../sections/Footer"
function Contact() {
  return (
    <>
      <motion.div
        className='contact'
        id='contact'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          delay: 2.45,
        }}
      >
        <h2 className='contact-sub-title'>Контакты</h2>
        <p className='contact-text'>
          Если у вас есть какие-либо вопросы или предложения, не стесняйтесь
          связаться с нами. Наши специалисты всегда готовы помочь вам.
        </p>
        <div className='contact-cta'>
          <Button
            link='mailto:pnafonin@gmail.com'
            text='Запись на курс профайлинга СПбГЭТУ ЛЭТИ'
          />
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default Contact
