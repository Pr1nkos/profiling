import Link from "next/link"
import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import DropdownFace from "./DropdownFace"
import DropdownPsy from "./DropdownPsy"
import { useRouter } from "next/router"
import Head from "next/head"

const NavbarButtons = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* <nav className='z-50 fixed bottom-0 w-full h-24 shadow-xl bg-orange-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100  '>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
          <Link href='/'>
            <button className='btn relative inline-block font-medium group'>
              <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-indigo-300 '></span>
              <span className='relative text-black group-hover:text-white  font-bold'>
                Обратно в меню
              </span>
            </button>
          </Link>

          <div className='hidden sm:flex'>
            <ul className='hidden sm:flex '>
              <li className='ml-10 '>
                <Link href='/lie/anger'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-400 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Злость
                    </span>
                  </button>
                </Link>
              </li>

              <li className='ml-10 '>
                <Link href='/lie/happiness'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-indigo-300 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Счастье
                    </span>
                  </button>
                </Link>
              </li>
              <li className='ml-10 '>
                <Link href='/lie/sadness'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-blue-400 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Грусть
                    </span>
                  </button>
                </Link>
              </li>
              <li className='ml-10 '>
                <Link href='/lie/surprize'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-orange-300 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Удивление
                    </span>
                  </button>
                </Link>
              </li>
              <li className='ml-10 '>
                <Link href='/lie/contempt'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-green-300 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Презрение
                    </span>
                  </button>
                </Link>
              </li>
              <li className='ml-10 '>
                <Link href='/lie/fear'>
                  <button className='btn relative inline-block font-medium group'>
                    <span className='absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-gray-300 '></span>
                    <span className='relative text-black group-hover:text-white  font-bold'>
                      Страх
                    </span>
                  </button>
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}
export default NavbarButtons
