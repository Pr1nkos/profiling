import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [color, setColor] = useState("white");
  return (
    <div className="navbar">
      <Link href="/"></Link>
      <ul className="submenu">
        <li className="p-4 hover:text-gray-500">
          <Link href="/">Домашняя страница</Link>
        </li>
        <li className="p-4 hover:text-gray-500">
          <Link href="/education">Модули образования</Link>
        </li>
        <li className="p-4 hover:text-gray-500">
          <Link href="/emotions">Изучение различных эмоций</Link>
        </li>
        <li className="p-4 hover:text-gray-500">
          <Link href="/lie">Классификация лжи</Link>
        </li>
        <li className="p-4 hover:text-gray-500">
          <Link href="/tests">Тестовая система</Link>
        </li>
        <li className="p-4 hover:text-gray-500">
          <Link href="/resources">Ресурсы</Link>
        </li>
        <li className="p-4  hover:text-gray-500">
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
      {/* Mobile button */}
      <div onClick={handleNav} id="icon-mobile">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile menu */}
      <div
        id={nav ? "submenu-mobile-true" : "submenu-mobile-false"}
        onClick={handleNav}
      >
        <ul>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Домашняя страница</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/education">Модули образования</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/emotions">Изучение различных эмоций</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/lie">Классификация лжи</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/tests">Тестовая система</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/resources">Ресурсы</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-500">
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
