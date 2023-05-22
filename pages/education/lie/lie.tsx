import Image from "next/image"
import Layout from "../../../components/layout"
import { Inter } from "next/font/google"
import NavbarRoute from "../../../components/Navbar"
import Contact from "../../../components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <NavbarRoute />
      <div className='bg-gradient-to-bl from-green-200 to-purple-200'>
        <div className='bg-blue-500 rounded-full min-h-screen justify-center p-8 flex flex-col items-center animate-loop'>
          <h1 className='text-white text-4xl font-bold mb-4'>
            ССЫЛКА НА СИМУЛЯЦИЮ
          </h1>
          <Image
            src='/imgs/anger.jpg'
            alt='Image'
            width={200}
            height={200}
            className='w-32 h-32 rounded-full'
          />
        </div>
      </div>
      <Contact />
    </>
  )
}
