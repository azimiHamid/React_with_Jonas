/* eslint-disable react/prop-types */
function Progress({ index, numOfQuestions }) {
  return (
    <header className="max-w-xl w-full">
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
    </header>
  );
}

export default Progress;
