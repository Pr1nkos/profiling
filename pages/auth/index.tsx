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
    <div className='min-h-screen bg-gray-200 text-gray-900 flex justify-center'>
      <div className=' max-w-screen m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='flex-1 bg-leti text-center hidden lg:flex'>
          <div className=''></div>
        </div>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div>
            <a
              href='/'
              className='flex justify-center  my-4 font-bold text-gray-900'
            >
              <Image
                className=''
                src='/imgs/logo-sm.png'
                width={80}
                height={80}
                alt='content'
              />
            </a>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-blue-800 md:text-xl text-center'>
              Практико-ориентированный модуль обучения кадровому профайлингу
            </h1>
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                  Аутентификация пользователя
                </h1>

                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Введите Вашу почту
                  </label>
                  <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                    autoComplete='off'
                    placeholder='email@email.com'
                    onChange={(e) => (userName.current = e.target.value)}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Пароль
                  </label>

                  <input
                    placeholder='••••••••'
                    autoComplete='off'
                    type='password'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                    onChange={(e) => (pass.current = e.target.value)}
                  ></input>
                </div>
                <div className='flex justify-center '>
                  <button
                    className='btn relative rounded-sm inline-block font-medium group'
                    onClick={onSubmit}
                  >
                    <span className='absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white'></span>
                    <span className='relative text-white group-hover:text-black  font-bold'>
                      Войти
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className='flex flex-col bg-leti bg-cover bg-no-repeat   items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 '>
    //   <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
    //     <a href='/' className='flex items-center my-4 font-bold text-gray-900'>
    //       <Image
    //         className='w-full h-10'
    //         src='/imgs/logo-ru.svg'
    //         width={100}
    //         height={50}
    //         alt='content'
    //       />
    //     </a>
    //     <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
    //       <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
    //         Аутентификация пользователя
    //       </h1>

    //       <div>
    //         <label
    //           htmlFor='email'
    //           className='block mb-2 text-sm font-medium text-gray-900 '
    //         >
    //           Введите Вашу почту
    //         </label>
    //         <input
    //           className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
    //           autoComplete='off'
    //           placeholder='email@email.com'
    //           onChange={(e) => (userName.current = e.target.value)}
    //         ></input>
    //       </div>
    //       <div>
    //         <label
    //           htmlFor='password'
    //           className='block mb-2 text-sm font-medium text-gray-900 '
    //         >
    //           Пароль
    //         </label>

    //         <input
    //           placeholder='••••••••'
    //           autoComplete='off'
    //           type='password'
    //           className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
    //           onChange={(e) => (pass.current = e.target.value)}
    //         ></input>
    //       </div>
    //       <div className='flex justify-center '>
    //         <button
    //           className='btn relative rounded-sm inline-block font-medium group'
    //           onClick={onSubmit}
    //         >
    //           <span className='absolute inset-0 w-full h-full bg-blue-800 border-2 border-black group-hover:bg-white'></span>
    //           <span className='relative text-white group-hover:text-black  font-bold'>
    //             Войти
    //           </span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
