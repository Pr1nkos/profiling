import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "../../../components/layout-denied"
import NavbarRoute from "../../../components/Navbar"
import NavbarBottom from "../../../components/NavbarBottom"
import Contact from "../../../components/footer"
import Image from "next/image"
import Head from "next/head"

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
      <Head>
        <title id='title'>Кейсы</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <NavbarRoute />
      <NavbarBottom />
      <div className='bg-white'>
        <div className='container bg-gradient-to-bl mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <Image
            className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
            src='/imgs/psy.jpg'
            width={720}
            height={600}
            alt='content'
          />

          <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Пример 1: Обнаружение обмана
            </h1>
            <p className='mb-8 text-black text-justify leading-relaxed'>
              В этом увлекательном тематическом исследовании мы изучаем
              видеозаписи, в которых люди делятся как реальными историями, так и
              сфабрикованными рассказами. С помощью анализа психотипов
              специалисты по профилированию тщательно анализируют язык тела,
              выражение лица и словесные сигналы, демонстрируемые людьми.
              Сравнивая и сопоставляя сигналы между правдивыми и обманчивыми
              моментами, эксперт по профилированию может выявить микровыражения,
              несоответствия и другие признаки обмана. Этот анализ демонстрирует
              эффективность анализа психотипов в обнаружении лжи и раскрытии
              скрытых истин.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                РАНДОМНЫЙ КЕЙС
              </button>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                СЛЕДУЮЩИЙ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container bg-gradient-to-bl mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <Image
            className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
            src='/imgs/psy.jpg'
            width={720}
            height={600}
            alt='content'
          />
          <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Пример 2: выявление мотивации
            </h1>
            <p className='mb-8 text-black text-justify leading-relaxed'>
              В этом наводящем на размышления тематическом исследовании мы
              изучаем видеозаписи, на которых люди обсуждают свои личные мотивы,
              лежащие в основе определенных действий или решений. С помощью
              анализа психотипов специалисты по профилированию внимательно
              изучают язык тела, тон голоса и другие невербальные сигналы,
              отображаемые во время этих дискуссий. Интерпретируя тонкие
              сигналы, эксперт по профилированию может получить представление об
              основных мотивах, желаниях и эмоциональных состояниях людей. Этот
              анализ обеспечивает более глубокое понимание человеческого
              поведения и проливает свет на сложное взаимодействие между
              мотивами и действиями.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                РАНДОМНЫЙ КЕЙС
              </button>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                СЛЕДУЮЩИЙ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='container bg-gradient-to-bl mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <Image
            className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
            src='/imgs/psy.jpg'
            width={720}
            height={600}
            alt='content'
          />

          <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Пример 3: Оценка эмоциональных состояний
            </h1>
            <p className='mb-8 text-black text-justify leading-relaxed'>
              В этом эмоционально заряженном тематическом исследовании мы
              анализируем видеозаписи, запечатлевшие людей, испытывающих
              различные эмоции, включая радость, печаль, гнев и страх. С помощью
              анализа психотипов специалисты по профилированию внимательно
              наблюдают за выражением лица, языком тела и голосовыми сигналами,
              отображаемыми в эти эмоциональные моменты. Расшифровывая
              микровыражения, тонкие жесты и тональные нюансы, эксперт по
              профилированию может точно оценить и интерпретировать
              эмоциональное состояние людей. Этот анализ подчеркивает
              эффективность анализа психотипов в понимании и оценке
              эмоциональных реакций.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                РАНДОМНЫЙ КЕЙС
              </button>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                СЛЕДУЮЩИЙ
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}
