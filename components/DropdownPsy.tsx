import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

function DropdownPsy() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='w-full items-center justify-between font-bold text-lg text-center rounded-lg border-4 border-transparent  duration-300  flex'
      >
        Оценка психотипа
        {!isOpen ? (
          <AiOutlineCaretUp className='h-8' />
        ) : (
          <AiOutlineCaretDown className='h-8' />
        )}
      </button>

      {isOpen && (
        <div className='border-solid border-2 bg-blue-800  absolute bottom-20 flex flex-col items-start rounded-sm text-center w-full'>
          <div className='hover:bg-white hover:text-black  cursor-pointer w-full'>
            <Link href='/lesson1/psychotype-analysis/'>
              <p>Начало модуля</p>
            </Link>
          </div>
          <div className='hover:bg-white hover:text-black  cursor-pointer w-full'>
            <Link href='/lesson1/psychotype-analysis/body-language'>
              <p>Язык тела</p>
            </Link>
          </div>
          <div className='hover:bg-white hover:text-black  cursor-pointer w-full'>
            <Link href='/lesson1/psychotype-analysis/psychotype-cases'>
              <p>Кейсы</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownPsy
