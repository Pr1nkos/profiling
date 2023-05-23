import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

function DropdownPsy() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=' p-1 w-full items-center justify-between font-bold text-lg rounded-lg border-4 border-transparent active:border-white duration-300 active:text-white flex'
      >
        Оценка психотипа
        {!isOpen ? (
          <AiOutlineCaretUp className='h-8' />
        ) : (
          <AiOutlineCaretDown />
        )}
      </button>

      {isOpen && (
        <div className='bg-blue-400 absolute bottom-20 flex  flex-col items-start rounded-lg p-4 text-center w-full'>
          <div>
            <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
              <Link href='/education/psychotype-analysis/'>
                <p>Начало модуля</p>
              </Link>
            </div>
            <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
              <Link href='/education/psychotype-analysis/body-language'>
                <p>Язык тела</p>
              </Link>
            </div>
            <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent'>
              <Link href='/education/psychotype-analysis/psychotype-cases'>
                <p>Кейсы</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownPsy
