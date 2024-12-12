/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="px-10 py-3 bg-gray-700 text-white font-medium rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
