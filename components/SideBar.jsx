import Image from "next/image";
import Header from "./header";
import Logo from "@/public/imgs/logo-ru.svg";
import Link from "next/link";

export default function SideBar() {
  return (
    <>
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
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson1/"
                >
                  Занятие 1
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson2/"
                >
                  Занятие 2
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson3/"
                >
                  Занятие 3
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson4/"
                >
                  Занятие 4
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson5/"
                >
                  Занятие 5
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson6/"
                >
                  Занятие 6
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson7/"
                >
                  Занятие 7
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson8/"
                >
                  Занятие 8
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson9/"
                >
                  Занятие 9
                </Link>
              </li>
              <li className="block py-1 pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hs-scrollspy-active:font-medium hs-scrollspy-active: text-blue-800   active">
                <Link
                  href="/lessons/lesson10/"
                >
                  Занятие 10
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </>
  );
}
