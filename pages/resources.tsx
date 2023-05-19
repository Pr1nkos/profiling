import { Inter } from "next/font/google"
import NavbarRoute from "../components/Navbar"
import Contact from "../components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <NavbarRoute />
      <div className='bg-gradient-to-bl from-green-200 to-purple-200'>
        <div className='bg-gradient-to-bl from-green-200 to-purple-200'>
          <div className='bg-purple-400 rounded-full min-h-screen justify-center p-8 flex flex-col items-center animate-loop'>
            <h1 className='text-white text-4xl font-bold mb-4'>
              ИНФОРМАЦИОННАЯ БАЗА
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
      </div>
      <Contact />
    </>
  )
}
