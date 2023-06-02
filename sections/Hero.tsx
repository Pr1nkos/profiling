import Button from "../components/Button"
import React from "react"
import { motion } from "framer-motion"
function Hero() {
  return (
    <div className='hero text-black'>
      <motion.h2
        className='  text-4xl font-bold'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          delay: 0.35,
        }}
      >
        Добро пожаловать на платформу обучения профайлингу
      </motion.h2>
      <motion.h3
        className='text-4xl font-bold hero-title-sub'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          delay: 0.45,
        }}
      >
        и симуляции эмоций.
      </motion.h3>
      <motion.p
        className='hero-text'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          delay: 0.65,
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
          duration: 0.2,
          ease: "easeInOut",
          delay: 0.85,
        }}
      >
        <Button
          text='ПРИЛОЖЕНИЕ СИМУЛЯЦИИ ЭМОЦИЙ'
          link='https://drive.google.com/file/d/1mKx7wK3hd-1Rs7xLzW0D9laz34Yn5x0d/view?usp=share_link'
        />
      </motion.div>
    </div>
  )
}

export default Hero
