import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Cart Summary */}
      <p className="flex space-x-4 text-gray-700">
        <span className="font-semibold">23 pizzas</span>
        <span className="font-semibold text-green-600">$23.45</span>
      </p>

      {/* Cart Link */}
      <Link
        to="/cart"
        className="text-yellow-500 font-semibold hover:text-yellow-600 transition"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
