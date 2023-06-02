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
                  <h2 className='font-bold text-3xl lg:text-4xl text-gray-800 '>
                    ЗЛОСТЬ
                  </h2>
                  <p className='text-black'>
                    Когда человек испытывает злость, микродвижения его лица
                    могут измениться следующим образом:
                  </p>

                  <p className='text-black'>
                    1. Морщины на лбу: при злости человек может начать морщить
                    лоб, что свидетельствует о напряженности и раздражении.
                  </p>
                  <p className='text-black'>
                    2. Сжатые губы: губы могут быть сжатыми и напряженными,
                    иногда зубы могут быть сжатыми вместе.
                  </p>
                  <p className='text-black'>
                    3. Однобровие: при злости может появиться однобровие, что
                    свидетельствует о напряжении и гневе.
                  </p>
                  <p className='text-black'>
                    4. Напряженные щеки: щеки могут быть напряженными и сжатыми,
                    что свидетельствует о гневе и раздражении.
                  </p>
                  <p className='text-black'>
                    5. Напряженная челюсть: челюсть может быть напряженной и
                    сжатой, что свидетельствует о гневе и негодовании.
                  </p>
                  <p className='text-black'>
                    6. Острые глаза: глаза могут быть острыми и сфокусированными
                    на объекте, вызывающем злость.
                  </p>
                  <p className='text-black'>
                    7. Краснота на лице: кожа на лице может стать красной и
                    нагретой, что свидетельствует о возбуждении и гневе.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                className=' rounded-lg'
                src='/imgs/angry.jpg'
                width={320}
                height={320}
                alt='content'
              />
            </div>
          </div>{" "}
          <h2 className='font-bold text-3xl lg:text-4xl text-gray-800  p-8 text-center'>
            Эти микродвижения могут происходить одновременно или поочередно, и
            могут сильно отличаться в зависимости от индивидуальных особенностей
            человека и ситуации, вызывающей злость.
          </h2>
        </div>
      </div>
      <Contact />
      <NavbarButtons />
    </>
  )
}
