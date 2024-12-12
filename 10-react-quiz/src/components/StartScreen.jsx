/* eslint-disable react/prop-types */
function StartScreen({ numOfQuestions }) {
  return (
    <div className="flex flex-col items-center text-white px-6 mt-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to the React Quiz</h2>
        <h3 className="text-xl mb-6">
          {numOfQuestions} questions to test your React mastery!
        </h3>
        <button className="px-10 py-3 bg-gray-700 text-white font-medium rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Let&apos;s Start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
