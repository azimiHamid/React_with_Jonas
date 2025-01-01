import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numOfQuestions, points, maxPossiblePoints, answer } =
    useQuiz();

  return (
    <header className="max-w-xl w-full flex flex-col mt-5">
      <progress
        max={numOfQuestions}
        value={index + Number(answer !== null)}
        className="w-full h-4 appearance-none bg-gray-200 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-teal-700 [&::-moz-progress-bar]:bg-teal-700"
      />

      <div className="flex justify-between mt-5">
        <p>
          Question <strong>{index + 1}</strong> / {numOfQuestions}
        </p>
        <p>
          <strong>{points}</strong>/ {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}

export default Progress;
