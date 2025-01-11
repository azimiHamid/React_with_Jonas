import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-100 rounded-full shadow-md overflow-hidden"
    >
      {/* Input Field */}
      <input
        type="search"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-yellow-400 text-white px-4 py-2 font-semibold hover:bg-yellow-500 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchOrder;

