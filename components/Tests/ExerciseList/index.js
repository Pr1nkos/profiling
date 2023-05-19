export default function ExerciseList({ exercises, func }) {
    return (
        <>
            <h3 className="text-2xl">Pick an Exercise</h3>
            <ul>
                {exercises.map((exercise) => (
                    <li className="hover:text-blue-900" key={exercise.id}>
                        <button onClick={() => func(exercise.id)}>
                            {exercise.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
