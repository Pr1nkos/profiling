import NavbarRoute from "../components/Navbar";
import Contact from "../components/footer";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Question from "../components/Tests/Question";
import ExerciseList from "../components/Tests/ExerciseList";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const test = [
  {
    name: "Ответ 1",
    desc: "Злость",
  },
  {
    name: "Ответ 2",
    desc: "Отчаяние",
  },
  {
    name: "Ответ 3",
    desc: "Грусть",
  },
  {
    name: "Ответ 4",
    desc: "Изумление",
  },
];

export function getServerSideProps() {
  const exercises = [
    { id: 0, title: "Тест 1" },
    { id: 1, title: "Тест 2" },
  ];

  return {
    props: {
      exercises,
    },
  };
}

export function getQuestions(exerciseId) {
  const questions = [
    {
      id: 0,
      exerciseId: 0,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "a",
    },
    {
      id: 2,
      exerciseId: 0,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "d",
    },
    {
      id: 3,
      exerciseId: 0,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "e",
    },
    {
      id: 4,
      exerciseId: 1,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "b",
    },
    {
      id: 5,
      exerciseId: 0,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "d",
    },
    {
      id: 6,
      exerciseId: 1,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "c",
    },
    {
      id: 7,
      exerciseId: 0,
      question: "Какая эмоция изображена на картинке?",
      answers: ["Счастье", "Грусть", "Удивление", "1Изумление00", "Печаль"],
      correctAnswer: "b",
    },
  ];

  return questions.filter((items) => items.exerciseId === exerciseId);
}
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#ff1" opacity="0.5" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default function Home({ exercises }) {
  const [selected, setSelected] = useState(test[0]);
  const initialState = {
    isExerciseShown: false,
    exerciseId: null,
    questions: [],
    isExerciseDone: false,
    score: 0,
  };

  const [state, setState] = useState(initialState);
  const { isExerciseShown, questions, isExerciseDone, score } = state;

  const showExercise = (id) => {
    setState({
      ...state,
      exerciseId: id,
      questions: getQuestions(id),
      isExerciseShown: true,
    });
  };
  const hideExercise = () => {
    setState(initialState);
  };
  const finishTest = (score) => {
    setState({
      ...state,
      isExerciseDone: true,
      score,
    });
  };
  return (
    <>
      <NavbarRoute />
      <div className="bg-gradient-to-bl from-green-200 to-purple-200">
        <div className="bg-red-900 rounded-full min-h-screen justify-center p-8 flex flex-col items-center animate-loop">
          <h1 className="text-white text-4xl font-bold mb-4">ЗАДАНИЯ</h1>
          <Image
            src="/imgs/anger.jpg"
            alt="Image"
            width={200}
            height={200}
            className="w-32 h-32 rounded-full"
          />
        </div>
      </div>
      <div className="w-1/2 m-auto mt-[120px] bg-gray-200 p-6 rounded-md shadow-2xl">
        <main className="">
          {!isExerciseShown ? (
            <ExerciseList exercises={exercises} func={showExercise} />
          ) : isExerciseDone ? (
            <div>
              <p className="my-4">
                Вы ответили верно на {score}/{questions.length} вопросов!{" "}
              </p>

              <button
                className="flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white"
                onClick={hideExercise}
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span>Назад</span>
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
      <div className="w-full px-4 py-16">
        <div className="mx-auto w-full max-w-md ">
          <h1>Тест 1</h1>
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only text-white">
              Тест1
            </RadioGroup.Label>
            <div className="space-y-2">
              {test.map((test) => (
                <RadioGroup.Option
                  key={test.name}
                  value={test}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-green"
                        : ""
                    }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-sky-100" : "text-gray-500"
                              }`}
                            >
                              <span>{test.desc}</span>{" "}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <Contact />
    </>
  );
}
// export default function Home({ exercises }) {
const initialState = {
  isExerciseShown: false,
  exerciseId: null,
  questions: [],
  isExerciseDone: false,
  score: 0,
};
