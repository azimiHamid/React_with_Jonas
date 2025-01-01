import { useQuiz } from "../context/QuizContext";

/* eslint-disable react/prop-types */
function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full">
      {question.options.map((option, idx) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
          key={option}
          disabled={hasAnswered}
          className={`${idx === answer ? "translate-x-6" : ""} 
          ${
            hasAnswered
              ? idx === question.correctOption
                ? "bg-teal-600"
                : "bg-orange-600"
              : ""
          } cursor-pointer w-full max-w-xl text-left py-4 px-6 bg-gray-800 text-gray-50 rounded-full shadow-md hover:bg-gray-700 focus:outline-none hover:scale-95 transition-transform duration-300`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
