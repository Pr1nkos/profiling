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

export default function Test() {
  const [selected, setSelected] = useState(test[0]);

  return (
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
  );
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
