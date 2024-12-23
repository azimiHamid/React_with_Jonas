import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20 text-white">
      <h1 className="text-4xl">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/icon.png" className="w-9" />
          <span>TripTrek</span>
        </NavLink>
      </h1>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/product" className="text-lg hover:underline">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className="text-lg hover:underline">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-lg hover:underline">
            LOG IN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
