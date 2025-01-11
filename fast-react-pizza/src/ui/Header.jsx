import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="bg-yellow-500 p-4 uppercase text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl tracking-widest font-bold transition hover:text-stone-800"
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
