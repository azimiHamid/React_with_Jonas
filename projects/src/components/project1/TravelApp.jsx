/* eslint-disable react/prop-types */

import { useState } from "react";

function TravelApp() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#F19721] text-[#0f003ddb] font-poppins">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <div className="flex flex-col flex-grow w-full">
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      </div>
      <Stats items={items} />
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

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [qauntity, setQauntity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, qauntity, packed: false };
    console.log(newItem);

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

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <article className="bg-[#4D3524] w-full p-4 md:p-6 lg:p-8 xl:px-16 flex flex-col gap-4 flex-grow">
      <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
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

const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <footer className="font-poppins italic text-center text-[#4D3524] bg-[#68BEA1] w-full text-md md:text-xl flex items-center justify-center p-4 md:py-7">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / items.length) * 100);

  return (
    <footer className="font-poppins italic text-center text-[#4D3524] bg-[#68BEA1] w-full text-md md:text-xl flex items-center justify-center p-4 md:py-7">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `📦 You have ${items.length} items on your list, and you already packed 
          ${itemsPacked} - (${percentage}%) 🚀`}
      </em>
    </footer>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="text-lg md:text-xl text-[#FDE7AA] flex items-center justify-between sm:gap-1 py-1 px-[10px] rounded-3xl bg-[#022929]">
      <label className="flex items-center w-full cursor-pointer space-x-2">
        <input
          type="checkbox"
          id={item.id}
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
          className="hidden peer"
        />

        <div className="w-5 h-5 rounded-md border-2 border-gray-300 peer-checked:bg-[#69C1A5] peer-checked:border-[#8bfeda] flex items-center justify-center transition duration-200">
          <svg
            className="hidden w-4 h-4 text-white peer-checked:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <span className={`${item.packed ? "opacity-25" : ""} mx-2`}>
          {item.qauntity} {item.description}
        </span>
      </label>

      <span
        onClick={() => onDeleteItem(item.id)}
        className="text-sm md:text-base cursor-pointer"
      >
        ❌
      </span>
    </li>
  );
};

export default TravelApp;
