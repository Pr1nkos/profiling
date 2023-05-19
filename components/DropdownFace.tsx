import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

function DropdownFace() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=' p-1 w-full items-center justify-between font-bold text-lg text-center rounded-lg border-4 border-transparent active:border-white duration-300 active:text-white flex'
      >
        Лицевой анализ
        {!isOpen ? (
          <AiOutlineCaretUp className='h-8' />
        ) : (
          <AiOutlineCaretDown />
        )}
      </button>

      {isOpen && (
        <div className='bg-blue-400 absolute bottom-20 flex flex-col items-start rounded-lg p-3 text-center w-full'>
          <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
            <Link href='/education/face-analysis/'>
              <p>Начало модуля</p>
            </Link>
          </div>
          <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
            <Link href='/education/face-analysis/types-of-lies'>
              <p>Типы лжи</p>
            </Link>
          </div>
          <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
            <Link href='/education/face-analysis/emotions'>
              <p>Эмоции </p>
            </Link>
          </div>
          <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
            <Link href='/education/face-analysis/detection-techniques'>
              <p>Методики</p>
            </Link>
          </div>
          <div className='flex text-center w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
            <Link href='/education/face-analysis/facs'>
              <p>FACS</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownFace
