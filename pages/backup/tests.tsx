import NavbarRoute from "../../components/Navbar"
import Contact from "../../components/footer"
import Image from "next/image"
import { useRouter } from "next/router"
import { FaArrowLeft } from "react-icons/fa"
import Question from "../../components/Question"
import ExerciseList from "../../components/ExerciseList"
import { useState } from "react"

export function getServerSideProps() {
  const exercises = [
    { id: 0, title: "Тест 1" },
    { id: 1, title: "Тест 2" },
  ]

  return {
    props: {
      exercises,
    },
  }
}

// export function ChangeImage(){
//   document.getElementById('image').src="anger.jpg"
// }
export function getQuestions(exerciseId: number) {
  const questions = [
    {
      id: 0,
      exerciseId: 0,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
    {
      id: 2,
      exerciseId: 0,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
    {
      id: 3,
      exerciseId: 0,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
    {
      id: 4,
      exerciseId: 1,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
    {
      id: 5,
      exerciseId: 0,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
    {
      id: 6,
      exerciseId: 1,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
    {
      id: 7,
      exerciseId: 0,
      question: "Какая эмоция изображена на экране?",
      answers: ["Гнев", "Радость", "Грусть", "Изумление", "Страх"],
      correctAnswer: "a",
    },
  ]

  return questions.filter((items) => items.exerciseId === exerciseId)
}
export default function Home({ exercises }) {
  const router = useRouter()
  const handleButtonClick = () => router.push("/tests/test")
  const initialState = {
    isExerciseShown: false,
    exerciseId: null,
    questions: [],
    isExerciseDone: false,
    score: 0,
    img: null,
  }

  const [state, setState] = useState(initialState)
  const { isExerciseShown, questions, isExerciseDone, score } = state

  const showExercise = (id: any) => {
    setState({
      ...state,
      exerciseId: id,
      questions: getQuestions(id),
      isExerciseShown: true,
    })
  }
  const hideExercise = () => {
    setState(initialState)
  }
  const finishTest = (score: any) => {
    setState({
      ...state,
      isExerciseDone: true,
      score,
    })
  }
  return (
    <>
      <NavbarRoute />
      <div className='bg-white '>
        <div className='max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8'>
          <div className=' h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
            <h1 className='text-black text-4xl font-bold mb-4'>ЗАДАНИЯ</h1>
            <Image
              className=' rounded-lg'
              src='/imgs/banner.png'
              width={640}
              height={320}
              alt='content'
            />{" "}
          </div>
          <div className='text-center'>
            {/* <button type="button" onClick={ChangeImage()}>
        Show Image
    </button> */}
            <img id='image'></img>
            <main className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
              {!isExerciseShown ? (
                <ExerciseList exercises={exercises} func={showExercise} />
              ) : isExerciseDone ? (
                <div>
                  <p className='my-4'>
                    Вы правильно ответили на {score} из {questions.length}{" "}
                    вопросов!{" "}
                  </p>

                  <button
                    className='flex items-center bg-blue-800 gap-1 p-2 rounded-sm shadow-md text-white'
                    onClick={hideExercise}
                  >
                    <span>
                      <FaArrowLeft />
                    </span>
                    <span>Вернуться</span>
                  </button>
                </div>
              ) : (
                <Question
                  questions={questions}
                  hideExercise={hideExercise}
                  finishTest={finishTest}
                />
              )}
            </main>
          </div>
        </div>
      </div>

      <Contact />
    </>
  )
}

// export default function Home({ exercises }) {
