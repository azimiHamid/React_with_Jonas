import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
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
