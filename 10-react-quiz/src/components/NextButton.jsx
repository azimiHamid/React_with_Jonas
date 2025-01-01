import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numOfQuestions } = useQuiz();

  if (answer === null) return null;
  if (index < numOfQuestions - 1)
    return (
      <button
        className="px-10 py-3 bg-gray-700 text-white font-medium rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        className="px-10 py-3 bg-gray-700 text-white font-medium rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
