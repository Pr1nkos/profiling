import React, { useState } from "react";
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
      <div className="max-w-[90rem] mx-auto">
        <SideBar />
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
                        Определение эмоций по Полу Экману, система кодирования
                        точек FACS, практическое применение
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
                        Как использовать знания об эмоциях в работе с коллегами?
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
    </>
  );
}
