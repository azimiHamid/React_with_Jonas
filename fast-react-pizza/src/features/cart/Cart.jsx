/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Link
        to="/menu"
        className="text-yellow-500 font-semibold hover:text-yellow-600 transition"
      >
        &larr; Back to menu
      </Link>

      <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-6">
        Your cart, %NAME%
      </h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.pizzaId}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h3>
              <p className="text-gray-500">
                {item.quantity} x ${item.unitPrice} = ${item.totalPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link
          to="/order/new"
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
        >
          Order pizzas
        </Link>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
