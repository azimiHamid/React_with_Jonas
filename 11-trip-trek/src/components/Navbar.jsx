import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-6 z-20 text-gray-50 w-full">
      <h1 className="text-4xl ">
        <NavLink to="/" className={'flex items-center justify-center gap-2'}>
          <img src="/icon.png"
          className="w-9"
           />
          TripTrek
        </NavLink>
      </h1>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOG IN</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
