/* eslint-disable react/prop-types */
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci veritatis, nihil eveniet vitae velit voluptas perferendis.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci veritatis, nihil eveniet vitae velit voluptas perferendis sit possimus in ipsa. Ducimus dolores eligendi unde eaque quibusdam quod praesentium quam suscipit.",
  },
  {
    title: "Do you ship to the countries outside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci veritatis, nihil eveniet vitae velit voluptas perferendis sit possimus in ipsa.",
  },
];

function Accordion() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center font-poppins p-4">
      <h2 className="my-6 font-semibold text-xl text-slate-800">
        Exercise: Accordion
      </h2>
      <div className="flex flex-col justify-center gap-5 font-medium sm:text-xl w-full md:w-[700px] ">
        {faqs.map((elem, idx) => (
          <AccordionItem
            key={idx}
            id={idx}
            title={elem.title}
            text={elem.text}
          />
        ))}
      </div>
    </section>
  );
}

const AccordionItem = ({ id, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      onClick={handleToggle}
      className={`flex flex-col items-stretch justify-between px-6 py-2 sm:py-4 cursor-pointer w-full rounded-md text-slate-800 shadow-soft ${
        isOpen ? "border-2 border-t-teal-600" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`opacity-60 ${isOpen ? "text-teal-600" : ""}`}>
          {id < 9 ? `0${id + 1}` : id + 1}
        </span>
        <h3 className={`flex-1 mx-5 ${isOpen ? "text-teal-600" : ""}`}>
          {title}
        </h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {/* {isOpen && <p className="font-normal py-5 sm:px-11 text-sm">{text}</p>} */}
      <div
        className={`overflow-hidden transition-all duration-100 ease-linear ${
          isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-normal py-5 sm:px-11 text-sm">{text}</p>
      </div>
    </article>
  );
};

export default Accordion;
