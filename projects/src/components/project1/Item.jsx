
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
export default Item;
