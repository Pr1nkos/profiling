import Image from "next/image";
import React, { useState } from "react";
import Header from "@/components/header";

import Logo from "@/public/imgs/logo-ru.svg";
import SideBar from "@/components/SideBar";
export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <>
      <SideBar />
      <div className="max-w-[90rem] mx-auto">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
          <div className="max-w-xl mx-auto xl:max-w-none py-10 ">
            <header className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold  text-blue-800">
                План обучения корпоротивному профайлингу
              </p>
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl  ">
                Содержание занятий модуля обучения "Профайлинг персонала:
                глубинный анализ личности и поведения в рабочей среде"
              </h1>
              <p className="mt-2 text-lg text-gray-800 ">
                Кадровый профайлинг - это система, которая описывает личность
                сотрудника и предсказывает его поведение в конкретных
                контекстах. Она включает не только установление правдивой
                информации, которую предоставляет кандидат, но и определение его
                характерологических особенностей, психотипа, базовой эмоции,
                мотивации и ценностных ориентиров.
              </p>
            </header>
            <div className="mt-16 flex  ">
              <div id="scrollspy" className="space-y-10 md:space-y-16">
                <div id="1" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 1 - Современные представления о направлении
                    профайлинга
                  </h2>

                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Введение в профайлинг персонала: основные понятия и
                            принципы работы.
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое профайлинг персонала?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Основные принципы работы профайлера
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Различия между профайлингом и психологическим
                            тестированием
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="2" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 2 - Психотипология личности
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Изучение характеров и их влияние на поведение в
                            рабочей среде
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое психотипология личности?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Описание различных типов личности
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Влияние психотипа на работу в команде
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="3" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 3 - Лицевая истема кодирования FACS
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Определение эмоций по Полу Экману, система
                            кодирования точек FACS, практическое применение
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое эмоциональный интеллект?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Описание системы кодирования точек FACS.
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как использовать знания об эмоциях в работе с
                            коллегами?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="5" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 5 - Основные признаки лжи
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Изучение различных стратегий лжи и способов их
                            выявления
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое ложь?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Описание различных стратегий лжи
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как выявить ложь?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="6" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 6 - Искусство чтения людей
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Изучение феномена намеренно скрываемой информации
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое намеренно скрываемая информация?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как ее выявить?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как использовать знания о намеренно скрываемой
                            информации в работе с коллегами?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="7" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 7 - Роль значимости в детекции лжи
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Оценка значимости стимула, классификация стимулов
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое значимость стимула?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как оценить значимость стимула?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как классифицировать стимулы?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="8" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800 whitespace-normal ">
                    Занятие 8 - Признаки проявления стресса в распознавании лжи
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900  "
                          >
                            Изучение разновидностей стресса, стадий общего
                            адаптационного синдрома, точки ориентировочного
                            замирания
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое стресс?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Описание различных разновидностей стресса
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как распознать ложь при проявлении стресса?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="9" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 9 - Структура вегетативной нервной системы
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Функции симпатической и парасимпатической нервной
                            системы, основные признаки лжи в ВНС.
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое вегетативная нервная система?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Описание функций симпатической и парасимпатической
                            нервной системы.
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как распознать ложь по признакам в ВНС?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="10" className="scroll-mt-24 min-h-[25rem]">
                  <h2 className="text-lg font-semibold text-gray-800  ">
                    Занятие 10 - Речевые паттерны лжи
                  </h2>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            СОДЕРЖАНИЕ ЗАНЯТИЯ
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-bold uppercase text-gray-900   "
                          >
                            Изучение основных признаков и способов выявления
                            паттернов лжи.
                          </th>
                          <td className="px-6 py-4">
                            <a href="#" className="font-bold text-blue-600 ">
                              Начать
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Что такое речевые паттерны лжи?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Описание основных признаков лжи в речи
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900   "
                          >
                            Как выявить ложь по речевым паттернам?
                          </th>
                          <td className="px-6 py-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
