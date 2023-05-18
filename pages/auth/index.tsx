import Layout from "../../components/layout"
import Head from "next/head"
import Email from "../../components/Email"
import Loader from "../../components/Loader"
import SocialIcons from "../../components/SocialIcons"

import Hero from "../../sections/Hero"
import React, { useState } from "react"
import About from "../../sections/About"

import Experience from "../../sections/Experience"
import NavbarRoute from "../../components/Navbar"

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 450)
  }

  return (
    <Layout>
      <div className='app'>sfsf</div>
    </Layout>
  )
}
