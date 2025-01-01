/* eslint-disable react/prop-types */
import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="w-full text-center flex flex-col items-center justify-center text-white px-6 my-6">
      <h4 className="text-2xl md:text-3xl w-full font-medium my-6 md:my-10">
        {question.question}
      </h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
