import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-stone-800 p-4 uppercase text-stone-200 shadow-md">
      {/* Cart Summary */}
      <p className="flex space-x-4 font-semibold text-stone-300">
        <span className="font-semibold">23 pizzas</span>
        <span className="font-semibold text-green-600">$23.45</span>
      </p>

      {/* Cart Link */}
      <Link
        to="/cart"
        className="font-semibold text-yellow-500 transition hover:text-yellow-600"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
