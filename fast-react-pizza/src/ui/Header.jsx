import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide transition hover:text-yellow-400"
        >
          Fast React Pizza Co.
        </Link>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <SearchOrder />
        </div>
      </div>
    </header>
  );
}

export default Header;
