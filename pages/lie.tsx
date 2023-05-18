import Image from "next/image"
import Layout from "../components/layout"
import { Inter } from "next/font/google"
import NavbarRoute from "../components/Navbar"
import Contact from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <NavbarRoute />
      <div className='bg-gradient-to-bl from-green-200 to-purple-200'>
        <p id='font-common'>Тренажер лжи</p>
      </div>
      <Contact />
    </>
  )
}
