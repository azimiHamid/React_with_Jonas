import { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const avgTip = Math.round((tip1 + tip2) / 2);
  const totalTip = Math.round((avgTip / 100) * bill);
  const totalBill = bill + totalTip;

  const handleReset = () => {
    setBill(0);
    setTip1(0);
    setTip2(0);
  };

  const options = [
    { value: 0, label: "Dissatisfied (0%)" },
    { value: 5, label: "It was okay (5%)" },
    { value: 10, label: "It was good (10%)" },
    { value: 20, label: "Absolutely Amazing (20%)" },
  ];

  return (
    <section className="bg-slate-600 w-full min-h-screen flex flex-col items-center font-poppins p-4">
      <h1 className="bg-slate-400 px-5 py-3 my-10 font-bold text-xl sm:text-4xl">
        Tip Calculator
      </h1>
      <div className="p-5 rounded-lg bg-teal-400 flex flex-col justify-center gap-5 font-medium sm:text-xl w-full md:w-[700px] ">
        <article className="bg-[#347a94] py-2 px-3 grid grid-cols-1 md:grid-cols-2">
          <Label htmlFor="billInput">How much was the bill?</Label>
          <Input setBill={setBill} value={bill} type="text" id="billInput" />
        </article>

        <article className="bg-[#347a94] py-2 px-3 grid grid-cols-1 md:grid-cols-2">
          <Label htmlFor="select1">How did you like the service?</Label>
          <Select options={options} tip={tip1} setTip={setTip1} id="select1" />
        </article>

        <article className="bg-[#347a94] py-2 px-3 grid grid-cols-1 md:grid-cols-2">
          <Label htmlFor="select2">How did your friend like the service?</Label>
          <Select options={options} tip={tip2} setTip={setTip2} id="select2" />
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

export default TipCalculator;
