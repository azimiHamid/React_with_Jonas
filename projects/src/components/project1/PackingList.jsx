/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <article className="bg-[#4D3524] w-full p-4 md:p-6 lg:p-8 xl:px-16 flex flex-col gap-4 flex-grow">
      <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="mt-auto font-poppins text-[#4D3524] flex justify-end gap-4">
        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className="bg-[#FDE7AA] rounded-full px-3 py-1 w-full md:w-auto"
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY NAME</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button
          onClick={onClearItems}
          className="bg-[#FDE7AA] active:scale-95 rounded-full px-3 py-1 w-full md:w-auto"
        >
          CLEAR LIST
        </button>
      </div>
    </article>
  );
};
export default PackingList;
