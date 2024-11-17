/* eslint-disable react/prop-types */

function AddFriendForm({ newFriend, setNewFriend, handleAddFriend }) {
  return (
    <div className="mt-6 bg-orange-100 p-3 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
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
  );
}

export default AddFriendForm;
