import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/imgs/logo-ru.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Header from "./header";

const NavbarRoute = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav className="z-50 fixed w-full h-24 shadow-sm bg-gray-300  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100  ">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex">
              <Link href="/lessons/lesson1/education">
                <li className="">
                  <button className="btn relative inline-block font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white "></span>
                    <span className="relative text-white group-hover:text-black  font-bold">
                      Введение
                    </span>
                  </button>
                </li>
              </Link>

              <Link href="/lessons/lesson1/lie">
                <li className="ml-10">
                  <button className="btn relative inline-block font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white"></span>
                    <span className="relative text-white group-hover:text-black font-bold">
                      Симуляция эмоций
                    </span>
                  </button>
                </li>
              </Link>
              <Link href="/lessons/lesson1/tests">
                <li className="ml-10 ">
                  <button className="btn relative inline-block font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white"></span>
                    <span className="relative text-white group-hover:text-black font-bold">
                      Задания
                    </span>
                  </button>
                </li>
              </Link>
              <Link href="/lessons/lesson1/resources">
                <li className="ml-10 ">
                  <button className="btn relative inline-block font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white"></span>
                    <span className="relative text-white group-hover:text-black font-bold">
                      Ресурсы
                    </span>
                  </button>
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 ease-in duration-500 shadow-sm bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md  border border-gray-100"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="education">
                <li className="py-4 cursor-pointer">Курс по профайлингу</li>
              </Link>
              <Link href="/emotions">
                <li className="py-4 cursor-pointer">
                  Изучение различных эмоций
                </li>
              </Link>
              <Link href="/lie">
                <li className="py-4 cursor-pointer">Симуляция эмоций</li>
              </Link>
              <Link href="/tests">
                <li className="py-4 cursor-pointer">Задания</li>
              </Link>
              <Link href="/resources">
                <li className="py-4 cursor-pointer">Ресурсы</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarRoute;
