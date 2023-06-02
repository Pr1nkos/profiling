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
          <div className='h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
            <div className='mt-5 sm:mt-10 lg:mt-0 '>
              <div className='space-y-6 sm:space-y-8 h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-4'>
                <div className='space-y-2 md:space-y-4 '>
                  <h2 className='font-bold text-3xl lg:text-4xl text-gray-800 '>
                    РАДОСТЬ
                  </h2>
                  <p className='text-black'>
                    При эмоции радости микродвижения лица могут измениться
                    следующим образом:
                  </p>

                  <p className='text-black'>
                    1. Улыбка. Одним из наиболее ярких проявлений радости
                    является улыбка, которая может быть широкой и яркой или
                    более сдержанной.
                  </p>
                  <p className='text-black'>
                    2. Подъем уголков рта. Рот становится более овальным и
                    поднятым, что выражает радость и счастье.
                  </p>
                  <p className='text-black'>
                    3. Изменение выражения глаз. Глаза становятся более яркими и
                    искрящимися, что создает впечатление восторга и энергии.
                  </p>
                  <p className='text-black'>
                    4. Мимические движения. Лицо может выражать радость через
                    сокращение мышц вокруг глаз и на лбу, что создает
                    впечатление счастливых морщинок.
                  </p>
                  <p className='text-black'>
                    5. Изменение позы. Человек может стать более открытым и
                    раскованным, выражая свою радость через жесты и движения
                    тела.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                className=' rounded-lg'
                src='/imgs/happy.jpg'
                width={320}
                height={320}
                alt='content'
              />
            </div>
          </div>{" "}
          <h2 className='font-bold text-3xl lg:text-4xl text-gray-800  p-8 text-center'>
            Эти микродвижения могут происходить одновременно или поочередно, и
            могут сильно отличаться в зависимости от индивидуальных особенностей
            человека и ситуации, вызывающей радость.
          </h2>
        </div>
      </div>
      <Contact />
      <NavbarButtons />
    </>
  )
}
