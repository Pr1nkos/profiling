import Head from "next/head"
import Email from "../components/Email"
import Loader from "../components/Loader"
import SocialIcons from "../components/SocialIcons"

import Hero from "../sections/Hero"
import React, { useState } from "react"
import About from "../sections/About"

import Experience from "../sections/Experience"
import NavbarRoute from "../components/Navbar"
import Contacts from "../sections/Contact"
export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 450)
  }

  return (
    <>
      <NavbarRoute />
      <div className=' bg-white'>
        <Head>
          <title>Профайлинг</title>
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        {showContent && (
          <>
            <SocialIcons />
            <Email />
            <main className=' pt-10'>
              <Hero />
              <About />
              <Experience />
            </main>
          </>
        )}
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
      </div>
      <Contacts />
    </>
  )
}
