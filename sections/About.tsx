import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import { useInView, motion } from "framer-motion"

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return (
    <motion.div
      className='about'
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className='title'>
        <h2 className='text-2xl'>О платформе</h2>
      </div>
      <div className='about-grid text-black'>
        <div className='about-grid-info'>
          <p className='about-grid-info-text  '>
            Добро пожаловать на платформу обучения профайлингу и симуляции
            эмоций! Здесь вы сможете изучить современное представление о том,
            как выявлять ложь по лицевым микродвижениям.
          </p>

          <p className='about-grid-info-text'>
            Для того, чтобы начать обучение, необходимо зарегистрироваться на
            нашей платформе.
          </p>
        </div>
        <div className='about-grid-photo'>
          <div className='overlay'></div>
          <div className='overlay-border'></div>
          <div className='about-grid-photo-container'>
            <Image src='/imgs/home1.png' alt='profile' fill />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
