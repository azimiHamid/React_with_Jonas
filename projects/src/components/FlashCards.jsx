import { useState } from "react";

/* eslint-disable react/prop-types */
const questions = [
  {
    question: "What programming language is React based on?",
    answer: "JavaScript",
  },
  {
    question: "What are the building blocks of React applications?",
    answer: "Components",
  },
  {
    question: "What syntax is used to describe the UI structure in React?",
    answer: "JSX",
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    answer: "Via props",
  },
  { question: "How can components retain memory?", answer: "Using state" },
  {
    question:
      "What term describes an input element fully synchronized with state?",
    answer: "Controlled component",
  },
];

function FlashCards() {
  return (
    <section className="w-full min-h-screen bg-yellow-50 text-[#0f003ddb] p-5 font-poppins">
      <h1 className="my-7 mt-10 font-semibold text-2xl">
        Exercise: Flash Cards
      </h1>
      <div className="w-full min-h-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((q, idx) => (
          <Card key={idx} qObj={q} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ qObj }) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <article
      onClick={() => setDisplayAnswer(!displayAnswer)}
      className={`${
        displayAnswer ? "bg-green-800" : ""
      } w-full h-[250px] flex items-center justify-center text-2xl p-3 text-center text-white cursor-pointer bg-yellow-900 rounded-xl active:scale-100 hover:scale-95 transition-transform duration-500`}
    >
      {displayAnswer ? (
        <p className="">Answer: {qObj.answer}</p>
      ) : (
        <p>{qObj.question}</p>
      )}
    </article>
  );
};

export default FlashCards;
