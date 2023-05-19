import Button from "../components/Button"
import React from "react"
import { motion } from "framer-motion"
function Hero() {
  return (
    <div className='hero'>
      <motion.h1
        className='hero-title'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Добро пожаловать на
      </motion.h1>
      <motion.h2
        className='hero-title-large'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        платформу обучения профайлингу
      </motion.h2>
      <motion.h3
        className='hero-title-large hero-title-sub'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        и симуляции эмоций.
      </motion.h3>
      <motion.p
        className='hero-text'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Мы предлагаем уникальную возможность изучить методы выявления эмоций и
        микродвижений лица, которые помогут определить, говорит ли человек
        правду или нет. На нашей платформе вы найдете множество страниц,
        посвященных различным аспектам профайлинга. Мы предлагаем обучение,
        которое поможет вам повысить эффективность в области выявления лжи и
        узнать, как распознавать эмоции и микродвижения лица.
      </motion.p>
      <motion.div
        className='hero-button'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button text='ПРИЛОЖЕНИЕ СИМУЛЯЦИИ ЭМОЦИЙ' link='https://' />
      </motion.div>
    </div>
  )
}

export default Hero
