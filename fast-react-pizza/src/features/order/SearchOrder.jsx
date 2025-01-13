import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center overflow-hidden rounded-full bg-gray-100 shadow-md"
    >
      {/* Input Field */}
      <input
        type="search"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 flex-grow px-4 py-2 text-gray-700 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-yellow-400 px-4 py-2 font-semibold text-white transition hover:bg-yellow-500"
      >
        Search
      </button>
    </form>
  );
}

export default SearchOrder;
