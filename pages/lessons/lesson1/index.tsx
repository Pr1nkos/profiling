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
              <div className="w-full px-80 py-20">
                <a
                  className="text-center text-white group-hover:text-black font-bold absolute inset-70 w-40 h-15 bg-blue-800 border-2 border-black group-hover:bg-white"
                  href="http://127.0.0.1:5500/pages/lessons/lesson1/lesson1.html"
                >
                  Приступить к занятию
                </a>
              </div>
            </header>
            <div className="mt-16 flex  "></div>
          </div>
        </div>
      </div>
    </>
  );
}
