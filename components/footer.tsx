import React from "react"
import router from "next/router"

function Contact() {
  return (
    <footer className='p-4 bg-white md:p-8 lg:p-10'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <a
          href='#'
          className='flex justify-center items-center text-2xl font-semibold text-gray-900'
        >
          POLL-I
        </a>
        <p className='my-6 text-gray-500'>
          Если у вас есть какие-либо вопросы или предложения, не стесняйтесь
          связаться с нами. Наши специалисты всегда готовы помочь вам.
        </p>
        <span className='text-sm text-gray-500 sm:text-center'>
          © 2023
          <a href='github.com/' className='hover:underline'>
            POLL-I™
          </a>
          . Все права защищены.
        </span>
        <div className='p-2'>
          <button
            type='button'
            onClick={() => router.push("mailto:email@email.com")}
          >
            ОТПРАВИТЬ ПИСЬМО
          </button>
        </div>
        <div className='contact-cta pb-20'></div>
      </div>
    </footer>
  )
}

export default Contact
