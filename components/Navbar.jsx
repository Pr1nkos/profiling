import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import Logo from "../public/imgs/logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Header from "./header"

const NavbarRoute = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <nav className='z-50 fixed w-full h-24 shadow-xl bg-orange-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100  '>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='Logo'
              width='55'
              height='55'
              className='cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-blue-800  hover:ease-in-out duration-500'
              priority
            />
          </Link>
          <div className='hidden sm:flex'>
            <ul className='hidden sm:flex'>
              <Link href='/education'>
                <li className=''>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-indigo-300 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Курс по профайлингу
                    </span>
                  </button>
                </li>
              </Link>
              <Link href='/emotions'>
                <li className='ml-10 '>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-indigo-300'></span>
                    <span className='relative text-black group-hover:text-white font-bold'>
                      Изучение различных эмоций
                    </span>
                  </button>
                </li>
              </Link>
              <Link href='/lie'>
                <li className='ml-10'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-indigo-300'></span>
                    <span className='relative text-black group-hover:text-white font-bold'>
                      Симуляция эмоций
                    </span>
                  </button>
                </li>
              </Link>
              <Link href='/tests'>
                <li className='ml-10 '>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-300'></span>
                    <span className='relative text-black group-hover:text-white font-bold'>
                      Задания
                    </span>
                  </button>
                </li>
              </Link>
              <Link href='/resources'>
                <li className='ml-10 '>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-green-300'></span>
                    <span className='relative text-black group-hover:text-white font-bold'>
                      Ресурсы
                    </span>
                  </button>
                </li>
              </Link>
              <div className='ml-10 uppercase text-xl'>
                <button className='flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-1  w-24 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px'>
                  {/* ВОЙТИ! */}
                  <Header />
                </button>
              </div>
            </ul>
          </div>
          <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 ease-in duration-500 shadow-xl bg-amber-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md  border border-gray-100"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className='flex-col py-4'>
            <ul>
              <Link href='/education'>
                <li className='py-4 cursor-pointer'>Курс по профайлингу</li>
              </Link>
              <Link href='/emotions'>
                <li className='py-4 cursor-pointer'>
                  Изучение различных эмоций
                </li>
              </Link>
              <Link href='/lie'>
                <li className='py-4 cursor-pointer'>Симуляция эмоций</li>
              </Link>
              <Link href='/tests'>
                <li className='py-4 cursor-pointer'>Задания</li>
              </Link>
              <Link href='/resources'>
                <li className='py-4 cursor-pointer'>Ресурсы</li>
              </Link>
              <button className='flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-1  w-24 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px'>
                <Header />
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavbarRoute
