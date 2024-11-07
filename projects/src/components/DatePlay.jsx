// Practice #2

import { useState } from "react";

function DatePlay() {
  const [currDate, setCurrDate] = useState(new Date());

  const incrementDate = () => {
    const newDate = new Date(currDate);
    newDate.setDate(newDate.getDate() + step);
    setCurrDate(newDate);
  };

  const decrementDate = () => {
    const newDate = new Date(currDate);
    newDate.setDate(newDate.getDate() - step);
    setCurrDate(newDate);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
    setCurrDate(new Date());
  };

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const decreaseStep = () => {
    setStep((prev) => prev - 1);
  };
  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - step);
    decrementDate();
  };
  const increaseCount = () => {
    setCount((prev) => prev + step);
    incrementDate();
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#ddd2b6] p-4 font-poppins">
      <h2 className="sm:text-4xl text-2xl text-center mb-10">
        Challenge #2: Date Converting
      </h2>
      <div className="flex flex-col items-stretch justify-center gap-3 font-md text-xl bg-gray-200 p-8 rounded-lg w-full sm:w-[550px] hover:scale-105 transition-transform duration-400 ">
        <button
          onClick={reset}
          className="flex items-center justify-center border border-b-slate-500 border-e-slate-500 border-t-teal-500 border-s-teal-500 px-10 py-1 mb-5 w-fit mx-auto rounded-full active:scale-95"
        >
          Reset
        </button>
        <article className="flex items-center justify-between gap-6">
          <button
            onClick={decreaseStep}
            className="flex items-center justify-center bg-teal-800 text-gray-100 w-9 h-9 rounded-full leading-none active:scale-95"
          >
            &minus;
          </button>

          <p>
            Step: <span>{step}</span>
          </p>

          <button
            onClick={increaseStep}
            className="flex items-center justify-center bg-teal-800 text-gray-100 w-9 h-9 rounded-full leading-none active:scale-95"
          >
            &#43;
          </button>
        </article>
        <article className="flex items-center justify-between gap-6">
          <button
            onClick={decreaseCount}
            className="flex items-center justify-center bg-teal-800 text-gray-100 w-9 h-9 rounded-full leading-none active:scale-95"
          >
            &minus;
          </button>

          <p>
            Count: <span>{count}</span>
          </p>

          <button
            onClick={increaseCount}
            className="flex items-center justify-center bg-teal-800 text-gray-100 w-9 h-9 rounded-full leading-none active:scale-95"
          >
            &#43;
          </button>
        </article>
        <hr className="border-t-1 border-teal-500 mt-3" />
        <article className="text-center sm:mt-3">
          {count === 0 ? (
            <span>
              Today is <br className="sm:hidden inline" />{" "}
              {currDate.toDateString()}.
            </span>
          ) : count > 0 ? (
            <span>
              {count} days from today is <br className="sm:hidden inline" />{" "}
              {currDate.toDateString()}.
            </span>
          ) : (
            <span>
              {Math.abs(count)} days ago was{" "}
              <br className="sm:hidden inline" /> {currDate.toDateString()}.
            </span>
          )}
        </article>
      </div>
    </section>
  );
}

export default DatePlay;
