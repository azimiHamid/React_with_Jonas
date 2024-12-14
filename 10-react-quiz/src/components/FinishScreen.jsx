/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage > 0 && percentage < 50) emoji = "🥴";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div>
      <p className=" my-14 py-5 px-8 sm:px-32 sm:text-lg rounded-full text-gray-50 bg-teal-600">
        <span className="text-2xl">{emoji}</span> You scored{" "}
        <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p>(Highscore: {highscore} points)</p>
    </div>
  );
}

export default FinishScreen;
