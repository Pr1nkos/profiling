import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import AccessDenied from "../../../components/layout-denied"
import NavbarRoute from "../../../components/Navbar"
import NavbarBottom from "../../../components/NavbarBottom"
import Contact from "../../../components/footer"
import Image from "next/image"

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
      <div className='bg-gradient-to-bl from-green-200 to-purple-200'>
        <div className='container  px-5 py-24 mx-auto'>
          <div className='flex flex-wrap w-full mb-20'>
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                Типы лжи: раскрытие лжи с помощью анализа лица
              </h1>
              <div className='h-1 w-20 bg-indigo-500 rounded'></div>
            </div>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
              Добро пожаловать на страницу «Типы лжи» в нашем разделе «Анализ
              лица». Здесь мы исследуем многогранную природу лжи и то, как она
              проявляется в выражениях лица. Присоединяйтесь к нам, и мы
              углубимся в различные виды лжи, такие как ложь во благо, упущение,
              выдумка, преувеличение и вводящие в заблуждение заявления.
              Узнайте, как выражения лица и микровыражения содержат жизненно
              важные подсказки для обнаружения лжи. Узнайте о ключевой роли
              анализа лица и системы кодирования лицевых движений (FACS) в
              выявлении признаков лжи по выражению лица. На примерах и сценариях
              мы покажем, как выражение лица может выявить различные виды лжи.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <Image
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src='/imgs/anger.jpg'
                  width={200}
                  height={300}
                  alt='content'
                />
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  ЗЛОСТЬ
                </h3>

                <p className='leading-relaxed text-black'>Описание почему</p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <Image
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src='/imgs/anger.jpg'
                  width={200}
                  height={300}
                  alt='content'
                />
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  ЗЛОСТЬ
                </h3>

                <p className='leading-relaxed text-black'>Описание почему</p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <Image
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src='/imgs/anger.jpg'
                  width={200}
                  height={300}
                  alt='content'
                />
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  ЗЛОСТЬ
                </h3>

                <p className='leading-relaxed text-black'>Описание почему</p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-gray-100 p-6 rounded-lg'>
                <Image
                  className='h-40 rounded w-full object-cover object-center mb-6'
                  src='/imgs/anger.jpg'
                  width={200}
                  height={300}
                  alt='content'
                />
                <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                  ЗЛОСТЬ
                </h3>

                <p className='leading-relaxed text-black'>Описание почему</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-bl from-green-200 to-purple-200 '>
          <div className='min-h-screen flex flex-col justify-center text-justify items-center '>
            <div>
              <section className='text-gray-600 body-font overflow-hidden'>
                <div className='container px-5 py-24 mx-auto'>
                  <div className='-my-8 divide-y-2 divide-gray-100'>
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                          Декодирование ливевых структур
                        </h2>
                        <p className='leading-relaxed'>
                          Ложь бывает разных форм, каждая со своими
                          особенностями и намерениями. Понимание этих типов лжи
                          позволяет специалистам по профилированию более
                          эффективно расшифровывать обман. Давайте рассмотрим
                          некоторые распространенные типы:
                        </p>
                      </div>
                    </div>
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                        <span className='font-semibold title-font text-gray-700'>
                          Белая ложь
                        </span>
                      </div>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                          безобидная ложь, рассказанная, чтобы не задеть чьи-то
                          чувства или сохранить социальную гармонию.
                        </h2>
                      </div>
                    </div>
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                        <span className='font-semibold title-font text-gray-700'>
                          Упущение
                        </span>
                      </div>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                          преднамеренное утаивание информации или намеренное
                          упущение определенных деталей.
                        </h2>
                      </div>
                    </div>
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                        <span className='font-semibold title-font text-gray-700'>
                          Фабрикация
                        </span>
                      </div>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                          создание ложных повествований или выдумывание историй
                          для обмана других.
                        </h2>
                      </div>
                    </div>
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                        <span className='font-semibold title-font text-gray-700'>
                          Преувеличение
                        </span>
                      </div>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                          усиление или приукрашивание фактов или событий для
                          создания искаженного восприятия.
                        </h2>
                      </div>
                    </div>
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                        <span className='font-semibold title-font text-gray-700'>
                          Обманчивые заявления
                        </span>
                      </div>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                          Умышленное предоставление ложной информации или
                          вводящих в заблуждение заявлений.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className='container px-5 py-24 mx-auto'>
                <div className='py-8'>
                  <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                    Язык мимики в детекции лжи
                  </h1>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    Когда кто-то лжет, выражение его лица часто выявляет тонкие
                    несоответствия или несоответствия. Эксперты по
                    профилированию, обученные анализу лица, могут обнаруживать
                    эти сигналы, предоставляя ценную информацию об обмане.
                    Микровыражения, которые представляют собой мимолетные
                    выражения лица, длящиеся всего доли секунды, играют решающую
                    роль в выявлении скрытых эмоций и обнаружении лжи.
                    Внимательно наблюдая за этими микровыражениями и
                    расшифровывая язык выражений лица, эксперты могут раскрыть
                    правду, скрывающуюся за ложными утверждениями.
                  </p>
                </div>
                <div className='py-8'>
                  <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                    Анализ лица и система кодирования лицевых движений (FACS)
                  </h1>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    Анализ лица в сочетании с системой кодирования лицевых
                    движений (FACS) формирует мощную основу для обнаружения лжи.
                    FACS позволяет экспертам разбивать движения лица на
                    конкретные единицы действия, обеспечивая всестороннее
                    понимание того, как различные мышцы влияют на выражение
                    лица. Тщательно анализируя эти блоки действий, эксперты по
                    профилированию могут выявить тонкие признаки, указывающие на
                    обман, помогая им различать искренние и вводящие в
                    заблуждение выражения.
                  </p>
                </div>
                <div className='py-8'>
                  <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                    Лицевая интерпретация
                  </h1>
                  <p className='text-lg text-gray-600 leading-relaxed'>
                    Чтобы понять нюансы выражений лица и их связь с разными
                    типами лжи, давайте углубимся в наглядные примеры и
                    сценарии. С помощью изображений, видео или анимации мы можем
                    визуально продемонстрировать различные признаки лица,
                    указывающие на определенные виды лжи. Наблюдая за
                    отчетливыми выражениями лица, связанными с ложью во благо,
                    умолчаниями, измышлениями, преувеличениями и вводящими в
                    заблуждение заявлениями, вы разовьете зоркий глаз, чтобы
                    распознавать обман в реальных жизненных ситуациях.
                  </p>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Понимание тонкостей выражений лица и их связи с различными
                  типами лжи является важным навыком для экспертов по
                  профилированию. Совершенствуя свой опыт в анализе лиц и
                  используя систему кодирования действий по лицу, вы получите
                  полный набор инструментов для раскрытия скрытой правды и
                  навигации по сложному ландшафту обмана.
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
