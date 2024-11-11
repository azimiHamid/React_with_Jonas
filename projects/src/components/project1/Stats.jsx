/* eslint-disable react/prop-types */
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
export default Stats;
