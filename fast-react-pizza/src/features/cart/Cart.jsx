/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mb-6 mt-4 text-2xl font-bold text-gray-800">
        Your cart, %NAME%
      </h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.pizzaId}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
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

      <div className="mt-6 flex items-center justify-between">
        <Button to="/order/new">Order pizzas</Button>
        <button className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white shadow transition hover:bg-red-600">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
