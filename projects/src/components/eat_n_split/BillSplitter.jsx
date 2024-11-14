/* eslint-disable no-unused-vars */
import { useState } from "react";

const friends = [
  {
    name: "Clark",
    url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Antony",
    url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Charles",
    url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function BillSplitter() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center font-poppins p-4 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-10 text-orange-500">
        Eat and Split
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-lg w-full max-w-5xl">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <div>
            <ul className="space-y-4">
              {friends.map((friend, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg"
                >
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={friend.url}
                    alt={`${friend.name}`}
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{friend.name}</h4>
                    <p className="text-gray-600">You owe {friend.name} $7</p>
                  </div>
                  <button className="bg-orange-500 text-white px-2 py-1 text-sm md:text-[16px] md:px-4 md:py-2 rounded-lg hover:bg-orange-600">
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-right">
            <button className="bg-orange-500 w-full sm:w-1/3 md:w-40 text-white py-2 px-6 rounded-lg hover:bg-orange-600">
              Add Friend
            </button>
          </div>
        </article>
        <article id="model" className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-orange-600 mb-4 text-center">
            SPLIT A BILL WITH {"ANTONY"}
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="input1" className="text-gray-700">
                💰 Bill Value
              </label>
              <input
                className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="input1"
                value=""
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="input2" className="text-gray-700">
                🫵 Your Expense:
              </label>
              <input
                className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="number"
                id="input2"
                value="2"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="input3" className="text-gray-700">
                💁 {"Antony"}&apos;s Expense:
              </label>
              <input
                className="text-center border border-gray-300 p-2 rounded-lg text-gray-500 bg-gray-100"
                type="text"
                id="input3"
                disabled
                value="80"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="select" className="text-gray-700">
                🤑 Who is Paying the Bill?
              </label>
              <select
                className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="select"
                value=""
              >
                <option value="1">You</option>
                <option value="2">Antony</option>
              </select>
            </div>
            <div className="text-right">
              <button className="bg-orange-500 w-full md:w-1/2 text-white py-2 px-6 rounded-lg hover:bg-orange-600">
                Split Bill
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

export default BillSplitter;
