/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// Test ID: IIDSAT
import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-gray-50 p-6">
      {/* Order Status */}
      <div className="w-full max-w-3xl rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Order Status</h2>
        <div className="flex items-center justify-between">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white">
              Priority
            </span>
          )}
          <span className="text-lg font-medium text-gray-700">
            {status || 'Pending'} Order
          </span>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="w-full max-w-3xl rounded-md bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold">Delivery Information</h3>
        <p className="text-lg text-gray-700">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left! 😃`
            : 'Order should have arrived.'}
        </p>
        <p className="text-sm text-gray-500">
          (Estimated Delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      {/* Pricing Details */}
      <div className="w-full max-w-3xl rounded-md bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold">Pricing Details</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Pizza Price:</span>{' '}
            {formatCurrency(orderPrice)}
          </li>
          {priority && (
            <li>
              <span className="font-medium">Priority Fee:</span>{' '}
              {formatCurrency(priorityPrice)}
            </li>
          )}
          <li className="text-lg font-semibold">
            <span className="font-medium">Total to Pay:</span>{' '}
            {formatCurrency(orderPrice + priorityPrice)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
