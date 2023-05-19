import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "../../components/layout-denied";
import NavbarRoute from "../../components/Navbar";
import NavbarBottom from "../../components/NavbarBottom";
import Contact from "../../components/footer";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();

  // Fetch content from protected route
  useEffect(() => {}, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <>
      <NavbarRoute />
      <NavbarBottom />

      <div className="bg-gradient-to-bl from-green-200 to-purple-200 ">
        <div className="min-h-screen flex flex-col justify-center text-justify items-center ">
          <div>
            <div className="min-h-1/4 mt-36 p-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 flex flex-col justify-center items-center rounded-3xl">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                    <h1 className="text-4xl font-bold text-white mb-4">
                      Эмоции
                    </h1>
                    <p className="text-lg text-white">
                      Изучите основы выявления эмоций
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                    <h1 className="text-4xl font-bold text-white mb-4">
                      Система FACS
                    </h1>
                    <p className="text-lg text-white">
                      На основании полученных знаний научитесь определять
                      микродвижения по лицу
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                    <h1 className="text-4xl font-bold text-white mb-4">
                      Симуляция эмоций
                    </h1>
                    <p className="text-lg text-white">
                      Закрепите знания посредством изучения прототипа симуляции
                      эмоций
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                    <h1 className="text-4xl font-bold text-white mb-4">
                      Задания
                    </h1>
                    <p className="text-lg text-white">
                      Оцените свои знания при прохождении тестов
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Обзор:
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        Понимание системы профайлинга и психологического анализа
                      </h2>
                      <p className="leading-relaxed">
                        Добро пожаловать на нашу образовательную платформу,
                        предназначенную для предоставления всесторонней
                        информации и передовых знаний по профайлингу.
                        Погрузитесь в тонкости анализа лица и анализа психотипов
                        и получите глубокое понимание человеческого поведения,
                        эмоций и методов, используемых в сложных методологиях
                        профайлинга. Изучите тщательно созданные страницы ниже,
                        предназначенные для повышения вашего опыта в этой
                        области.
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Что такое профайлинг?
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        Профайлинг
                      </h2>
                      <p className="leading-relaxed">
                        это практика анализа поведенческих паттернов,
                        характеристик и черт, позволяющая получить представление
                        о личности, мотивах и возможных действиях человека. Он
                        включает в себя наблюдение за различными факторами,
                        такими как вербальные сигналы, язык тела и
                        микровыражения, для расшифровки скрытых эмоций и
                        намерений.
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Анализ лица
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        Декодирование лицевых движений
                      </h2>
                      <p className="leading-relaxed">
                        Откройте для себя преобразующую силу анализа лица в
                        разгадке эмоций, обнаружении лжи и раскрытии скрытой
                        правды. Погрузитесь в новаторское исследование
                        уважаемого психолога Пола Экмана, который был пионером в
                        изучении мимики и микровыражений. Раскройте многогранные
                        аспекты анализа лица, включая:
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        - Эмоции: раскройте глубокие последствия шести
                        универсальных типов эмоций и их сложных проявлений в
                        выражениях лица.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        - Типы лжи: овладейте искусством расшифровки выражений
                        лица, намекающих на различные формы обмана и
                        манипулятивного поведения.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        - FACS: изучите глубокие тонкости системы кодирования
                        движений лица (FACS) и ее ключевую роль в расшифровке
                        микровыражений с беспрецедентной точностью.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="container px-5 py-24 mx-auto">
              <div className="py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Анализ психотипа
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Отправьтесь в познавательное путешествие в захватывающую
                  область анализа психотипов, где модели поведения, язык тела и
                  черты характера сходятся воедино, чтобы раскрыть исчерпывающие
                  профили людей. Раскройте глубокие последствия анализа
                  психотипов в различных областях, включая психологию,
                  криминологию и динамику отношений. Участвуйте в следующих
                  тщательно созданных страницах, чтобы усилить свой опыт:
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  - Язык тела: различайте тонкие нюансы языка тела и понимайте
                  их незаменимую значимость в контексте анализа психотипов.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  - Случаи психотипов: погрузитесь в захватывающие тематические
                  исследования из реальной жизни, где анализ психотипов сыграл
                  ключевую роль в раскрытии глубоких идей и разгадке сложного
                  человеческого поведения.
                </p>
              </div>
              <div className="py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Ресурсы: повысьте свой уровень знаний
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Расширьте свой кругозор с помощью нашей тщательно отобранной
                  коллекции ресурсов, созданных специально для расширения вашего
                  опыта в качестве эксперта по профилированию. Получите доступ к
                  массиву авторитетных книг, научных работ и внешних ссылок,
                  тщательно отобранных для углубления вашего понимания и
                  повышения вашего профессионального роста в сферах анализа
                  лица, анализа психотипов и связанных областей. Эти ресурсы
                  служат бесценными ссылками, продвигая вас к новым областям
                  мастерства.
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                На нашей платформе мы верим, что знания — это сила, когда речь
                идет о понимании человеческого поведения.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
