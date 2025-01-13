import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-500 bg-yellow-500 p-4 px-4 py-3 uppercase text-white shadow-md sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-stone-700 transition"
        >
          Fast React Pizza Co.
        </Link>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <SearchOrder />
        </div>
        <Username />
      </div>
    </header>
  );
}

export default Header;
