import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "../../../components/layout-denied"
import NavbarRoute from "../../../components/Navbar"
import NavbarBottom from "../../../components/NavbarBottom"
import Contact from "../../../components/footer"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Image from "next/image"
import Head from "next/head"

export default function Home() {
  const { data: session } = useSession()

  useEffect(() => {}, [session])
  if (!session) {
    return <AccessDenied />
  }
  return (
    <>
      <Head>
        <title id='title'>Начало модуля</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <NavbarRoute />
      <NavbarBottom />
      <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <svg
            className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
            />
          </svg>
        </div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4'>
              <div className='lg:max-w-lg'>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Анализ психотипа: расшифровка человеческого поведения
                </h1>
                <p className='mt-6 text-xl leading-8 text-gray-700'>
                  Добро пожаловать на страницу «Анализ психотипов» нашего
                  раздела «Образование». Здесь мы исследуем интригующую область
                  анализа психотипов и его роль в расшифровке человеческого
                  поведения, мотивации и личностных черт. Присоединяйтесь к нам,
                  и мы углубимся в точную интерпретацию каждого человеческого
                  движения и микровыражения во время анализа психотипа. Получите
                  всестороннее представление о том, как эти тонкие сигналы могут
                  раскрыть скрытые слои психики человека и улучшить ваше
                  понимание человеческого поведения.
                </p>
              </div>
            </div>
          </div>
          <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
            <Image
              className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              src='/imgs/psy.jpg'
              width={400}
              height={100}
              alt='content'
            />
          </div>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4'>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Язык тела: интерпретация невербальных сообщений
              </h1>
              <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
                <p>
                  Язык тела служит мощным инструментом анализа психотипов,
                  поскольку он передает невысказанные сообщения и раскрывает
                  ценную информацию о мыслях, эмоциях и намерениях человека.
                  Каждое движение, жест, поза и выражение лица несут в себе
                  смысл. Изучите сложные детали языка тела и освойте точную
                  интерпретацию этих невербальных сигналов. Распознав тонкости
                  языка тела, вы откроете для себя более глубокое понимание
                  человеческого поведения и улучшите свои навыки профилирования.
                </p>
                <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                  <li className='flex gap-x-3'>
                    <AiOutlineMenu
                      className='mt-1 h-5 w-5 flex-none text-indigo-600'
                      aria-hidden='true'
                    />
                  </li>
                </ul>
                <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                  Микровыражения: взгляд на истинные эмоции
                </h2>
                <p className='mt-8'>
                  Микровыражения, мимолетные выражения лица, длящиеся всего доли
                  секунды, дают замечательное представление о подлинных эмоциях
                  и скрытых намерениях человека. Эти непроизвольные реакции
                  служат окнами в душу. Погрузитесь в сложное изучение
                  микровыражений и овладейте искусством интерпретации их точного
                  значения. Раскройте истинные эмоции, скрытые за масками,
                  которые носят люди, и достигните непревзойденной точности в
                  чтении и понимании эмоций.
                </p>
                <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                  Психологическое профилирование: анализ черт личности
                </h2>
                <p className='mt-6'>
                  Психологическое профилирование включает в себя тщательную
                  оценку индивидуальных психологических характеристик, мотивов и
                  моделей поведения. Тщательно анализируя различные сигналы, в
                  том числе язык тела, микровыражения, вербальное содержание и
                  психологические оценки, специалисты по профилированию могут
                  распутать сложный гобелен психотипа человека. Изучите
                  методологии и методы, используемые в психологическом
                  профилировании, и получите полное представление о том, как
                  каждый сигнал способствует точному анализу человеческого
                  поведения.
                </p>
                <p className='mt-6'>
                  Анализ психотипов предоставляет бесценные инструменты для
                  понимания человеческого поведения, мотивации и личностных
                  качеств. Овладев искусством интерпретации языка тела, анализа
                  микровыражений и использования методов психологического
                  профилирования, вы разовьете глубокое понимание людей и их
                  лежащих в основе психологических особенностей. Присоединяйтесь
                  к нам в этом путешествии исследований и открытий, пока мы
                  разгадываем тонкости человеческого поведения через призму
                  анализа психотипов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  )
}
