import { signIn } from "next-auth/react"
import React, { useRef } from "react"
import Image from "next/image"
export default function LoginPage() {
  const userName = useRef("")
  const pass = useRef("")

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    })
  }
  return (
    // <main id='signin'>
    //   <label>Email:</label>
    //   <input
    //     autoComplete='off'
    //     placeholder='email@email.com'
    //     onChange={(e) => (userName.current = e.target.value)}
    //   ></input>
    //   <label>Пароль:</label>
    //   <input
    //     autoComplete='off'
    //     type='password'
    //     onChange={(e) => (pass.current = e.target.value)}
    //   ></input>
    //   <button onClick={onSubmit}>Войти</button>
    // </main>

    <main id='signin'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a
          href='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <Image
            className=' rounded-lg w-8 h-8 mr-2'
            src='/imgs/logo.png'
            width={320}
            height={320}
            alt='content'
          />
          POLL-I. Модуль обучения профайлингу
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Аутентификация пользователя
            </h1>

            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Введите Вашу почту
              </label>
              <input
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                autoComplete='off'
                placeholder='email@email.com'
                onChange={(e) => (userName.current = e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Пароль
              </label>

              <input
                placeholder='••••••••'
                autoComplete='off'
                type='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={(e) => (pass.current = e.target.value)}
              ></input>
            </div>

            <button
              className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              onClick={onSubmit}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
