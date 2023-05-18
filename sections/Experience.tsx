import Link from "next/link"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
function Experience() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline")
      underline!.style.top = `${selected * 2.5}rem`
    }
    transformSelected()
  }, [selected])

  const expereinces = [
    {
      name: "1",
      url: "",
      shortDescription: [
        "В этом разделе будет предоставлена информация по современному представлению о базовых эмоций,",
        "принятых на вооружение сообществом профайлинга по всему миру.",
      ],
    },
    {
      name: "2",
      url: "",
      shortDescription: [
        "В этом разделе будет предоставлена информация по современному представлению о базовых эмоций,",
        "принятых на вооружение сообществом профайлинга по всему миру.",
      ],
    },
    {
      name: "3",
      url: "",
      shortDescription: [
        "В этом разделе будет предоставлена информация по современному представлению о базовых эмоций,",
        "принятых на вооружение сообществом профайлинга по всему миру.",
      ],
    },
    {
      name: "Задания",
      url: "",
      shortDescription: [
        "В этом разделе будет предоставлена информация по современному представлению о базовых эмоций,",
        "принятых на вооружение сообществом профайлинга по всему миру.",
      ],
    },
    {
      name: "Ресурсы",
      url: "",
      shortDescription: [
        "В этом разделе будет предоставлена информация по современному представлению о базовых эмоций,",
        "принятых на вооружение сообществом профайлинга по всему миру.",
      ],
    },
  ]
  return (
    <motion.div
      className='experience'
      id='experience'
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
        <h2>Структура</h2>
      </div>
      <div className='title'>
        <p className='about-grid-info-text'>
          Мы предоставляем курсы обучения, которые помогут вам научиться
          распознавать эмоции и микродвижения лица. В нашем курсе вы получите
          следующие знания:
        </p>
      </div>
      <div className='container'>
        <ul className='exp-slider'>
          <div className='underline'></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            )
          })}
        </ul>
        <div className='exp-details'>
          <div className='exp-details-position'>
            <h3>
              <span className='exp-details-position-company'>
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className='link'>
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>

            <ul className='exp-details-list'>
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className='exp-details-list-item'>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
