/* eslint-disable react/prop-types */
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 📈",
];

function Steps2() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#f6ecd2] p-4">
      <h1 className="text-center text-4xl font-medium mb-7">
        Practice #2: Steps - v2{" "}
        <span className="text-xl font-light block">
          prev & next buttons splited in saperated components, representing
          children prop.
        </span>
      </h1>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`text-4xl transition-transform duration-300 ease-in-out absolute top-10 sm:top-52 right-4 xl:right-64 lg:right-44 md:right-24 sm:right-10 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      >
        {isOpen ? <span>&times;</span> : <span>&equiv;</span>}
      </button>

      <div
        className={`border p-5 bg-[#F6F6F6] rounded-lg min-w-full sm:min-w-[600px] transition-all duration-700 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-15 scale-0 pointer-events-none"
        }`}
      >
        <article className="my-5 flex items-center justify-evenly">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className={`${
                step >= number ? "bg-[#7950f2]" : "bg-[#E2E2E2]"
              } rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-3 font-ibm-mono text-xl font-semibold text-white`}
            >
              {number}
            </div>
          ))}
        </article>

        <Msg step={step}>
          {messages[step - 1]}
          <p>
            <Button
              bgColor="transparent"
              textColor="#7950f2"
              onClick={() => alert("Something that you have to learn is React.js")}
            >
              Show more
            </Button>
          </p>
        </Msg>

        <article className="my-5 flex items-center justify-between mx-5">
          <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
            👈Prev
          </Button>
          <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
            Next👉
          </Button>
        </article>
      </div>

      {/* Reusing the Msg component by passing the children prop */}
      {step > 0 && <Msg step={1}>Hamid is Back 😎</Msg>}
      {step > 1 && <Msg step={2}>Uisng Children prop 😃</Msg>}
    </section>
  );
}

const Msg = ({ step, children }) => {
  return (
    <article className="my-12 font-poppins text-center font-medium text-2xl">
      {step === 0 ? "Hello React Dev" : `Step ${step}: `}
      {step !== 0 && children}
    </article>
  );
};

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: bgColor, color: textColor }}
      className="rounded-full px-4 py-1 sm:px-5 sm:py-2 font-poppins sm:text-lg active:scale-95"
    >
      {children}
    </button>
  );
};

export default Steps2;
