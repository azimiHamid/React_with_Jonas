/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md md:flex-row md:gap-6 cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Pizza Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-lg md:w-32 md:h-32"
      />

      {/* Pizza Info */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        {/* Pizza Name */}
        <p className="text-lg font-semibold text-gray-800">{name}</p>

        {/* Ingredients */}
        <p className="text-sm text-gray-600 mt-2">{ingredients.join(", ")}</p>

        {/* Price or Sold Out */}
        <div className="mt-4">
          {!soldOut ? (
            <p className="text-green-600 font-medium">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-red-500 font-medium">Sold Out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
