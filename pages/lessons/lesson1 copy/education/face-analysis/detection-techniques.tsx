import { useEffect } from "react"
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
        <title id='title'>Методики</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <NavbarRoute />
      <NavbarBottom />

      <section className='bg-white border-b py-8'>
        <div className='container max-w-5xl mx-auto m-8'>
          <h2 className='w-full mt-36 my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
            Современное представление о методиках анализа лица
          </h2>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-5/6 sm:w-1/2 p-6'>
              <p className='text-gray-600 mb-8'>
                Добро пожаловать на страницу «Методы обнаружения» в нашем
                разделе «Анализ лиц». Здесь мы исследуем различные методы и
                методологии, используемые экспертами по профилированию для
                обнаружения и анализа выражений лица для понимания эмоций,
                обмана и психологических состояний. Присоединяйтесь к нам, когда
                мы углубимся в передовые методы обнаружения, используемые в
                анализе лица, включая анализ микровыражения, систему кодирования
                лицевых движений (FACS) и другие инновационные подходы. Получите
                более глубокое понимание того, как эти методы могут улучшить
                ваши знания в области профилирования и раскрыть скрытые истины.
              </p>
            </div>
            <div className='w-full sm:w-1/2 p-6'>
              <Image
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/imgs/anger.jpg'
                width={200}
                height={300}
                alt='content'
              />
            </div>
          </div>
          <div className='flex flex-wrap flex-col-reverse sm:flex-row'>
            <div className='w-full sm:w-1/2 p-6 mt-6'>
              <Image
                className='h-40 rounded w-full object-cover object-center mb-6'
                src='/imgs/anger.jpg'
                width={200}
                height={300}
                alt='content'
              />
            </div>
            <div className='w-full sm:w-1/2 p-6 mt-6'>
              <div className='align-middle'>
                <h3 className='text-3xl text-gray-800 font-bold leading-none mb-3'>
                  Анализ микровыражения: выявление скрытых эмоций
                </h3>
                <p className='text-gray-600 mb-8'>
                  Микровыражения — это мимолетные выражения лица, которые длятся
                  доли секунды и часто указывают на скрытые эмоции. Эксперты по
                  профилированию, обученные анализу микровыражений, могут
                  обнаруживать эти тонкие сигналы лица, что позволяет им
                  раскрывать подлинные эмоции, которые люди пытаются скрыть или
                  подавить. Наблюдая и интерпретируя эти микровыражения,
                  эксперты получают ценную информацию об истинных чувствах,
                  намерениях и возможном обмане человека. Развивайте свои навыки
                  анализа микровыражений и разблокируйте способность
                  расшифровывать скрытый язык эмоций.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto flex flex-wrap pt-4 pb-12'>
          <h2 className='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
            Система кодирования лицевых движений (FACS): расшифровка выражений
            лица
          </h2>
          <p className='w-full my-2 text-xl font-bold leading-tight text-center text-gray-600'>
            Система кодирования лицевых движений (FACS) — это комплексная
            система, разработанная Полом Экманом и Уоллесом Фризеном для
            систематического кодирования и анализа выражений лица. FACS
            разбивает движения лица на конкретные единицы действия, предоставляя
            стандартизированную методологию для понимания и интерпретации
            выражений лица. Освоив FACS, специалисты по профилированию могут
            расшифровывать сложные нюансы движений лицевых мышц, определять
            наличие определенных эмоций или выражений и различать подлинные
            выражения от сфабрикованных. Погрузитесь в мир FACS и используйте
            его возможности для анализа лица.
          </p>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
          <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
            <div className='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow'>
              <div className='w-full font-bold text-xl text-gray-800 px-6'>
                Контекстный анализ
              </div>
              <p className='text-gray-800 text-base px-6 mb-5'>
                В то время как выражение лица дает ценную информацию,
                контекстуальный анализ расширяет возможности понимания в анализе
                лица. Эксперты по профилированию учитывают различные
                контекстуальные факторы, такие как язык тела, голосовые сигналы
                и словесное содержание, чтобы получить более полное
                представление о психологическом состоянии человека и его
                правдивости. Анализируя взаимодействие между выражением лица и
                другими невербальными сигналами, эксперты могут нарисовать более
                точную картину эмоций и намерений человека. Узнайте о важности
                контекстуального анализа и его синергии с методами определения
                выражения лица.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
            <div className='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow'>
              <div className='w-full font-bold text-xl text-gray-800 px-6'>
                Достижения в области технологий: искусственный интеллект и
                машинное обучение
              </div>
              <p className='text-gray-800 text-base px-6 mb-5'>
                Достижения в области технологий произвели революцию в анализе
                лиц, проложив путь к новым методам обнаружения. Алгоритмы
                искусственного интеллекта (ИИ) и машинного обучения теперь могут
                анализировать огромное количество данных о лицах, чтобы
                обнаруживать закономерности, распознавать эмоции и даже
                предсказывать поведение. Эти технологии повышают эффективность и
                точность анализа лица, предоставляя специалистам по
                профилированию дополнительные инструменты для обнаружения и
                интерпретации. Будьте в курсе последних технологических
                достижений в этой области и используйте их для расширения своего
                опыта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
