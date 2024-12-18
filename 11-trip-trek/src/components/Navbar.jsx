import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-brand-1/90 z-10 backdrop-blur-md">
      <ul className="flex gap-4 p-4 bg-slate-800 text-gray-50">
        <li>
          <NavLink to="/">TripTrek</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
