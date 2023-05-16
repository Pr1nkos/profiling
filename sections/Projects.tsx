import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { motion } from "framer-motion"

function Projects() {
  const projectsData = [
    {
      image: "/imgs/angryHome.jpg",
      projectName: "Гнев",
      projectDescription:
        "Современные представления о профайлинге позволяют определить, как гнев может выражаться на лице человека. Обычно, при проявлении гнева на лице появляются скрюченные брови, сильно сжатые губы и натянутые мышцы лица. Лицо может выглядеть напряженным и серьезным.",
      projectTech: [
        "Вскинутые брови",
        "Опущение уголков рта",
        "Сжатые губы",
        "Натянуые мышцы",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/imgs/angryHome.jpg",
      projectName: "Счастье",
      projectDescription:
        "выражается улыбкой, расширением глаз и подъемом скул.",
      projectTech: [
        "Вскинутые брови",
        "Опущение уголков рта",
        "Сжатые губы",
        "Натянуые мышцы",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ]
  return (
    <div className='projects' id='work'>
      <motion.div
        className='title'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Немного о том, что мы сделали</h2>
      </motion.div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,

            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className='project'
                key={projectName}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className='project-info'>
                  <p className='project-info-overline'>Featured Project</p>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech.map((tech) => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.github}
                        className='project-info-links-item-link'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className='project-info-links-item-link'
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects
