/* eslint-disable react/prop-types */
import NextButton from "./NextButton";
import Timer from "./Timer";

function Footer({dispatch, answer, numOfQuestions, index}) {
  return (
    <footer className="flex w-full max-w-xl justify-between">
      <Timer />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        numOfQuestions={numOfQuestions}
        index={index}
      />
    </footer>
  );
}

export default Footer;
