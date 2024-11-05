import { useState } from "react";

/* eslint-disable no-unused-vars */
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 📈",
];

function Steps() {
  const [step, setStep] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true); // Start at the beginning
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }

    setIsAtStart(step <= 1);
    setIsAtEnd(false);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }

    setIsAtStart(false);
    setIsAtEnd(step >= 2);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f6ecd2] p-4">
      <h1 className="text-center text-4xl font-medium mb-7">
        Practice #2: Steps
      </h1>
      <div className="border p-5 bg-[#F6F6F6] rounded-lg min-w-full sm:min-w-[600px]">
        <article className="my-5 flex items-center justify-evenly">
          <div
            className={`${
              step >= 1 ? "bg-[#7950f2]" : "bg-[#E2E2E2]"
            } rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-3 font-ibm-mono text-xl font-semibold text-white`}
          >
            1
          </div>
          <div
            className={`${
              step >= 2 ? "bg-[#7950f2]" : "bg-[#E2E2E2]"
            } rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-3 font-ibm-mono text-xl font-semibold text-white`}
          >
            2
          </div>
          <div
            className={`${
              step >= 3 ? "bg-[#7950f2]" : "bg-[#E2E2E2]"
            } rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-3 font-ibm-mono text-xl font-semibold text-white`}
          >
            3
          </div>
        </article>
        <p className="my-12 font-poppins text-center font-medium text-2xl">
          {step == 0
            ? "Hello React Dev"
            : `Step ${step}: ${messages[step - 1]}`}
        </p>
        <article className="my-5 flex items-center justify-between mx-5">
          <button
            onClick={handlePrev}
            className={`${
              isAtStart && "opacity-50"
            } bg-[#7950f2] rounded-full px-4 py-1 sm:px-5 sm:py-2 font-poppins sm:text-lg text-gray-100`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className={`${
              isAtEnd && "opacity-50"
            } bg-[#7950f2] rounded-full px-4 py-1 sm:px-5 sm:py-2 font-poppins sm:text-lg text-gray-100`}
          >
            Next
          </button>
        </article>
      </div>
    </section>
  );
}

export default Steps;
