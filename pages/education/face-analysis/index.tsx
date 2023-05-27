import { useEffect } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "../../../components/layout-denied";
import NavbarRoute from "../../../components/Navbar";
import NavbarBottom from "../../../components/NavbarBottom";
import Contact from "../../../components/footer";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();

  // Fetch content from protected route
  useEffect(() => {}, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <>
      <Head>
        <title id="title">Начало модуля</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavbarRoute />
      <NavbarBottom />

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Пол Экман: пионер анализа лиц
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Ни одно исследование анализа лица не было бы полным без
                  признания вклада Пола Экмана. Обширные исследования доктора
                  Экмана и новаторские открытия произвели революцию в нашем
                  понимании выражений лица и их связи с эмоциями. Его
                  новаторская работа над микровыражениями, универсальностью
                  эмоций и системой кодирования лицевых движений предоставила
                  бесценную информацию в области профилирования. Присоединяйтесь
                  к нам, чтобы воздать должное замечательному вкладу доктора
                  Экмана и включить его открытия в наши поиски опыта в анализе
                  лица.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://pbs.twimg.com/profile_images/865272581149958144/Xq5MeKSp_400x400.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Для начинающего эксперта по профилированию первостепенное
                  значение имеет способность различать эмоции и обнаруживать
                  обман с помощью анализа лица. Раскройте всю мощь своих знаний,
                  осваивая науку и искусство анализа выражения лица. Разберитесь
                  в хитросплетениях эмоций, раскройте тонкости обманчивых
                  сигналов и отточите свое мастерство в использовании системы
                  кодирования движений лица. Поднимите свои возможности
                  профилирования на новую высоту, погружаясь в глубины
                  человеческого поведения и эмоций.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <AiOutlineMenu
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>Пол Экман: пионер анализа лиц</span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Революционная система кодирования движений лица (FACS)
                </h2>
                <p className="mt-8">
                  Приступите к глубокому погружению в революционную методологию
                  Системы кодирования движений лица (FACS), сложной структуры,
                  разработанной Полом Экманом и другими известными экспертами в
                  этой области. Узнайте, как FACS анализирует движения лица и
                  микровыражения с беспрецедентной точностью. Получите
                  представление о сложных механизмах, лежащих в основе передачи
                  эмоций через лицевые мышцы. Приобретите опыт, чтобы
                  расшифровать даже самые мимолетные сигналы лица, используя
                  возможности FACS в своем путешествии в качестве опытного
                  профилировщика.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Сложности эмоций
                </h2>
                <p className="mt-6">
                  Погрузитесь в увлекательное исследование эмоций и их глубокого
                  влияния на поведение человека. Получите полное представление о
                  шести универсальных типах эмоций: счастье, печаль, гнев,
                  страх, отвращение и удивление. Погрузитесь в сложное
                  взаимодействие между выражением лица и эмоциями, раскрывая
                  тонкие нюансы, которые формируют нашу невербальную
                  коммуникацию. Узнайте, как эмоции проявляются на лице, и
                  приобретите навыки расшифровки их сложностей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
