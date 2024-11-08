import { useState } from "react";

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
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="w-full min-h-screen bg-yellow-50 text-[#0f003ddb] p-5 font-poppins">
      <h1 className="my-7 mt-10 font-semibold text-2xl">
        Exercise: Flash Cards - V2
      </h1>
      <div className="w-full min-h-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((question, idx) => (
          <article
            key={idx}
            onClick={() => setSelectedId(selectedId === idx ? null : idx)}
            className={`${
              idx === selectedId && "bg-green-600"
            } w-full h-[250px] flex items-center justify-center text-2xl p-3 text-center text-white cursor-pointer bg-yellow-900 rounded-xl hover:scale-95 active:scale-100 transition-transform duration-500`}
          >
            <p>{idx === selectedId ? question.answer : question.question}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FlashCards;
