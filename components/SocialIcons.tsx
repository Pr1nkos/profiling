import Link from "next/link"
import React from "react"
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi"
import { motion } from "framer-motion"

function SocialIcons() {
  const socialLinks = [
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/",
    },
  ]
  return (
    <motion.div
      className='social-icons'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className='social-icons-list text-black'>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className='social-icons-list-item'>
            <Link
              href={link}
              className='social-icons-list-item-link'
              target='_blank'
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SocialIcons
