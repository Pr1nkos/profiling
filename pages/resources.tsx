import { Inter } from "next/font/google"
import NavbarRoute from "../components/Navbar"
import Contact from "../components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <NavbarRoute />

      <div className='bg-white '>
        <div className='max-w-[85rem]   mx-auto px-4 sm:px-6 lg:px-8'>
          <div className=' grid grid-cols-2'>
            <div className=' grid md:grid-cols-2  gap-4 md:gap-8 xl:gap-20 md:items-center'>
              <div className='pt-24 sm:mt-10 lg:mt-0 '>
                <ol className='border-l border-neutral-300 '>
                  <li>
                    <div className='flex-start flex items-center pt-3'>
                      <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full '></div>
                      <p className='text-sm text-neutral-500 '>1960-е годы</p>
                    </div>
                    <div className='mb-6 ml-4 mt-2'>
                      <h4 className='mb-1.5 text-xl font-semibold'>
                        Пол Экман
                      </h4>
                      <p className='mb-3 text-neutral-500 '>
                        Разрабатывает систему FACS (Facial Action Coding System)
                        которая позволяет анализировать выражение лица и
                        выявлять эмоциональные состояния человека.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className='flex-start flex items-center pt-2'>
                      <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full '></div>
                      <p className='text-sm text-black'>1970-е годы</p>
                    </div>
                    <div className='mb-6 ml-4 mt-2'>
                      <h4 className='mb-1.5 text-xl font-semibold'>
                        Джордж Масон
                      </h4>
                      <p className='mb-3  text-black'>
                        создает первую программу по профайлингу, которая
                        включает в себя методы анализа поведения и выражения
                        лица.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className='flex-start flex items-center pt-2'>
                      <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 '></div>
                      <p className='text-sm  text-black'>1980-е годы</p>
                    </div>
                    <div className='ml-4 mt-2 pb-5'>
                      <h4 className='mb-1.5 text-xl font-semibold'>FBI</h4>
                      <p className='mb-3  text-black'>
                        начинает использовать профайлинг для расследования
                        преступлений.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='flex-start flex items-center pt-2'>
                      <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 '></div>
                      <p className='text-sm  text-black'>1990-е годы</p>
                    </div>
                    <div className='ml-4 mt-2 pb-5'>
                      <h4 className='mb-1.5 text-xl font-semibold'>
                        Джон Дуглас
                      </h4>
                      <p className='mb-3  text-black'>
                        бывший агент FBI, разрабатывает методику профайлинга,
                        основанную на анализе поведения преступников.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='flex-start flex items-center pt-2'>
                      <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 '></div>
                      <p className='text-sm  text-black'>2000-2010-е годы</p>
                    </div>
                    <div className='ml-4 mt-2 pb-5'>
                      <h4 className='mb-1.5 text-xl font-semibold'>
                        Компьютерное зрение
                      </h4>
                      <p className='mb-3  text-black'>
                        Развитие технологий компьютерного зрения позволяет
                        автоматизировать процесс профайлинга и выявления лжи по
                        лицу.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='flex-start flex items-center pt-2'>
                      <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 '></div>
                      <p className='text-sm  text-black'>
                        2020-е годы, пик - 2023 год.
                      </p>
                    </div>
                    <div className='ml-4 mt-2 pb-5'>
                      <h4 className='mb-1.5 text-xl font-semibold'>
                        Машинное обучение и искусственный интеллект
                      </h4>
                      <p className='mb-3  text-black'>
                        Машинное обучение и искусственный интеллект становятся
                        основными инструментами профайлинга и выявления лжи по
                        лицу.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className='h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
              <Image
                className=' rounded-lg hue-rotate   animate-spin-slow'
                src='/imgs/random.jpg'
                width={320}
                height={320}
                alt='content'
              />
            </div>
          </div>
          <h3 className='mb-6 ml-3 text-2xl font-bold  text-black '>
            Основные труды:
          </h3>
          <div className='grid grid-cols-2'>
            <div className='h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
              <Image
                className=' rounded-lg rotate-45 animate-bounce'
                src='/imgs/happy.jpg'
                width={320}
                height={320}
                alt='content'
              />
            </div>
            <ol className='border-l-2 border-info-100'>
              <li>
                <div className='flex-start md:flex'>
                  <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 '>
                    <div className='mb-4 flex justify-between'>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        Facial Action Coding System
                      </a>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        1978
                      </a>
                    </div>
                    <p className='mb-6   text-black'>
                      Пола Экмана - книга была написана в 1978 году и является
                      основополагающей в области анализа выражения лица и
                      эмоциональных состояний человека. В книге описывается
                      система FACS, которая позволяет классифицировать и
                      описывать движения мышц лица.
                    </p>

                    <button
                      type='button'
                      className='inline-block rounded  border-info bg-blue-800 border-2 border-black group-hover:bg-white '
                      data-te-ripple-init
                    >
                      <span className='relative text-white group-hover:text-black p-2'>
                        ссылка
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex-start md:flex'>
                  <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5  '>
                    <div className='mb-4 flex justify-between'>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        Criminal Profiling: An Introduction to Behavioral
                        Evidence Analysis
                      </a>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        1995
                      </a>
                    </div>
                    <p className='mb-6  text-black '>
                      книга была написана Джоном Дугласом - является введением в
                      методику профайлинга, основанную на анализе поведения
                      преступников. В книге описываются различные методы анализа
                      поведения, такие как анализ сцены преступления, интервью с
                      свидетелями и жертвами, психологический профиль
                      преступника и т.д.
                    </p>

                    <button
                      type='button'
                      className='inline-block rounded  border-info bg-blue-800 border-2 border-black group-hover:bg-white '
                      data-te-ripple-init
                    >
                      <span className='relative text-white group-hover:text-black p-2'>
                        ссылка
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex-start md:flex'>
                  <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5  '>
                    <div className='mb-4 flex justify-between'>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        The Psychology of Criminal Conduct
                      </a>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        1992
                      </a>
                    </div>
                    <p className='mb-6  text-black'>
                      Рональда Акерс - книга является обзором современных теорий
                      криминального поведения. В книге описываются
                      психологические факторы, которые могут влиять на
                      криминальное поведение, такие как личностные особенности,
                      социальная среда, воспитание и т.д.
                    </p>

                    <button
                      type='button'
                      className='inline-block rounded  border-info bg-blue-800 border-2 border-black group-hover:bg-white '
                      data-te-ripple-init
                    >
                      <span className='relative text-white group-hover:text-black p-2'>
                        ссылка
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex-start md:flex'>
                  <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5  '>
                    <div className='mb-4 flex justify-between'>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        The Handbook of Eyewitness Psychology
                      </a>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        2007
                      </a>
                    </div>
                    <p className='mb-6  text-black'>
                      Майкл Тотт - является обзором исследований в области
                      свидетельских показаний. В книге описываются различные
                      факторы, которые могут влиять на достоверность
                      свидетельских показаний, такие как восприятие, память,
                      влияние сторонних факторов и т.д.
                    </p>

                    <button
                      type='button'
                      className='inline-block rounded  border-info bg-blue-800 border-2 border-black group-hover:bg-white '
                      data-te-ripple-init
                    >
                      <span className='relative text-white group-hover:text-black p-2'>
                        ссылка
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex-start md:flex'>
                  <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5  '>
                    <div className='mb-4 flex justify-between'>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        Machine Learning for Facial Expression Recognition: A
                        Comprehensive Survey
                      </a>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        2015
                      </a>
                    </div>
                    <p className='mb-6  text-black'>
                      Шен Шен и др. - книга является обзором современных методов
                      распознавания выражений лица с помощью машинного обучения.
                      В книге описываются различные алгоритмы и подходы к
                      распознаванию эмоций по лицу.
                    </p>

                    <button
                      type='button'
                      className='inline-block rounded  border-info bg-blue-800 border-2 border-black group-hover:bg-white '
                      data-te-ripple-init
                    >
                      <span className='relative text-white group-hover:text-black p-2'>
                        ссылка
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex-start md:flex'>
                  <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                  <div className='mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5  '>
                    <div className='mb-4 flex justify-between'>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        A Review of Automatic Face Recognition and Expression
                        Analysis Systems for Human Behavior Understanding
                      </a>
                      <a
                        href='#!'
                        className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'
                      >
                        2016
                      </a>
                    </div>
                    <p className='mb-6  text-black'>
                      Жан-Франсуа Мартин и др. - в книге указываются современные
                      системы распознавания лица и анализа выражений для
                      понимания человеческого поведения. В книге описываются
                      различные технологии, используемые для распознавания лица
                      и анализа выражений, такие как компьютерное зрение,
                      машинное обучение и т.д.
                    </p>

                    <button
                      type='button'
                      className='inline-block rounded  border-info bg-blue-800 border-2 border-black group-hover:bg-white '
                      data-te-ripple-init
                    >
                      <span className='relative text-white group-hover:text-black p-2'>
                        ссылка
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}
