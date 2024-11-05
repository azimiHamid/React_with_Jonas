/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Practice #1

// Data
const pizzaData = [
  {
    name: "Margherita",
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
    price: 8.5,
    photoUrl:
      "https://eu.ooni.com/cdn/shop/articles/20220211142754-margherita-9920.jpg?crop=center&height=800&v=1644590277&width=800",
    soldOut: false,
  },
  {
    name: "Pepperoni",
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    price: 10.0,
    photoUrl:
      "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
    soldOut: false,
  },
  {
    name: "Hawaiian",
    ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
    price: 9.5,
    photoUrl:
      "https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg",
    soldOut: true,
  },
  {
    name: "BBQ Chicken",
    ingredients: [
      "BBQ Sauce",
      "Mozzarella",
      "Chicken",
      "Red Onion",
      "Cilantro",
    ],
    price: 11.0,
    photoUrl:
      "https://www.tasteandtellblog.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-3.jpg",
    soldOut: false,
  },
  {
    name: "Veggie Deluxe",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Bell Peppers",
      "Olives",
      "Mushrooms",
      "Red Onion",
    ],
    price: 9.0,
    photoUrl:
      "https://i.pinimg.com/originals/16/34/99/1634999e7e7cf5d98142c91a3e7afc9e.png",
    soldOut: true,
  },
  {
    name: "Four Cheese",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Parmesan",
      "Gorgonzola",
      "Ricotta",
    ],
    price: 12.0,
    photoUrl:
      "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg",
    soldOut: false,
  },
  {
    name: "Meat Lovers",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Pepperoni",
      "Sausage",
      "Bacon",
      "Ham",
    ],
    price: 13.5,
    photoUrl:
      "https://www.thespruceeats.com/thmb/xuxwh4RIGcZMgaJE8u3SueM0SoA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aqIMG_4568fhor-0b89dc5c8c494ee9828ed29805791c5a.jpg",
    soldOut: true,
  },
  {
    name: "Buffalo Chicken",
    ingredients: [
      "Buffalo Sauce",
      "Mozzarella",
      "Chicken",
      "Blue Cheese",
      "Green Onion",
    ],
    price: 11.5,
    photoUrl:
      "https://thecozycook.com/wp-content/uploads/2023/08/Buffalo-Chicken-Pizza-f.jpg",
    soldOut: false,
  },
];

function PizzaMenu() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#F3F0E5] p-4">
      <Header />
      <Menu />
      <Footer />
    </section>
  );
}

function Header() {
  return (
    <h1 className="w-full md:w-3/4 text-center text-3xl md:text-5xl text-[#EBC43E] uppercase font-bold mb-4">
      _fast react pizza_ co.
    </h1>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  return (
    <div className="w-full md:w-3/4">
      <h2 className="text-center uppercase border-t-black border-b-black border-t-2 border-b-2 text-2xl md:text-3xl my-6 py-2 md:py-3">
        our menu
      </h2>

      {pizzas.length > 0 ? (
        <>
          <p className="font-ibm-mono my-6 text-center lg:w-4/5 xl:w-3/5 lg:px-0 sm:px-5 px-2 mx-auto">
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pizzas.map((pizza, idx) => (
              <Pizza key={idx} pizza={pizza} />
            ))}
          </div>
        </>
      ) : (
        <p className="font-ibm-mono text-xl my-6 text-center lg:w-4/5 xl:w-3/5 lg:px-0 sm:px-5 px-2 mx-auto">
          We&apos;re still working on our menu. Please come back later {":)"}
        </p>
      )}
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <article
      className={`cursor-pointer flex items-center gap-3 p-3 border rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105 
          ${pizza.soldOut ? "opacity-50" : "opacity-100"}`}
    >
      <img
        src={pizza.photoUrl}
        alt={pizza.name}
        className="w-24 h-24 md:w-32 md:h-32 object-cover object-center rounded-lg"
      />
      <div>
        <h3 className="text-lg font-semibold mb-1">{pizza.name}</h3>
        <p className="text-sm text-gray-600">{pizza.ingredients.join(", ")}</p>
        <p
          className={`text-lg font-bold mt-2 ${
            pizza.soldOut ? "line-through text-red-500" : "text-green-600"
          }`}
        >
          ${pizza.price.toFixed(2)}
        </p>
        {pizza.soldOut && <p className="text-red-500 font-bold">Sold Out</p>}
      </div>
    </article>
  );
}

import { useEffect, useState } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const openHour = 12;
  const closeHour = 22;
  const isOpen =
    currentTime.getHours() >= openHour && currentTime.getHours() <= closeHour;

  // Convert 24-hour time to 12-hour format with AM/PM
  function convertTo12Hour(hour24) {
    const hour = hour24 % 12 || 12; // Convert 0 or 24 to 12
    const period = hour24 >= 12 ? "PM" : "AM";
    return `${hour}:00 ${period}`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {isOpen ? (
        <div className="text-gray-700 w-full md:w-3/4 text-center text-lg font-mono mt-6">
          <p>
            <span>{currentTime.toLocaleTimeString()}</span>. We are currently
            open until {convertTo12Hour(closeHour)}. Come visit us or order
            online.
          </p>
          <button className="px-2 py-1 mt-4 font-bold rounded-md bg-[#EBC43E]">
            Order Now
          </button>
        </div>
      ) : (
        <p className="text-gray-700 w-full md:w-3/4 text-center text-lg font-mono mt-6">
          <span>{currentTime.toLocaleTimeString()}</span>. We&apos;re happy to
          welcome you between {convertTo12Hour(openHour)} and{" "}
          {convertTo12Hour(closeHour)}.
        </p>
      )}
    </>
  );
}

export default PizzaMenu;
