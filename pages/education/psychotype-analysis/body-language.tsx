import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "../../../components/layout-denied";
import NavbarRoute from "../../../components/Navbar";
import NavbarBottom from "../../../components/NavbarBottom";
import Contact from "../../../components/footer";
import Image from "next/image";
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
        <title id="title">Язык тела</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavbarRoute />
      <NavbarBottom />
      <section className="bg-gradient-to-bl from-green-200 to-purple-200 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full mt-36 my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Язык тела в анализе психотипов
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <p className="text-gray-600 mb-8">
                Добро пожаловать на страницу «Язык тела» в разделе «Анализ
                психотипов». Здесь мы исследуем ключевую роль языка тела в
                расшифровке человеческого поведения, раскрытии черт личности и
                понимании эмоций и намерений. Присоединяйтесь к нам, чтобы
                погрузиться в запутанный мир сигналов языка тела и их глубокое
                значение для анализа психотипов. Получите более глубокое
                понимание того, как эти сигналы могут предоставить ценную
                информацию, и повысьте свой опыт в расшифровке невербальной
                коммуникации человека.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/imgs/anger.jpg"
                width={200}
                height={300}
                alt="content"
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/imgs/anger.jpg"
                width={200}
                height={300}
                alt="content"
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Сила невербального общения
                </h3>
                <p className="text-gray-600 mb-8">
                  Язык тела служит мощной формой невербального общения,
                  передавая сообщения помимо произнесенных слов. Это богатый
                  источник информации о личности, эмоциях и намерениях человека.
                  Понимание и интерпретация сигналов языка тела являются важными
                  навыками в анализе психотипов. Анализируя позы, жесты, мимику
                  и другие физические сигналы, специалисты по профилированию
                  могут раскрыть скрытые аспекты психики человека, которые могут
                  быть не очевидны только при вербальном общении.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Взгляд на черты личности
          </h2>
          <p className="w-full my-2 text-xl font-bold leading-tight text-center text-gray-600">
            Сигналы языка тела дают глубокое представление о чертах личности
            человека. Определенные позы, такие как открытое и уверенное
            положение тела, могут указывать на напористость и уверенность в
            себе. И наоборот, закрытые или оборонительные позы могут указывать
            на чувство незащищенности или дискомфорта. Жесты и движения рук
            также могут выявить такие аспекты личности, как уверенность,
            экспрессивность или нервозность. Тщательно наблюдая и интерпретируя
            эти сигналы, специалисты по профилированию могут получить ценную
            информацию о характеристиках личности человека.
          </p>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Раскрытие эмоций и намерений
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Сигналы языка тела дают представление об эмоциональном состоянии
                и намерениях человека. Выражения лица, такие как улыбка, хмурый
                взгляд или поднятые брови, могут отражать широкий спектр эмоций,
                включая счастье, печаль, удивление или подозрение. Кроме того,
                микровыражения, краткие выражения лица, возникающие за доли
                секунды, могут выявить скрытые эмоции или намерения. Эксперты по
                профилированию, обученные анализу микровыражений, могут
                обнаруживать и интерпретировать эти мимолетные сигналы,
                раскрывая подлинные эмоции или потенциальный обман.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Примеры сигналов языка тела
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                При анализе психотипов определенные сигналы языка тела имеют
                общепризнанные интерпретации. Например, скрещенные руки или ноги
                могут указывать на оборону или сопротивление, а наклон вперед
                может означать заинтересованность и участие. Зрительный контакт,
                выражение лица и интонация голоса также вносят свой вклад в
                общее сообщение языка тела. Распознавая и анализируя эти сигналы
                в сочетании, специалисты по профилированию могут нарисовать
                более полную картину психологического состояния человека и
                поведенческих тенденций.
              </p>
            </div>
          </div>
          <p className="text-gray-800 text-base px-6 mb-5">
            Язык тела является важнейшим компонентом анализа психотипа, который
            дает ценную информацию о личности, эмоциях и намерениях человека.
            Овладев искусством наблюдения и интерпретации сигналов языка тела,
            эксперты по профилированию могут открыть скрытые уровни общения и
            глубже понять поведение человека. Присоединяйтесь к нам в этом
            путешествии исследований и открытий, пока мы углубляемся в глубокое
            влияние языка тела на анализ психотипов.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
