import { Inter } from "next/font/google"
import Contact from "../../../components/footer"
import NavbarRoute from "../../../components/Navbar"
import NavbarBottom from "../../../components/NavbarBottom"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"
import AccessDenied from "../../../components/layout-denied"
import { useSession } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })

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
        <title id='title'>Эмоции</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <NavbarRoute />
      <NavbarBottom />
      <section className='bg-white border-b py-8'>
        <div className='container max-w-5xl mx-auto m-8'>
          <h2 className='w-full mt-36 my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
            Понимание эмоций в анализе лица
          </h2>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
          <div className='flex flex-wrap'>
            <p className='text-gray-600 mb-8'>
              Добро пожаловать на страницу «Понимание эмоций» в нашем разделе
              «Анализ лица». Здесь мы углубимся в важность понимания эмоций при
              анализе лица и профилировании, исследуя глубокое влияние, которое
              они оказывают на человеческое поведение и общение. Присоединяйтесь
              к нам, чтобы исследовать шесть универсальных типов эмоций,
              определенных известным психологом Полом Экманом, их значение для
              анализа выражений лица и значение микровыражений для выявления
              подлинных эмоций.
            </p>
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
                  Важность понимания эмоций
                </h3>
                <p className='text-gray-600 mb-8'>
                  Эмоции играют фундаментальную роль в наших повседневных
                  взаимодействиях, формируя то, как мы воспринимаем окружающий
                  мир и реагируем на него. При анализе лица и профилировании
                  понимание эмоций имеет первостепенное значение, поскольку они
                  неразрывно связаны с выражением лица. Эмоции дают ценную
                  информацию о внутреннем мире человека, его мотивах и реакциях.
                  Расшифровывая выражения лица и определяя лежащие в их основе
                  эмоции, специалисты по профилированию могут глубже понять
                  людей и их поведение.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto flex flex-wrap pt-4 pb-12'>
          <h2 className='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
            Шесть универсальных типов эмоций
          </h2>
          <p className='w-full my-2 text-xl font-bold leading-tight text-center text-gray-600'>
            Новаторское исследование Пола Экмана показало, что существует шесть
            универсальных типов эмоций, которые последовательно выражаются в
            разных культурах: счастье, печаль, гнев, страх, отвращение и
            удивление. Эти эмоции преодолевают культурные и языковые барьеры,
            что делает их бесценными инструментами для анализа лица. Понимание
            этих универсальных эмоций дает специалистам по профилированию общий
            язык для точной интерпретации выражений лица.
          </p>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
          <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
            <div className='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow'>
              <div className='w-full font-bold text-xl text-gray-800 px-6'>
                Проявление эмоций в мимике
              </div>
              <p className='text-gray-800 text-base px-6 mb-5'>
                Каждая из универсальных эмоций по-разному проявляется на лице,
                создавая узнаваемые узоры, которые могут быть проанализированы
                экспертами по профилированию. Например, искренняя улыбка
                отражает счастье, с приподнятыми щеками и приподнятыми уголками
                рта. И наоборот, грусть характеризуется опущенным ртом,
                суженными бровями и опущенными глазами. Наблюдая и анализируя
                эти сигналы лица, эксперты могут различать основные эмоции и
                получать представление о психическом и эмоциональном состоянии
                человека.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
            <div className='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow'>
              <div className='w-full font-bold text-xl text-gray-800 px-6'>
                Значение микровыражений
              </div>
              <p className='text-gray-800 text-base px-6 mb-5'>
                Микровыражения — это мимолетные выражения лица, возникающие
                непроизвольно и длящиеся доли секунды. Они часто раскрывают
                подлинные эмоции, которые люди пытаются скрыть или подавить.
                Эксперты по профилированию, обученные распознаванию
                микровыражений, могут обнаруживать эти короткие вспышки истинных
                эмоций, предоставляя ценную информацию о чувствах, намерениях и
                возможном обмане человека. Освоение интерпретации микровыражений
                повышает точность и глубину анализа лица, открывая скрытые слои
                информации.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
            <div className='flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow'>
              <p className='text-gray-800 text-base px-6 mb-5'>
                Понимание эмоций, распознавание их проявлений по мимике и
                расшифровка микровыражений являются важнейшими навыками для
                специалистов по профилированию. Оттачивая эти способности,
                эксперты могут получить ценную информацию о человеческом
                поведении, обнаружить обман и установить более глубокую связь с
                людьми. Присоединяйтесь к нам, пока мы углубляемся в сложности
                эмоций и их роль в анализе лица, что позволит вам стать опытным
                профилировщиком, оснащенным передовыми аналитическими
                инструментами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
