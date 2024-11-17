/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import SplitBillModal from "./SplitBillModal";
// import AddFriendForm from "./AddFriendForm";
// import FriendList from "./FriendList";

const initialFriends = [
  {
    name: "Clark",
    url: "https://images.pexels.com/photos/1427889/pexels-photo-1427889.jpeg?auto=compress&cs=tinysrgb&w=600",
    owe: null,
  },
  {
    name: "Antony",
    url: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=600",
    owe: null,
  },
  {
    name: "Charles",
    url: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600",
    owe: null,
  },
];

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 p-4 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

function BillSplitter() {
  const [toggleAddFriend, setToggleAddFriend] = useState(false);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [newFriend, setNewFriend] = useState({ name: "", url: "" });

  const [friends, setFriends] = useState(() => {
    const savedFriends = localStorage.getItem("friends");
    return savedFriends ? JSON.parse(savedFriends) : initialFriends;
  });

  const [bill, setBill] = useState("");
  const [myExpenses, setMyExpenses] = useState(0);
  const [whoPay, setWhoPay] = useState(0);

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  const handleAddFriend = () => {
    setFriends([...friends, { ...newFriend, owe: null }]);
    setNewFriend({ name: "", url: "" });
    setToggleAddFriend(!toggleAddFriend);
  };

  const handleCloseModal = () => {
    setSelectedFriendId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFriends = friends.map((friend, idx) => {
      if (idx === selectedFriendId) {
        const friendsExpenses = bill - myExpenses;
        const owe = whoPay === 1 ? friendsExpenses : myExpenses;

        return {
          ...friend,
          owe:
            whoPay === 1
              ? `${friend.name} owes you $${owe}`
              : `You owe ${friend.name} $${owe}`,
        };
      }
      return friend;
    });

    setFriends(updatedFriends);
    setSelectedFriendId(null); // Close the modal
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center font-poppins p-4 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-10 text-orange-500">
        Eat and Split
      </h1>
      <div className="grid grid-cols-1 gap-5 text-lg w-full max-w-2xl">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-4">
            {friends.map((friend, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-4 p-4 rounded-lg ${
                  selectedFriendId === idx ? "bg-orange-100" : "bg-orange-50"
                }`}
              >
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  src={friend.url}
                  alt={`${friend.name}`}
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{friend.name}</h4>
                  <p
                    className={`${
                      friend.owe === null
                        ? "text-gray-500"
                        : friend.owe?.includes("owes you")
                        ? "text-teal-500"
                        : "text-red-500"
                    }`}
                  >
                    {friend.owe ?? `You and ${friend.name} are even.`}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFriendId(idx)}
                  className="bg-orange-500 text-white px-2 py-1 text-sm md:text-[16px] md:px-4 md:py-2 rounded-lg hover:bg-orange-600"
                >
                  Select
                </button>
              </li>
            ))}
          </ul>

          <div
            className={`${
              toggleAddFriend ? "" : "hidden"
            } mt-6 bg-orange-100 p-3 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 items-center`}
          >
            <label htmlFor="friendName">💁 Friend name</label>
            <input
              className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              id="friendName"
              value={newFriend.name}
              onChange={(e) =>
                setNewFriend((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <label htmlFor="img">📸 Image URL</label>
            <input
              className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              id="img"
              value={newFriend.url}
              onChange={(e) =>
                setNewFriend((prev) => ({ ...prev, url: e.target.value }))
              }
            />
            <button
              onClick={handleAddFriend}
              className="bg-orange-500 mt-6 w-full sm:w-1/3 md:w-40 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
            >
              Add
            </button>
          </div>
        </article>

        <div className="text-right">
          <button
            onClick={() => setToggleAddFriend(!toggleAddFriend)}
            className="bg-orange-500 inline-block mt-6 w-full sm:w-1/3 md:w-40 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
          >
            {toggleAddFriend ? "Close" : "Add friend"}
          </button>
        </div>
      </div>

      {selectedFriendId !== null && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-semibold text-orange-600 mb-4 text-center">
            SPLIT A BILL WITH {friends[selectedFriendId].name.toUpperCase()}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="input1" className="text-gray-700">
                💰 Bill Value
              </label>
              <input
                className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="input1"
                onChange={(e) => setBill(Number(e.target.value))}
                value={bill}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="input2" className="text-gray-700">
                🫵 Your Expense
              </label>
              <input
                className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="number"
                onChange={(e) => setMyExpenses(Number(e.target.value))}
                value={myExpenses}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <label htmlFor="select" className="text-gray-700">
                🤑 Who is Paying the Bill?
              </label>
              <select
                className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="select"
                onChange={(e) => setWhoPay(Number(e.target.value))}
                value={whoPay}
              >
                <option value={1}>You</option>
                <option value={2}>{friends[selectedFriendId].name}</option>
              </select>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-orange-500 w-full md:w-1/2 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
              >
                Split Bill
              </button>
            </div>
          </form>
        </Modal>
      )}
    </section>
  );
}
export default BillSplitter;
