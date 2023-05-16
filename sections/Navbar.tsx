import Logo from "../components/Logo"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import NavbarRoute from "../components/Navbar"

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false)
    })
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link")
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false))
    })
    const nav = document.querySelector(".nav-items")
    nav?.addEventListener("click", (e) => {
      e.stopPropagation()
    })
    const html = document.querySelector("html")
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false)
    })
  }, [])

  useEffect(() => {
    const main = document.querySelector("main")
  }, [responsiveNavVisible])

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "" : ""}`}>
        <motion.div
          className='brand'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className='nav-responsive-toggle'
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation()
                setResponsiveNavVisible(false)
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation()
                setResponsiveNavVisible(true)
              }}
            />
          )}
        </motion.div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <NavbarRoute />
          <motion.div
            className='nav-items-button'
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          ></motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
