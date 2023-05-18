import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "../../../components/layout-denied"
import NavbarRoute from "../../../components/Navbar"
import NavbarBottom from "../../../components/NavbarBottom"
import Contact from "../../../components/footer"

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
      <NavbarBottom />
      <div className='bg-gradient-to-bl from-green-200 to-purple-200 '>
        <div className='min-h-screen flex flex-col justify-center text-justify items-center '>
          <div>
            <section className='text-gray-600 body-font overflow-hidden'>
              <div className='container px-5 py-24 mx-auto'>
                <div className='-my-8 divide-y-2 divide-gray-100'>
                  <div className='py-8 flex flex-wrap md:flex-nowrap'>
                    <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                      <span className='font-semibold title-font text-gray-700'>
                        FACS: система кодирования лицевых движений
                      </span>
                    </div>
                    <div className='md:flex-grow'>
                      <p className='leading-relaxed'>
                        Система кодирования лицевых движений (FACS) —
                        комплексная система, используемая для анализа и описания
                        выражений лица. Разработанная психологами Полом Экманом
                        и Уоллесом В. Фризеном, FACS представляет собой
                        стандартизированную методологию для выявления и
                        интерпретации определенных движений лицевых мышц,
                        известных как единицы действия (ЕД).
                      </p>
                      <p className='leading-relaxed'>
                        Понимание системы кодирования движений лица может
                        значительно повысить вашу способность точно
                        анализировать и интерпретировать выражения лица.
                        Распознав тонкие движения отдельных лицевых мышц, вы
                        можете получить ценную информацию об эмоциях, намерениях
                        человека и даже обнаружить признаки обмана.
                      </p>
                    </div>
                  </div>
                  <div className='py-8 flex flex-wrap md:flex-nowrap'>
                    <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                      <span className='font-semibold title-font text-gray-700'>
                        Ключевые компоненты FACS:
                      </span>
                    </div>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      Единицы действия (ЕД)
                    </h2>
                    <p className='leading-relaxed'>
                      ЕД являются строительными блоками выражения лица. Они
                      представляют собой определенные мышечные движения и могут
                      возникать по отдельности или в сочетании, формируя широкий
                      спектр выражений лица.
                    </p>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      Уровни интенсивности
                    </h2>
                    <p className='leading-relaxed'>
                      FACS присваивает уровни интенсивности каждой ЕД для
                      количественной оценки силы или амплитуды мышечного
                      движения. Это помогает оценить интенсивность выражения и
                      различать тонкие вариации.
                    </p>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      Лицевые ориентиры
                    </h2>
                    <p className='leading-relaxed'>
                      FACS опирается на точную идентификацию ключевых лицевых
                      ориентиров, чтобы точно определить местонахождение и
                      измерить движения определенных мышц. Эти ориентиры
                      обеспечивают стандартизированный эталон для анализа
                      выражений лица.
                    </p>
                  </div>
                  <div className='py-8 flex flex-wrap md:flex-nowrap'>
                    <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                      <span className='font-semibold title-font text-gray-700'>
                        Применение FACS
                      </span>
                    </div>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      Распознавание эмоций
                    </h2>

                    <p className='text-lg text-gray-600 leading-relaxed'>
                      FACS позволяет идентифицировать и интерпретировать
                      различные эмоции, выраженные через выражение лица.
                      Анализируя активацию и интенсивность определенных AU,
                      можно точно определить основное эмоциональное состояние
                      человека.
                    </p>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      Обнаружение обмана
                    </h2>

                    <p className='text-lg text-gray-600 leading-relaxed'>
                      микровыражения, которые представляют собой мимолетные
                      выражения лица, возникающие в течение доли секунды, могут
                      выявить скрытые эмоции и намерения. FACS может помочь в
                      обнаружении этих микровыражений и обнаружении признаков
                      обмана.
                    </p>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                      Клинические и психологические исследования
                    </h2>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      FACS широко используется в клинических и психологических
                      исследованиях для изучения выражений эмоций, невербальной
                      коммуникации и влияния различных стимулов на мимические
                      реакции.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className='container px-5 py-24 mx-auto'>
              <div className='py-8'>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Важно отметить, что освоение FACS требует длительной
                  подготовки и практики. Он включает в себя глубокое понимание
                  анатомии лица, движений мышц и соответствующих им AU. Кроме
                  того, FACS следует использовать этично и ответственно,
                  принимая во внимание конфиденциальность и согласие отдельных
                  лиц.
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
