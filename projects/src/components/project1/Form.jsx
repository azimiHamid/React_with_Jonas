/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [qauntity, setQauntity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, qauntity, packed: false };

    onAddItems(newItem);

    setDescription("");
    setQauntity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="font-montserrat text-lg md:text-xl p-4 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 bg-[#E06C1C] text-[#4D3524] w-full"
    >
      <label className="text-center md:text-left text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-0">
        What do you need for your 😍 trip?
      </label>
      <select
        onChange={(e) => setQauntity(Number(e.target.value))}
        value={qauntity}
        className="font-sans bg-[#FDE7AA] rounded-full px-5 py-2 md:px-8 md:py-3 w-full md:w-auto"
        type="text"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="font-poppins placeholder:text-[#4D3524] bg-[#FDE7AA] rounded-full px-4 py-2 md:px-6 md:py-3 w-full md:w-auto pl-5 md:pl-6"
        type="text"
        placeholder="item..."
      />
      <button className="font-poppins active:scale-95 rounded-full px-6 py-2 md:px-8 md:py-3 bg-[#69C1A5] w-full md:w-auto">
        ADD
      </button>
    </form>
  );
};
export default Form;
