// Practice #2

import { useState } from "react";

function DateCounter() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  let currDate = new Date();
  currDate.setDate(currDate.getDate() + count);

  const reset = () => {
    setCount(0);
    setRange(1);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#ddd2b6] p-4 font-poppins">
      <h2 className="sm:text-4xl text-2xl text-center mb-10">
        Challenge #2: Date Counter - v2
      </h2>
      <div className="flex flex-col items-stretch justify-center gap-3 font-md text-xl bg-gray-200 p-8 rounded-lg w-full sm:w-[550px] hover:scale-105 transition-transform duration-400 ">
        <button
          onClick={reset}
          className="flex items-center justify-center border border-b-slate-500 border-e-slate-500 border-t-teal-500 border-s-teal-500 px-10 py-1 mb-5 w-fit mx-auto rounded-full active:scale-95"
        >
          Reset
        </button>

        <article className="flex items-center justify-between gap-6">
          <input
            className="w-full my-3 lg:my-6 cursor-pointer"
            type="range"
            min={1}
            max={365}
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
          />
          <span>{range}</span>
        </article>
        <article className="flex items-center justify-between sm:gap-6 gap-1">
          <button
            onClick={() => setCount((c) => c - range)}
            className="bg-teal-800 text-gray-100 w-9 h-9 rounded-full leading-none active:scale-95"
          >
            &minus;
          </button>

          <input
            className="min-w-40 sm:w-2/3 text-center bg-transparent outline-none rounded-lg border border-teal-900 p-1"
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <button
            onClick={() => setCount((c) => c + range)}
            className="bg-teal-800 text-gray-100 w-9 h-9 rounded-full leading-none active:scale-95"
          >
            &#43;
          </button>
        </article>
        <hr className="border-t-1 border-teal-500 mt-3" />
        <article className="text-center sm:mt-3">
          {count === 0 ? (
            <span>
              Today is <br className="sm:hidden inline" />{" "}
            </span>
          ) : count > 0 ? (
            count < 365 ? (
              <span>
                {count} days from today is <br className="sm:hidden inline" />
              </span>
            ) : (
              <span>
                {Math.floor(count / 365)} years
                {count % 365 !== 0 ? ` and ${count % 365} days ` : " "}
                from today is <br className="sm:hidden inline" />
              </span>
            )
          ) : Math.abs(count) < 365 ? (
            <span>
              {Math.abs(count)} days ago was <br className="sm:hidden inline" />
            </span>
          ) : (
            <span>
              {Math.floor(Math.abs(count / 365))} years
              {count % 365 !== 0 ? ` and ${Math.abs(count % 365)} days ` : " "}
              ago was <br className="sm:hidden inline" />
            </span>
          )}
          <span>{currDate.toDateString()}.</span>
        </article>
      </div>
    </section>
  );
}

export default DateCounter;
