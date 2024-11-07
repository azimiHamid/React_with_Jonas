import { useState } from "react";

/* eslint-disable react/prop-types */
const initalItems = [
  { id: 1, description: "Passports", qauntity: 2, packed: false },
  { id: 2, description: "Socks", qauntity: 12, packed: false },
  { id: 3, description: "Charger", qauntity: 8, packed: true },
];

function TravelApp() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#F19721] text-[#0f003ddb] font-poppins">
      <Logo />
      <Form />
      <div className="flex flex-col flex-grow w-full">
        <PackingList />
      </div>
      <Stats />
    </section>
  );
}

const Logo = () => {
  return (
    <header className="p-4 lg:p-0 flex items-center justify-center text-[#4D3524]">
      <img
        src="/logo.png"
        alt="Travel App Logo"
        className="w-80 md:w-96 lg:w-[500px]"
      />
    </header>
  );
};

const Form = () => {
  const [description, setDescription] = useState("");
  const [qauntity, setQauntity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description: description,
      qauntity: qauntity,
      packed: false,
    };
    console.log(newItem);
    initalItems.push(newItem);
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

const PackingList = () => {
  return (
    <article className="bg-[#4D3524] w-full p-4 md:p-6 lg:p-8 xl:px-16 flex flex-col gap-4 flex-grow">
      <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
        {initalItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className="mt-auto font-poppins text-[#4D3524] flex justify-end gap-4">
        <select className="bg-[#FDE7AA] rounded-full px-3 py-1 w-full md:w-auto">
          <option value="">SORT BY INPUT ORDER</option>
          <option value="">SORT BY DESCRIPTION</option>
          <option value="">SORT BY PACKED STATUS</option>
        </select>
        <button className="bg-[#FDE7AA] active:scale-95 rounded-full px-3 py-1 w-full md:w-auto">
          CLEAR LIST
        </button>
      </div>
    </article>
  );
};

const Stats = () => {
  return (
    <footer className="font-poppins italic text-center text-[#4D3524] bg-[#68BEA1] w-full text-md md:text-xl flex items-center justify-center p-4 md:py-7">
      📦 You have {"4"} items on your list, and you already packed {"2"} 🚀
    </footer>
  );
};

const Item = ({ item }) => {
  return (
    <li
      className={`${
        item.packed ? "line-through" : ""
      } text-lg md:text-xl text-[#FDE7AA] flex items-center gap-2 md:gap-3`}
    >
      <input type="checkbox" id={item.id} />
      <label htmlFor={item.id}>
        {item.qauntity} {item.description}
      </label>
      <span
        onClick={() => null}
        className="text-sm md:text-base cursor-pointer"
      >
        ❌
      </span>
    </li>
  );
};

export default TravelApp;
