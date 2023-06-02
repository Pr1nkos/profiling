import Link from "next/link"
import React from "react"

function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link
      className='btn bg-blue-800 text-white hover:bg-white hover:text-black hover:duration-150 duration-150 rounded-sm shadow-lg  font-bold'
      href={link}
    >
      {text}
    </Link>
  )
}

export default Button
