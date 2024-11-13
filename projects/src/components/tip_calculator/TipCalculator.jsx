/* eslint-disable react/prop-types */
import { useState } from "react";

function TipCalculator() {
  const [bill, setbill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const avgTip = Math.round((tip1 + tip2) / 2);
  const totalTip = Math.round((avgTip / 100) * bill);
  const totalBill = bill + totalTip;

  const handleReset = () => {
    setbill(0);
    setTip1(0);
    setTip2(0);
  };

  return (
    <section className="bg-slate-600 w-full min-h-screen flex flex-col items-center font-poppins p-4">
      <h1 className="bg-slate-400 px-5 py-3 my-10 font-bold text-xl sm:text-4xl">
        Tip Calculator
      </h1>
      <div className="p-5 rounded-lg bg-teal-400 flex flex-col justify-center gap-5 font-medium sm:text-xl w-full md:w-[700px] ">
        <article className="bg-[#347a94] py-2 px-3 grid grid-cols-1 md:grid-cols-2">
          <Label htmlFor="billInput">How much was the bill?</Label>
          <input
            onChange={(e) => setbill(Number(e.target.value))}
            value={bill}
            className="text-slate-700"
            type="text"
            id="billInput"
          />
        </article>
        <article className="bg-[#347a94] py-2 px-3 grid grid-cols-1 md:grid-cols-2">
          <Label htmlFor="select1">How did you like the service?</Label>

          <Select tip={tip1} setTip={setTip1} id="select1">
            <Option val="0">Dissatisfied (0%)</Option>
            <Option val="5">It was okay (5%)</Option>
            <Option val="10">It was good (10%)</Option>
            <Option val="20">Absolutely Amazing (20%)</Option>
          </Select>
        </article>

        <article className="bg-[#347a94] py-2 px-3 grid grid-cols-1 md:grid-cols-2">
          <Label htmlFor="select2">How did your friend like the service?</Label>
          <Select tip={tip2} setTip={setTip2} id="select2">
            <Option val="0">Dissatisfied (0%)</Option>
            <Option val="5">It was okay (5%)</Option>
            <Option val="10">It was good (10%)</Option>
            <Option val="20">Absolutely Amazing (20%)</Option>
          </Select>
        </article>

        {bill !== 0 && (
          <p className="bg-[#101A28] py-2 px-3 text-[#c5c5c5]">
            You pay ${totalBill} (${bill} + ${totalTip} tip)
          </p>
        )}

        <button
          onClick={handleReset}
          className="bg-[#445] w-full md:w-1/3 mx-auto text-[#A9FFF4] py-2 px-3 rounded-full font-normal active:scale-95"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

const Select = ({ children, setTip, tip, id }) => {
  return (
    <select
      onChange={(e) => setTip(Number(e.target.value))}
      value={tip}
      id={id}
    >
      {children}
    </select>
  );
};

const Option = ({ children, val }) => {
  return (
    <option
      style={{ backgroundColor: "#475569", color: "greenyellow" }}
      value={val}
    >
      {children}
    </option>
  );
};

const Label = ({ children, htmlFor }) => {
  return (
    <label className="" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default TipCalculator;
