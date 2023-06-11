import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "../../components/layout-denied"
import NavbarRoute from "../../components/Navbar"
import NavbarBottom from "../../components/NavbarBottom"
import Contact from "../../components/footer"
import Head from "next/head"
import Header from "../../components/header"

import Logo from "../../public/imgs/logo-ru.svg"
import Image from "next/image"

export default function Education() {
  const { data: session } = useSession()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/index.html"
    script.async = true

    const lesson1Element = document.getElementById("lesson1")
    if (lesson1Element) {
      lesson1Element.appendChild(script)
    }
  }, [])

  if (!session) {
    return <AccessDenied />
  }

  return (
    <>
      <NavbarRoute />
      <NavbarBottom />
      <div className='max-w-[90rem] mx-auto'>
        <div
          id='docs-sidebar'
          className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-80 bg-white border-r border-gray-200 py-10 px-8 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:top-0 lg:right-auto lg:bottom-0 lg:left-[max(0px,calc(50%-45rem))] lg:z-10 '
        >
          <nav id='sidebar-nav' className='relative space-y-8'>
            <ul
              className=' mt-24 ml-0.5 space-y-2 border-l-2 border-slate-100 '
              data-hs-scrollspy='#scrollspy'
            >
              <li>
                <a
                  className='block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active'
                  href='../#1'
                >
                  Занятие 1
                </a>
              </li>
              <li>
                <a
                  className='block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  '
                  href='../#2'
                >
                  Занятие 2
                </a>
              </li>
              <li>
                <a
                  className='block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  '
                  href='../#3'
                >
                  Занятие 3
                </a>
              </li>
              <li>
                <a
                  className='block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  '
                  href='../#4'
                >
                  Занятие 4
                </a>
              </li>
              <li>
                <a
                  className='block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  '
                  href='../#5'
                >
                  Занятие 5
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]'>
          <div id='lesson1'>
            <iframe
              src='https://6486003a6038ce33ac4f62fe--incomparable-queijadas-c11bf6.netlify.app/'
              width='1000'
              height='920'
            />
          </div>
        </div>
      </div>
    </>
  )
}
