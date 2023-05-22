import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "../../components/layout-denied"
import NavbarRoute from "../../components/Navbar"
import Contact from "../../components/footer"
import Image from "next/image"
import Button from "../../components/Button"
import NavbarButtons from "../../components/NavbarButtons"

export default function Home() {
  const { data: session } = useSession()

  // Fetch content from protected route
  useEffect(() => {}, [session])

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />
  }

  // If session exists, display content
  return (
    <>
      <NavbarRoute />
      <div className='bg-gradient-to-bl  from-green-900 to-purple-900'>
        <div className='max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8'>
          <div className=' h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
            <div className='mt-5 sm:mt-10 lg:mt-0 '>
              <div className='space-y-6 sm:space-y-8 h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-4'>
                <div className='space-y-2 md:space-y-4 '>
                  <h2 className='font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200'>
                    ИЗУМЛЕНИЕ
                  </h2>
                  <p className='text-gray-300'>
                    При эмоции изумления микродвижения лица могут измениться
                    следующим образом:
                  </p>

                  <p className='text-gray-300'>
                    1. Разинутый рот. Один из наиболее ярких проявлений
                    изумления - это широко открытый рот, который может выражать
                    удивление и недоумение.
                  </p>
                  <p className='text-gray-300'>
                    2. Брови могут подняться и разойтись в стороны, что создает
                    впечатление удивления и непонимания.Брови могут подняться и
                    разойтись в стороны, что создает впечатление удивления и
                    непонимания.
                  </p>
                  <p className='text-gray-300'>
                    3. Приподнятые щеки. Щеки могут подниматься и немного
                    выпуклыми, что выражает изумление и удивление.
                  </p>
                  <p className='text-gray-300'>
                    4. Расширенные зрачки. Глаза могут расширяться, что создает
                    впечатление удивления и интереса.
                  </p>
                  <p className='text-gray-300'>
                    5. Задержка дыхания. Человек может задержать дыхание на
                    мгновение, выражая свое изумление и недоумение.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                className=' rounded-lg'
                src='/imgs/surprized.jpg'
                width={320}
                height={320}
                alt='content'
              />
            </div>
          </div>{" "}
          <h2 className='font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 p-8 text-center'>
            Микродвижения лица при изумлении выражают эмоциональную
            неожиданность и интерес, а также могут вызывать любопытство у
            окружающих и создавать напряженную атмосферу.
          </h2>
        </div>
      </div>
      <Contact />
      <NavbarButtons />
    </>
  )
}
