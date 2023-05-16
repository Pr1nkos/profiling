import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/layout-denied"

export default function Home() {
  const { data: session } = useSession()

  // Fetch content from protected route
  useEffect(() => {}, [session])

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />
  }

  // If session exists, display content
  return (
    <Layout>
      <p id='font-common'>Курс по профайлингу</p>
      <p>Профайлер-верификатор</p>
      <ol>
        <li>
          Профайлинг и его направления
          <ol>
            <li>Что такое правда и откуда берется ложь</li>
            <li>Психология лжи</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Определение лжи
          <ol>
            <li>Непроизвольное внимание</li>
            <li>Правда и лодь доктора Лайтмана</li>
            <li>Структура субъективного мира человека</li>
            <li>Убеждения</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Принципы обнаружения лжи
          <ol>
            <li>Основные прессупозиции лжи</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Стимулы
          <ol>
            <li>Психофизиология</li>
            <li>Коммуникацияа</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Точки замирания и запоминания
          <ol>
            <li>Точка ориентировочного замирания</li>
            <li>Точка ориентировочного запоминания</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Признаки лжи по ВНС
          <ol>
            <li>Признаки ВНС. Пол Экман</li>
            <li>Изменение взгляда испытуемого</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Распознавание лжи по речи
          <ol>
            <li>Основные формы лжи. Пол Экман</li>
            <li>Распознавание лжи по речевым паттернам</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Метапрограммирование
          <ol>
            <li>Выявление метапрограммного профиля НЕТ</li>
            <li>Лингвистическая структура речи</li>
            <li>Метапрограммы в распознавании лжи</li>
            <li>Смена метапрограммного профиля</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Оценка правдивости утверждения
          <ol>
            <li>Анализ речи</li>
            <li>Восприятие речии</li>
            <li>Механизмы речи</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Признаки обмана
          <ol>
            <li>Признаки обмана. Пол экман</li>
            <li>Ложь как двойное послание</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
        <li>
          Алгоритм опросной беседы
          <ol>
            <li>Алгоритм Лайтмана-Экмана</li>
            <li>Профайлинг и супружеская неверность</li>
            <li>Явная опросная беседа с легендированием</li>
            <li>ТЕСТ</li>
          </ol>
        </li>
      </ol>
    </Layout>
  )
}
