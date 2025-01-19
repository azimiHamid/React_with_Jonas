import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from './cartSlice';
import { getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between rounded-lg bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 shadow-md sm:px-6 md:text-base">
      {/* Cart Summary */}
      <p className="flex space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span className="font-semibold">
          {totalCartQuantity} {totalCartQuantity > 1 ? 'pizzas' : 'pizza'}
        </span>
        <span className="font-semibold text-green-600">
          {formatCurrency(totalCartPrice)}
        </span>
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
