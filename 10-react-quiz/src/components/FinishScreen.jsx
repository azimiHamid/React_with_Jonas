/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage > 0 && percentage < 50) emoji = "🥴";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="mt-14 lg:mt-28 flex flex-col justify-center items-center ">
      <p className="py-5 px-8 sm:px-32 sm:text-lg rounded-full text-gray-50 bg-teal-600">
        <span className="text-2xl">{emoji}</span> You scored{" "}
        <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="my-10 text-2xl">(Highscore: {highscore} points)</p>
      <button
        className="px-12 py-3 text-xl bg-gray-700 text-white font-medium rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}

export default FinishScreen;
