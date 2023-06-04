import Image from "next/image";
import React, { useState } from "react";
import Header from "@/components/header";

import Logo from "@/public/imgs/logo-ru.svg";
export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <>
      <div className="max-w-[90rem] mx-auto">
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
          <div className="max-w-3xl mx-auto py-2">
            <button
              type="button"
              className="flex justify-between gap-x-2 items-center w-full text-gray-500 hover:text-gray-600"
              data-hs-overlay="#docs-sidebar"
              aria-controls="docs-sidebar"
              aria-label="Toggle navigation"
            >
              <span className="text-sm">
                <Image
                  src={Logo}
                  alt="Logo"
                  width="180"
                  height="55"
                  className="cursor-pointer "
                  priority
                />
              </span>

              <svg
                className="w-5 h-5"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="docs-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-80 bg-white border-r border-gray-200 py-10 px-8 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:top-0 lg:right-auto lg:bottom-0 lg:left-[max(0px,calc(50%-45rem))] lg:z-10 "
        >
          <button
            type="button"
            className="ml-auto flex justify-end lg:hidden text-gray-500 hover:text-gray-600"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">
              {" "}
              <Image
                src={Logo}
                alt="Logo"
                width="180"
                height="55"
                className="cursor-pointer "
                priority
              />
            </span>

            <svg
              className="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>

          <nav id="sidebar-nav" className="relative space-y-8">
            <h5 className="mb-3 text-sm font-semibold text-slate-900 ">
              <Image
                src={Logo}
                alt="Logo"
                width="180"
                height="55"
                className="cursor-pointer "
                priority
              />
            </h5>

            <button className="btn relative inline-block font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white"></span>
              <span className="relative text-white group-hover:text-black font-bold">
                <Header />
              </span>
            </button>
            <ul
              className="ml-0.5 space-y-2 border-l-2 border-slate-100 "
              data-hs-scrollspy="#scrollspy"
            >
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active"
                  href="/lessons/lesson1"
                >
                  Занятие 1
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson2"
                >
                  Занятие 2
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson3"
                >
                  Занятие 3
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson4"
                >
                  Занятие 4
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson5"
                >
                  Занятие 5
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson6"
                >
                  Занятие 6
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson7"
                >
                  Занятие 7
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson8"
                >
                  Занятие 8
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="/lessons/lesson9"
                >
                  Занятие 9
                </a>
              </li>
              <li>
                <a
                  className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900    hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800  "
                  href="../lessons/lesson10"
                >
                  Занятие 10
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
          <div className="max-w-xl mx-auto xl:max-w-none py-10 ">
          <header className="max-w-3xl">
              <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <a
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4"
                  href="./"
                >
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Вернуться в выбору занятий
                </a>
              </div>
            </header>
            <div className="mt-16 flex  ">
              <div id="scrollspy" className="space-y-10 md:space-y-16">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
