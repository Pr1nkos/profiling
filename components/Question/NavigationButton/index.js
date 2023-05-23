export default function NavigationButton({ state, moveQuestion }) {
    const { currentQuestion, answers, numberOfQuestions } = state;

    const buttonStyles = {
        disabled:
            "bg-blue-500 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed",
        active: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
    };

    const getButton = (direction) => {
        if (direction === "next") {
            return (
                <button
                    onClick={() => moveQuestion("next")}
                    className={!answers[currentQuestion] ? x : y}
                >
                    {currentQuestion !== numberOfQuestions - 1
                        ? "Вперёд"
                        : "Завершить"}
                </button>
            );
        } else {
            if (currentQuestion === 0) {
                return <button className={x}>Назад</button>;
            } else {
                return (
                    <button onClick={() => moveQuestion("prev")} className={y}>
                        Назад
                    </button>
                );
            }
        }
    };
    const { disabled: x, active: y } = buttonStyles;
    return (
        <div className="flex gap-2 m-2">
            {getButton("prev")}
            {getButton("next")}
        </div>
    );
}
